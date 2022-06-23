const provinceSchema = require("../schema/provinces.js");

const getTopConfirmed = async (req) => {
    try {
        const limitNum = parseInt(req.query.max_results);
        const response = await provinceSchema.aggregate([
            {
              '$match': {
                'ObservationDate': req.query.observation_date
              }
            }, {
              '$group': {
                '_id': '$Country/Region', 
                'country': {
                  '$first': '$Country/Region'
                }, 
                'observation_date': {
                  '$first': '$ObservationDate'
                }, 
                'confirmed': {
                  '$sum': {
                    '$toDouble': '$Confirmed'
                  }
                }, 
                'deaths': {
                  '$sum': {
                    '$toDouble': '$Deaths'
                  }
                }, 
                'recovered': {
                  '$sum': {
                    '$toDouble': '$Recovered'
                  }
                }
              }
            }, {
              '$sort': {
                'confirmed': -1
              }
            }, {
              '$limit': limitNum
            }
          ]);
          
        const topConfirmedData = {
            "observation_date": req.query.observation_date,
            "data": response,
        }

        return topConfirmedData;
    }catch (err) {  
        throw err;
    }
}

module.exports = {
    getTopConfirmed,
}