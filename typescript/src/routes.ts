import { Request, Response } from 'express';
import createUser from './services/createUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'teste@gmail.com',
        password: '12345',
        techs: [
            'Node.js',
            'ReactJs',
            'React Native',
            { title: 'Javascript', experience: 100},
        ]
    });
    return response.json({ message: 'Hello World'});
}