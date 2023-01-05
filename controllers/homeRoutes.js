const router = require('express').Router();

const { Dispensary } = require('../models');

router.get("/", async (req, res) => {
    res.render("homepage")
})

router.get("/products", async (req, res) => {
    res.render("products")

    



})

router.get("/dispensary", async (req, res) => {
    try {
        
        const dispensaryData = await Dispensary.findAll({});

        const dispensaries = dispensaryData.map((dispensary) => dispensary.get({ plain: true }));
        console.log(dispensaries)
        res.render("dispensary", {dispensaries});
    } catch (err) {
        res.status(500).json(err);
    }
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