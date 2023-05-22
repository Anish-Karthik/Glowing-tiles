const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});


app.listen(port, () => console.log(`Server running on port ${port}`));