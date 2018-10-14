const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();
const exphbs = require('express-handlebars');

const routes = require('./controllers/burgers_controller');


app.use('/static', express.static(path.join(__dirname, 'public')))


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(routes); 

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars"); 

app.listen(PORT, ()=>{
    console.log(`Server Listening on port ${PORT}`)
})