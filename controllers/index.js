const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const dashBdRoutes = require('./dashboardRoutes');
const apiRoutes = require('./api');

router.use('/dashboard', dashBdRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;