import express from 'express';

import {createEvent, deleteEventByOwnerIdAndEventId, getEventsByOwnerId, getEventByOwnerIdAndEventId, getEventByTitleAndOwnerId} from '../db/events'; 

export const newEvent = async (req: express.Request, res: express.Response) => {
    try {
        const { ownerId, title, description, start_date, end_date } = req.body;

        if (!ownerId || !title || !description || !start_date || !end_date) {
            return res.sendStatus(400);
        }

        const existingEvent = await getEventByTitleAndOwnerId(ownerId, title);

        if (existingEvent) {
            return res.sendStatus(400);
        }

        const event = await createEvent({
            ownerId: ownerId,
            title: title, 
            description: description,
            start_date: new Date(start_date),
            end_date: new Date(end_date)
        });

        return res.status(200).json(event).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getAllEvents = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        const events = await getEventsByOwnerId(id);

        return res.status(200).json(events);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const editEvent = async (req: express.Request, res: express.Response) => {
    try {
        const { id, eventId } = req.params;
        const { title, description, start_date, end_date } = req.body;

        if (!title || !description || !start_date || !end_date) {
            return res.sendStatus(400);
        }

        const event = await getEventByOwnerIdAndEventId(id, eventId)

        title !== 'null' ? event.title = title : event.title = event.title
        description !== 'null' ? event.description = description : event.description = event.description
        start_date !== 'null' ? event.start_date = start_date : event.start_date = event.start_date
        end_date !== 'null' ? event.end_date = end_date : event.end_date = event.end_date

        await event.save();

        return res.status(200).json(event).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteEvent = async (req: express.Request, res: express.Response) => {
    try {
        const { id, eventId } = req.params;

        const deletedUser = await deleteEventByOwnerIdAndEventId(id, eventId);

        return res.json(deletedUser);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}