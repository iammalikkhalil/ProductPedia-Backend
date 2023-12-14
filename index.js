require("./database/dbconnection");
const express = require('express');
const path = require("path");
const app = express();
app.use(express.json());
const port = 3000;

const userRoutes = require("./routes/UserRoutes");
app.use("/user", userRoutes);

const roleRoutes = require("./routes/RoleRoutes");
app.use("/role", roleRoutes);

const productRoutes = require("./routes/ProductRoutes");
app.use("/product", productRoutes);

const categoryRoutes = require("./routes/CategoryRoutes");
app.use("/category", categoryRoutes);

const companyRoutes = require("./routes/CompanyRoutes");
app.use("/company", companyRoutes);

const countryRoutes = require("./routes/CountryRoutes");
app.use("/country", countryRoutes);

const feedbackRoutes = require("./routes/FeedbackRoutes");
app.use("/feedback", feedbackRoutes);

app.use("/images", express.static(path.join(__dirname, "images")));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});