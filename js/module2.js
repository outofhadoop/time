var XDD = window.parent.$XDDTopic2018;
var module1 = XDD.modeArr[1], module0 = XDD.modeArr[0], fmodule = XDD.finishMod;
var video = XDD.Video;
var audio = XDD.Audio;

if ( XDD.onLine ) {
    try {
        doLMSSetValue('cmi.core.lesson_location', 'S200002'); //-------------平台接口调用
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
    video.play( 4, function() {
        video.play( 5, function() {
            video.play( 6, function () {
                video.play( 7, function () {
                    video.play( 8, function () {
                        module1.videoNext( 'videoNext', 'videoNextClick', function () {
                            audio.play( 2 );
                            startp03();
                        } );
                    } );
                } );
            } );
        } );
    } );
}, 3000 );

function startp03 () {
    $( '#p03' ).css( 'display', 'block' );
    $( '.p03start' ).click( function () {
        audio.pause();
        startp04();
        $( '#p03' ).css( 'display', 'none' );
    } );
}
function startp04 () {
    $( '#p04' ).css( 'display', 'block' );
    $( '.p04sele' ).click( function () {
        $( '.p04currentSele, .p04submit' ).css( 'display', 'block' );
    } );
    var answer = 0;
    $( '.p04sele1' ).click( function () {
        $( '.p04currentSele' ).css( 'top', $( '.p04sele1' ).position().top );
    } );
    $( '.p04sele2' ).click( function () {
        answer = 0;
        $( '.p04currentSele' ).css( 'top', $( '.p04sele2' ).position().top );
    } );
    $( '.p04sele3' ).click( function () {
        answer = 3;
        $( '.p04currentSele' ).css( 'top', $( '.p04sele3' ).position().top );
    } );
    $( '.p04sele4' ).click( function () {
        answer = 0;
        $( '.p04currentSele' ).css( 'top', $( '.p04sele4' ).position().top );
    } );
    $( '.p04submit' ).off().click( function () {
        $( '.p04submit, .p04currentSele' ).css( 'display', 'none' );
        if ( answer == 3 ) {
            $( '.p04res' ).attr( 'src', 'sco/img/2/qyes.png' ).css( 'display', 'block' );
            audio.play ( 3, function () {
                $( '#p03' ).css( {
                    'background': 'url(sco/img/2/rs_jz_xn_t2_bg_2.png) no-repeat',
                    'background-size': '100% 100%' 
                });
                $( '.p04res' ).css( 'display', 'none' );
                $( '#p04' ).css( 'display', 'none' );
                // 答对返回选题页
                $( '.p03q1' ).click( function () {
                    // audio.pause();
                    startp05();
                } );
                startp03();
            } );
        } else {
            $( '.p04res' ).attr( 'src', 'sco/img/2/qno.png' ).css( 'display', 'block' );
            audio.play ( 4, function () {
                $( '.p04res' ).css( 'display', 'none' );
            } );
        }

    } );
}

function startp05 () {
    $( '#p05' ).css( 'display', 'block' );
    $( '.p05sele' ).click( function () {
        $( '.p05currentSele, .p05submit' ).css( 'display', 'block' );
    } );
    var answer = 0;
    $( '.p05sele1' ).click( function () {
        $( '.p05currentSele' ).css( 'top', $( '.p05sele1' ).position().top );
    } );
    $( '.p05sele2' ).click( function () {
        answer = 0;
        $( '.p05currentSele' ).css( 'top', $( '.p05sele2' ).position().top );
    } );
    $( '.p05sele3' ).click( function () {
        answer = 0;
        $( '.p05currentSele' ).css( 'top', $( '.p05sele3' ).position().top );
    } );
    $( '.p05sele4' ).click( function () {
        answer = 4;
        $( '.p05currentSele' ).css( 'top', $( '.p05sele4' ).position().top );
    } );
    $( '.p05submit' ).off().click( function () {
        $( '.p05submit, .p05currentSele' ).css( 'display', 'none' );
        if ( answer == 4 ) {
            $( '.p05res' ).attr( 'src', 'sco/img/2/qyes.png' ).css( 'display', 'block' );
            audio.play ( 3, function () {
                $( '#p03' ).css( {
                    'background': 'url(sco/img/2/rs_jz_xn_t2_bg_3.png) no-repeat',
                    'background-size': '100% 100%' 
                });
                $( '.p05res' ).css( 'display', 'none' );
                $( '#p05' ).css( 'display', 'none' );
                // 答对返回选题页
                $( '.p03q2' ).click( function () {
                    startp06();
                    $( '#p03' ).css( 'display', 'none' );
                } );
                startp03();
            } );
        } else {
            $( '.p05res' ).attr( 'src', 'sco/img/2/qno.png' ).css( 'display', 'block' );
            audio.play ( 4, function () {
                $( '.p05res' ).css( 'display', 'none' );
            } );
        }
    } );
}

