import 'dotenv/config'
import express, { json, urlencoded } from "express";
import cors from "cors";
const app = express();
var corsOptions = {
  origin: "http://localhost:6868"
};

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Test sequelize application." });
});

// Members 
import memberRoutes from './app/routes/member.routes.js'
app.use('/api/members', memberRoutes)

const PORT = process.env.NODE_LOCAL_PORT || 6868;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});