const express = require('express')
const router = express.Router()
const todoController = require ('../controllers/todoContoller')

router.get('/', todoController.getAll)
router.get('/:id', todoController.getOne)
router.post('/', todoController.create)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.delete)

module.exports = router;