function startp06 () {
    $( '#p06' ).css( 'display', 'block' );
    $( '.p06sele' ).click( function () {
        $( '.p06currentSele, .p06submit' ).css( 'display', 'block' );
    } );
    var answer = 0;
    $( '.p06sele1' ).click( function () {
        $( '.p06currentSele' ).css( 'top', $( '.p06sele1' ).position().top );
    } );
    $( '.p06sele2' ).click( function () {
        answer = 2;
        $( '.p06currentSele' ).css( 'top', $( '.p06sele2' ).position().top );
    } );
    $( '.p06sele3' ).click( function () {
        answer = 0;
        $( '.p06currentSele' ).css( 'top', $( '.p06sele3' ).position().top );
    } );
    $( '.p06sele4' ).click( function () {
        answer = 0;
        $( '.p06currentSele' ).css( 'top', $( '.p06sele4' ).position().top );
    } );
    $( '.p06submit' ).off().click( function () {
        $( '.p06submit, .p06currentSele' ).css( 'display', 'none' );
        if ( answer == 2 ) {
            $( '.p06res' ).attr( 'src', 'sco/img/2/qyes.png' ).css( 'display', 'block' );
            audio.play ( 3, function () {
                $( '#p03' ).css( {
                    'background': 'url(sco/img/2/rs_jz_xn_t2_bg_4.png) no-repeat',
                    'background-size': '100% 100%' 
                });
                $( '.p06res' ).css( 'display', 'none' );
                $( '#p06' ).css( 'display', 'none' );
                // 答对返回选题页
                $( '.p03q3' ).click( function () {
                    startp07();
                    $( '#p03' ).css( 'display', 'none' );
                } );
                startp03();
            } );
        } else {
            $( '.p06res' ).attr( 'src', 'sco/img/2/qno.png' ).css( 'display', 'block' );
            audio.play ( 4, function () {
                $( '.p06res' ).css( 'display', 'none' );
            } );
        }
    } );
}

function startp07 () {
    $( '#p07' ).css( 'display', 'block' );
    $( '.p07sele' ).click( function () {
        $( '.p07currentSele, .p07submit' ).css( 'display', 'block' );
    } );
    var answer = 0;
    $( '.p07sele1' ).click( function () {
        $( '.p07currentSele' ).css( 'top', $( '.p07sele1' ).position().top );
    } );
    $( '.p07sele2' ).click( function () {
        answer = 0;
        $( '.p07currentSele' ).css( 'top', $( '.p07sele2' ).position().top );
    } );
    $( '.p07sele3' ).click( function () {
        answer = 0;
        $( '.p07currentSele' ).css( 'top', $( '.p07sele3' ).position().top );
    } );
    $( '.p07sele4' ).click( function () {
        answer = 4;
        $( '.p07currentSele' ).css( 'top', $( '.p07sele4' ).position().top );
    } );
    $( '.p07submit' ).off().click( function () {
        $( '.p07submit, .p07currentSele' ).css( 'display', 'none' );
        if ( answer == 4 ) {
            $( '.p07res' ).attr( 'src', 'sco/img/2/qyes.png' ).css( 'display', 'block' );
            audio.play ( 3, function () {
                $( '#p03' ).css( {
                    'background': 'url(sco/img/2/rs_jz_xn_t2_bg_5.png) no-repeat',
                    'background-size': '100% 100%' 
                });
                $( '.p07res' ).css( 'display', 'none' );
                $( '#p07' ).css( 'display', 'none' );
                // 答对返回选题页
                $( '.p03q4' ).click( function () {
                    startp08();
                    $( '#p03' ).css( 'display', 'none' );
                } );
                startp03();
            } );
        } else {
            $( '.p07res' ).attr( 'src', 'sco/img/2/qno.png' ).css( 'display', 'block' );
            audio.play ( 4, function () {
                $( '.p07res' ).css( 'display', 'none' );
            } );
        }
    } );
}

function startp08 () {
    $( '#p08' ).css( 'display', 'block' );
    $( '.p08sele' ).click( function () {
        $( '.p08currentSele, .p08submit' ).css( 'display', 'block' );
    } );
    var answer = 0;
    $( '.p08sele1' ).click( function () {
        answer = 1;
        $( '.p08currentSele' ).css( 'top', $( '.p08sele1' ).position().top );
    } );
    $( '.p08sele2' ).click( function () {
        answer = 0;
        $( '.p08currentSele' ).css( 'top', $( '.p08sele2' ).position().top );
    } );
    $( '.p08sele3' ).click( function () {
        answer = 0;
        $( '.p08currentSele' ).css( 'top', $( '.p08sele3' ).position().top );
    } );
    $( '.p08sele4' ).click( function () {
        answer = 0;
        $( '.p08currentSele' ).css( 'top', $( '.p08sele4' ).position().top );
    } );
    $( '.p08submit' ).off().click( function () {
        $( '.p08submit, .p08currentSele' ).css( 'display', 'none' );
        if ( answer == 1 ) {
            $( '.p08res' ).attr( 'src', 'sco/img/2/q5Over.png' ).css( 'display', 'block' );
            audio.play ( 5, function () {
                $( '#p03' ).css( {
                    'background': 'url(sco/img/2/rs_jz_xn_t2_bg_6.png) no-repeat',
                    'background-size': '100% 100%' 
                });
                $( '.p03red' ).css( 'display' , 'block' );
                $( '.p08res' ).css( 'display', 'none' );
                $( '#p08' ).css( 'display', 'none' );
                // 答对返回选题页
                startp03();
                $( '.p03over' ).css( 'display', 'block' ).click( function () {
                    module1.setFinish();
                    $( '#p03' ).css( 'display', 'none' );
                    startp09();
                } );
            } );
        } else {
            $( '.p08res' ).attr( 'src', 'sco/img/2/qno.png' ).css( 'display', 'block' );
            audio.play ( 4, function () {
                $( '.p08res' ).css( 'display', 'none' );
            } );
        }
    } );
}

function startp09 () {
    $( '#p09' ).css( 'display', 'block' );
    $( '.p09finish' ).click( function () {
        $( '#p09' ).css( 'display', 'none' );
        if ( XDD.getOVER() ) {
            fmodule.start();
        } else {
            module0.start();
        }
    } );
}
