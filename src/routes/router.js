const router = require('express').Router()
const indexRouter = require('./indexRouter')
const usersRouter = require('./usersRouter')
const articleRouter = require('./articleRouter')
const restrict = require("../middlewares/restrict");

router.use('/', indexRouter)
router.use('/v1/api/auth/', usersRouter)
router.use('/v1/api/crud/', restrict, articleRouter)

module.exports = router
