const { AgentsMockData } = require("./agents.mock.data");

module.exports.handler = async (event) => {
  id = Number.parseInt(event.pathParameters.id)
  record = AgentsMockData.filter(agent => agent._id === id)[0]
  console.log(record)
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
