const express = require('express')

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Getting root.');
});

app.get('/profile', (req, res) => {
    res.send('Getting profile.');
});

app.post('/profile', (req, res) => {
    // res.send('<h1>Hello!</h1>');

    const user = {
        name: 'Tabitha',
        hobby: 'football'
    }

    res.send(user);
});

app.listen(port);