import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose; 

const eventSchema = new Schema({
    users: [{
        type: SchemaTypes.ObjectId,
        ref: 'User',
    }],
    title: {
        type: String,
        lowercase: true,
        unique: true,
    },
    description: {
        type: String,
    },
    notes: {
        type: String,
    },
    location: {
        type: String,
    },
    date: {
        type: Date, 
        require: true,
    },
    repeated: Boolean, 
    repeat_pattern: Object,
    isTask: Boolean,
    start_date: Date,
    end_date: Date,
});

export const Event = model("Event", eventSchema); 

export const getEvents = () => Event.find();

export const getEventById = (id: string) => Event.findById(id);

export const deleteEventById = (id: string) => Event.findOneAndDelete({ _id: id });

export const updateEventById = (id: string, values: Record<string, any>) => Event.findByIdAndUpdate(id, values);

export const createEvent = (values: Record<string, any>) => new Event(values).save().then((event) => event.toObject());

export const getEventByTitle = (title: string) => Event.findOne({title: title }); 