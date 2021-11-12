const AWS = require('aws-sdk')

AWS.config.getCredentials(function(err) {
    if (err) console.debug(err.stack); // credentials not loaded
    else {
        console.debug("AWS credentials type:", AWS.config.credentials.constructor.name);
    }
});

if (process.env.ANAZONAWS_SSM_ENDPOINT) { var ssm_options = {endpoint: process.env.ANAZONAWS_SSM_ENDPOINT} }
delay(3000).then(() => console.log('ran after 1 second1 passed'));

var ssm = new AWS.SSM(ssm_options);
var params = {
    Name: '/test/path/to',
    WithDecryption: false
};

ssm.getParameter(params, function(err,data) {
    if (err) console.log(err, err.stack);
    else     console.log(data)
});

