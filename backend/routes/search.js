const express = require('express');

const { searchHistory } = require('../controllers/searchHistoryController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()
router.use(requireAuth)



//country details
router.get('/getSearchHistory', searchHistory);


module.exports = router