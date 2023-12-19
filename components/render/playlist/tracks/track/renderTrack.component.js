export function renderPlaylistTrack(trackForRendering) {
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