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
        MinSize: 1,
        MaxSize: 4,
        DesiredCapacity: 2,
    };

    const command = new UpdateAutoscalingGroupCommand(input);
    const response = await client.send(command);
    const result = {
        statusCode: 200,
        body: JSON.stringify('Start update asg from lambda'),

    };
    return result;
}