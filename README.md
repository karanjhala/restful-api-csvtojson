# CSV to JSON with Query By Date APIs

__A set of restful apis with endpoints to parse csv and store it in a mongoDB database for analytics__

## What can you do with API Endpoints
- ROUTE: /
  - Prompts one to read the Readme
- ROUTE: /sales/record
  - call endpoint with no parameter to parse default csv URL
    - example: /sales/record
  - call endpoint with parameter "csvURL" to parse a particular CSV from a remote location (E.G. S3 Bucket/ GCP Storage)
    - example: /sales/record?csvUrl=`https://storage.googleapis.com/csvstorenodeapp/MOCK_DATA-1.csv`

- ROUTE: /sales/report
  - get all documents in a JSON Object Format
    - example: /sales/report
  - get all documents on Single Date
    - example: /sales/report?dateFrom=2020-05-29T20:26:38.000Z
  - get all documents in a date range (Inclusive of Date to and from)
    - example: /sales/report?dateFrom=2020-05-29T20:26:38.000Z&dateTo=2020-05-29T20:26:38.000Z

## Key Features
- /sales/record
  - Parse CSV hosted on external URL
  - Parse CSV row by row asynchronously (Promise used)
  - Validate against mongoDB model for each row (Error logged in console)
  - store each row as JSON in mongoDB collection
- /sales/report
  - Can get all documents
  - Can get all documents on a single Date (Parameters that work: dateFrom OR dateTo)
  - Can get all documents in a Date Range (Parameters that work: dateFrom AND dateTo)

- Made with Express.js as framework
- persistent data store using mongoDB to have 
- data validation with mongoose model schema
- potential to be called every 15s using a simple CRON Job from any Serverless script

## Technical Information

### Language & Environment
- JavaScript
- Node.js

### Transcompiler/Packages/Dependencies/Middleware
- babel
- body-parser
- csvtojson
- express
- mongodb
- mongoose
- nodemon
- request

## Improvements on the roadmap
- Robust error handling to be intorduced
- Introduce Authentication and Authorization
- Lift and shift to Loopback for a more managed structure
