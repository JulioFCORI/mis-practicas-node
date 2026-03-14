import express from 'express';
import { connectDB } from './src/conf/dbConfig.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
	res.status(200).json({ message: 'Servidor Express activo' });
});

app.get('/health', (_req, res) => {
	res.status(200).json({ status: 'ok' });
});


const startServer = async () => {
	try {
		await connectDB();
		app.listen(PORT, () => {
			console.log(`Servidor iniciado en http://localhost:${PORT}`);
		});
	} catch (error) {
		console.error('No se pudo iniciar el servidor:', error.message);
		process.exit(1);
	}
};

startServer();
