$(function () {
    var XDD = $XDDTopic2018 || window.$XDDTopic2018;

    var home = XDD.Home;

    //------------自适应函数
    home.resizeWindow();
    $(window).resize( home.resizeWindow );

    // 返回首页
    home.goHome = function () {
        $( '.home_btn2_border' ).css( 'display', 'none' );
        $( '.home_btn1_border' ).css( 'display', 'none' );
    };

    // 是否是提交版
    XDD.onLine = false;

    // 视频
    var video = XDD.Video;
    video.hide();
    var videoUrl = [
        'sco/video/st_sj_sy_1.mp4',
        'sco/video/rs_jz_zg_1.mp4',
        'sco/video/rs_jz_zg_2.mp4',
        'sco/video/rs_jz_zg_3.mp4', // 3
        'sco/video/rs_jz_xn_1.mp4',
        'sco/video/rs_jz_xn_2.mp4',
        'sco/video/rs_jz_xn_3.mp4', // 6
        'sco/video/rs_jz_xn_4.mp4',
        'sco/video/rs_jz_xn_5.mp4',
        'sco/video/rs_jz_zg_4.mp4', // 9
    ];
    video.setVideoUrl( videoUrl );

    // 音频
    var audio = XDD.Audio;
    var audioUrl = [
        'sco/audio/rs_jz_zg_t2_1.mp3',
        'sco/audio/rs_jz_zg_t2_2.mp3',
        'sco/audio/rs_jz_xn_t2_1.mp3',
        'sco/audio/rs_jz_xn_t2_2.mp3', // 3
        'sco/audio/rs_jz_xn_t2_3.mp3',
        'sco/audio/rs_jz_xn_t2_4.mp3',
    ];
    audio.setAudioUrl( audioUrl );

    var mod0 = new XDD.Mode( 'module1' ), mod1 = new XDD.Mode( 'module2' ), mod2 = new XDD.Mode('module3'), mod3 = new XDD.Mode('module4');
    mod0.over = function () {
        $( '.home_yes1' ).css( 'display', 'block' );
    };
    mod1.over = function () {
        $( '.home_yes2' ).css( 'display', 'block' );
    };
    mod0.modeStart = function () {
        $( '.home_btn1_border' ).css( 'display', 'block' );
        $( '.home_btn2_border' ).css( 'display', 'none' );
    };
    mod1.modeStart = function () {
        $( '.home_btn2_border' ).css( 'display', 'block' );
        $( '.home_btn1_border' ).css( 'display', 'none' );
    };

    // 模块
    XDD.modeArr = [ mod0, mod1, mod2, mod3 ];

    // 从平台拿到的模块完成情况
    if ( XDD.onLine ) {
        var studyResult=JSON.parse(doLMSGetValue ('cmi.launch_data'));
        if ( studyResult.S200001 == 1 ) { 
            mod0.setFinish();
            $( '.home_yes1' ).css( 'display', 'block' );
        }
        if ( studyResult.S200002 == 1 ) {
            mod1.setFinish();
            $( '.home_yes2' ).css( 'display', 'block' );
        }
    }
    // 首页开始
    video.play( 0, function () {
        mod0.start();
        $( '.home_btn1_border' ).css( 'display', 'block' );
        $( '.home_btn2_border' ).css( 'display', 'none' );
    } );
    $( '.home_btn1, .home_btn1_border' ).click( function () {
        $( '.home_btn1_border' ).css( 'display', 'block' );
        $( '.home_btn2_border' ).css( 'display', 'none' );
        video.pause().hide();
        audio.pause();
        mod0.start();
    } );
    $( '.home_btn2, .home_btn2_border' ).click( function () {
        $( '.home_btn2_border' ).css( 'display', 'block' );
        $( '.home_btn1_border' ).css( 'display', 'none' );
        video.pause().hide();
        audio.pause();
        mod1.start();
    } );
});



// 首页按钮部分
function gomHover(el) {
    $(el).css("background", "rgba(41,203,79,1)");
    $(el).find("img").attr("src", "./sco/img/w" + $(el).attr("name") + "w.png");
}
function gomNoHover(el) {
    $(el).css("background", "rgba(255,255,255,1)");
    $(el).find("img").attr("src", "./sco/img/w" + $(el).attr("name") + "b.png");
}

$(".gom").hover(function () {
    gomHover(this);
},function () {
    gomNoHover(this);
});
$(".menubtn").click(function () {
    var s = $(".menuBox").css("display");
    $(".menuBox").css("display", s == "block" ? "none" : "block");
});
$(".menubtn").hover(function () {
    $(".menuBox").css("display", "block");
}, function () {
    $(".menuBox").hover(function () {
        $(".menuBox").css("display", "block");
    }, function () {
        $(".menuBox").css("display", "none");
    });
    $(".menuBox").css("display", "none");
});
