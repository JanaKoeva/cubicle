const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')

const {SECRET} =require('../config/config');
exports.register = (userData) => {
    User.create(userData);
}

exports.login = async (username, password) => {
    //find user
    const user = await User.findOne({ username });
    console.log(user);
    //validate user
    if (!user) {
        throw new Error("Can not find ussername ");
    }
    //validate password
    console.log(password);
    console.log(user.password);
    const isValid = await bcrypt.compare(password, user.password);
    console.log(isValid);
    if (!isValid) {
        throw new Error("Can not find ussername or password");
    }
 

    //convert to token
    const payload = {
        _id: user._id,
        username: user.username
    }
    const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' })

       //return user
       return token;
}