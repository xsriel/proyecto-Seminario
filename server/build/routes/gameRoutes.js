"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dietaController_1 = require("../controllers/dietaController");
class GameRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', dietaController_1.dietaController.list);
        this.router.get('/', dietaController_1.dietaController.getOne);
        this.router.post('/', dietaController_1.dietaController.create);
        this.router.put('/:id', dietaController_1.dietaController.update);
        this.router.delete('/:id', dietaController_1.dietaController.delete);
    }
}
const gamesRoutes = new GameRoutes();
exports.default = gamesRoutes.router;
