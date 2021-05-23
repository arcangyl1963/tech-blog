const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const dashBdRoutes = require('./dashboardRoutes');
const apiRoutes = require('./api/');

router.use('/dashboard', dashBdRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;