var songs = [{

        title: "I Get Lonely Too",
        id: "ifOM0Bx3keM",
        weather: "cold"

    },
    {

        title: "Trust Issues",
        id: "wqr2L6HXm8w",
        weather: "cold"


    },
    {

        title: "The Motion",
        id: "sddeiggSqhw",
        weather: "cozy"


    },
    {

        title: "Sweeterman",
        id: "L8mu13y1itU",
        weather: "cozy"


    },
    {

        title: "Girls Love Beyonce",
        id: "aDDk5Th30J4",
        weather: "cold"
    },

    {

        title: "Sooner Than Later",
        id: "Dbs4XK-dk2U",
        weather: "cozy"
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

];


function chooseSong() {

    var number = Math.floor(Math.random() * 9);
    var chosenSong = songs[number];
    console.log(chosenSong);

    if (chosenSong.weather === weather) {

        

        //create while loop for videos until it shows



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

                    $.getScript('https://www.youtube.com/iframe_api');
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
        }

        player.playVideo("youtube-box", chosenSong.id);

    } else {
    	chooseSong();
    }
}