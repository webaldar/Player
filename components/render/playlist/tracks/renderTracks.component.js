import { renderPlaylistTrack } from "./track/renderTrack.component.js";

export function renderPlaylistTracks(tracks) {
    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];
      renderPlaylistTrack(track);
    }
  }