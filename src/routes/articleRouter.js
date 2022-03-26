const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articleController')

router.get('/', articleController.getAllArticle)
router.get('/:id', articleController.getOneArticle)
router.post('/create', articleController.createArticle)
router.patch('/update/:id', articleController.updateArticle)
router.delete('/delete/:id', articleController.deleteArticle)

module.exports = router
