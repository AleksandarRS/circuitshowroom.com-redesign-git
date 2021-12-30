
$(".video-button").click(function(){
    $('.video-button').addClass('active');
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