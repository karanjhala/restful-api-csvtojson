import {addCsvToMongo, getRecords } from '../controllers/crmController'

const routes = (app) => {
    app.route('/sales/record')
        .get((req,res,next) => {
            console.log(req.method);
            next();
        }, addCsvToMongo)

    app.route('/sales/record/:csvURL')
        .get((req,res,next) => {
            console.log(req.method);
            next();
        }, addCsvToMongo)

    app.route('/sales/report')
    .get(getRecords)
   
}

export default routes;