import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRouters from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());

app.use('/posts', postRouters);

//database
const PORT = process.env.PORT || 5001;

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));


