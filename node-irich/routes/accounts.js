var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET users listing. */
router.get('/create', function (req, res, next) {
  res.render('create_account', {
    title: 'iRich 愛記帳'
  });
});

router.post('/create', function (req, res, next) {
  console.log(req.body);
  models.Account.create({
    title: req.body.title,
    type: req.body.type,
    cost: req.body.cost
  }).then(function () {
    res.redirect('/')
  })
})

module.exports = router;