import {addNewRecord, getRecords, getRecordById, updateRecord, deleteRecord} from '../controllers/crmController'

const routes = (app) => {
    app.route('/sales/record')
        // .get((req, res, next) => {
        //     console.log(req.method);
        //     next();
        // },(req, res, next) => {
        //     res.send('Make a POST request and add CSV URL as a parameter')
        // })

        // .post((req,res) => {
        //     res.send('POST Request Works!')
        // });
        
        // get all records
        .get((req,res,next) => {
            console.log(req.method);
            next();
        }, getRecords)

        // Add New Record
        .post(addNewRecord);

        app.route('/sales/record/:recordID')

        .get((req,res,next) => {
            console.log(req.method);
            next();
        }, getRecordById)

        .put(updateRecord)

        .delete(deleteRecord);

    app.route('/sales/report')
    .get((req, res) => {
        res.send('PUT Request Works!')
    })

    .post((req,res) => {
        res.send('DELETE Request Works!')
    }); 
   
}

export default routes;