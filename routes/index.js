const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.post('/users', controllers.createUser);
router.get('/users', controllers.getAllUsers);
router.get('/users/:id', controllers.getUserById); 
router.delete('/users/:id', controllers.deleteUser);
router.put('/users/:id', controllers.updateUser);

module.exports = router;
