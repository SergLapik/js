module.exports = (data) => {
var header = '1';  
var payload = '2';
var SECRET_KEY = '3';
    
var unsignedToken = base64urlEncode(header) + '.' + base64urlEncode(payload)
var signature = HMAC-SHA256(unsignedToken, SECRET_KEY)

data.token = encodeBase64Url(header) + '.' + encodeBase64Url(payload) + '.' + encodeBase64Url(signature)
    
    return data;
};
