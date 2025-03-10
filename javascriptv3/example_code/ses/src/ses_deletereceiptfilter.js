/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/ses-examples-ip-filters.html.

Purpose:
ses_deletereceiptfilter.js demonstrates how to delete an Amazon SES IP address filter.

Inputs (replace in code):
- REGION
- FILTER_NAME

Running the code:
node ses_deletereceiptfilter.js
 */
// snippet-start:[ses.JavaScript.filters.deleteReceiptFilterV3]
// Import required AWS SDK clients and commands for Node.js
import {
  DeleteReceiptFilterCommand
}  from "@aws-sdk/client-ses";
import { sesClient } from "./libs/sesClient.js";
// Set the parameters
const params = { FilterName: "FILTER_NAME" }; //FILTER_NAME

const run = async () => {
  try {
    const data = await sesClient.send(new DeleteReceiptFilterCommand(params));
    console.log("Success", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run();
// snippet-end:[ses.JavaScript.filters.deleteReceiptFilterV3]
// For unit tests only.
// module.exports ={run, params};
