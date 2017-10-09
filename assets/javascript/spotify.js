
var songs = [
	
	{
		title: "Child's Play",
		id: "3NxAG2ni1lLa8RKL6a0INc",
		weather: "cold"
	},
	{
		title: "One Dance",
		id: "1zi7xx7UVEFkmKfv06H8x0",
		weather: "hot" 
	},
	{ 
		title: "Western Road Flows",
		id: "4PA16FAl8LPmFmOhARawdV",
		weather: "cold"
	},
	{ 
		title: "Cameras/Good Ones Go",
		id: "03TsSYvCy8hxdThRdiCP74",
		weather:"hot"
	},
	{ 
		title: "Keep Family Close",
		id: "7sBwAWyXfiIgrYQ8BaJESH",
		weather:"cold"
	},
	{ 
		title: "9",
		id: "1C7KSXR2GVxknex6I4ANco",
		weather:"hot"
	},
	{ 
		title: "U With Me",
		id: "03L2AoiRbWhvt7BDMx1jUB",
		weather:"cold"
	},
	{ 
		title: "Feel No Ways",
		id: "3cjF2OFRmip8spwZYQRKxP",
		weather:"cold"
	},
	{ 
		title: "Hype",
		id: "5NFYuqu8V6QXc6mzcLImd6",
		weather:"hot"
	},
	{ 
		title: "Weston Road Flows",
		id: "4PA16FAl8LPmFmOhARawdV",
		weather:"cold"
	},
	{ 
		title: "Redemption",
		id: "4cRBqWBjuccCowYVHFlXK6",
		weather:"hot"
	},
	{ 
		title: "With You",
		id: "3aJkV6DUTSCqOwVwaBDG9B",
		weather:"cold"
	},
	{ 
		title: "Faithful",
		id: "2qLcJOLrh6Djda4uLbldSA",
		weather:"hot"
	},
	{ 
		title: "Still Here",
		id: "433P7tDcIAi6NLnf4Sh6tI",
		weather:"cold"
	},
	{ 
		title: "Controlla",
		id: "3O8NlPh2LByMU9lSRSHedm",
		weather:"hot"
	},
	{ 
		title: "Grammys",
		id: "3O8NlPh2LByMU9lSRSHedm",
		weather:"cold"
	},
	{ 
		title: "Pop Style",
		id: "5mPSyjLatqB00IkPqRlbTE",
		weather:"hot"
	},
	{ 
		title: "Too Good",
		id: "3BtuIIrQlkujKPuWF2B85z",
		weather:"cold"
	},
	{ 
		title: "Summers Over Interlude",
		id: "3ppVO2tyWRRznNmONvt7Se",
		weather:"hot"
	},
	{ 
		title: "Fire & Desire",
		id: "4BhGTc3Cgay2U1QcTS7vQe",
		weather:"cold"
	},
	{ 
		title: "Views",
		id: "7MjSipTto9QljYzZnloXOn",
		weather:"hot"
	},
	{ 
		title: "Hotline",
		id: "0wwPcA6wtMf6HUMpIRdeP7",
		weather:"cold"
	},
	{ 
		title: "Preach",
		id: "3h1YSC7jNGnQkfaf7qoEII",
		weather:"hot"
	}
];


function chooseSong() {
	var number = Math.floor(Math.random() * 24); 
	var chosenSong = songs[number];
	console.log(chosenSong.title);
	$(".spotify-box").empty();
	if (chosenSong.weather === weather) {
var songSrc = "https://open.spotify.com/embed?uri=spotify:track:" + chosenSong.id;
 var iframe = $("<iframe>").attr("src", songSrc).attr("width", "380").attr("height", "380")
 				.attr("frameborder", "0").attr("allowtransparency", "true").attr("id", "musicbox");
 $(".spotify-box").append(iframe);
 
 
} else if (chosenSong.weather === weather) {
var songSrc = "https://open.spotify.com/embed?uri=spotify:track:" + chosenSong.id;
 var iframe = $("<iframe>").attr("src", songSrc).attr("width", "380").attr("height", "380")
 				.attr("frameborder", "0").attr("allowtransparency", "true").attr("id", "musicbox");
 $(".spotify-box").append(iframe);

 } else {
 	chooseSong();
 }
 
}

