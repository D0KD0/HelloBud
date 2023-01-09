const router = require('express').Router();
const _ = require('lodash/core');
const {Dispensary} = require("../../models");

router.get("/", async (req, res) => {
    try {
        const dispensaryData = await Dispensary.findAll({});
        
        const dispensaries = _.map(dispensaryData, (dispensary) => dispensary.get({ plain: true }));
        console.log(dispensaries)
        res.status(200).json(dispensaries);
      } catch (err) {
        res.status(400).json(err);
      }
});

module.exports = router