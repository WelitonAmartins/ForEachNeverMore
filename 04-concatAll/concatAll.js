const { categoriaFilmes } = require('./dados');


// tenho um array bidimensional
// quero pegar o id de todos os videos em um array unidimensional e nao em um array bidimensional


/* const filmesId = []

categoriaFilmes.forEach(catagoria => 
    catagoria.videos.forEach(video =>
        filmesId.push(video.id)
        ));
        
console.log(filmesIds); */

Array.prototype.concatAll = function() {
    let resultado = []; 

    this.forEach(items => 
        resultado = resultado.concat(items)
        );
    return resultado;
}

const filmesIds = categoriaFilmes.map(categoria =>
    categoria.videos.map(v => v.id))
    .concatAll();

console.log(filmesIds);