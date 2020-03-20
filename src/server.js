const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', function(req,res){
    // res.send('some dummy content');
    const pathToHtmlFile = path.resolve(__dirname,'../dist/index.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.use('/static', express.static(path.resolve(__dirname,'../dist')));

app.listen(4000, function(){
    console.log('applicaton is running on http://localhost:4000/');  
});