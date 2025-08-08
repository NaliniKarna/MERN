//this file will store all the item specific routes
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200). json({
        message: "request handled successfully"
    });
});

router.get("/item", (req, res) => {
    res.sendFile('./check.html', {root:__dirname});
});

router.post('/items', (req,res) => {
    res.send("Got a POST request");
});

router.put('/items/:id', (req,res)=> {
    res.send("Got a PUT request");
});

router.delete('/items/:id', (req,res)=> {
    res.send("Got a DELETE request");
});


export default router;