
// Initialize your project npm init
// Installed express (the node framework) npm install express
// Importing express using require

// Request methods

const express = require("express");
const app = express();
const PORT = 2222;

app.get("/", (request, response) => {
    response.send("Welcome to my Node Class");
})

app.get("/get-names", (req, res) => {
    res.json(["Daniel", "Famous", "Yinka", "Temmy", "Oladayo", "Blessing", "Shammah"])
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
