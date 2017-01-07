var express = require("express");
var indexController = require("../controllers/indexController");
var searchController = require("../controllers/searchController");


 
module.exports = function() {

  var router = express.Router();
  router.get('/', indexController.renderPage);
  router.get('/getList',indexController.getList);
  router.get('/getMultiLabs',indexController.getMultiLabs);

  router.get('/multisearchlabs', searchController.renderPage);


  return router;
}
