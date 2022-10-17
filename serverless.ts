/* eslint-disable @typescript-eslint/no-var-requires */
import { hello } from "./src/functions/restAPI";

const serverlessConfiguration = {
  service: "test-first-deploy",
  frameworkVersion: "2",
  custom: {
    // Unexpected error while starting serverless-offline lambda server on port 3002: Error: listen EADDRINUSE: address already in use 0.0.0.0:3002
    //https://github.com/dherault/serverless-offline/issues/1015
    "serverless-offline": {
      lambdaPort: 3000,
    },
  },
  plugins: ["serverless-webpack", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    stage: "dev",
    region: "ap-southeast-1",
    versionFunctions: false,
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },
    lambdaHashingVersion: "20201221",
  },
  // import the function via paths
  functions: {
    hello,
  },
  // Resources in Cloudformation Json Schema
};

module.exports = serverlessConfiguration;
