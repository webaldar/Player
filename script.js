// data
const playlists = [
  {
      title: 'Hip-Hop Hits',
      coverImageUrl: './assets/img/hit_img.png',
      info: {
        totalTrackCount: 4,
        totalTrackDurationInSecond: 533,
      },
      tracks: [{
          artistsName: 'Eminem',
          title: 'Rap God',
          fileUrl: './song/song1.mp3',
          singleCoverUrl: "./assets/img/eminem.png",
          isHot: false,
        },
        {
          artistsName: '50 cent',
          title: 'In da Club',
          fileUrl: './song/song2.mp3',
          singleCoverUrl: "./assets/img/50cent.png",
          isHot: true,
        },
        {
          artistsName: 'DMX',
          title: 'X Gon Give It To Ya',
          fileUrl: './song/song3.mp3',
          singleCoverUrl: "./assets/img/dmx.png",
          isHot: false,
        },
        {
          artistsName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
          title: "You Don't Know",
          fileUrl: './song/song4.mp3',
          singleCoverUrl: "./assets/img/eminen_feat_50cent.png",
          isHot: true,
        }
      ]
    },
    {
      title: 'Hip-Hop Hits',
      coverImageUrl: './assets/img/hit_img.png',
      info: {
        totalTrackCount: 4,
        totalTrackDurationInSecond: 533,
      },
      tracks: [{
          artistsName: 'Eminem',
          title: 'Rap God',
          fileUrl: './song/song1.mp3',
          singleCoverUrl: "./assets/img/eminem.png",
          isHot: false,
        },
        {
          artistsName: '50 cent',
          title: 'In da Club',
          fileUrl: './song/song2.mp3',
          singleCoverUrl: "./assets/img/50cent.png",
          isHot: true,
        },
        {
          artistsName: 'DMX',
          title: 'X Gon Give It To Ya',
          fileUrl: './song/song3.mp3',
          singleCoverUrl: "./assets/img/dmx.png",
          isHot: false,
        },
        {
          artistsName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
          title: "You Don't Know",
          fileUrl: './song/song4.mp3',
          singleCoverUrl: "./assets/img/eminen_feat_50cent.png",
          isHot: true,
        }
      ]
    }
  ];    


    // render
    renderPlaylists(playlists);

    function renderPlaylists(inputPlaylists) {
      for (let i = 0; i < inputPlaylists.length; i++) {
        const playlist = inputPlaylists[i];
        renderPlaylist(playlist);
      }
    }

    function renderPlaylist(playlistForRendering) {
      renderPlaylistHeader(playlistForRendering);
      renderPlaylistTracks(playlistForRendering.tracks);
    }

    function renderPlaylistHeader(playlistForRendering) {
      renderPlaylistHeaderTitle(playlistForRendering);
      renderPlaylistHeaderCover(playlistForRendering);
    }

    function renderPlaylistHeaderCover(playlistForRendering) {
      const coverElement = document.createElement('img');
      coverElement.src = playlistForRendering.coverImageUrl;
      document.body.append(coverElement);
    }

    function renderPlaylistHeaderTitle(playlistForRendering) {
      let playlistTitleElement = document.createElement('h2');
      playlistTitleElement.append(playlistForRendering.title);
      document.body.append(playlistTitleElement);
    }

    function renderPlaylistTracks(tracks) {
      for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];
        renderPlaylistTrack(track);
      }
    }

    function renderPlaylistTrack(trackForRendering) {
      const trackElement = document.createElement('div');

      const coverElement = document.createElement('img');
      coverElement.src = trackForRendering.singleCoverUrl;
      trackElement.append(coverElement);

      const trackTitleElement = document.createElement('div');

      if (trackForRendering.isHot) {
        trackTitleElement.append('🔥');
      }

      trackTitleElement.append(trackForRendering.artistsName + '-' + trackForRendering.title);
      trackElement.append(trackTitleElement);

      let playerElement = document.createElement('audio');
      playerElement.src = trackForRendering.fileUrl;
      playerElement.controls = true;
      trackElement.append(playerElement);
      
      document.body.append(trackElement);
    }