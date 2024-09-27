//DATA
const playlists = [
  {
    id: 1,
    title: "Hip-Hop Hits",
    imageSource: './img/cardImage/image1.jpeg',
    tracks: [
      {
        artist: "Eminem",
        title: "Rap God",
        isHot: true,
        imageSource: './img/cardImage/trackList/track1.jpeg',
        audioSource: './audio/Eminem - Rap God.mp3',
      },
      {
        artist: "50 cent",
        title: "In da Club",
        isHot: false,
        imageSource: './img/cardImage/trackList/track2.jpeg',
        audioSource: './audio/50cent - In da club.mp3',
      },
    ],
  },
  {
    id: 2,
    title: "Rap Hits",
    imageSource: './img/cardImage/image2.jpeg',
    tracks: [
      {
        artist: "Public Emeny",
        title: "Flight the power",
        isHot: true,
        imageSource: './img/cardImage/trackList/track3.jpeg',
        audioSource: './audio/Public Enemy - Fight The Power.mp3',
      },
    ],
  },
];

//RENDER
const root = document.getElementById("root");

for (let i = 0; i < playlists.length; i++) {
  const playlist = playlists[i];

  const playlistElement = PlaylistComponent(playlist);

  root.append(playlistElement);
}

function PlaylistComponent(playlist) {

  const element = document.createElement("div");
  const titleElement = document.createElement("h2");
  const imgElement = document.createElement('img');

  titleElement.append(playlist.title);

  imgElement.src = playlist.imageSource;
  imgElement.alt = 'playlistImage';

  const tracksELement = TracksComponent(playlist.tracks);

  element.append(titleElement, imgElement, tracksELement);

  return element;
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
    element.alt = 'image';
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