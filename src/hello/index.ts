import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, _context) => {
  console.log(`event: ${JSON.stringify(event)}`)

  const body = {
    message: 'Hello CDK World!',
  };

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(body),
  };
}
