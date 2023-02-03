const router = require('express').Router();
const userRoutes = require('./userRoutes');
const babyRoutes = require('./babyRoutes')
const parentRoutes = require('./parentRoute')
const journalRoutes = require('./journalRoutes');


router.use('/users', userRoutes);
router.use('/baby', babyRoutes)
router.use('/parents', parentRoutes)
router.use('/journal', journalRoutes)
module.exports = router;
