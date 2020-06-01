import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('listagem de usuários');

    //JSON

    response.json([
        'Eliezer',
        'Mark',
        'Diego',
        'Daniel'
    ]);
});

app.listen(3333);