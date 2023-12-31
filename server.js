var express = require('express');
const SERVER_PORT = 8089;
var app = express();

//Static middleware
app.use("/test", express.static("./public"))
app.use(express.json())
//app.use(express.text())
//https://expressjs.com/en/4x/api.html#express.urlencoded
app.use(express.urlencoded({extended: true}))



app.get('/hello', (req, res)=>{
    console.log("Received a GET request on /hello");
    res.status(201).send('<h1>Hello Express JS</h1>');
});

app.get('/user', (req, res)=>{
    const {firstname, lastname} = req.query;
    console.log(`Received a GET request on /user with firstname: 
    ${firstname} and lastname: ${lastname}`);
    res.json({firstname, lastname});
});

app.post('/user/:firstname/:lastname', (req, res)=> {
    const{firstname, lastname} = req.params;
    console.log(`Received a POST request on/user with firstname: ${firstname} and lastname: ${lastname}`);
    res.json({firstname, lastname});
});


app.listen(SERVER_PORT, ()=>{
    console.log(`Server running on http://localhost:${SERVER_PORT}/hello`);

});

