const { composeWithPromise, query, head } = require('../../../utils/functional.js')
const {queryWithPaginated} = require('../../../utils/connection.js')
const {mapProductWithImage, mapPaginatedProductWithImage} = require('../../../utils/products.js')
const {
    findAllQuery,
    findAllByCategoryQuery,
    insertQuery,
    insertImagesQuery,
    updateQuery,
    removeQuery,
    removeCategoryQuery,
    insertCategoryQuery} = require ('./queries.js')


const makeProductsRepository = (connection) => {

    const queryConnection = query(connection)

    const findAll = async () => composeWithPromise(
        mapProductWithImage,
        head,
        queryConnection(findAllQuery)
    )({})

    const findAllByCategory =  composeWithPromise(
        mapProductWithImage,
        head,
        queryConnection(findAllByCategoryQuery)
    )


    const findAllPaginated = composeWithPromise(
        mapPaginatedProductWithImage,
        queryWithPaginated(connection))(findAllQuery)

    const create = composeWithPromise(
        queryConnection(insertQuery)
    )

    const addImage = composeWithPromise(
        queryConnection(insertImagesQuery)
    )

    const update = composeWithPromise(
        queryConnection(updateQuery)
    )


    const remove = composeWithPromise(
        queryConnection(removeQuery)
    )

    const removeCategory =   composeWithPromise(
        queryConnection(removeCategoryQuery)
    )

    const addCategory =   composeWithPromise(
        queryConnection(insertCategoryQuery)
    )

    return {
        findAll,
        findAllByCategory,
        findAllPaginated,
        create,
        addImage,
        update,
        remove,
        removeCategory,
        addCategory
    }
}

module.exports = makeProductsRepository