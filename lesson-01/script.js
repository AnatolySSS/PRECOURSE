//DATA
const playlists = [
    {
        id: 1,
        title: 'Hip-Hop Hits',
    },
    {
        id: 2,
        title: 'Rap Hits',
    },
]

//RENDER
const root = document.getElementById('root');

for (let i = 0; i < playlists.length; i++) {
    const playlist = playlists[i];
    
    const playlistElement = document.createElement('div');
    const playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(playlist.title);
    playlistElement.append(playlistTitleElement);

    root.append(playlistElement);
}

