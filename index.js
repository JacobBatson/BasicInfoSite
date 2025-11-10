const http = require('http');
const fs = require('fs/promises');
const path = require('path')

const server = http.createServer(async (req,res) => { 
    try {
        let filePath;
        if(req.url === '/') filePath = '/index.html'
        if(req.url === '/contact') filePath = '/contact.html';
        if(req.url === '/about') filePath = '/about.html';

        const data = await fs.readFile(path.join(__dirname,filePath))

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } catch(err){
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>')
    }
})

server.listen(3000, () => {
    console.log('server running')
})