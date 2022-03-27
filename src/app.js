const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const createError = require('http-errors')
const express = require('express')
const flash = require('express-flash')
const localStrategy = require('passport-local').Strategy
const logger = require('morgan')
const path = require('path')
const passport = require('./lib/passport')
const router = require('./routes/router')
const session = require('express-session')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }))

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  }),
)

app.use(passport.initialize())

app.use(passport.session())

app.use(flash())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

module.exports = app
