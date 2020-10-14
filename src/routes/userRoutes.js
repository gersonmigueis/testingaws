const { Router } = require('express');
const UsersController = require('../controllers/Users');
const router = Router();

router.post('/users', UsersController.create);
router.get('/users', UsersController.index);

module.exports = router;