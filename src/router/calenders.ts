import express from 'express';


export default (router: express.Router) => {
  router.get('/calenders/:id');
  router.post('/calenders/:id')
  router.delete('/calenders/:id');
  router.patch('/calenders/:id');
};