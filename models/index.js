const User = require('./User');
const Product = require('./Product');
const OrderProduct = require('./OrderProduct');
const Order = require('./Order');
const Category = require('./Category');
const Brand = require('./Brand');
const Dispensary = require('./Dispensary');

Category.hasMany(Product);
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});


User.hasMany(Order);
Order.belongsTo(User, {
    foreignKey: 'user_id'
});


Order.belongsToMany(Product, {through: OrderProduct});
Product.belongsToMany(Order, {through: OrderProduct});

// product and dispensary
Dispensary.hasMany(Product);
Product.belongsTo(Dispensary, {
  foreignKey: 'dispensary_id'
});

// product and brand
Brand.hasMany(Product);
Product.belongsTo(Brand, {
  foreignKey: 'brand_id'
});

module.exports = { User, Product, OrderProduct, Order, Category, Brand, Dispensary};
