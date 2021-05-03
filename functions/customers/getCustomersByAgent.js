const { CustomersMockData } = require("./customers.mock.data");

module.exports.handler = async (event) => {
  agent_id = Number.parseInt(event.pathParameters.id)
  record = CustomersMockData.filter(customer => customer.agent_id === agent_id)
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
