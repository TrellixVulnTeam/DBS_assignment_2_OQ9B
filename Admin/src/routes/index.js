const orderRouter = require('./order');
const deliveryRouter = require('./delivery');
const adminRouter = require('./admin');


function route(app) {
    app.use('/order', orderRouter);
    app.use('/delivery', deliveryRouter);
    app.use('/admin', adminRouter);
    //app.use('/', homeRouter);
}

module.exports = route;