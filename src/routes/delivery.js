

const express = require('express');
const router = express.Router();

const deleverycontroller = require('../controllers/DeliveryController');

router.use('/success', deleverycontroller.success);
router.use('/cancel', deleverycontroller.cancel);
router.use('/accept', deleverycontroller.accept);
router.use('/', deleverycontroller.index);
// router.get('/', (req, res, next) => {
//     res.render('user/doctor');
// });

module.exports = router; 