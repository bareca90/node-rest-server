require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json('get Usuarios')
})

app.post('/usuario', function(req, res) {
    let body = req.body;

    res.json({
        persona: body
    });
})

app.put('/usuario', function(req, res) {
    res.json('put Usuarios')
})
app.delete('/usuario', function(req, res) {
    res.json('delete Usuarios')
})


app.listen(process.env.PORT, () => {
    console.log('Se esta escuchando el puerto ', process.env.PORT);
})