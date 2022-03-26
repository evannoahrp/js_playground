const { Article } = require('../models')

class articleController {
  static getAllArticle = (req, res) => {
    Article.findAll({})
      .then((response) => {
        res.json({
          status: 200,
          message: 'Success',
          data: response,
        })
      })
      .catch((err) => {
        res.json({
          status: 500,
          message: err.message,
        })
      })
  }

  static getOneArticle = (req, res) => {
    const atriclesId = req.params.id
    Article.findOne({
      where: {
        id: atriclesId,
      },
    })
      .then((response) => {
        res.json({
          status: 200,
          message: 'Success',
          data: response,
        })
      })
      .catch((err) => {
        res.json({
          status: 500,
          message: err.message,
        })
      })
  }

  static createArticle = (req, res) => {
    const { title, body, approved } = req.body
    Article.create({ title, body, approved })
      .then((response) => {
        res.json({
          status: 200,
          message: 'Success',
          data: response,
        })
      })
      .catch((err) => {
        res.json({
          status: 500,
          message: err.message,
        })
      })
  }

  static updateArticle = (req, res) => {
    const atriclesId = req.params.id
    const { title, body, approved } = req.body
    Article.update(
      {
        title,
        body,
        approved,
      },
      {
        where: { id: atriclesId },
      },
    )
      .then((response) => {
        res.json({
          status: 200,
          message: 'Success',
          data: response,
        })
      })
      .catch((err) => {
        res.json({
          status: 500,
          message: err.message,
        })
      })
  }

  static deleteArticle = (req, res) => {
    const atriclesId = req.params.id
    Article.destroy({
      where: {
        id: atriclesId,
      },
    })
      .then(() => {
        res.json({
          status: 200,
          message: 'Success',
        })
      })
      .catch((err) => {
        res.json({
          status: 500,
          message: err.message,
        })
      })
  }
}
module.exports = articleController
