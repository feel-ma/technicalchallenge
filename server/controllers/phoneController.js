const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const phonesData = require('../../technical_challenge_WD/data/phones.json'); // Use require

const getPhones = asyncHandler(async (req, res) => {

    res.json(phonesData);
});


module.exports = { getPhones};