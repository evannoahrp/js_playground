const { User } = require('../models')
const passport = require("../lib/passport");

function format(user) {
  const { id, username } = user
  return {
    id,
    username,
    accessToken: user.generateToken(),
  }
}

module.exports = {
  getRegister: (req, res) => {
    res.render('register', { title: 'Register' })
  },

  register: (req, res, next) => {
    User.register(req.body)
      .then(() => {
        res.redirect('/v1/api/auth/login')
      })
      .catch((err) => {
        res.json({
          status: 500,
          message: err.message,
        })
      })
  },

  getLogin: (req, res) => {
    res.render('login', { title: 'Login' })
  },

  login: passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/v1/api/auth/login",
    failureFlash: true,
  }),

  //   whoami: (req, res) => {
  //     const title = 'Profile'
  //     res.render('profile', req.user.dataValues, { title })
  //   },

  //   index: (req, res) => {
  //     const title = 'Home'
  //     res.render('home', { title })
  //   },
}
