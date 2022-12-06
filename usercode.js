module.exports = (data) => {
var header = '1';  
var payload = '2';
var SECRET_KEY = '3';

data.token = header + payload + SECRET_KEY;
    
    return data;
};
