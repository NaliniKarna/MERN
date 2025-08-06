import express from "express";
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.status(200). json({
        message: "request handled successfully"
    });
});

app.post('/items', (req,res) => {
    res.send("Got a POST request");
});

app.put('/items/:id', (req,res)=> {
    res.send("Got a PUT request");
});

app.delete('/items/:id', (req,res)=> {
    res.send("Got a DELETE request");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
}); // app listening frontend on backend port 8000.