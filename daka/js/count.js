/**
 * Created by Administrator on 2017/5/18.
 */
$(function () {
    var nowDate = new Date().getFullYear() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getDate();
    $('#input').val(nowDate);

    //跳转
    $('.nav_head .tbl_cell').on('click', function () {
        location.href = 'clock_in.html';
    });
    $('.toTop1').on('click', function () {
        location.href = 'clock_in_top1.html';
    });
    $('.toTop2').on('click', function () {
        location.href = 'clock_in_top3.html';
    });
    $('.toTop3').on('click', function () {
        location.href = 'clock_in_top2.html';
    });
    $('.p_detail').on('click', function () {
        location.href = 'punch_card.html';
    });


    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
                qq: u.match(/\sQQ/i) == " qq" //是否QQ
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };

    if (browser.versions.ios) {
        $('.circle_con').css({'width': '400px', 'height': '400px'});
        $('.person').css({'top': '80px', 'left': '78px'});
        $('.p_detail').css({'top': '280px', 'left': '132px'});
        inte1s(padZero(5));
    } else {
        inte1(padZero(5));
    }

});

function inte1(percent) {
    var canvas_1 = document.querySelector('.canvas_1');
    var canvas_2 = document.querySelector('.canvas_2');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');

    canvas_1.width = 200;
    canvas_1.height = 200;
    canvas_2.width = 200;
    canvas_2.height = 200;
    ctx_1.lineWidth = 8;
    ctx_1.strokeStyle = "#ddd";
    //画底部的灰色圆环
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return;
    }
    ctx_2.lineWidth = 8;
    ctx_2.strokeStyle = "#09a2e8";
    var angle = 0;
    var timer;

    (function draw() {
        timer = requestAnimationFrame(draw);
        ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height);
        //百分比圆环
        ctx_2.beginPath();
        ctx_2.arc(canvas_2.width / 2, canvas_2.height / 2, canvas_2.width / 2 - ctx_2.lineWidth / 2, 0, angle * Math.PI / 180, false);
        angle += 6;
        var percentAge = parseInt((angle / 360) * 6);
        if (angle > (percent / padZero(6) * 360)) {
            percentAge = percent;
            window.cancelAnimationFrame(timer);
        }
        ctx_2.stroke();
        ctx_2.closePath();
        ctx_2.save();
        ctx_2.beginPath();
        ctx_2.rotate(90 * Math.PI / 180);
        ctx_2.font = 'bold 0.92rem Calibri';
        ctx_2.fillStyle = '#000';
        var text = percentAge + '/' + padZero(6);
        ctx_2.fillText(text, 45, -90);
        ctx_2.closePath();
        ctx_2.restore();
    })();
}

function inte1s(percent) {
    var canvas_1 = document.querySelector('.canvas_1');
    var canvas_2 = document.querySelector('.canvas_2');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');

    canvas_1.width = 400;
    canvas_1.height = 400;
    canvas_2.width = 400;
    canvas_2.height = 400;
    ctx_1.lineWidth = 16;
    ctx_1.strokeStyle = "#ddd";
    //画底部的灰色圆环
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return;
    }
    ctx_2.lineWidth = 16;
    ctx_2.strokeStyle = "#09a2e8";
    var angle = 0;
    var timer;

    (function draws() {
        timer = requestAnimationFrame(draws);
        ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height);
        //百分比圆环
        ctx_2.beginPath();
        ctx_2.arc(canvas_2.width / 2, canvas_2.height / 2, canvas_2.width / 2 - ctx_2.lineWidth / 2, 0, angle * Math.PI / 180, false);
        angle += 6;
        var percentAge = parseInt((angle / 360) * 6);
        if (angle > (percent / padZero(6) * 360)) {
            percentAge = percent;
            window.cancelAnimationFrame(timer);
        }
        ctx_2.stroke();
        ctx_2.closePath();
        ctx_2.save();
        ctx_2.beginPath();
        ctx_2.rotate(90 * Math.PI / 180);
        ctx_2.font = 'bold 0.92rem Calibri';
        ctx_2.fillStyle = '#000';
        var text = percentAge + '/' + padZero(6);
        ctx_2.fillText(text, 90, -180);
        ctx_2.closePath();
        ctx_2.restore();
    })();
}

function padZero(num) {
    var string = String(num);
    return string.length < 2 ? '0' + string : string;
}