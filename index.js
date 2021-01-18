import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 4000;

// connect mongoose
mongoose.Promise = global.Promise;


//connect mongoose to remote DB (MongoDB Atlas)
mongoose.connect('mongodb+srv://csvtomongo-service:HlM9w83ykmrjWpSu@cluster0.httcb.mongodb.net/restRecordDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// ALTERNATIVE Connect mongoose to local DB
// mongoose.connect('mongodb://localhost/CRMdb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// connect bodyparser
app.use(bodyParser.urlencoded({extended: true}) );
app.use(bodyParser.json());

//call the "routes" function and gives it the app parameter
routes(app);

app.listen(PORT, () => {
    console.log(`Your Server is running on: ${PORT} port`)
});