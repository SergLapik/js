module.exports = (data) => {
    
var header = { "alg": "HS256", "typ": "JWT"};
var payload = {"userId": "adc720c4-1c51-4c61-8197-d3980048fe15"};
var unsignedToken = base64urlEncode(header) + '.' + base64urlEncode(payload)
var signature = HMAC-SHA256(unsignedToken, SECRET_KEY)

var SECRET_KEY = '3';

data.token = SECRET_KEY;
    
    return data;
};
