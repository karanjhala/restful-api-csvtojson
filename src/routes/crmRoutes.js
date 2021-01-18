import {addCsvToMongo, getReport } from '../controllers/crmController'

const PORT = 4000;

const routes = (app) => {
    app.get('/', (req, res) => {
        res.send(`Node Server running with Express via Port: ${PORT}, Use the Readme to use different APIs`)
    });
    
    
    app.route('/sales/record')
        .get((req,res,next) => {
            console.log(req.method);
            next();
        }, addCsvToMongo)

        app.route('/sales/report')
    .get(getReport)
   
}

export default routes;