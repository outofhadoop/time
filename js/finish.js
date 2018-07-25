var XDD = window.parent.$XDDTopic2018;
var video = XDD.Video;
var audio = XDD.Audio;
var home = XDD.Home;

$( '.finishRight' ).click( function () {
    $( '#p02' ).css( 'display', 'none' );
    video.play( 0, function(){}, false, false );
    home.goHome();
} );