import http, { get } from "http";

const server = http.createServer((req, res) => {
    // 1. CONFIGURA EL ENCABEZADO (writeHead) PARA DEVOLVER TEXTO PLANO (Código 200) Acá una ayuda
    res.setHeader("Content-Type", "application/json");
    const { method, url } = req;

    // 2. CREA UNA ESTRUCTURA IF/ELSE PARA EVALUAR req.method
    if (url === "/") {
        if (method === "GET") {
            res.statusCode = 200;
            res.end(JSON.stringify({ message: "Obteniendo lista de tareas" },),)
            return null;
        } else if (method === "POST") {
            res.statusCode = 201;
            res.end(JSON.stringify({ message: "Creando una nueva tarea" },),);
            return null;
        } else if (method === "PUT") {
            res.statusCode = 200;
            res.end(JSON.stringify({ message: "Actualizando una tarea existente" },),);
        } else if (method === "DELETE") {
            res.statusCode = 200;
            res.end(JSON.stringify({ error: "Tarea eliminada correctamente" }))
        }else{
            res.statusCode = 404;
            res.end(JSON.stringify({message: "Methodo no encontrado"}))
        }
    }else{
        res.statusCode = 404;
        res.end(JSON.stringify({message: "Ruta no encontrada"}));
    }

    // SI el método es igual a "GET":
        // Responde (res.end) con el mensaje: "Obteniendo lista de tareas..."

    // SI EL NO, SI (else if) el método es igual a "POST":
        // Responde con: "Creando una nueva tarea..."

    // SI EL NO, SI el método es igual a "PUT":
        // Responde con: "Actualizando una tarea existente..."

    // SI EL NO, SI el método es igual a "DELETE":
        // Responde con: "Tarea eliminada correctamente."

    // SI NO (else) se cumple ninguno de los anteriores:
        // Responde con: "Método no soportado"
});

server.listen(3000, () => {
    console.log("Servidor se esta ejecutando en el puerto 3000")
})

// 3. PON EL SERVIDOR A ESCUCHAR EN EL PUERTO 3000 Y MUESTRA UN MENSAJE EN CONSOLA