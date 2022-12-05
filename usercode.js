const Nexmo = require('nexmo');

const jwt = Nexmo.generateJwt('path/to/private.key', {application_id: APP_ID});
