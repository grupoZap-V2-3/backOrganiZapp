const router = require('express').Router();
const usersController = require('../controllers/users.controller');
const catchErrors = require('../helpers/catchErrors');

//  {BASE_URL}/user
router.route('/')
  .post(catchErrors(usersController.createUser)  );


module.exports = router;
