
//load the express module
const express = require('express'); 
const app = express();
//app is a express object tht handle all HTTP Methods (GET, POST, PUT, DELETE)

//piece of middleware required to handle post bodies. 
app.use(express.json());


//request contains a bunch of information concering the request that was made.
//response ... 
app.get('/', (request, response) => {

    //node will automatically set the content-type header to json, if object is sent. 
    response.send([1,2,3]);
});



//Let look at route params 
app.get('/api/:id', (req, res) => {
    res.status(200).send("You sent : " + req.params.id);
}); 

//query Parameters "api/v2?id=2"
app.get('/api/v2', (req, res) => {

    //status not required, you can set the response codes
    res.status(200).send("You sent : " + req.query.id);
});


//handling post, you need to send the server JSON data
app.post('/api/create', (req, res) => {
    let data = req.body.data;
    res.status(200).send(data); 
}); 


//NPM JOI package: a lite weight data validation library to make validation easier.








//should set this value by env
//const port = process.env.PORT || 5000       console.log(`App is running on localhost:${port}} ...`);

app.listen(5000, () => {
    //This method runs when the app has been successfully deployed.
    console.log(`App is running on localhost:5000 ...`);
});