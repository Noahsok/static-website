const express = require('express');
const path = require('path');
const app = express();

const options = {
  extensions: ['htm', 'html']
};

const public = path.join(__dirname, "public");
app.use(express.static(public, options));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
