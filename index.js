const express = require('express');
const app = express();

// Define a route for the heading
app.get('/test', (req, res) => {
    res.json({ heading: 'This is a simple Node.js API' });
});

const PORT = process.env.PORT || 3000; // Use the default port 3000 or the one set in the environment

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});