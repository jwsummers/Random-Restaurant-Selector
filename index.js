// Load required packages
var express = require('express');

// Create our Express application
var app = express();

// Add static middleware
app.use(express.static(__dirname + '/public'));

// Create our Express router
var router = express.Router();

// Register all our routes
app.use(router);

// Start the server
app.listen(3000);
