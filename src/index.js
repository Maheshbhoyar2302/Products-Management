const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const mongoose = require('mongoose');
const multer = require('multer')

const app = express();

app.use(bodyParser.json());
app.use(multer().any())

mongoose.connect("mongodb+srv://vishalpasi:FbiA1ChEDTbvv6eL@cluster0.3xmrakz.mongodb.net/group11database", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});





