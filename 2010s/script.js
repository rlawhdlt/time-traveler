let videoIDs = [
	"YmQ7MgPDLNU",
	"3rmGM5iGtHo",
	"Nkz4te3liX0",
	"A38ARSI-wFQ",
	"9jeJbdVl2jI",
	"cPJUBQd-PNM",
	"POmH7dDMDEc",
	"4UdEFmxRmNE",
	"0-ZBlQ9goyk",    
  	"6_egFmZB8xQ",    
  	"QqXs0L1B32k",    
  	"iOztnsBPrAA" 
  ];
  
  function buildLink(videoId) {
	return "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=1&controls=0&loop=1&playlist=" + videoId;
  }
  
  function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function makeVideoFrame(videoId) {
	let frame = document.createElement("div");
	frame.className = "video-frame";
  
	let iframe = document.createElement("iframe");
	iframe.src = buildLink(videoId);
	iframe.allow = "autoplay; fullscreen";
	iframe.setAttribute("allowfullscreen", "");
  
	frame.appendChild(iframe);
  
	frame.addEventListener("mouseenter", function () {
	  frame.parentElement.classList.add("paused");
	});
  
	frame.addEventListener("mouseleave", function () {
	  frame.parentElement.classList.remove("paused");
	});
  
	return frame;
  }
  
  function makeManyFrames(amount) {
	let group = document.createDocumentFragment();
  
	for (let i = 0; i < amount; i++) {
	  let index = getRandomNumber(0, videoIDs.length - 1);
	  let id = videoIDs[index];
	  let one = makeVideoFrame(id);
	  group.appendChild(one);
	}
  
	return group;
  }
  
  function startScrollLoop(track) {
	let scrollX = 0;
	let speed = 0.5;
  
	function move() {
	  if (!track.classList.contains("paused")) {
		scrollX = scrollX + speed;
  
		let limit = track.scrollWidth / 3;
		if (scrollX >= limit) {
		  scrollX = 0;
		}
  
		track.style.transform = "translateX(-" + scrollX + "px)";
	  }
  
	  requestAnimationFrame(move);
	}
  
	requestAnimationFrame(move);
  }
  
  function start() {
	let track = document.getElementById("scroll-track");
  
	let i = 0;
	while (i < 3) {
	  let group = makeManyFrames(10);
	  track.appendChild(group);
	  i = i + 1;
	}
  
	startScrollLoop(track);
  }

  document.getElementById("favgame-form").addEventListener("submit", function (e) {
	e.preventDefault();
	const game = document.getElementById("favgame").value;
	if (game.trim() !== "") {
	  alert("Nice!:)");
	} else {
	  alert("Please enter your favorite game.");
	}
  });
  
  window.addEventListener("DOMContentLoaded", start);
  