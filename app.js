const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const rateLimit = require('express-rate-limit');
const escapeHtml = require('escape-html');
const csrf = require('csurf');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, 
//     max: 3 
//   });
// app.use(limiter);

app.post('/submit', (req, res) => {
    const userInput = req.body.input;
    res.send(`You submitted: ${userInput}`);
  });
  app.get('/sendCookieToDb',(req,res)=>{
    res.sendFile(__dirname + '/xss.html');
  })
  
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
