function currentTrack(elements){
    let[trackName, artist, duration] = [elements[0], elements[1], elements[2]];

    console.log(`Now Playing: ${artist} - ${trackName} [${duration}]`);
}

currentTrack(['Number One', 'Nelly', '4:09']);