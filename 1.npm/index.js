import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => 
    res.send(`Node and express server on ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);