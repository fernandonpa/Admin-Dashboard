import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet'; // Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
import morgan from 'morgan'; // HTTP request logger middleware for node.js


// Configerations

dotenv.config(); // To use the .env file
const app = express(); // To use the express . In here it create a instance of express

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); // urlencoded is a method inbuilt in express to recognize the incoming Request Object as strings or arrays and if it is true then it will recognize any type as the value of the key in the req.body object.
app.use(cors()); //cors is used to allow the request from the other origins
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'})); // cross-origin-resource-policy is used to allow the request from the other origins.origin is the server from which the request is coming from
app.use(morgan('common'));
app.use(express.json());

// Routes

app.use("/client", require("./routes/client"));
app.use("/general", require("./routes/general"));
app.use("/management", require("./routes/management"));
app.use("/sales", require("./routes/sales"));

