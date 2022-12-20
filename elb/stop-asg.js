import {
    AutoScalingClient,
    UpdateAutoscalingGroupCommand,
} from '@aws-sdk/client-auto-scaling'; //ES module import

const client = new AutoScalingClient({ region: 'us-east-1' });

export const handler = async (event) =>  {
    //TODO implement
    
    //update AutoScalingGroup
    const input = {
        AutoScalingGroupName: 'asg-aws-automation',
        MinSize: 0,
        MaxSize: 0,
        DesiredCapacity: 0,
    };

    const command = new UpdateAutoscalingGroupCommand(input);
    const response = await client.send(command);
    const result = {
        statusCode: 200,
        body: JSON.stringify('Stop asg from lambda'),

    };
    return result;
}