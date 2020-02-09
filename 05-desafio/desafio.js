require('./extensao');
const { categoriaFilmes } = require('./dados');

const selecioneFilme = categoriaFilmes
.map(categoria => categoria.videos)
.concatAll()
.map( filme => ({
    id: filme.id,
    title: filme.title,
    boxart: filme.boxarts
        .filter(b => b.width === 150 && b.height === 200)
        .map(b => b.url)
        .pop()//indexar
})); 

console.log(selecioneFilme);