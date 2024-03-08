const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    try{
        res.sendFile(path.join(__dirname, '/index.html'));
    }
    catch(err){
        console.log(err);
    }

})
app.get('/about', (req, res) => {
   try{
    res.sendFile(path.join(__dirname, '/about.html'));
   }
    catch(err){
         console.log(err);
    }

})
app.get('/contact-me', (req, res) => {
    try{
        res.sendFile(path.join(__dirname, '/contact-me.html'));
       
    }
    catch(err){
        console.log(err);
    }

})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '/404.html'));
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });