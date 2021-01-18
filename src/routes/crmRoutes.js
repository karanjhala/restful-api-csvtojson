import {addCsvToMongo, getReport } from '../controllers/crmController'

const routes = (app) => {
    app.route('/sales/record')
        .get((req,res,next) => {
            console.log(req.method);
            next();
        }, addCsvToMongo)

        app.route('/sales/report')
    .get(getReport)
   
}

export default routes;