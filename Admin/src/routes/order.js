const express = require('express');
const router = express.Router();

const ordercontroller = require('../controllers/OrderController');

router.use('/total', ordercontroller.total);
router.use('/detail', ordercontroller.detail);
router.use('/cancel', ordercontroller.cancelproduct);
router.use('/', ordercontroller.index);
// router.get('/', (req, res, next) => {
//     res.render('user/doctor');
// });

module.exports = router; 