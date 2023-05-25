const findAllQuery = `
SELECT
p.product as product, p.price as price,
i.url as url, i.description as description
FROM products as p
LEFT JOIN images as i
ON p.id = i.product_id
GROUP BY i.product_id`

const findAllByCategoryQuery = `
SELECT
p.product as product, p.price as price,
i.url as url, i.description as description
FROM products as p
LEFT JOIN images as i
ON p.id = i.product_id
WHERE p.id in (select distinct product_id from products_categories where category_id = :categoryId)
group by p.id
`
const insertQuery = 'INSERT INTO products (product, price) VALUES (:product, :price)'

const insertImagesQuery = 'INSERT INTO images (url, description, product_id) VALUES (:url,:description,:product_id)'

const updateQuery = 'UPDATE products SET product=:product, price=:price  WHERE id=:id'

const removeQuery = 'DELETE FROM products WHERE id=:id limit 1'

const removeCategoryQuery = 'DELETE FROM products_categories WHERE product_id=:product_id and category_id=:category_id LIMIT 1'

const insertCategoryQuery = 'insert into products_categories values (:product_id, :category_id)'

module.exports = {
    findAllQuery,
    findAllByCategoryQuery,
    insertQuery,
    insertImagesQuery,
    updateQuery,
    removeQuery,
    removeCategoryQuery,
    insertCategoryQuery
}