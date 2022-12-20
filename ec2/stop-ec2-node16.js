// load the SDK for JavaScript
const AWS = require('aws-sdk');

exports.handler = async (event) => {
  // TODO implement
  // set the region
  AWS.config.update({ region: 'us-east-1' });

  // create an ec2 object
  var ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });

  // setup instance params
  var params = {
    InstanceIds: ['i-027fc5b2d4a27601c'],
  };
  // await ec2.stopInstances(params)

  console.log('params:', params);

  await ec2
    .stopInstances(params, function (err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
      } else {
        console.log(data); // successful response
      }
    })
    .promise();

  const response = {
    statusCode: 200,
    body: JSON.stringify(AWS.VERSION),
  };
  return response;
};
