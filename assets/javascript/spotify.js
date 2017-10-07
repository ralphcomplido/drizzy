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


	}
}

console.log(songs.childsPlay.id);
var songSrc = "https://open.spotify.com/embed?uri=spotify:track:" + songs.preach.id;
 var iframe = $("<iframe>").attr("src", songSrc).attr("width", "460").attr("height", "200")
 				.attr("frameborder", "0").attr("allowtransparency", "true");
 $(".spotify-box").append(iframe);