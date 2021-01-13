import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SalesRecordSchema = new  Schema({
    USER_NAME: {
        type: String ,
        required: "Enter Valid Name"
    },AGE: {
        type: Number ,
        required: "Enter Valid Age"
    },HEIGHT: {
        type: Number ,
        required: "Enter Valid Height in centimeters"
    },GENDER: {
        type: String,
        required: "Enter Valid Gender"
    },SALE_AMOUNT: {
        type: Number,
        required: "Enter Valid Amount"
    },LAST_PURCHASE_DATE: {
        type: Date ,
        required: "Enter Valid Date"
    }
})