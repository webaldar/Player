import { renderPlaylist } from "./playlist/renderPlaylist.component.js";
// render
export {renderPlaylists};

function renderPlaylists(inputPlaylists) {
     for (let i = 0; i < inputPlaylists.length; i++) {
       const playlist = inputPlaylists[i];
       renderPlaylist(playlist);
     }
   }