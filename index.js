import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send(`Node Server running with Express via ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Your Server is running on: ${PORT} port`)
});