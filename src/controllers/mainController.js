const path = require ('path');
const fs = require ('fs');

const animesFilePath = path.join(__dirname, '../data/animes-data.json');

function getAnimes(){
	return JSON.parse(fs.readFileSync(animesFilePath, 'utf-8'));
} //esta funcion permite actualizar la lista de products para cada accion del CRUD.

const mainController = {

    index : (req, res)=>{
        const animes = getAnimes();
        res.render('index', { animes } )
    },

    formCreate : (req, res) => {
        try {
            res.render('productCreate');

        } catch (error) {
            
            console.log(error);
        }
    },

    storeAnime : (req, res) => {
       
            const image = req.file ? req.file.filename : 'default-img-jpg';
            const animeData = getAnimes();
            const newAnime = {
                id: animeData[animeData.length - 1].id + 1,
                name: req.body.name,
                description: req.body.description,
                genre: req.body.genre
            };
            animeData.push(newAnime);
            fs.writeFileSync(animesFilePath, JSON.stringify(animeData, null, ' '));
            res.redirect('/');
        
    }

}

module.exports = mainController;