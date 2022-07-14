const AWS = require('aws-sdk')

// WARNING
// Below is a bad and not safe use case. 
// Don't use it in production and don't commit your real keys to git
// WARNING
AWS.config.update({
    region: "us-east-1",
    accessKeyId: "BDAWERGZSQWRTSZSFQQ!", // NOT A REAL KEY !!!
    secretAccessKey: "d3sAjpW7SHd0d0S033Azz8sehj3gdfssdfbvcoD!" // DO NOT COMMIT YOUR REAL KEYS TO GIT !!!
})

console.debug("AWS credentials type:", AWS.config.credentials.constructor.name);
