var XDD = window.parent.$XDDTopic2018;
var module0 = XDD.modeArr[0], module1 = XDD.modeArr[1], fmodule = XDD.finishMod;
var video = XDD.Video;
var audio = XDD.Audio;

if( XDD.onLine ) {
    try {
        doLMSSetValue('cmi.core.lesson_location', 'S200001'); //-------------平台接口调用
        doLMSSetValue("cmi.core.lesson_status", "start"); //-------------平台接口调用
    } catch (e) {
        console.log(e);
    }
}

$('#p02').fadeIn( 1000, 'linear' );
setTimeout( function () {
    $('#p02').fadeOut( 1000, 'linear' );
}, 2000 );
setTimeout( function () {
    video.play( 1, function() {
        video.play( 2, function() {
            video.play( 3, function () {
                video.play( 9, function () {
                    // $( '.videoNext' ).css( 'display', 'block' );
                    // $( '.videoNextClick' ).off().click( function () {
                    //     $( '.videoNext' ).css( 'display', 'none' );
                    //     audio.play( 0 );
                    //     startp03();
                    // } );
                    module0.videoNext( 'videoNext', 'videoNextClick', function () {
                        audio.play( 0 );
                        startp03();   
                    } );
                } );
            }, false );
        }, false );
    }, false );
}, 3000 );

function startp03 () {
    $( '#p03' ).css( 'display', 'block' );
    $( 'input' ).keyup( function () {
        var i1 = $( '.input_div1 > input' )[0].value, i2 = $( '.input_div1 > input' )[0].value, i3 = $( '.input_div3 > input' )[0].value;
        if ( i1 !== '' && i2 !== '' && i3 !== '' ) {
            $( '.p03finish' ).css( 'display', 'block' );
        }
    } );
    $( '.p03finish' ).click( function () {
        audio.pause();
        $( '#p03' ).css( 'display', 'none' );
        startp04();
    } );
}

function startp04 () {
    $( '#p04' ).css( 'display', 'block' );
    audio.play( 1, function () {
        $( '#p04' ).css( 'display', 'none' );
        startp05();
    } );
}

function startp05 () {
    $( '#p05' ).css( 'display', 'block' );
    $( '.p05finish' ).click( function () {
        $( '#p05' ).css( 'display', 'none' );
        if ( XDD.getOVER() ) {
            fmodule.start();
        } else {
            module1.start();
        }
    } );
    module0.setFinish();
}

