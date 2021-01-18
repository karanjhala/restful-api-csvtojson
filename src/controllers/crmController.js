import mongoose from 'mongoose';
import {SalesRecordSchema} from '../models/crmModel';
const csvtojson = require("csvtojson");
import request from 'request';

const Record = mongoose.model('SalesRecord', SalesRecordSchema);
let url = "mongodb://localhost:27017/";

//controller for sales/report
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
      //  get all records for speicific date range
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