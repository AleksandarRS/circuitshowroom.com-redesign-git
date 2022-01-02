
var videoButton = $('.video-button');
var mobileVideoButton = $('.mobile-video-button');
videoButton.click(function(){
  videoButton.addClass('active');
    $(this).removeClass('active');
});
mobileVideoButton.click(function(){
  mobileVideoButton.addClass('active');
    $(this).removeClass('active');
});



var iframe = document.getElementById('projectplayer');
var player = new Vimeo.Player(iframe);

var playButton = document.getElementById("play-button");
playButton.addEventListener("click", function() {
  player.play();
});

var pauseButton = document.getElementById("pause-button");
pauseButton.addEventListener("click", function() {
  player.pause();
});


var mobileIframe = document.getElementById('mobile-projectplayer');
var mobilePlayer = new Vimeo.Player(mobileIframe);

var mobilePlayButton = document.getElementById("mobile-play-button");
mobilePlayButton.addEventListener("click", function() {
  mobilePlayer.play();
});

var mobilePauseButton = document.getElementById("mobile-pause-button");
mobilePauseButton.addEventListener("click", function() {
  mobilePlayer.pause();
});