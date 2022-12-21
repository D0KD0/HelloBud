const User = require('./User');
const Product = require('./Product');
const OrderProduct = require('./OrderProduct');
const Order = require('./Order');
const Category = require('./Category');
const Brand = require('./Brand');

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

module.exports = { User, Product, OrderProduct, Order, Category, Brand};
