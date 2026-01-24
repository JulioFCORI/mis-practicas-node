import http from "http";
import fs from "fs";
import colors from "colors";
import dayjs from "dayjs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const html = fs.readFileSync("./index.html", "utf-8");
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(html);
    console.log(colors.green(`[${dayjs().format()}] GET /`));
  } else if (req.url === "/Contact") {
    const html = fs.readFileSync("./contact.html", "utf-8");
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(html);
    console.log(colors.green(`[${dayjs().format()}] GET /contact`));
  } else if (req.url === "/Us") {
    const html = fs.readFileSync("./aboutUs.html", "utf-8");
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(html);
    console.log(colors.green(`[${dayjs().format()}] GET /aboutUs`));
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log(colors.cyan("Servidor ejecutandose en el puerto 3000"));
});
