// Create web server 
// 1. create a server object
// 2. read a file
// 3. send a response
// 4. listen on port 8080

const http = require('http');
const fs = require('fs');

// 1. create a server object
http.createServer(function (req, res) {

    // 2. read a file
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);

        // 3. send a response
        res.end();
    });
}).listen(8080);

// 4. listen on port 8080
console.log('Server is running on port 8080');