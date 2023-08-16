const mongoose = require('mongoose');

const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        // ref: 'user'
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 2000
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('notes', NotesSchema);