const { movies } = require('./dados');

const x = movies.filter(video => video.rating === 5)
                .map(elemento => (
                    {id: elemento.id, title: elemento.title, top: elemento.rating}
                    ));

console.log(x);