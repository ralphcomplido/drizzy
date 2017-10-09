
var songs = { 
	

	childsPlay: {
		title: "Child's Play",
		id: "3NxAG2ni1lLa8RKL6a0INc",
		weather: "cold"
		
	},

	oneDance: {
		title: "One Dance",
		id: "1zi7xx7UVEFkmKfv06H8x0",
		weather: "hot" 
	},
	western: { 
		title: "Western Road Flows",
		id: "4PA16FAl8LPmFmOhARawdV",
		weather: "cold"
	},
	cameras: { 
		title: "Cameras/Good Ones Go",
		id: "03TsSYvCy8hxdThRdiCP74",
		weather:"cold"
	},
	preach: { 
		title: "Preach",
		id: "3h1YSC7jNGnQkfaf7qoEII",
		weather:"warm"
// https://open.spotify.com/track/7sBwAWyXfiIgrYQ8BaJESH keep family close
//https://open.spotify.com/track/1C7KSXR2GVxknex6I4ANco 9
//https://open.spotify.com/track/03L2AoiRbWhvt7BDMx1jUB u with me?
//https://open.spotify.com/track/3cjF2OFRmip8spwZYQRKxP feel no ways
//https://open.spotify.com/track/5NFYuqu8V6QXc6mzcLImd6 hype
// https://open.spotify.com/track/4PA16FAl8LPmFmOhARawdV weston road flows
//https://open.spotify.com/track/4cRBqWBjuccCowYVHFlXK6 redemption
//https://open.spotify.com/track/3aJkV6DUTSCqOwVwaBDG9B with you
//https://open.spotify.com/track/2qLcJOLrh6Djda4uLbldSA faithful
//https://open.spotify.com/track/433P7tDcIAi6NLnf4Sh6tI still here
//https://open.spotify.com/track/3O8NlPh2LByMU9lSRSHedm controlla
//https://open.spotify.com/track/5e574bhjycX1eH2l4Auage grammys
//https://open.spotify.com/track/5mPSyjLatqB00IkPqRlbTE pop style
//https://open.spotify.com/track/3BtuIIrQlkujKPuWF2B85z too good
//https://open.spotify.com/track/3ppVO2tyWRRznNmONvt7Se summers over interlude
//https://open.spotify.com/track/4BhGTc3Cgay2U1QcTS7vQe fire & desire
//https://open.spotify.com/track/7MjSipTto9QljYzZnloXOn views
// https://open.spotify.com/track/0wwPcA6wtMf6HUMpIRdeP7 hotline


	}
}

function chooseSong() {
	$(".spotify-box").empty();
	if (songs.childsPlay.weather === weather) {
console.log(songs.childsPlay.id);
var songSrc = "https://open.spotify.com/embed?uri=spotify:track:" + songs.childsPlay.id;
 var iframe = $("<iframe>").attr("src", songSrc).attr("width", "380").attr("height", "380")
 				.attr("frameborder", "0").attr("allowtransparency", "true").attr("id", "musicbox");
 $(".spotify-box").append(iframe);
       $('#musicbox > div.track-view div.main > button#play-button').trigger('click'); // alternatively $('selector').click();
 
 
} else if (songs.oneDance.weather === weather) {
	console.log(songs.oneDance.id);
var songSrc = "https://open.spotify.com/embed?uri=spotify:track:" + songs.oneDance.id;
 var iframe = $("<iframe>").attr("src", songSrc).attr("width", "380").attr("height", "380")
 				.attr("frameborder", "0").attr("allowtransparency", "true").attr("id", "musicbox");
 $(".spotify-box").append(iframe);
 $("#play-button").trigger("click");

 } else {
 	console.log("error on song")
 }
 
}

