const express = require("express");
const session = require("express-session");
const cors = require('cors');
const store = new session.MemoryStore();
const app = express();

const paymentRoute = require("./routes/payment/paymentAPI");
const productsRoute = require("./routes/products/productsAPI");
const shopsRoute = require("./routes/shops/shopsAPI");
const loginRoute = require("./routes/login/loginAPI");
const customerRoute = require("./routes/customer/customerAPI");
const feedbackRoute = require("./routes/products/feedback/feedbackAPI");

const DEFAULT_PORT = process.env.port || 5000;
app.use(cors());
app.use(
  session({
    secret: "secret",
    cookie: { maxAge: 30000 },
    saveUninitialized: false,
    store: store,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.send(200);
});

app.use("/payment", paymentRoute);
app.use("/products", productsRoute);
app.use("/shops", shopsRoute);
app.use("/login", loginRoute);
app.use("/customer_info", customerRoute);
app.use("/products/details/feedback", feedbackRoute);

app.listen(DEFAULT_PORT, () => {
  console.log("Server is running on port: " + DEFAULT_PORT);
});
