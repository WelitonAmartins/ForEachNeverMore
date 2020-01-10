/* const names = ["Alice", "Bruno", "Camila", "Daniel", "Elder"];
 */
/* for (let i = 0; i< names.length; i++) {
      console.log(names[i]);
    } */
/* 
names.forEach(name => console.log(name)); */


const { videos } = require('./mapDados');

/*
 existe o json de objeto de videos e transportar para um outro array mas só o id e o titulo 
*/

/* let videosComIdEtitulo = [];

videos.forEach(video => videosComIdEtitulo.push({ id: video.id, title: video.title })
); */

const videosComIdEtitulo = videos.map(video => ({ id: video.id, title: video.title }));
console.log(videosComIdEtitulo);