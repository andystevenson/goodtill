export default function isUuid(string) {
  return /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(
    string,
  )
}

// console.log(isUuid('fdd75b81-2a08-404d-a05b-fa54f928c888'))
