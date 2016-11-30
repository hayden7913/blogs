'use strict'

const express = require('express');
const bp = require('body-parser');
const app = express();
const imp = require('./models');
const blogRouter = require('./blogRouter')


//const jsonParser = bp.json();
app.use(bp.json());
app.use('/blogs', blogRouter)
imp.BlogPosts.create('harry potter', 'is described', 'jk rowling');
imp.BlogPosts.create('jack and jill', 'is described', 'david rothbury');

app.get('/blogs', (req, res) => {
	res.json(imp.BlogPosts.get());
});

app.post('/blogs', (req, res) => {
	imp.BlogPosts.create(req.body.title, req.body.content, req.body.author);
});

app.delete('/blogs/:id', (req, res) => {
	imp.BlogPosts.delete(req.params.id)
});

app.put('/blogs/:id', (req, res) => {
	console.log(req.body);
	imp.BlogPosts.update(req.body);
	res.json(imp.BlogPosts.get());
});

app.listen(3000, () => {
	console.log('Listening');
})