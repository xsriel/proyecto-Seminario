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
exports.gamesController = void 0;
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({text:"Listando juegos"});
            const games = yield database_1.default.promise().query('SELECT * FROM dietas');
            res.json(games[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.promise().query('SELECT * FROM dietas WHERE idDietas = ?', [id]);
            res.json(games[0]);
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
        res.json({ text: 'deleting a game' });
    }
    update(req, res) {
        res.json({ text: 'updating a game ' + req.params.id });
    }
}
exports.gamesController = new GamesController();
