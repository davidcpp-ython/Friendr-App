const express = require('express')
const router = express.Router();
const usersController = require('../controllers/users.controller')

router.get('/:username', usersController.getUser);
router.post('/', usersController.createUser)
router.delete('/:id', usersController.deleteUser);

module.exports = router;