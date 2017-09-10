const http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, {'ContentType': 'text/plain'});
	res.write('Hello World!!!');
	res.end();
}).listen(8888);

// module pm2 (?) - automatic server restart

