import { login, logout } from '@andystevenson/goodtill/authentication'
import { products, read } from '@andystevenson/goodtill/product'
import { categories } from '@andystevenson/goodtill/category'

async function buildHierarchy() {
  await login()

  const allCategories = await categories()
  const allProducts = await products()

  function categorize(categories) {
    const result = {}
    const type = 'category'
    categories.forEach((category) => {
      const parent = category.parent_category

      const { name, id } = category
      let isRoot = true
      const child = (result[id] = { type, name, id, isRoot, children: [] })
      if (parent) {
        const { name, id } = parent
        child.isRoot = false
        if (!result[id]) {
          isRoot = true
          result[id] = { type, name, id, isRoot, children: [] }
        }
        result[id].children.push(child)
      }
    })

    return result
  }

  async function productize(categories, products) {
    const type = 'product'

    for (const index in products) {
      const product = products[index]
      const { category_id, parent_product_id, id } = product

      if (parent_product_id === null) {
        if (category_id) {
          const productDetail = await read(id)
          productDetail.type = type
          categories[category_id].children.push(productDetail)
        }
      }
    }

    return categories
  }

  const hierarchy = await productize(
    await categorize(allCategories),
    allProducts,
  )

  await logout()

  return hierarchy
}

export default buildHierarchy
