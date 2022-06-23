# covid19-filter
Delivers results of confirmed cases of COVID-19 in countries, sorted in ascending order.


This application uses NodeJS, Express, and Mongoose. I have chosen Mongoose as it is the db I am currently using and most familiar.
This application makes use of MongoDB's aggregation to deliver data as quick as possible.

To use this application you must do the following:

1. Use npm install
2. Have Postman installed in your computer
3. Create a ".env" file with this inside: MONGO_DB_CONNECTION=mongodb+srv://admin:admin_password@ajmr-testing-cluster.8bhet.mongodb.net/covid_data
4. Enter npm start
5. If the MongoDB collection is empty, it will parse and insert data on my MongoDB server, then it will wait for Postman Requests
6. Use this as your Postman URL: 
  -> https://www.getpostman.com/collections/53a9248152bf3fbab964 //Import Collection using link
7. To exit, press CTRL + C
