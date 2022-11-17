const express = require('express');
const router = express.Router();
const userCtrl = require('./controllers/userController')

router.get('/home', (req, res) => {
    res.send('its works')
})

router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)
router.get('/players', userCtrl.bestPlayers)
// check cookies

router.get('/cookie', userCtrl.userLogged)


router.put('/scores', userCtrl.updateScore)
router.put('/change_password', userCtrl.changePassword)


// a changer en PUT/PATCH
router.put('/scores', userCtrl.updateScore)

router.delete('/:id', userCtrl.deleteUser)


module.exports = router;