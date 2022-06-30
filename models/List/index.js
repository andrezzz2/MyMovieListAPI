const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    titles: {
        type: Array,
        required: true
    }
});

const List = mongoose.model('List', ListSchema);

module.exports = List;