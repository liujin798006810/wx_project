;
(function() {
    // 随机添加颜色
    $('.avatar-circle').each(function() {
        var random = parseInt(Math.random() * 6) + 1;
        $(this).addClass('bg-' + random);
    });
    // 日历插件
    if (window.LCalendar) {
        var calendar = new LCalendar();
        calendar.init({
            'trigger': '#top-calendar', //标签id
            'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
            'minDate': '1900-1-1', //最小日期
            'maxDate': new Date().getFullYear() + 20 + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
        });
    }
    $("#top-calendar").on('input', function() {
        var value = $(this).val();
        if (value) {
            console.log(value);
            $('.top-date span').text(value);
        }
    })

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    //  1=> '01'
    function padZero(num) {
        var string = String(num)
        return string.length < 2 ? '0' + string : string;
    }
    // 默认为当天的日期
    $('.top-date span').text(padZero(year) + '.' + padZero(month) + '.' + padZero(day));
})();


