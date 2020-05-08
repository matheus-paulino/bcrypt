const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

app.use(express());
app.use(express.json());

app.get('/', (req, res) => {
    
    const saltRounds = 10;

    const testPass= '123465'

    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(testPass, salt);

    res.json({ resultado: `${hash}` })

})

app.listen(3030);