const router = require('express').Router();
const {Dispensary} = require("../../models");

router.get("/", async (req, res) => {
    try {
        const dispensaryData = await Dispensary.findAll({});
        const dispensaries = dispensaryData.map((dispensary) => dispensary.get({ plain: true }));
        
        res.status(200).json(dispensaries);
      } catch (err) {
        res.status(400).json(err);
      }
});

module.exports = router