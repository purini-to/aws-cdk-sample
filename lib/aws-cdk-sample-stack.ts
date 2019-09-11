import cdk = require('@aws-cdk/core');
import * as lambda from '@aws-cdk/aws-lambda';
import * as sam from '@aws-cdk/aws-serverless';
import * as apigateway from '@aws-cdk/aws-apigateway';

export class AwsCdkSampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloLambda = new lambda.Function(this, 'HelloLambda', {
      functionName: `${id}-HelloLambda`,
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: 'index.handler',
      code: lambda.Code.asset('src/hello'),
    });

    const api = new apigateway.RestApi(this, 'HelloApi', {
      restApiName: `${id}-HelloApi`,
    });
    const lambdaIntegration = new apigateway.LambdaIntegration(helloLambda, { proxy: true });
    api.root.addMethod('GET', lambdaIntegration)
  }
}
