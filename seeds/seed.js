const sequelize = require('../config/connection');
const { Brand, Category, Dispensary, Product } = require('../models');

const brandSeedData = require("./brandSeedData.json");
const categorySeedData = require("./categorySeedData.json");
const dispensarySeedData = require("./dispensarySeedData.json");
const productSeedData = require("./productSeedData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const categories = await Category.bulkCreate(categorySeedData);

    const dispensaries = await Dispensary.bulkCreate(dispensarySeedData);

    const brands = await Brand.bulkCreate(brandSeedData);

    const products = await Product.bulkCreate(productSeedData);

    process.exit(0);
};

seedDatabase();