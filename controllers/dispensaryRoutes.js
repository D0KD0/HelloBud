const router = require('express').Router();
const _ = require('lodash/core');
const {Dispensary, Brand, Category, Product} = require("../models");

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        
        const dispensaryData = await Dispensary.findOne({
            where: {
                id: id,
            },
        });

        const brandData = await Brand.findAll({
            where: {
                dispensary_id: id,
            },
        });

        const productData = await Product.findAll({
            where: {
                dispensary_id: id,
            },
            include: [
                {
                    model: Brand,
                    attributes: ['name'],
                },
                {
                    model: Category,
                    attributes: ['name'],
                },
                {
                    model: Dispensary,
                    attributes: ['name'],
                }
            ],
        });

        const categoryData = await Category.findAll({});
        const categories = _.map(categoryData, (category) => category.get({ plain: true }));

        const brands = _.map(brandData, (brand) => brand.get({ plain: true }));
        const dispensary = dispensaryData.get({plain: true})
        const products = _.map(productData, (product) => product.get({ plain: true }));
        console.log(products)
        res.render("dispensaryDetail", {dispensary, brands, categories, products});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router