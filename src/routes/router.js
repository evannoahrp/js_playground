const router = require('express').Router()
const indexRouter = require('./indexRouter')
const usersRouter = require('./usersRouter')
const articleRouter = require('./articleRouter')

router.use('/', indexRouter)
router.use('/', usersRouter)
router.use('/v1/api/crud/', articleRouter)

module.exports = router
