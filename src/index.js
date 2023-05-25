const connection = require('./connection.js')
const categories = require('./repository/category/index.js')
const products = require('./repository/products/index.js')


module.exports = {
    connection,
    categories,
    products
}
