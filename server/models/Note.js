import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    name      : { type: String },
    text      : { type: String },
    color     : { type: String },
    createdAt : { type: Date }
});

mongoose.model('Note', NoteSchema);