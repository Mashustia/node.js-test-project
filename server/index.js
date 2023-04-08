const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
})

// gets port env variable from heroku every time the app starts
const PORT = process.env.PORT || 4000;
app.listen(PORT);
