const Express = require('express')

const router = Express.Router()

const messageController = require('../controller/message')

const authenticator = require('../middleware/authenticator')

router.post('/sendmsg',authenticator.authenticator,messageController.sendmsg)
router.get('/getmessages',messageController.retrievemsg)

module.exports = router;