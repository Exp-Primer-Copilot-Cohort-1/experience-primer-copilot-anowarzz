// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Create a port
const port = 3000;

// Create an array of comments
const comments = [
    {id: 1, comment: 'This is a comment'},
    {id: 2, comment: 'This is another comment'}
];

// Create a get request
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Create a post request
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        comment: req.body.comment
    };
    comments.push(comment);
    res.send(comment);
});

//
