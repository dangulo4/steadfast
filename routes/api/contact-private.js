const router = require("express").Router();
const contactsController = require("../../controllers/contactsController");
const auth = require("../../middleware/auth");

// Matches with "/api/contacts"
router.route("/")
  .get(contactsController.findAll, auth)
  .post(contactsController.create, auth);

// Matches with "/api/contacts/:id"
router
  .route("/:id")
  .get(contactsController.findById, auth)
  .put(contactsController.update, auth)
  .delete(contactsController.remove, auth);

module.exports = router;
