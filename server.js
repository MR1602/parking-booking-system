const express = require("express");
const connectDb = require("./config/dbConnection");
const cors = require('cors');
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/user.routes"));
app.use("/api", require("./routes/booking.routes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})