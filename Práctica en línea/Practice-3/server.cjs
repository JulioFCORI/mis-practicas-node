const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hola desde el servidor<h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>Sobre Nosotros<h2>");
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hola desde el Servidor");
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hola desde el Servidor");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
