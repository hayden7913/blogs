'use strict'

const express = require('express');
const app = express();
const bp = require('body-parser');
const blogRouter = require('./blogRouter')


//const jsonParser = bp.json();
app.use(bp.json());
app.use('/blogs', blogRouter)


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

module.exports = server; 