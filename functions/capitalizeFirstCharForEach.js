const capitalizeFirstCharForEach = (STRING) => {
    if(!STRING || typeof STRING !== 'string' || STRING.length<1) throw new Error("[ERROR]: STRING Parameter should be a valid string.");
    const Strings = STRING.split(" ");
    console.log(Strings);
    var finalStr = ""; var flag = 0;
    Strings.forEach((str, index) => {
        const firstChar = str.charAt(0).toUpperCase();
        const excludedStr = str.slice(1);
        const newStr = `${firstChar}${excludedStr}`;
        if(index === (Strings.length-1)) { finalStr += `${newStr}`; flag = 1; }
        else finalStr += `${newStr} `;
    });
    if(flag === 1) return finalStr;
}

module.exports = capitalizeFirstCharForEach;