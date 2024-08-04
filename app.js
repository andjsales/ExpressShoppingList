const express = require('express');
const path = require('path');
const app = express();
const ExpressError = require("./expressError");
const items = require("./fakeDb");

app.use(express.json());

// Serve static files from the 'public' directory
// This allows you to serve HTML, CSS, JS, and other static files
app.use(express.static(path.join(__dirname, 'public')));

// render a list of shopping items
app.get('/items', (req, res) => {
    res.json(global.items);
});

// accept JSON data and add it to the shopping list
app.post('/items', (req, res) => {
    const newItem = { name: req.body.name, price: req.body.price };
    global.items.push(newItem);
    res.status(201).json({ added: newItem });
});

// display a single item’s name and price
app.get('/items/:name', (req, res) => {
    const item = global.items.find(i => i.name === req.params.name);
    res.json(item);
});

// modify a single item’s name and/or price
app.patch('/items/:name', (req, res) => {
    const item = global.items.find(i => i.name === req.params.name);
    if (req.body.name) item.name = req.body.name;
    if (req.body.price) item.price = req.body.price;
    res.json({ updated: item });
});

// delete a specific item from the array
app.delete('/items/:name', (req, res) => {
    const itemIndex = global.items.findIndex(i => i.name === req.params.name);
    if (itemIndex > -1) {
        global.items.splice(itemIndex, 1);
        res.json({ message: "Deleted" });
    } else {
        res.status(404).send("Item not found");
    }
});

// Handle root route
// This serves the index.html file when the root URL ("/") is accessed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);
    next(err);
});


app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err.message,
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
