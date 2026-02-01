import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Express API' });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;