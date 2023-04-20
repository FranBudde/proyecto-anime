// const path = require ('path');
// const fs = require ('fs');

// const animesFilePath = path.join(__dirname, '../data/animes-data.json');

// function getAnimes(){
// 	return JSON.parse(fs.readFileSync(animesFilePath, 'utf-8'));
// } //esta funcion permite actualizar la lista de products para cada accion del CRUD.

// const mainController = {
//     index : (req, res)=>{
//         const animes = getAnimes();
//         res.render('index',{animes})
//     }
// }

// module.exports = mainController;