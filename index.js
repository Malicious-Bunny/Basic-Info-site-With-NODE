const url = require('node:url');
const http = require('node:http');
const fs = require('node:fs');

const headers = {
    'Content-Type': 'text/html'

}

const readStream = fs.createReadStream('./index.html');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    if (path === '/') {
        res.writeHead(200, headers);
        const data = fs.readFileSync('./index.html');
        res.write(data);

        

        res.end();
    } else if (path === '/about') {
        res.writeHead(200, headers);
        const data = fs.readFileSync('./about.html');
        res.write(data);
        res.end();
     } else if (path === '/contact-me') {
        res.writeHead(200, headers);
        const data = fs.readFileSync('./contact-me.html');
        res.write(data);
        res.end();
    
    } else {
        res.writeHead(404, headers);
        const data = fs.readFileSync('./404.html');
        res.write(data);
        
        res.end();
    }
});

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080/');
})
