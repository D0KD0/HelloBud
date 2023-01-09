const router = require('express').Router();
const _ = require('lodash/core');
const { Product, Category, Dispensary, Brand } = require('../models');


router.get("/categories/:id", async (req, res) => {
    try {
        let page = 1;
        if (req.query.page) {
            page = parseInt(req.query.page);
        }
        const id = req.params.id;
        
        const productData = await Product.findAll({
            where: {
                category_id: id
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
            limit: 20,
            offset: (page - 1) * 20
        });
        const categoryData = await Category.findAll({});
        const products = _.map(productData, (product) => product.get({ plain: true }));
        const categories = _.map(categoryData, (category) => category.get({ plain: true }));
        res.render("products", {id, categories, products, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;