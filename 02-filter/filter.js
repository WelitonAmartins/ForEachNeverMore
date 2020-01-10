const { movies } = require('./filterDados');

/**
 *  dado um array de filme, me traga só os filme cuja o rating seja igual 5
 */

/* let melhoresVideos = [];

movies.forEach(video => {
    if(video.rating === 5) {
        melhoresVideos.push(video);
    }
});

console.log(melhoresVideos); */

const melhoresVideos = movies.filter(video => video.rating === 5);

console.log(melhoresVideos);