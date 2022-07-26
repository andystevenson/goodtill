import { login, logout } from '@andystevenson/goodtill/authentication'
import { products } from '@andystevenson/goodtill/product'
import { categories } from '@andystevenson/goodtill/category'

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

function productize(categories, products) {
  const type = 'product'
  products.forEach((product) => {
    const { category_id } = product

    if (category_id) {
      product.type = type
      categories[category_id].children.push(product)
    }
  })

  return categories
}

const hierarchy = productize(categorize(allCategories), allProducts)

await logout()

export default hierarchy
