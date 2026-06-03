import { Server } from "socket.io";
import app from "./app";
import http from "http";

const server = http.createServer(app);

const io = new Server(server, {cors: {origin: "*"}});

io.on("connection", (socket) => {
    console.log("novo cliente conectado: " + socket.id);

    socket.on("disconnect", () => {
        console.log("cliente desconectado: " + socket.id);
    });
})

server.listen(8080, () => console.log("Listening on port 8080"));

export { io };