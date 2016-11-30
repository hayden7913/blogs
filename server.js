'use strict'

const express = require('express');
const app = express();
const blogRouter = require('./blogRouter')


//const jsonParser = bp.json();
app.use(bp.json());
app.use('/blogs', blogRouter)


app.listen(3000, () => {
	console.log('Listening');
})