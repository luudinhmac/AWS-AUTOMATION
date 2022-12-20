import {
  RDSClient,
  StopDBClusterCommand,
  StopDBInstanceCommand,
} from '@aws-sdk/client-rds'; // ES Modules import

const client = new RDSClient({
  region: 'us-east-1',
});

export const handler = async (event) => {
  // TODO implement

  const inputDBCluster = {
    DBClusterIdentifier: 'aurora-sls-dev',
  };
  const inputDBInstance = {
    DBInstanceIdentifier: 'mysql-db-rds',
  };

  // const command = new StopDBClusterCommand(inputDBCluster);
  const command = new StopDBInstanceCommand(inputDBInstance);
  const response = await client.send(command);

  const result = {
    statusCode: 200,
    body: JSON.stringify('Stop db-instance from Lambda!'),
  };
  return result;
};
