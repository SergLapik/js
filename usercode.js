import { Base64 } from 'js-base64';
module.exports = (data) => {
    
var header = { "alg": "HS256", "typ": "JWT"};
var payload = {"userId": "adc720c4-1c51-4c61-8197-d3980048fe15"};
  var SECRET_KEY = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDEKn/2qxQvp5My
9z1LmreW2+XCBAhHXy+XauNOzdvaSjT/scZd3jCqMX0+vmz+WXM5euv7qunAa8SS
Vb+3+kxF6gtCMCPdpmRzW9rsM1i6HKFbXbmYatdwYg+eIH3SltLLVlASh3CyzIN1
DyEDlm3S7g4fqmHo74V53PUf/LfsEr0/je/vpDuSM6I1MA2XW4ozbmcM5fBpXKfF
l3Dxo3rmAbB83WzJh31YsyxcKsgPtuCIJke7Qb+mFKL6C2MGH4LC85yqYEBWPyLX
2RJ1v9TxXj6mQYzdrn7ujUI+7dE/0tjL13m1OZKMmB365NMwmKwzrvRx/RUJSh9Z
p/PtI017AgMBAAECggEAUYUj5ntUCTXHiz+JvniOYOgDRCxu0FIzMeaejeoouj9q
ZPQY7ntel+u3E7MJEm5T3whBNzXgrDFc4D84TBl9RvSrNxdQYFU8m2AJy2zPK5Co
UZLShQ+pdi+aM+lmwHQjJ5M39WtJn1Q0MRpXaulBvI1nWytwQt//BRSY3XElcbnh
hLpufPmOoBCzY5DVv5SwbZ0g/AAamCzbzQNMtThxVw47Qb1lTQ+Z+dV0Uhn6wtuW
DUkexVfws+nopSbEfmbjsMWU9Uo2lNrgs1Ax9C3SWp6EGJKkRA69IUHk+YbngrGR
4YXum0c4rgQUSX5wmCmvMvQeHK75k9TwxKHCL7K9cQKBgQDn1KPvkHl42fQEGoIq
XiiCYCfHhqU3i0q09AR02P+mm8srW0esZW5ONfoaZG2aHW/Eld7TPGJArp0SQ5q7
o+DlZWwOk129dKHgRh6xe/mBY7Po1Ujl4hW1A89UpJFRCSZisxirTdNG9Mu+IIGL
fdBBeU9HVLdp1McdRjZxprz8wwKBgQDYngByIdMJilZjg3lb+iIB92mQxAbQiIAr
VKbPr/RVCFDfsBi8TECYujkGxHrRsK8BKv6/go93fGQ0w7fI04HLFEGryN5mIIgH
xcP9/l+OBkrkxmiVxltoOepDoloo82isxg7mTidYmZFXdpNGIeJk6bxWaeW+IOPI
DkmUr0XA6QKBgCKK74ZRi5fzOcWmwYBYmUab1zGGoXV+PrpppYRXlPgZPJOQPUS1
tFLY/hQSpLYS7sVm41WsKKOkoOjIw/RzfZ4Ql6IwWQZSq5AEQqyFYW7jETp/FSaT
olJfZ/QftTtS1rJcJy/XH8Tx0q3YoBTNwUsQLTzepZmSR7zX6mLSylQLAoGBANFm
A7ZQ3koVsacnPBTeuys9eY4ZASFrIsNAZLTWOhJNJKjn+TFlYPiC5IeXPccgzjwJ
zRNiab+uvsuG+02msIyY+1bNqbf98KHa2rjYwpRvnsyCxC0s/8XEXqKc+h0mF+UU
3OhjWoO6iBaNqJaeQNUeYhMC8bUW5DrLHPQfbwWpAoGBAJs8ZMg9BLP8PLjwFO76
l0pngrnRMTFy6BFWqjmLw4FmJz888VwIuDMWaR4X9NRCgloC5gRywHXeC+mLDv7Q
TReA6Ay9eUw8RDb9+q6GPgUUG3OeOUrpYV0ryuEtFoNPTWiwFHNzzJyS8AMpNLnL
SslxMRpFDO2XLTRLoT0nUQyP';
    
function b64EncodeUnicode(header);   
function b64EncodeUnicode(payload);
var unsignedToken = btoa(encodeURIComponent(header)) + '.' + btoa(encodeURIComponent(payload));
var signature = HMAC-SHA256(unsignedToken, SECRET_KEY);
function b64EncodeUnicode(signature);


data.token = encodeBase64Url(header) + '.' + encodeBase64Url(payload) + '.' + encodeBase64Url(signature)
    
    return data;
};
