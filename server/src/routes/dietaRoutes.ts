import { Router } from "express";
import { dietaController } from "../controllers/dietaController";

class GameRoutes {
    router:Router = Router();
    constructor()
    {
        this.config();
    }
    config(): void
    {
        this.router.get('/',dietaController.list);
        this.router.get('/:id',dietaController.getOne);
        this.router.post('/',dietaController.create);
        this.router.put('/:id/:nombre',dietaController.update);
        this.router.delete('/:id',dietaController.delete);
    }
}
const gamesRoutes = new GameRoutes();
export default gamesRoutes.router;