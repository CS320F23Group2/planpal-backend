import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';

const app = express();

app.use(cors({
    origin: '*',
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

const port = parseInt(process.env.PORT) || 8080;

server.listen(port, () => {
    //console.log('Server running on http://localhost:8080/');
    console.log(`helloworld: listening on port ${port}`);
});

const MONGO_URL = 'mongodb+srv://anish:anish@cluster0.nki4sts.mongodb.net/?retryWrites=true&w=majority';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());