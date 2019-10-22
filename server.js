const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer((req, res) => {
    const stream = fs.createReadStream(
        path.join(__dirname, './public', req.url == '/' ? 'index.html' : req.url)
    );

    stream.on('error', () => {
        res.writeHead(404);
        res.end();
    });

    stream.pipe(res);
}).listen(3003);
