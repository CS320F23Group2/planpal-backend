import express from 'express';

import authentication from './authentication';
import users from './users';

const router = express.Router();

//initializing middleware
export default (): express.Router => {
  authentication(router);
  users(router);

  return router;
};