import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(() => {
    player
      .getCurrentTime()
      .then(function (seconds) {
        // seconds = the current playback position
        // console.log(seconds);
        return localStorage.setItem('videoplayer-current-time', seconds);
        //   return seconds;
      })
      .catch(function (error) {
        // an error occurred
        console.error('Set state error: ', error.message);
      });
  }, 1000)
);

const videoPlayerCurrentTime = localStorage.getItem('videoplayer-current-time');
// ====================================Перезавантаження сторінки===================================
player
  .setCurrentTime(videoPlayerCurrentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.error(
          'Set state error: the time was less than 0 or greater than the video’s duration',
          error.message
        );
        break;

      default:
        console.error('Set state error: ', error.message);
        break;
    }
  });
