const mongoose = require('mongoose');
const mongoUrl = "mongodb+srv://gamerobuddy:virus99@cluster0.f6mpdso.mongodb.net/";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database");
}
).catch((err) => {
    console.log(err);
});


app.use(cors());
app.use(bodyParser.json());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const auth = require('./routes/auth');
app.use('/auth', auth);

const users = require('./routes/verify');
app.use('/users', users);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})