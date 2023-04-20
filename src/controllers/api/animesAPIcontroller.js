const fetch = require('node-fetch');

// const animesControllers = {
//     list: async (req,res) => {
//         fetch('https://kitsu.io/api/edge/anime')
//         .then(response => response.json())
//         .then(animes => {
//             return res.render('index', { animes })
//         })
//     }
// }

const animesControllers = {
    list: async (req, res) => {
      const response = await fetch('https://kitsu.io/api/edge/anime');
      const data = await response.json();
      const animes = data.data.map(anime => anime.attributes);
      return res.render('animes', { animes });
    }
  }
  

module.exports = animesControllers;