const express = require('express');
const bp = require('body-parser');
const {BlogPosts} = require('./models');

const router = express.Router();
const jp = bp.json;

BlogPosts.create('harry potter', 'is described', 'jk rowling');
BlogPosts.create('jack and jill', 'is described', 'david rothbury');

router.get('/', (req, res) => {
	res.json(BlogPosts.get());
});

router.post('/', (req, res) => {
	console.log("Posted");
	BlogPosts.create(req.body.title, req.body.content, req.body.author);
});

router.delete('/:id', (req, res) => {
	BlogPosts.delete(req.params.id)
});

router.put('/:id', (req, res) => {
	console.log(req.body);
	BlogPosts.update(req.body);
	res.json(BlogPosts.get());
});

module.exports = router;