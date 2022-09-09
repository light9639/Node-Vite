const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors());

const server = require('http').createServer(app);

server.listen(8080, () => {
    console.log('server is running on 8080')
})

app.use(express.static(path.join(__dirname, 'front/dist')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/front/dist/index.html'));
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/front/dist/index.html'));
});