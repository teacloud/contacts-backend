import { AgentsMockData } from "./agents.mock.data";

module.exports.handler = async (event) => {
  newRecord = event.body
  console.log(newRecord)
  record = AgentsMockData.push(newRecord)
  return {
    statusCode: 200,
    body: JSON.stringify(record),
  };
};
