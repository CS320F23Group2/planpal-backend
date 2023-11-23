import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose; 

const eventSchema = new Schema({
    ownerId: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
        require: true,
    },
    users: [{
        type: SchemaTypes.ObjectId,
        ref: 'User',
    }],
    title: {
        type: String,
        unique: true,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    notes: {
        type: String,
    },
    location: {
        type: String,
    },
    date: {
        type: Date, 
        default: Date.now
    },
    repeated: Boolean, 
    repeat_pattern: Object,
    isTask: Boolean,
    start_date: {
        type: Date,
        require: true,
    },
    end_date: {
        type: Date,
        require: true,
    },
});

export const Event = model("Event", eventSchema); 

export const getEventsByOwnerId = (owner_id: string) => Event.find({ownerId: owner_id});

export const getEventByOwnerIdAndEventId = (owner_id: string, id: string) => Event.findOne({ _id: id, ownerId: owner_id});

export const deleteEventByOwnerIdAndEventId = (owner_id: string, id: string) => Event.findOneAndDelete({ _id: id, ownerId: owner_id});

export const updateEventById = (id: string, values: Record<string, any>) => Event.findByIdAndUpdate(id, values);

export const createEvent = (values: Record<string, any>) => new Event(values).save().then((event) => event.toObject());

export const getEventByTitleAndOwnerId = (owner_id: string, title: string) => Event.findOne({ownerId: owner_id, title: title });