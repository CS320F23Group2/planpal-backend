import express from 'express';

import { getAllUsers, deleteUser, updateUser, getEvents, addEvent, updateEvent, deleteEvent } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
  router.get('/users', isAuthenticated, getAllUsers);
  router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
  router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
  router.get('/users/:id', isAuthenticated, isOwner, getEvents );
  router.put('/users/addEvent/:id', isAuthenticated, isOwner, addEvent );
  router.patch('/users/updateEvent/:id', isAuthenticated, isOwner, updateEvent);
  router.delete('/users/deleteEvent/:id', isAuthenticated, isOwner, deleteEvent);
};