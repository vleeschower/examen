import express from "express";
import dotenv from "dotenv";
import usuariosRoutes  from "./routes/usuarios.routes.ts";


dotenv.config({ path: "/home/examen/usuarios/src/.env" });

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/rutas", usuariosRoutes);

app.get("/", (req, res) => {
    res.send("Pagina Principal");
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`);
});