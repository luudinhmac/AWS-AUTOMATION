// load the SDK for JavaScript
import { EC2Client, StopInstancesCommand } from '@aws-sdk/client-ec2';

// a client can be shared by different commands.
const client = new EC2Client({ region: 'us-east-1' });
//init ec2 client: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ec2/interfaces/ec2clientresolvedconfig.html

export const handler = async (event) => {
  // TODO implement

  const input = {
    InstanceIds: ['i-027fc5b2d4a27601c'],
  };
  const command = new StopInstancesCommand(input);
  //stop ec2 command: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ec2/classes/stopinstancescommand.html
  const response = await client.send(command);
  //response msg: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ec2/interfaces/stopinstancescommandoutput.html

  const result = {
    statusCode: 200,
    body: 'Stop ec2 from lambda',
  };
  return result;
};
