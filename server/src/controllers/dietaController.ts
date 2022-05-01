import {Request,Response} from 'express'
import pool from '../database';
class DietaController
{
    public async list(req:Request,res:Response)
    {
       //res.json({text:"Listando juegos"});
       const dieta =await pool.promise().query('SELECT * FROM dietas');
       if(dieta[0].toString().length > 0)
       {
        res.json(dieta[0]);
       }
       else
       {
           res.status(404).json({text: "No hay dietas en la base de datos"});
       }
       
    }
    public async getOne(req:Request,res:Response)
    {
        const {id} = req.params;
        const dieta =await pool.promise().query('SELECT * FROM dietas WHERE idDietas = ?',[id]);
        if(dieta[0].toString().length > 0)
       {
        res.json(dieta[0]);
       }
       else
       {
           res.status(404).json({text: "No existe ese id en la base de datos"});
       }
        //res.json({text:"Este es el juego "+req.params.id});
        //pool.query('describe rutinas');
    }
    public create (req:Request,res:Response)
    {
        console.log(req.body);
        pool.query("INSERT INTO dietas set ?",req.body);
        res.json({text: 'Dieta creada'});
    }
    public async delete (req:Request,res:Response)
    {
        const {id} = req.params;
        const result = await pool.promise().query("delete from dietas where idDietas = ?",[id]);
        var confirm = JSON.parse(JSON.stringify(result[0]))
        if(confirm.affectedRows == 0)
        {
            res.json({text: 'No existe ese id para eliminar'});
        }
        else
        {
            console.log(confirm.affectedRows);
            res.json({text: 'dieta eliminada'});
        }
    }
    public async update (req:Request,res:Response)
    {
        const {id,nombre} = req.params;
        const result = await pool.promise().query("UPDATE dietas set tituloDietas = ? WHERE idDietas = ?",[nombre,id]);
        console.log(result);
        var confirm = JSON.parse(JSON.stringify(result[0]))
        if(confirm.affectedRows == 0)
        {
            res.json({text: 'No existe ese id para eliminar'});
        }
        else
        {
            console.log(confirm.affectedRows);
            res.json({text: 'dieta actualizada'});
        }
    }
}
export const dietaController = new DietaController();