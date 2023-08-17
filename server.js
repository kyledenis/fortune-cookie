// Require the Express module
const express = require('express');

const child_process = require('child_process');

// Create an Express web application
const app = express();

// Set handler for the index of the website
app.get('/', (req, res) => {
	// Run the system `fortune` command and respond with the message
	child_process.exec('fortune', (error, message) => {
		if(error === null) {
			res.send(message);
		} else {
			res.send('Error: ' + error);
		}
	})
});

// Start listening for HTTP requests on port 3000
app.listen(3000, () => {
	console.log('Server started');
});
