import http from "http";

const server = http.createServer((req, res) => {
    const { method, url } = req

    res.setHeader("Content-Type", "aplication/json")

    if (url = "/") {
        switch (method) {
            case "GET":
                res.statusCode = 200;
                res.end(JSON.stringify({ message: "GET Recurso obtenido con exito (200 OK)", }),);
                break;
            case "POST":
                res.statusCode = 201;
                res.end(JSON.stringify({ message: "POST Recurso creado (201)", }),);
                break;
            case "PUT":
                res.statusCode = 200;
                res.end(JSON.stringify({ message: "PUT Recursi actualizado (200)", }),);
                break;
            case "DELETE":
                res.statusCode = 204;
                res.end(JSON.stringify({ message: "DELETE Recurso eliminado (204)" }));
                break;
            default:
                res.statusCode = 405;
                res.end(JSON.stringify({error: "Método no permitido (404)"}));

        }
    }else{
        res.statusCode = 404;
        res.end(JSON.stringify({error: "Ruta no encontrada"}))
    }
    server.listen(3000, () => {
        console.log("Servidor se esta ejecutando en el puerto 3000")
    })
})