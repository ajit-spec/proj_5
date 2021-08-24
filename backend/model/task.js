const mongoose = require('mongoose');

const {Schema} = mongoose;

const taskschema = new Schema({
    title: {
        type: String,
        required: true
    },
    list_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List',
        required: true
    }

});

const Task = mongoose.model('Task', taskschema);

module.exports = Task