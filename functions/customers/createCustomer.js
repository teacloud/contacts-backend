
module.exports.handler = async (event) => {
  newRecord = event.body
  console.log(newRecord)
  return {
    statusCode: 200,
    body: JSON.stringify(record),
  };
};
