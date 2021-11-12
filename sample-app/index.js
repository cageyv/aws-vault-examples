const AWS = require('aws-sdk')

AWS.config.getCredentials(function(err) {
    if (err) console.debug(err.stack); // credentials not loaded
    else {
        console.debug("AWS credentials type:", AWS.config.credentials.constructor.name);
    }
});
