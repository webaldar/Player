
// render
export {renderPlaylists};

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