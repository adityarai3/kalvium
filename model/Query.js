
const mongoose = require('mongoose');

const calculationSchema = new mongoose.Schema({
    question: String,
    answer: Number,
});

module.exports = mongoose.model('Calculation', calculationSchema);
