import express from 'express';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 4000;

//this line calls the "routes" function and gives it the app parameter
routes(app);

app.get('/', (req, res) => {
    res.send(`Node Server running with Express via ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Your Server is running on: ${PORT} port`)
});