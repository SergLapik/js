const param = require("param");

module.exports = (data) => {
    data.hello = data.param;

    return data;
};
