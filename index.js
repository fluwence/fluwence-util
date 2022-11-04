const isValidUsername = require('./functions/isValidUsername');
const capitalizeFirstChar = require('./functions/capitalizeFirstChar');
const capitalizeFirstCharForEach = require('./functions/capitalizeFirstCharForEach');

module.exports = {
    validateUsername: isValidUsername,
    isValidUsername: isValidUsername,
    capitalizeFirstChar: capitalizeFirstChar,
    capitalizeFirstCharForEach: capitalizeFirstCharForEach
}