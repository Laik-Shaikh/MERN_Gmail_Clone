const mongoose = require('mongoose');


const emailSchemea = mongoose.Schema({
    to: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    subject: {
        type: String,
    },
    body: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: new Date()
    },
    starred: {
        type: Boolean,
        default: false,
    },
    bin: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
    }
});

const Email = mongoose.model("emails", emailSchemea);

module.exports = Email;