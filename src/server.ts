import express, { Request, Response } from 'express';
import { User } from './types';

const app = express();
const PORT = process.env.PORT || 3000;

// Healthcheck Endpoint
app.get('/healthcheck', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Server is healthy' });
});

// Users Endpoint
app.get('/users', (req: Request, res: Response) => {
    const users: User[] = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ];
    res.status(200).json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
