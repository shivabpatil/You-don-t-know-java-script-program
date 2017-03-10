var express = require('express');
var path = require('path');

var rootPath = path.normalize(__dirname);
var app = express();

app.use(express.static(rootPath+'/app'));

var port = 3000;

app.listen(port,function () {
	console.log('Server is running on port',+port);
});
