const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const categoryRoutes = require('./categoryRoutes');
const apiRoutes = require("./api")

router.use("/api", apiRoutes);
router.use('/', homeRoutes);
router.use('/', categoryRoutes);

module.exports = router;
