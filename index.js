import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 4000;

// connect mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// connect bodyparser
app.use(bodyParser.urlencoded({extended: true}) );
app.use(bodyParser.json());

//this line calls the "routes" function and gives it the app parameter
routes(app);

app.get('/', (req, res) => {
    res.send(`Node Server running with Express via ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Your Server is running on: ${PORT} port`)
});