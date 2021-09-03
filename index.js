import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from '.express-fileUpload';

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:<password>@cluster0.2vwcr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
	try {
		await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
		app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
	} catch (e) {
		console.log(e)
	}
}

startApp();