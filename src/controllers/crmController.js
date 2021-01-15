import mongoose from 'mongoose';
import {SalesRecordSchema} from '../models/crmModel';

const Record = mongoose.model('SalesRecord', SalesRecordSchema);

export const addNewRecord = (req,res) => {
    let newRecord = new Record(req.body);

    newRecord.save((err,record) => {
        if (err) {
            res.send(err);
        }
        res.json(record);
    })
}

export const getRecords = (req,res) => {

    Record.find({},(err,record) => {
        if (err) {
            res.send(err);
        }
        res.json(record);
    })
}

export const getRecordById = (req,res) => {

    Record.findById(req.params.recordID,(err,record) => {
        if (err) {
            res.send(err);
        }
        res.json(record);
    })
}

export const updateRecord = (req,res) => {

    Record.findById({_id: req.params.recordID},req.body, {new: true, useFindAndModify: true},(err,record) => {
        if (err) {
            res.send(err);
        }
        res.json(record);
    })
}

export const deleteRecord = (req,res) => {

    Record.remove({_id: req.params.recordID},(err,record) => {
        if (err) {
            res.send(err);
        }
        res.json({message: "Record Deleted"});
    })
}