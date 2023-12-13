// data
const playlist1 = {
  title: 'Hip-Hop Hits',
  coverImageUrl: './assets/img/hit_img.png',
  info: {
    totalTrackCount: 4,
    totalTrackDurationInSecond: 533,
  },
  tracks: [
    {
      artistsName:'Eminem',
      title: 'Rap God',
      fileUrl: './song/song1.mp3',
      singleCoverUrl : "./assets/img/eminem.png",
      isHot: false,
    },
    {
      artistsName:'50 cent',
      title: 'In da Club',
      fileUrl: './song/song2.mp3',
      singleCoverUrl : "./assets/img/50cent.png",
      isHot: true,
    },
    {
      artistsName:'DMX',
      title: 'X Gon Give It To Ya',
      fileUrl: './song/song3.mp3',
      singleCoverUrl : "./assets/img/dmx.png",
      isHot: false,
    },
    {
      artistsName:'Eminem feat 50 Cent, Cashis, Lloyd Banks',
      title: "You Don't Know",
      fileUrl: './song/song4.mp3',
      singleCoverUrl : "./assets/img/eminen_feat_50cent.png",
      isHot: true,
    }
  ]
}


// render

function renderPlaylist(playlistForRendering){
  renderPlaylistHeader(playlistForRendering);
  
  renderTrack(playlistForRendering.tracks[0]);
  renderTrack(playlistForRendering.tracks[1]);

}

function renderPlaylistHeader(playlistForRendering) {
  let playlistImageElement = document.createElement('img');
  playlistImageElement.src = playlistForRendering.coverImageUrl;
  document.body.append(playlistImageElement);

  let playlistTitleElement = document.createElement('h2');
  playlistTitleElement.append(playlistForRendering.title);
  document.body.append(playlistTitleElement);

}

function renderTrack(trackForRendering){
  
  let trackElement = document.createElement('div');
  trackElement.append(trackForRendering.artistsName + '-' + trackForRendering.title);

  let playerElement = document.createElement('audio');
  playerElement.src = trackForRendering.fileUrl;
  playerElement.control = true;
  trackElement.append(playerElement);

  let coverElement = document.createElement('img');
  coverElement.src = trackForRendering.singleCoverUrl;
  trackElement.append(coverElement);

  document.body.append(trackElement);
  
}

renderPlaylist(playlist1);

// function renderPlaylist(playlistForRendering) {    
//     renderPlaylistHeader(playlistForRendering);
//     renderTrack(playlistForRendering.tracks[0]);
//     renderTrack(playlistForRendering.tracks[1]);
//  }


// function renderPlaylistHeader(inputPlaylistForRendering){
//   // здесь логика отрисовки шапки "входного" плейлиста
//   const mainContent = document.querySelector('main');
//   const playlistSection = document.createElement('section');
//   const playlistCover = document.createElement('img');
//   const playlistTitle = document.createElement('span');
//   const playlistHeader = document.createElement('h2');
//   const playlistDuration = document.createElement('span');
//   const playlistArtists = document.createElement('p');

//   playlistCover.src = inputPlaylistForRendering.playlistHeader.imgSrc;
//   playlistCover.alt = inputPlaylistForRendering.playlistHeader.imgAlt;
//   playlistTitle.textContent = inputPlaylistForRendering.playlistHeader.playlistTitle;
//   playlistHeader.textContent = inputPlaylistForRendering.playlistHeader.playlistHeader;
//   playlistDuration.textContent = inputPlaylistForRendering.playlistHeader.playlistDuration;
//   playlistArtists.textContent = inputPlaylistForRendering.playlistHeader.playlistArtists;

//   playlistSection.append(playlistCover);
//   playlistSection.append(playlistTitle);
//   playlistSection.append(playlistHeader);
//   playlistSection.append(playlistDuration);
//   playlistSection.append(playlistArtists);
//   mainContent.append(playlistSection);
// }

// function renderTrack(inputTrack){
//   // здесь логика отрисовки "входного" трека
//   const playlistMainElement = document.querySelector('section');
//   const playlistList = document.createElement('ul');
//   const playlistItem = document.createElement('li');
//   const playlistImg = document.createElement('img');
//   const playlistControl = document.createElement('audio');

//   playlistImg.src = inputTrack.playlistCover;
//   playlistControl.controls = true;
//   playlistControl.src = inputTrack.playlistSrc;
//   playlistItem.append(playlistImg);
//   playlistItem.append(playlistControl);
//   playlistList.append(playlistItem);

//   playlistMainElement.append(playlistList);
// };

// renderPlaylist(playlist1);