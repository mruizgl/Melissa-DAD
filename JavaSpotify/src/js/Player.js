import Song, {play_song} from './Song';

export default class Player {
    constructor(map) {
        Object.entries(map);
        let aux = 1;
        for (var[key, value] of Object.entries(map)) {
            let song = new Song(key, value);
            aux++;
            play_song(song);
        }


    }
    
    
}