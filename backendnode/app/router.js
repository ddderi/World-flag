const express = require('express');
const router = express.Router();
const userCtrl = require('./controllers/userController')



router.get('/logout', userCtrl.logout)
router.get('/players', userCtrl.bestPlayers)
router.get('/cookie', userCtrl.userLogged)

router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)

router.put('/scores', userCtrl.updateScore)
router.put('/change_password', userCtrl.changePassword)
router.put('/scores', userCtrl.updateScore)

router.delete('/:id', userCtrl.deleteUser)


module.exports = router;