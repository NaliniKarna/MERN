import express from "express";

const app = express();

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

app.listen(8000, () => {
    console.log("Server running on 8000");
}); // app listening frontend on backend port 8000.