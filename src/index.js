var cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');

require('dotenv').config();

const port = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

let db = [
  {
    email: 'fake@fake.com',
    password: 'password123',
    firstName: 'Dillon',
    lastName: 'Reedy',
    referralSource: '',
  }
];

app.get('/login', (req, res) => {
  const result = db.find(element => element.email === req.query.email && element.password === req.query.password);
  
  res.send(result !== undefined);
});

app.post('/signup', (req, res) => {
  const result = db.find(element => element.email === req.body.email);

  if (result === undefined)
  {
    db.push(req.body);
    res.send(true);
  }
  else
  {
    res.send(false);
  }

})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});