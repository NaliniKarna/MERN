import express from "express";
import dotenv from "dotenv";
//import the router file of item
import item from './routes/item.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

//load into application
app.use('/', item);
app.use('/api', item);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
}); // app listening frontend on backend port 8000.