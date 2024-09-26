//DATA
const playlists = [
  {
    id: 1,
    title: "Hip-Hop Hits",
    tracks: [
      {
        artist: "Eminem",
        title: "Rap God",
        isHot: true,
        imageSource: '/lesson-01/img/cardImage/trackList/track1.jpeg',
        audioSource: '/lesson-01/audio/Eminem - Rap God.mp3',
      },
      {
        artist: "50 cent",
        title: "In da Club",
        isHot: false,
        imageSource: '/lesson-01/img/cardImage/trackList/track2.jpeg',
        audioSource: '/lesson-01/audio/50cent - In da club.mp3',
      },
    ],
  },
  {
    id: 2,
    title: "Rap Hits",
    tracks: [
      {
        artist: "Public Emeny",
        title: "Flight the power",
        isHot: true,
        imageSource: '/lesson-01/img/cardImage/trackList/track3.jpeg',
        audioSource: '/lesson-01/audio/Public Enemy - Fight The Power.mp3',
      },
    ],
  },
];

//RENDER
const root = document.getElementById("root");

for (let i = 0; i < playlists.length; i++) {
  const playlist = playlists[i];

  const playlistElement = document.createElement("div");
  const playlistTitleElement = document.createElement("h2");
  playlistTitleElement.append(playlist.title);

  playlistElement.append(playlistTitleElement);

  const tracksELement = TracksComponent(playlist.tracks);

  playlistElement.append(tracksELement);

  root.append(playlistElement);
}

function PlaylistComponent() {
    
}

function TracksComponent(tracks) {
    const elements = document.createElement("ul");

    for (let j = 0; j < tracks.length; j++) {
        const track = tracks[j];
        const trackElenemt = TrackComponent(track)
        elements.append(trackElenemt);
    }

    return elements;
}

function TrackComponent(inputTrack) {
    const elenemt = document.createElement('li');

    const trackImageElement = TrackImageComponent(inputTrack.imageSource);
    const trackAudioElement = TrackAudioComponent(inputTrack.audioSource);
    const trackTitleElement = TrackTitleComponent(inputTrack);

    elenemt.append(trackImageElement, trackAudioElement, trackTitleElement);
    return elenemt;
}

function TrackImageComponent(imageSource) {
    const element = document.createElement('img');
    element.src = imageSource;
    return element
}

function TrackAudioComponent(audioSource) {
    const element = document.createElement('audio');
    element.src = audioSource;
    element.controls = 'controls';
    return element
}

function TrackTitleComponent(inputTrack) {
    return `${inputTrack.isHot ? "🔥" : ''} ${inputTrack.artist} - ${inputTrack.title}`
}