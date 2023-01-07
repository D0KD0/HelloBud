const router = require('express').Router();

const { Dispensary } = require('../models');

router.get("/", async (req, res) => {
    // logout visible when it is logged in
    res.render('homepage', { 
        logged_in: req.session.logged_in 
      });
})

router.get("/products", async (req, res) => {
    res.render("products")
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