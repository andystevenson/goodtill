const node = require('detect-node')
const hello = require('@andystevenson/goodtill')
const auth = require('@andystevenson/goodtill/authentication')
const login = require('@andystevenson/goodtill/authentication/login')

let hw = hello
if (node) {
  hw = hello
} else {
  document.querySelector('h1').textContent = 'hello browser'
}

console.log({ node, hw })
login()
