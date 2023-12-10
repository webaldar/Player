// data
const playlist1 = {
        playlistHeader: {
            imgSrc: "./assets/img/hit_img.png",
            imgAlt: "Обложка чарта",
            playlistTitle: "Playlist",
            playlistHeader: "Hip-Hop Hits",
            playlistDuration: "2 tracks, 5m 22s",
            playlistArtists: "Eminem, 50cent, Lloyd Banks and others",    
        },
        tracks: [
                {playlistCover : "./assets/img/eminem.png",
                playlistSrc: './song/song1.mp3',
                songName: "Rap God",
                Artist: "Eminem",
                songPlayingTime: "3:41"
                },
                {playlistCover : "./assets/img/50cent.png",
                playlistSrc: './song/song2.mp3',
                songName: "In da Club",
                Artist: "50 cent",
                songPlayingTime: "4:31"
                },
                {playlistCover : "./assets/img/dmx.png",
                playlistSrc: './song/song3.mp3',
                songName: "X Gon' Give It To Ya",
                Artist: "DMX",
                songPlayingTime: "4:17"
                },
                {playlistCover : "./assets/img/eminen_feat_50cent.png",
                playlistSrc: './song/song4.mp3',
                songName: "You Don't Know",
                Artist: "Eminem feat 50 Cent, Cashis, Lloyd Banks",
                songPlayingTime: "3:13"
                },
        ],
};


function renderPlaylist(playlistForRendering) {    
    renderPlaylistHeader(playlistForRendering);
    renderTrack(playlistForRendering.tracks[0]);
    renderTrack(playlistForRendering.tracks[1]);
 }


function renderPlaylistHeader(inputPlaylistForRendering){
  // здесь логика отрисовки шапки "входного" плейлиста
  const mainContent = document.querySelector('main');
  const playlistSection = document.createElement('section');
  const playlistCover = document.createElement('img');
  const playlistTitle = document.createElement('span');
  const playlistHeader = document.createElement('h2');
  const playlistDuration = document.createElement('span');
  const playlistArtists = document.createElement('p');

  playlistCover.src = inputPlaylistForRendering.playlistHeader.imgSrc;
  playlistCover.alt = inputPlaylistForRendering.playlistHeader.imgAlt;
  playlistTitle.textContent = inputPlaylistForRendering.playlistHeader.playlistTitle;
  playlistHeader.textContent = inputPlaylistForRendering.playlistHeader.playlistHeader;
  playlistDuration.textContent = inputPlaylistForRendering.playlistHeader.playlistDuration;
  playlistArtists.textContent = inputPlaylistForRendering.playlistHeader.playlistArtists;

  playlistSection.append(playlistCover);
  playlistSection.append(playlistTitle);
  playlistSection.append(playlistHeader);
  playlistSection.append(playlistDuration);
  playlistSection.append(playlistArtists);
  mainContent.append(playlistSection);
}

function renderTrack(inputTrack){
  // здесь логика отрисовки "входного" трека
  const playlistMainElement = document.querySelector('section');
  const playlistList = document.createElement('ul');
  const playlistItem = document.createElement('li');
  const playlistImg = document.createElement('img');
  const playlistControl = document.createElement('audio');

  playlistImg.src = inputTrack.playlistCover;
  playlistControl.controls = true;
  playlistControl.src = inputTrack.playlistSrc;
  playlistItem.append(playlistImg);
  playlistItem.append(playlistControl);
  playlistList.append(playlistItem);

  playlistMainElement.append(playlistList);
};

renderPlaylist(playlist1);