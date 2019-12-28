'use stric';

const bcrypt = require('bcrypt');

const hashPassword = (password, saltRounds) => {
    return bcrypt.hashSync(password, saltRounds);
};

const checkPassword = (bodyPass, userPass) => {
    return bcrypt.compareSync(bodyPass, userPass);
}

module.exports = {
    hashPassword,
    checkPassword
};