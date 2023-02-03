const router = require('express').Router();
const userRoutes = require('./userRoutes')
const babyRoutes = require('./babyRoutes')
const parentRoutes = require('./parentRoute')


router.use('/users', userRoutes);
router.use('/baby', babyRoutes)
router.use('/parents', parentRoutes)
module.exports = router;
