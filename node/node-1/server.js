const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const delay = 100;

let requestNumber = 0;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    setTimeout(() => {        
        res.end(`Response #${++requestNumber}.`);
    }, delay);
});

const startServer = () => server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

startServer();
