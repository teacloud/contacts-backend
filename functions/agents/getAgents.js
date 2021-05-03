const { AgentsMockData } = require("./agents.mock.data");

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(AgentsMockData),
  };
};
