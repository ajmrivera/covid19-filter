# covid19-filter
Delivers results of confirmed cases of COVID-19 in countries, sorted in ascending order.


This application uses NodeJS, Express, and Mongoose. I have chosen Mongoose as it is the db I am currently using and most familiar.
This application makes use of MongoDB's aggregation to deliver data as quick as possible.

To use this application you must do the following:

1. Use npm install
2. Have Postman installed in your computer
3. Create a ".env" file with this inside: MONGO_DB_CONNECTION=mongodb+srv://admin:admin_password@ajmr-testing-cluster.8bhet.mongodb.net/covid_data
4. Enter npm start
5. The application will parse the csv file, save it on my MongoDB server, and will be waiting for Postman Requests
6. Use this as your Postman URL: 
  -> https://www.getpostman.com/collections/53a9248152bf3fbab964 
    or
  -> https://go.postman.co/workspace/MyTrade-Workspace~0c9363a4-6fc8-45cb-8126-88d13c31dabc/collection/20751433-2f369490-37f5-43d0-b8f6-7efef40c8964?action=share&creator=20751433

