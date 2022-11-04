const capitalizeFirstChar = (STRING) => {
    if(!STRING || typeof STRING !== 'string' || STRING.length<1) throw new Error("[ERROR]: STRING Parameter should be a valid string.");
    const firstChar = STRING.charAt(0).toUpperCase();
    const excludedStr = STRING.slice(1);
    const finalStr = `${firstChar}${excludedStr}`;
    return finalStr;
}

module.exports = capitalizeFirstChar;