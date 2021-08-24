const mongoose = require('mongoose');
require('./task')

const {Schema} = mongoose;

const listschema = new Schema({
    title: {
        type: String,
        required: true
    }
});

listschema.virtual(
    'tasks',
    {
        ref: 'Task',
        localField: '_id',
        foreignField: 'list_id'
    }
)

listschema.set('toObject', { virtuals: true });
listschema.set('toJSON', { virtuals: true });

const List = mongoose.model('List', listschema);

module.exports = List
