var $XDDTopic2018 = (function() {
  // 是否是线上版
  this.onLine = false;
  var rootThis = this;
  // 所有模块是否结束
  var OVER = false;
  this.getOVER = function () {
    return OVER;
  };
  this.setOVER = function ( o ) {
    var _o = o == undefined ? true : false;
    OVER = _o;
  };
  // 模块数组
  this.modeArr = [];
  // 主页
  var Home = function() {
    // 假模假样的安全模式
    if (this instanceof Home) {
      // 初始化Home
    } else {
      return new Home();
    }
    // 判断浏览器
    this.browser = function() {
      var userAgent = navigator.userAgent;
      if (userAgent.indexOf("Opera") > -1) {
        return "opera";
      } else if (
        userAgent.indexOf("compatible") > -1 &&
        userAgent.indexOf("MSIE") > -1 &&
        userAgent.indexOf("Opera") <= -1
      ) {
        return "ie";
      } else if (
        userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 &&
        !(userAgent.indexOf("compatible") > -1 &&
        userAgent.indexOf("MSIE") > -1 &&
        userAgent.indexOf("Opera") <= -1)
      ) {
        return "edge";
      } else if (userAgent.indexOf("Firefox") > -1) {
        return "firefox";
      } else if (
        userAgent.indexOf("Safari") > -1 &&
        userAgent.indexOf("Chrome") == -1
      ) {
        return "safari";
      } else if (
        userAgent.indexOf("Chrome") > -1 &&
        userAgent.indexOf("Safari") > -1
      ) {
        return "chrome";
      }
    };
    // 防止IE不认识console
    this.console = function(someThing) {
      if (this.browser() !== "ie") {
        console.log(someThing);
      }
    };
    // 退出全屏
    this.exitFullscreen = function() {
      var exitMethod =
        document.exitFullscreen || //W3C
        document.mozCancelFullScreen || //Chrome等
        document.webkitExitFullscreen || //FireFox
        document.webkitExitFullscreen; //IE11
      if (exitMethod) {
        exitMethod.call(document);
      } else if (typeof window.ActiveXObject !== "undefined") {
        //for Internet Explorer
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
          wscript.SendKeys("{F11}");
        }
      }
      return this;
    };
    this.resizeWindow = (function() {
      var t = $(".backGround"),
        tWith = t.width(),
        tHeight = t.height(),
        pWith,
        pHeight,
        scaleX,
        scaleY,
        tLeft,
        tTop;

      return function() {
        pWith = $(window).width();
        pHeight = $(window).height();
        scaleX = pWith / tWith;
        scaleY = pHeight / tHeight;
        scaleX = scaleX > scaleY ? scaleY : scaleX;

        tLeft = (pWith - tWith) / 2;
        tTop = (pHeight - tHeight) / 2;

        t.css({
          left: tLeft + "px",
          top: tTop + "px",
          transform: "scale(" + scaleX + "," + scaleX + ")"
        });
      };
    })();
  };

  // 按钮, 只负责逻辑部分，样式去css里设置
  var Button = function(name) {
    if (this instanceof Button) {
      var btn = $("." + name).length > 0 ? $("." + name) : (idName = $("#" + name));
    } else {
      return new Button();
    }
    this.getButton = function() {
      return btn;
    };
  //  默认样式
      btn.css({ 'cursor': 'pointer' });
  };
  Button.prototype = new Home();
  Button.prototype.click = function ( fn )  {
    this.getButton().addEventListener('click', function () {
      fn();
    });
  };
 // 控制显示
 Button.prototype.show = function () {
   this.getButton().css({ 'display' : 'block' });
 };

  // 模块
  // 模块要有各种状态：开始，进行中，结束
  // 开始和进行中是和结束互斥的
  // 只要开始就显示就行了？？不，要有一个可以重写的方法，开始之后就执行
  //
  var Mode = function(name) {
    if (this instanceof Mode) {
      var finish = false;
      var mod = name;
    } else {
      return new Mode();
    }
    var go = function() {};
    this.over = function() {};
    var that = this;
    var state = {
      _start: false,
      _stop: true,
      set start(s) {
        this._start = s;
        if (this._start) {
          this._stop = false;
          // alert( '模块开始' );
          go();
          that.modeStart();
        }
      },
      get start() {
        return this._start;
      },
      set stop(s) {
        this._stop = s;
        if (this._stop) {
          this._start = false;
          // alert( '模块结束' );
          that.innerOver();
          that.over();
        }
      }
    };
    this.getState = function() {
      return state;
    };
    this.setGo = function(gofn) {
      go = gofn;
    };
    this.getMod = function() {
      return mod;
    };
    this.setMod = function(name) {
      mod = name;
      return this;
    };
    this.getFinish = function() {
      return finish;
    };
    this.setFinish = function(set) {
      finish = set == undefined ? true : set;
      state.stop = true;
      return this;
    };
  };
  Mode.prototype = new Home();
  Mode.prototype.start = function() {
    $("iframe")
      .attr("src", this.getMod() + ".html")
      .css("display", "block");

    this.getState().start = true;
    return this;
  };
  Mode.prototype.over = function() {
    return this;
  };
  Mode.prototype.modeStart = function() {
    return this;
  };
  Mode.prototype.innerOver = function() {
    // 1、这里如果是上线版要进行一些操作。。。。
    if (window.$XDDTopic2018.onLine) {
      try {
        doLMSSetValue("cmi.core.lesson_status", "completed"); //-------------平台接口调用
      } catch (e) {
        console.log(e);
      }
    } else {
    }
    // 2、返回首页的行为或许并不一致，所以写在over函数比较好，可能吧。。。。
    // 3、检测模块完成情况
    // 先这样写着，这样写肯定是不行的???
    var rootObj = window.$XDDTopic2018;
    var allOver = rootObj.modeArr.some(function(el) {
      return el.getFinish() === false;
    });
    if (allOver) {
      // 还有未完成的模块, 在这里跳，可以说是很流弊了
    } else {
      rootObj.setOVER();
    }
  };
  Mode.prototype.videoNext = function(div, btn, fn) {
    var divC = $("." + div).length > 0 ? $("." + div) : $("#" + div);
    var btnC = $("." + btn).length > 0 ? $("." + btn) : $("#" + btn);
    if (
      this.browser() == "safari" ||
      this.browser() == "opera" ||
      this.browser() == "uc"
    ) {
      divC.css("display", "block");
      btnC.off().click(function() {
        divC.css("display", "none");
        if (fn !== undefined) {
          fn();
        }
      });
    } else {
      try {
        fn();
      } catch (e) {
        console.log(e);
      }
    }
  };

  this.finishMod = new Mode("finish");

  // 视频
  var Video = function() {
    if (this instanceof Video) {
      Video.prototype = new Home();
      var videoUrl = [];
      // 初始化视频
      var options = {},
        videoId = "xdd-t-2018";
      var t = videojs(
        videoId,
        { width: 766, height: 419, preload: "auto", loop: false },
        function() {
          t.on("play", function() {
            if (window.$XDDTopic2018.onLine) {
              console.log("是线上版");
              doLMSSetValue("cmi.core.lesson_status", "play");
            }
          });
          t.on("pause", function() {
            if (window.$XDDTopic2018.onLine) {
              doLMSSetValue("cmi.core.lesson_status", "pause");
            }
          });
        }
      );
    } else {
      return new Video();
    }
    this.resetVideo = function() {
      t = videojs(videoId, options, function() {
        t.on("play", function() {
          if (window.$XDDTopic2018.onLine) {
            doLMSSetValue("cmi.core.lesson_status", "play");
          }
        });
        t.on("pause", function() {
          if (window.$XDDTopic2018.onLine) {
            doLMSSetValue("cmi.core.lesson_status", "pause");
          }
        });
      });
      return this;
    };
    this.show = function() {
      t.show();
      return this;
    };
    this.getVideo = function() {
      return t;
    };
    this.hide = function() {
      t.hide();
      return this;
    };
    this.getVideoId = function() {
      return videoId;
    };
    this.setVideoId = function(id) {
      videoId = id;
      return this;
    };
    this.getVideoOptions = function() {
      return options;
    };
    this.setVideoOptions = function(o) {
      options = o;
      return this;
    };
    this.setVideoUrl = function(url) {
      videoUrl = url;
      return this;
    };
    this.getVideoUrl = function(num) {
      if (num !== undefined) {
        return videoUrl[num];
      } else {
        return videoUrl;
      }
    };
    this.pause = function() {
      t.pause();
      return this;
    };
    this.play = function(p, fn, hide, pause) {
      var isNum = false,
        hi = hide !== undefined ? hide : true;
      var _pause = pause == undefined ? true : pause;
      if (p === "" || p == null) {
        isNum = false;
      } else if (!isNaN(p)) {
        isNum = true;
      } else {
        isNum = false;
      }
      t.off("ended");
      this.show();
      if (isNum) {
        t.src({ type: "video/mp4", src: this.getVideoUrl(p) });
      } else {
        t.src({ type: "video/mp4", src: p });
      }
      this.show();
      if (_pause) {
        t.play();
      } else {
        t.pause();
      }
      t.on("ended", function() {
        if (hi) {
          this.hide();
        }
        if (typeof fn == "function") {
          fn();
        }
      });
      return this;
    };
  };

  // 音频
  var Audio = function() {
    if (this instanceof Audio) {
      var t = $("audio");
      var audioUrl = [];
    } else {
      return new Audio();
    }
    this.pause = function() {
      t[0].pause();
    };
    this.play = function(p, fn) {
      var isNum = false;
      if (p === "" || p == null) {
        isNum = false;
      } else if (!isNaN(p)) {
        isNum = true;
      } else {
        isNum = false;
      }
      t.off("ended");
      if (isNum) {
        t.attr("src", this.getAudioUrl(p));
      } else {
        t.attr("src", p);
      }
      t[0].play();
      t.on("ended", function() {
        if (typeof fn == "function") {
          fn();
        }
      });
      return this;
    };
    this.getAudioUrl = function(num) {
      if (num !== undefined) {
        return audioUrl[num];
      } else {
        return audioUrl;
      }
    };
    this.setAudioUrl = function(url) {
      audioUrl = url;
      return this;
    };
  };


  return {
    Home: new Home(),
    Button: Button,
    Mode: Mode,
    Video: new Video(),
    Audio: new Audio(),
    onLine: onLine,
    modeArr: modeArr,
    finishMod: finishMod,
    getOVER: getOVER,
    setOVER: setOVER
  };
})(window.$XDDTopic2018);
window.$XDDTopic2018 = $XDDTopic2018;
