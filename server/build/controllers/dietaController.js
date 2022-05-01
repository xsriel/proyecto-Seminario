"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dietaController = void 0;
const database_1 = __importDefault(require("../database"));
class DietaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({text:"Listando juegos"});
            const dieta = yield database_1.default.promise().query('SELECT * FROM dietas');
            if (dieta[0].toString().length > 0) {
                res.json(dieta[0]);
            }
            else {
                res.status(404).json({ text: "No hay dietas en la base de datos" });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const dieta = yield database_1.default.promise().query('SELECT * FROM dietas WHERE idDietas = ?', [id]);
            if (dieta[0].toString().length > 0) {
                res.json(dieta[0]);
            }
            else {
                res.status(404).json({ text: "No existe ese id en la base de datos" });
            }
            //res.json({text:"Este es el juego "+req.params.id});
            //pool.query('describe rutinas');
        });
    }
    create(req, res) {
        console.log(req.body);
        database_1.default.query("INSERT INTO dietas set ?", req.body);
        res.json({ text: 'Dieta creada' });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.promise().query("delete from dietas where idDietas = ?", [id]);
            var confirm = JSON.parse(JSON.stringify(result[0]));
            if (confirm.affectedRows == 0) {
                res.json({ text: 'No existe ese id para eliminar' });
            }
            else {
                console.log(confirm.affectedRows);
                res.json({ text: 'dieta eliminada' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, nombre } = req.params;
            const result = yield database_1.default.promise().query("UPDATE dietas set tituloDietas = ? WHERE idDietas = ?", [nombre, id]);
            console.log(result);
            var confirm = JSON.parse(JSON.stringify(result[0]));
            if (confirm.affectedRows == 0) {
                res.json({ text: 'No existe ese id para eliminar' });
            }
            else {
                console.log(confirm.affectedRows);
                res.json({ text: 'dieta actualizada' });
            }
        });
    }
}
exports.dietaController = new DietaController();
