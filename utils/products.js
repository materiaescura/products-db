const {composeWithPromise, modify, map} = require('./functional.js')

const productWithImage = ({ product, price, ...image }) => ({ product, price, image })

const mapProductWithImage = composeWithPromise(map(productWithImage))

const mapPaginatedProductWithImage = modify('data', mapProductWithImage)

module.exports = {
    mapProductWithImage,
    mapPaginatedProductWithImage
}