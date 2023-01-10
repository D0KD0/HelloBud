const router = require('express').Router();
const _ = require('lodash/core');
const { Product, Category, Dispensary, Brand } = require('../models');

router.get("/", async (req, res) => {
    try {

        const dispensaryData = await Dispensary.findAll({
            limit: 5,
        });

        const dispensaries = _.map(dispensaryData, (dispensary) => dispensary.get({ plain: true }));

        const brandData = await Brand.findAll({
            limit: 5,
        });

        const brands = _.map(brandData, (brand) => brand.get({ plain: true }));


        res.render('homepage', {
            logged_in: req.session.logged_in, dispensaries, brands
        });
    } catch (err) {
        res.status(500).json(err);
    }

})

router.get("/products", async (req, res) => {
    try {
        let page = 1;
        if (req.query.page) {
            page = parseInt(req.query.page);
        }

        console.log(page)

        const productData = await Product.findAll({
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
        const showAllProducts = true;
        res.render("products", { showAllProducts, categories, products, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/dispensary", async (req, res) => {
    res.render("dispensary");
})

router.get("/deals", async (req, res) => {
    res.render("deals")
})

router.get("/learn", async (req, res) => {
    res.render("learn")
})

router.get("/login", async (req, res) => {
    res.render("login")
})

router.get("/signup", async (req, res) => {
    res.render("signup")
})

module.exports = router;