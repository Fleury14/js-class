const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// enable req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// allow any CORS
app.use(cors());

// GET route
router.get('/get', (req, res) => {
    res.status(200).json({ message: 'You made a GET request'});
});

router.post('/post', (req, res) => {
    console.log('Incoming POST request with data:', req.body);
    res.status(200).json({ message: 'You made a POST request', sentData: req.body });
});

app.use('/api', router);

app.listen(3456, () => {
    console.log('Yo, this server be listening on port 3456.');
})