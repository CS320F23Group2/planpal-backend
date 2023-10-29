import mongoose from 'mongoose';

const CalenderSchema = new mongoose.Schema({
    title: { type: String, required: true },
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
    events: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Event', required: true }]

});

export const CalenderModel = mongoose.model('Calender', CalenderSchema);

export const getCalendersByUser = (userId: string) => CalenderModel.find({user: userId});

export const getCalenderByUserAndTitle = (userId: string, title: string) => CalenderModel.findOne({ user: userId, title: title });

export const createCalender = (values: Record<string, any>) => new CalenderModel(values).save().then((calender) => calender.toObject());

export const deleteCalenderById = (id: string) => CalenderModel.findOneAndDelete({ _id: id });

export const updateCalenderById = (id: string, values: Record<string, any>) => CalenderModel.findByIdAndUpdate(id, values);

