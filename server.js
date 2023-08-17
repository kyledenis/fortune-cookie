const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/', (req, res) => {
	exec('fortune', (err, stdout, stderr) => {
	if (err) {
		console.error(stderr);
		res.status(500).send('Something went wrong');
		return;
	}
	const fortuneMessage = `Your fortune for today: ${stdout}`;
	res.send(`${Date()}<br>${fortuneMessage}`);
	});
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
