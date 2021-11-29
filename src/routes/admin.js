const express = require('express');
const router = express.Router();

const ordercontroller = require('../controllers/AdminController');

router.use('/adminowner', ordercontroller.getOwner);
router.use('/company', ordercontroller.getCompany);
router.use('/companydetail', ordercontroller.getCompanydetail);
router.use('/ownerAD', ordercontroller.getCompanydetail);

router.use('/', ordercontroller.index);

// router.get('/', (req, res, next) => {
//     res.render('user/doctor');
// });

module.exports = router; 