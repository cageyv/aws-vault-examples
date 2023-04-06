// NOTE: We are formalizing our plans to enter AWS SDK for JavaScript (v2) into maintenance mode in 2023.
// Please migrate your code to use AWS SDK for JavaScript (v3).
// For more information, check the migration guide at https://a.co/7PzMCcy
// We are using SDK v2 for this example to demonstrate how to aws-vault works with different credentials providers.

process.env.AWS_SDK_JS_SUPPRESS_MAINTENANCE_MODE_MESSAGE = '1';

const AWS = require('aws-sdk')

AWS.config.getCredentials(function(err) {
    if (err) console.debug(err.stack); // credentials not loaded
    else {
        console.debug("AWS credentials type:", AWS.config.credentials.constructor.name);
    }
});
