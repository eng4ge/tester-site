const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

