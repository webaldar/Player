// data 
const playlist = {
  title: "Hip-Hop Hits",
  coverImageUrl: "./assets/img/hit_img.png",
  info: {
    totalTracksCount: 4,
    totalTracksDurationInSeconds: 733,
  },
  tracks: [
    {
      coverImageUrl: "./assets/img/eminem.png",
      artistName: "Eminem",
      title: "Rap God",
      fileUrl: "./song/song1.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "./assets/img/50cent.png",
      artistName: "50cent",
      title: "In da Club",
      fileUrl: "./song/song2.mp3",
      isHot: true,
    },
    {
      coverImageUrl: "./assets/img/dmx.png",
      artistName: "DMX",
      title: "X Gon Give It To Ya",
      fileUrl: "./song/song3.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "./assets/img/eminen_feat_50cent.png",
      artistName: "Eminem feat 50 Cent, Cashis, Lloyd Banks",      
      title: "You Don't Know",
      fileUrl: "./song/song4.mp3",
      isHot: true,
    },
  ],
};

// render
renderPlaylist(playlist);
renderPlaylist(playlist);

function renderPlaylist(playlistForRendering) {
  let container = document.querySelector('.container');
  let playlistSection = document.createElement('section');  
  playlistSection.classList.add('playlist_section');  
  container.append(playlistSection);

  renderPlaylistTitle(playlistForRendering);
  renderPlaylistTracks(playlistForRendering.tracks);
}

function renderPlaylistTitle(playlistForRendering){

  let playlistSection = document.querySelector('.playlist_section');

  let playlistCover = document.createElement('img');
  playlistCover.src = playlistForRendering.coverImageUrl;
  playlistSection.append(playlistCover);

  let playlistHead = document.createElement('span');
  playlistHead.textContent = 'Playlist';
  playlistSection.append(playlistHead);

  let playlistTitle = document.createElement('h2');
  playlistTitle.textContent = playlistForRendering.title;
  playlistSection.append(playlistTitle);
}

function renderPlaylistTracks(tracksForRendering){
  let playlistSection = document.querySelector('.playlist_section');
  for(let i = 0; i < tracksForRendering.length; i++){

    let trackCoverImage = document.createElement('img');
    trackCoverImage.src = tracksForRendering[i].coverImageUrl;
    playlistSection.append(trackCoverImage);

    let trackTitle = document.createElement('span');
    trackTitle.textContent = tracksForRendering[i].artistName + ' - ' + tracksForRendering[i].title;
    playlistSection.append(trackTitle);

    let trackPlayer = document.createElement('audio');
    trackPlayer.controls = true;
    trackPlayer.src = tracksForRendering[i].fileUrl;
    playlistSection.append(trackPlayer);
  }

}





// data
// const playlist1 = {
//   title: 'Hip-Hop Hits',
//   coverImageUrl: './assets/img/hit_img.png',
//   info: {
//     totalTrackCount: 4,
//     totalTrackDurationInSecond: 533,
//   },
//   tracks: [
//     {
//       artistsName:'Eminem',
//       title: 'Rap God',
//       fileUrl: './song/song1.mp3',
//       singleCoverUrl : "./assets/img/eminem.png",
//       isHot: false,
//     },
//     {
//       artistsName:'50 cent',
//       title: 'In da Club',
//       fileUrl: './song/song2.mp3',
//       singleCoverUrl : "./assets/img/50cent.png",
//       isHot: true,
//     },
//     {
//       artistsName:'DMX',
//       title: 'X Gon Give It To Ya',
//       fileUrl: './song/song3.mp3',
//       singleCoverUrl : "./assets/img/dmx.png",
//       isHot: false,
//     },
//     {
//       artistsName:'Eminem feat 50 Cent, Cashis, Lloyd Banks',
//       title: "You Don't Know",
//       fileUrl: './song/song4.mp3',
//       singleCoverUrl : "./assets/img/eminen_feat_50cent.png",
//       isHot: true,
//     }
//   ]
// }


// render
