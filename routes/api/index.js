const router = require('express').Router();
const contactRoutes = require('./contacts');
const userRoutes = require('./users');

// contacts routes
router.use('/contacts', contactRoutes);
// router.use('/users', userRoutes);
router.use('/login', userRoutes);
router.use('/register', userRoutes);

module.exports = router;
