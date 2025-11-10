const express = require('express')
const app = express();
const path = require('path')

app.use((req, res) => {
    let filePath;

    switch(req.path){
        case '/':
            filePath = 'index.html'
            break;
        case '/contact':
            filePath = 'contact.html'
            break;
        case '/about':
            filePath = 'about.html'
            break;
        default:
            filePath = '404.html'
            break;

    }

    res.sendFile(path.join(__dirname,filePath))
})

app.listen(3000, () => {
    console.log("listening")
})
