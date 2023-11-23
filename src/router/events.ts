import express from 'express';

import { newEvent, getAllEvents, editEvent, deleteEvent } from '../controllers/events';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
  router.post('/events/:id', isAuthenticated, isOwner, newEvent);
  router.get('/events/:id', isAuthenticated, isOwner, getAllEvents);
  router.patch('/events/:id/:eventId', isAuthenticated, isOwner, editEvent);
  router.delete('/events/:id/:eventId', isAuthenticated, isOwner, deleteEvent);
};