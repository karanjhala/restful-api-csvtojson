import {addCsvToMongo, getReport } from '../controllers/crmController'

const PORT = 4000;

const routes = (app) => {
    
    //route for root or '/' endpoint 
    app.get('/', (req, res) => {
        res.send(`Node Server running with Express via Port: ${PORT}, Use the Readme to use different APIs`)
    });
    
    /*
    route for sales record
    - call endpoint with no parameter to parse default csv URL
    - call endpoint with parameter "csvURL" to parse a particular CSV
     */
    app.route('/sales/record')
        .get((req,res,next) => {
            console.log(req.method);
            next();
        }, addCsvToMongo)
    
    /*
    route for sales report
    - call endpoint with no parameter to get all documents in collection
    - call endpoint with parameter "dateFrom" OR "dateTo" to get all documents on a particular date
    - call endpoint with parameters "dateFrom" AND "dateTo" to get all documents in a particular date range
     */
        app.route('/sales/report')
    .get(getReport)
}

export default routes;