# RESTful API to Demonstrate Well-made GET and POST Routes

__A set of restful apis with endpoints to parse csv and store it in a mongoDB database. Users can then GET records and use as required__

## :scroll: What can you do with API Endpoints
- :motorway: ROUTE: /
  - Prompts one to read the Readme
- :motorway:	ROUTE: /sales/record
  - call endpoint with no parameter to parse default csv URL
    - example: /sales/record
  - call endpoint with parameter "csvURL" to parse a particular CSV from a remote location (E.G. S3 Bucket/ GCP Storage)
    - example: /sales/record?csvUrl=`https://storage.googleapis.com/csvstorenodeapp/MOCK_DATA-1.csv`

- :motorway:	ROUTE: /sales/report
  - get all documents in a JSON Object Format
    - example: /sales/report
  - get all documents on Single Date
    - example: /sales/report?dateFrom=2020-05-29T20:26:38.000Z
  - get all documents in a date range (Inclusive of Date to and from)
    - example: /sales/report?dateFrom=2020-05-29T20:26:38.000Z&dateTo=2020-05-29T20:26:38.000Z

## :key: Features
- :motorway: ROUTE:	/sales/record
  - Parse CSV hosted on external URL
  - Parse CSV row by row asynchronously (Promise used)
  - Validate against mongoDB model for each row (Error logged in console)
  - store each row as JSON in mongoDB collection
- :motorway: ROUTE:	/sales/report
  - Can get all documents
  - Can get all documents on a single Date (Parameters that work: dateFrom OR dateTo)
  - Can get all documents in a Date Range (Parameters that work: dateFrom AND dateTo)

- Made with Express.js as framework
- persistent data store using mongoDB to have 
- data validation with mongoose model schema
- potential to be called every 15s using a simple CRON Job from any Serverless script

## :construction_worker_man: Technical Information :construction_worker_woman:

### :speaking_head:	Language & Environment
- JavaScript
- Node.js

### :package:	Transcompiler/Packages/Dependencies/Middleware
- babel
- body-parser
- csvtojson
- express
- mongodb
- mongoose
- nodemon
- request

## :construction:	Improvements on the roadmap
- Robust error handling to be introduced
- Introduce Authentication and Authorization
- Lift and shift to Loopback for a more managed structure
