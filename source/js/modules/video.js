export function loadVideo(videoID) {
  const thumbnail = document.getElementById('video-thumbnail');
  thumbnail.style.display = 'block';

  const videoPlaceholder = document.getElementById('video-placeholder');
  videoPlaceholder.style.display = 'block';

  const videoFrame = document.createElement('iframe');
  videoFrame.setAttribute('src', `https://www.youtube.com/embed/${videoID}?autoplay=1`);
  videoFrame.setAttribute('frameborder', '0');
  videoFrame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  videoFrame.setAttribute('allowfullscreen', true);
  videoFrame.style.position = 'absolute';
  videoFrame.style.top = '0';
  videoFrame.style.left = '0';
  videoFrame.style.zIndex = '2';

  videoPlaceholder.appendChild(videoFrame);
}
