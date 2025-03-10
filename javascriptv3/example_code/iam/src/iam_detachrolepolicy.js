/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/iam-examples-policies.html.

Purpose:
iam_detachrolepolicy.js demonstrates how to detach a managed policy from an IAM role.

Inputs :
- REGION
- ROLE_NAME

Running the code:
node iam_detachrolepolicy.js
 */
// snippet-start:[iam.JavaScript.policies.detachRolePolicyV3]
// Import required AWS SDK clients and commands for Node.js
import { iamClient } from "./libs/iamClient.js";
import {
  ListAttachedRolePoliciesCommand,
  DetachRolePolicyCommand,
} from "@aws-sdk/client-iam";

// Set the parameters
const params = { RoleName: "ROLE_NAME" }; //ROLE_NAME

const run = async () => {
  try {
    const data = await iamClient.send(
      new ListAttachedRolePoliciesCommand(params)
    );
    return data;
    const myRolePolicies = data.AttachedPolicies;
    myRolePolicies.forEach(function (val, index, array) {
      if (myRolePolicies[index].PolicyName === "AmazonDynamoDBFullAccess") {
        const params = {
          PolicyArn: "arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess",
          paramsRoleList,
        };
        try {
          const results = iamClient.send(
            new DetachRolePolicyCommand(paramsRoleList)
          );
          console.log("Policy detached from role successfully");
          process.exit();
        } catch (err) {
          console.log("Unable to detach policy from role", err);
        }
      } else {
      }
    });
  } catch (err) {
    console.log("User " + process.argv[2] + " does not exist.");
  }
};
run();
// snippet-end:[iam.JavaScript.policies.detachRolePolicyV3]
// module.exports =  { run, params }; // For unit tests.
