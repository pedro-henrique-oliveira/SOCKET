import {Router} from "express";

import massageController from "./controllers/message";

const router = Router();

router.get("/", (request, response) => response.json("Hello World!"));

router.post("/message", massageController.create);
export default router;