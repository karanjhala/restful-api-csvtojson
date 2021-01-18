import mongoose from 'mongoose';
import {SalesRecordSchema} from '../models/crmModel';
import csvtojson from 'csvtojson';
import request from 'request';

const Record = mongoose.model('SalesRecord', SalesRecordSchema);

/***************************controller for sales/record***************************/
export const addCsvToMongo = (req,res) => {
    const defaultUrl = "https://storage.googleapis.com/csvstorenodeapp/MOCK_DATA-1.csv"

    csvtojson()
        // request CSV from a URL
        .fromStream(request.get(req.query.csvUrl || defaultUrl))
        // subscribe and feed data to MongoDB
        .subscribe((csvData, lineNum) => {
            return new Promise((resolve,reject)=>{
                
                let newRecord = Record(csvData);
                // save row in MongoDB collection
                newRecord.save((err, record) => {
                    if (err) {
                    console.error(err)
                        reject();
                    }
                    console.log(record);
                    resolve();
                });
            });
});
}

/***************************controller for sales/report***************************/
export const getReport = (req,res) => {
    const dateFrom = req.query.dateOne;
    const dateTo = req.query.dateTwo;

    // get all records when no dates specified
    if (!dateFrom && !dateTo) {
        Record.find({}, (err,record) => {
            if (err) {
                res.send(err);
            }
            res.json(record);
        })
      } 

      // get all records for specific date
      else if (dateFrom && !dateTo) {
        Record.find({
            LAST_PURCHASE_DATE: { 
                $eq: new Date(dateFrom)
            }}, (err,record) => {
                if (err) {
                    res.send(err);
                }
                res.json(record);
            })
      }

      // get all records for speicific date range
      else if (dateFrom && dateTo) {
      Record.find({
        LAST_PURCHASE_DATE: { 
            $gte: new Date(dateFrom),
            $lte: new Date(dateTo)
        }}, (err,record) => {
            if (err) {
                res.send(err);
            }
            res.json(record);
        })
    }

}