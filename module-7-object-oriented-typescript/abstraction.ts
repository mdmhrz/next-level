//OOP: abstraction

//idea
//implementation pore korbo

// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }


// //implementation
// class MusicPlayer implements MediaPlayer {
//     play(): void {
//         console.log(`playing music`);
//     }
//     pause(): void {
//         console.log(`pause music`);
//     }
//     stop(): void {
//         console.log(`stop music`);
//     }
// }


// const myPlayer = new MusicPlayer();
// myPlayer.play()


// Idea
abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class RazuPlayer extends MediaPlayer {
    play(): void {
        console.log(`playing music`);
    }
    pause(): void {
        console.log(`pause music`);
    }
    stop(): void {
        console.log(`stop music`);
    }
}


const amarMusic = new RazuPlayer()
amarMusic.stop()
