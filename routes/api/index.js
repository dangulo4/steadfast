const router = require("express").Router();
const contactsRoutes = require("./contacts");

// contacts routes
router.use("/contacts", contactsRoutes);

module.exports = router;
