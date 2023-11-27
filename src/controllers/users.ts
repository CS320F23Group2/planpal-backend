import express from 'express';
import mongoose from 'mongoose';
import { deleteUserById, getUsers, getUserById, UserModel} from '../db/users';
import { createEvent, deleteEventById, updateEventById } from '../db/events';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();

        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        const deletedUser = await deleteUserById(id);

        return res.json(deletedUser);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { username } = req.body;

        if (!username) {
            return res.sendStatus(400);
        }

        const user = await getUserById(id);

        user.username = username;
        await user.save();

        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getEvents = async (req: express.Request, res: express.Response) => {
   try
    {
    const { id } = req.params;

    const user = await getUserById(id).populate('events');

    return res.status(200).json(user).end();
    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }

    


}

export const addEvent = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params; 
        const {values} = req.body; 

        if (!values){
            return res.sendStatus(400);
        }

        const user = await getUserById(id);

        const event = await createEvent(values); 

        event.user = user._id 

        user.events.push(event._id); 
 
        await user.save();

        return res.status(200).json(user).end();

    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteEvent = async (req: express.Request, res: express.Response) => {
    try
    {
    const {id} = req.params
    const {eventId} = req.body

    if (!eventId){
        return res.sendStatus(400)
    }

    const user = await getUserById(id)

    let indexToRemove = user.events.indexOf(eventId)

    user.events.splice(indexToRemove, 1)

    await deleteEventById(eventId)

    await user.populate('events')

    await user.save()

    return res.status(200).json(user).end()

} catch(error){
    console.log(error)
    return res.sendStatus(400)
}
}

export const updateEvent = async (req: express.Request, res: express.Response) => {
    try
    {
        const {id} = req.params
        const {values} = req.body

        if (!values){
            return res.sendStatus(400)
        }
        
        const user = await getUserById(id)

        const eventid = values.id 

        let indexToRemove = user.events.indexOf(eventid)

        user.events.splice(indexToRemove, 1)

        const event = await updateEventById(eventid, values)

        await event.save()

        user.events.push(eventid)

        user.populate('events')

        await user.save()

        return res.sendStatus(200).json(user).end()

    }catch(error){
        console.log(error)
        return res.sendStatus(400)
    }
}