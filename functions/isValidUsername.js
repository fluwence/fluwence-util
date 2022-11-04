const isValidUsername = (USERNAME) => {
    if(!USERNAME || typeof USERNAME !== 'string' || USERNAME.length<1) throw new Error("[ERROR]: USERNAME Parameter should be a valid string.");
    return /^[0-9a-zA-Z_.-]+$/.test(USERNAME);
}

module.exports = isValidUsername;