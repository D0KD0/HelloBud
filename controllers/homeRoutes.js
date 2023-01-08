const router = require('express').Router();

const { Product, Category, Dispensary, Brand } = require('../models');

router.get("/", async (req, res) => {
    res.render("homepage")
})

router.get("/products", async (req, res) => {
    try {
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
        });

        const categoryData = await Category.findAll({ });

        const products = productData.map((product) => product.get({ plain: true }));
        const categories = categoryData.map((category) => category.get({ plain: true }));
        res.render("products", {categories, products, logged_in: req.session.logged_in });
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