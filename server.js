const express = require('express');
const path = require('path');
// const cors = require('cors');
const app = express();

const server = require('http').createServer(app);

// app.use(cors()); // cors 미들웨어를 삽입합니다.

app.use(express.json());
var cors = require('cors');
app.use(cors());

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

// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const app = express();

// const server = require('http').createServer(app);

// app.use(cors()); // cors 미들웨어를 삽입합니다.