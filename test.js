const conn = require('./infra/connection.js')
const categoriesRepository = require('./infra/repository/category/category.js')
const productsRepository = require('./infra/repository/products/products.js')

const test = async() => {
    const categories = await categoriesRepository(await conn)
    const products = await productsRepository(await conn)

    //console.log(await categories.create('any'))
    //console.log(await categories.create('xxx'))

    //console.log(await categories.update({ category:'any anyqq', id:'7'}))

    //const [result] = await conn.query('UPDATE categories SET category=:category WHERE id=:id', {category:'qqqqqqq', id:7})
    //console.log(result)

     //console.log(await categories.create({category:'vitoria'}))

    //  await categories.remove({id:20})
    // console.log(await categories.findAll())
    //console.log(await products.findAll())
    //console.log(await products.findAllPaginated({currentPage:1, pageSize:1}))
    //console.log(await products.create({product:'algo', price:'2000'}))

    // console.log(await products.addImage({
    //     url:'qqq',
    //     description:'qqqq',
    //     product_id:6
    // }))

    // console.log(await products.update({
    //     product:'qqw',
    //     price:'3000',
    //     id:6
    // }))

    //console.log(await products.remove({id:6}))

    //console.log(await products.removeCategory({product_id:5, category_id:8}))
    // console.log(await products.addCategory({
    //     product_id:5,
    //     category_id: 7
    // }))

    console.log(await products.findAll())

}

test()