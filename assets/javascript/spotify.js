
function chooseSong() {
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      
      var player = {
  playVideo: function(container, videoId) {
    if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
      window.onYouTubeIframeAPIReady = function() {
        player.loadPlayer(container, videoId);
      };

      $.getScript('//www.youtube.com/iframe_api');
    } else {
      player.loadPlayer(container, videoId);
    }
  },

  loadPlayer: function(container, videoId) {
    new YT.Player(container, {
      videoId: videoId,
      width: 380,
      height: 380,
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showInfo: 0
      }
    });
  }
};

player.playVideo("youtube-box", "frDKoENGLtw");
}