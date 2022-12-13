// Youtube API

fetch ("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&part=player&id=PLYK5kVPCxrpvzDmSTSVZXgJsM1zgMNyPR&maxResults=4&key=AIzaSyDlL6S3FmtRtCzglcAKi8FA0EyO_bVMvSs")

var plist = "PLYK5kVPCxrpvzDmSTSVZXgJsM1zgMNyPR";

// Load the IFrame Player API code 
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    playerVars: {
      enablejsapi: 1,
      loop: 1,
      controls: 1,
      showinfo: 1,
      modestbranding: 1,
      listType: "playlist",
      list: plist
    },

    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}



function onPlayerReady(event) {
  shuff_list(); 
  player.stopVideo(); //autoplay off doesnt work with some browsers this allows you to embed multpile players on same page not starting all at once
}

function onPlayerStateChange(event) {
  const player = event.target;
}

function shuff_list() {
  player.setShuffle(true);
  player.playVideoAt(0);
}