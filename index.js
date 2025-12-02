require('dotenv').config();
const { log } = require("console");
const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    next();
});

const products = [
    {
        id: "prod001",
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 79.99,
        inStock: true,
        features: ["Noise-cancelling", "Water-resistant", "Long battery life"],
        reviews: [
            { user: "Alice", rating: 5, comment: "Excellent sound quality!" },
            { user: "Bob", rating: 4, comment: "Comfortable, but a bit pricey." }
        ]
    },
    {
        id: "prod002",
        name: "Organic Cotton T-Shirt",
        category: "Apparel",
        price: 24.50,
        inStock: true,
        features: ["100% organic cotton", "Breathable fabric", "Unisex fit"],
        reviews: [
            { user: "Carol", rating: 5, comment: "Super soft and eco-friendly!" }
        ]
    },
    {
        id: "prod003",
        name: "Stainless Steel Water Bottle",
        category: "Home Goods",
        price: 18.00,
        inStock: false,
        features: ["Double-walled insulation", "Leak-proof lid", "BPA-free"],
        reviews: []
    },
    {
        id: "prod004",
        name: "Ergonomic Office Chair",
        category: "Furniture",
        price: 299.99,
        inStock: true,
        features: ["Adjustable lumbar support", "Mesh back", "Swivel base"],
        reviews: [
            { user: "David", rating: 4, comment: "Very comfortable for long hours." },
            { user: "Eve", rating: 3, comment: "Assembly was a bit tricky." }
        ]
    }
];
const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
    res.json(products);
})
app.use("/server", apiRouter);
app.use("/", apiRouter);
app.listen(PORT, () => {
    log(`app is listening on port ${PORT}`)
})