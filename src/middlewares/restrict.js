module.exports = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  res.redirect('/v1/api/auth/login')
}
