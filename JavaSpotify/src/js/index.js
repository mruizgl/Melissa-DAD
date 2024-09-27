import Player from './Player';
import songs from '../assets/songs/*.mp3';



//Aquí generamos el mapa de los elementos del DOM que contienen los audios 
Object.keys(songs);

const map = {};

let aux = 1;
for (var key of Object.keys(songs)) {
    map[`.item-${aux}`] = songs[key];
aux++;

}

let player = new Player(map);