import fs  from "fs";
import http from "http";
import colors from "colors"
import dayjs from "dayjs"

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const html = fs.readFileSync("./index.html");
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(html);
        console.log(colors.bgBlue(`[${dayjs().format()}] / GET`))
        console.log(colors.bgBlue("You are in my page"));
    } else {
        res.writeHead(404, { "Content-type": "text/plain" });
        res.end(console.log("Error 404 Not Found"));
    }
})

server.listen(3000, () => {
    console.log(colors.bgGreen("Port 3000 is listening"))
})