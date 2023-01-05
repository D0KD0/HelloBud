const router = require("express").Router();

const userRoutes = require('./userRoutes');
const dispensaryRoutes = require("./dispensaryRoutes");

router.use("/dispensaries", dispensaryRoutes);
router.use('/users', userRoutes);


module.exports = router