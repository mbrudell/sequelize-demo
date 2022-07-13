import 'dotenv/config'
import express, { json, urlencoded } from "express";
import cors from "cors";
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

// const db = require("./app/models")

// db.sequelize.sync()
//   .then(() => {
//     console.log("db")
//   })

app.get("/", (req, res) => {
  res.json({ message: "Test sequelize application." });
});

// require("./app/routes/member.routes").default(app)

// Members 
import memberRoutes from './app/routes/member.routes.js'
app.use('/api/members', memberRoutes)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});