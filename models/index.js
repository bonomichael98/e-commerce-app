//table relationships
const Category = require('./Category');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');
const Product = require('./Product');

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

Product.belongsToMany(Tag, {
    through: ProductTag,foreignKey:'product_id'
});

Tag.belongsToMany(Product, {
    through: ProductTag,foreignKey:'tag_id'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};