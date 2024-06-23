console.log("Lets write javascript")

async function getsongs() {
    let a = await fetch("http://127.0.0.1:5500/songs/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let tds = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < tds.length; index++) {
        const element = tds[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs;
}
async function main() {
    //Getting the list of all songs
    let songs = await getsongs()
    console.log(songs)

    let songUl = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + 
        `<li>
            <img class="musicsign invert" src="project_3_music.svg" alt="" srcset="">
            <div class="info invert">
                <div class="songname invert">${song.replaceAll("%20", " ")}</div>
                <div class="songartist invert">Arijit Singh</div>
            </div>
            <div class="playnow">
                <span>Play now</span>
                <img class="playbutton invert" src="project_3_play.svg" alt="" srcset="">
            </div>
        </li>`;
    }

    //Playing the song
    var audio = new Audio(songs[0]);
    audio.play();
    audio.addEventListener("loadeddata", () => {
        //let duration = audio.duration;
        //console.log(duration)
        console.log(audio.duration, audio.currentSrc, audio.currentTime)
        // The duration variable now holds the duration (in seconds) of the audio clip
    });
}
main()
