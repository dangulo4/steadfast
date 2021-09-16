const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Matches with "/api/contacts"
router.route('/').get(usersController.findAll).post(usersController.create);

// Matches with "/api/contacts/:id"
router
  .route('/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router
  .route('/login')
  .get(usersController.findAll)
  .post(usersController.create);

router
  .route('/register')
  .get(usersController.findAll)
  .post(usersController.create);

module.exports = router;
