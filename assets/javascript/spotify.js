var songs = {

    cold: [
        {
         title: "Sweeterman",
         id: "L8mu13y1itU",
         weather: "cold"
        },
        {
         title: "Sooner Than Later",
         id: "Dbs4XK-dk2U",
         weather: "cold"
        },
        {
         title: "The Motion",
         id: "sddeiggSqhw",
         weather: "cold"
        },
        {
         title: "Trust Issues",
         id: "wqr2L6HXm8w",
         weather: "cold"
        }
     ],
    warm: [
        {
         title: "I Get Lonely Too",
         id: "ifOM0Bx3keM",
         weather: "warm"
        },
        {
         title: "Girls Love Beyonce",
         id: "aDDk5Th30J4",
         weather: "warm"
        },
        {
         title: "Sneakin",
         id: "WNW1xRqbt94",
         weather: "warm"
        },
        {
         title: "4PM In Calabasas",
         id: "ltGltaUs_S4",
         weather: "warm"
        }
     ]
      };

 var newPlayer;

 function chooseSong() {
    var tempSongs = songs[weather];
    var number = Math.floor(Math.random() * (tempSongs.length -1));
    var chosenSong = tempSongs[number];
    console.log(chosenSong.title);

        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 3. function to create an <iframe> and YouTube player
        //    after the API code downloads

        var player = {
            playVideo: function(container, videoId) {
              
              
                if (typeof newPlayer === 'undefined' ) {
                    console.log(player)
                    

                    window.onYouTubeIframeAPIReady = function() {
                        player.loadPlayer(container, videoId);
                    };

                    $.getScript('https://www.youtube.com/iframe_api');
                } else  {
                    console.log("calledaain")
                    player.playNext(container, videoId);

                }


            },


            //create new mthod to play


            playNext: function(container,videoId) {

              newPlayer.loadVideoById(videoId, 5, "large");
              newPlayer.playVideo();
            },

            loadPlayer: function(container, videoId) {


                newPlayer =  new YT.Player(container, {
                    videoId: videoId,
                    width: 370,
                    height: 300,
                    playerVars: {
                        autoplay: 1,
                        controls: 0,
                        modestbranding: 1,
                        rel: 0,
                        showInfo: 0
                    }
                });
            }
        }
      player.playVideo("youtube-box", chosenSong.id);
};
