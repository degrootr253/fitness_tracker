const router = require("express").Router();

const apiRoutes = require('./api');
const frontEnd = require('./frontEnd');

router.use('/', frontEnd);
router.use('/api', apiRoutes);

module.exports = router;

