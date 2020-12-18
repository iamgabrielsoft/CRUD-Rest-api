const express = require('express')
const router = express.Router()
const { getUser, createUser, deleteUser, updateUser, getId, homePage} = require('../controllers/users')


router.get('/', homePage)
router.get('/users', getUser)
router.post('/', createUser)
router.get('/:id', getId)
router.delete('/', deleteUser)
router.patch('/:id',updateUser)




module.exports = router