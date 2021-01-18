import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// create schema with validation check

// each key is mapped to the header for CSV
export const SalesRecordSchema = new  Schema({
    USER_NAME: {
        type: String ,
        required: "Enter Valid Name"
    },AGE: {
        type: Number ,
        required: "Enter Valid Age"
    },HEIGHT: {
        type: Number ,
        required: "Enter Valid Height in Centimeters"
    },GENDER: {
        type: String,
        required: "Enter Valid Gender"
    },SALE_AMOUNT: {
        type: Number ,
        required: "Enter Valid Amount"
    },LAST_PURCHASE_DATE: {
        type: Date ,
        required: "Enter Valid Date"
    }
})