module.exports = (data) => {
    
var header = { "alg": "HS256", "typ": "JWT"};
var payload = {"userId": "adc720c4-1c51-4c61-8197-d3980048fe15"};

var SECRET_KEY = '3';

data.token = SECRET_KEY;
    
    return data;
};
