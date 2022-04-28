const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
  router.post('/event', (req, res, next) => {
    db.query(
      'INSERT INTO usuario (usr, correo , passwd, nombre, ape_pat, ape_mat, edad, altura, peso, IMC, genero) VALUES (?,?,?,?,?,?,?,?,?);',
      [owner, req.body.usr, req.body.correo,req.body.passwd, req.body.nombre,req.body.ape_pat, req.body.ape_mat,req.body.edad, req.body.altura,req.body.peso, req.body.IMC,req.body.genero],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });
  
  router.get('/recetas', (req, res, next) => {
    dbConn.query('select descripciondieta, imgdieta from dietas;', function (error, results, fields) {
      if (error) throw error;
      console.log(results[0]);
      return res.send({ error: false, data: results[0], message: 'users list.' });
  });
  });

  return router;
}

module.exports = createRouter;