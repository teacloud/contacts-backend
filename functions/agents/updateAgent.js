const { AgentsMockData } = require("./agents.mock.data");

module.exports.handler = async (event) => {
    id = Number.parseInt(event.pathParameters.id)
    // update to dynamoDB
    return {
        statusCode: 200,
    };
};
