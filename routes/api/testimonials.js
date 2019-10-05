const express = require('express');
const router = express.Router();
const testimonialsCtrl = require('../../controllers/testimonials');

router.get('/', testimonialsCtrl.tesBoard);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, testimonialsCtrl.create);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
