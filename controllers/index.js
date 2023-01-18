const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const categoryRoutes = require('./categoryRoutes');
const dispensaryRoutes = require('./dispensaryRoutes');
const apiRoutes = require("./api")

router.use("/api", apiRoutes);
router.use('/', homeRoutes);
router.use('/categories', categoryRoutes);
router.use('/dispensaries', dispensaryRoutes);

module.exports = router;
