import express from 'express';

import { login, register } from '../controllers/authentication';

//creating basic login auth routes
export default (router: express.Router) => {
  router.post('/auth/register', register);
  router.post('/auth/login', login);
};