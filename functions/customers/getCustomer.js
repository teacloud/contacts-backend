const { CustomersMockData } = require("./customers.mock.data");

module.exports.handler = async (event) => {
  id = Number.parseInt(event.pathParameters.customerId)
  record = CustomersMockData.filter(customer => customer._id === id)[0]
  if (!record) {
    return {
      statusCode: 404,
      body: 'Not Found'
    }
  }
  else return {
    statusCode: 200,
    body: JSON.stringify(record),
  };
};
