;
(function() {

    $('.common-head').each(function(index, item) {
        if ($(this).next('.list').find('.common-item').length == 0) {
            $(this).find('.count').addClass('count-disabled');
        }
    });
    // 展开收起天数
    $('.common-head').on('click', function() {
        if ($(this).next('.list').find('.common-item').length == 0) {
            var msg = '本月还没有' + $(this).find('.title').text().slice(0, 2);
            tipMsg(msg);
            return
        }
        var self = this;
        if($(this).hasClass('no-border-bottom')){
            $(this).removeClass('no-border-bottom');
            $(this).next('.list').slideToggle();
        }else{
            $(this).next('.list').slideToggle(function(){
                $(self).addClass('no-border-bottom');           
            });            
        }
        $(this).find('i').toggleClass('up');
    });

    // 往后生成10个月份
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var monthArray = [];

    // 1=> '01'
    function padZero(num) {
        var string = String(num)
        return string.length < 2 ? '0' + string : string;
    }
    for (var i = 0; i < 10; i++) {
        monthArray[i] = padZero(year) + '年' + padZero(month) + '月';
        month--;
        if (month === 0) {
            year--;
            month = 12;
        }
    }
    // console.log(monthArray)
    monthArray.forEach(function(item) {
        var monthItem=
        '<li class="month-item">'
        +    '<span>' + item + '</span>'
        +    '<div class="radio-outer">'
        +        '<div class="radio-inner"></div>'
        +    '</div>'
        +'</li>' ;
        
        $('.choose-month').append($(monthItem));
    });
    
    // 第一个默认选中
    $('.month-item:first-child').find('.radio-outer').addClass('radio-show');

    // 选择月份
    $('.user-date').on('click', function() {
        $('.choose-month-mask').toggle();
    });

    $('.choose-month-mask').on('click', function(e) {
        var e = window.event || event;
        var target = e.srcElement || e.target;
        if ($(target).hasClass('month-item')) {
            $('.radio-outer').removeClass('radio-show');
            $(target).find('.radio-outer').addClass('radio-show');
        }
        $(this).toggle();
    });

    // 跳转到早到榜
    $('.early-top').on('click', function() {
        location.href = 'clock_in_top.html';
    });

    // 跳到日统计
    $('.tab-left').on('click', function() {
        location.href = 'index.html';
    });

    // 列表为空的时候弹窗
    function tipMsg(str) {
        clearTimeout(window._timer);
        $('.msg-info').text(str);
        $('.msg-info').fadeIn();
        window._timer = setTimeout(function() {
            $('.msg-info').fadeOut();
        }, 1200);
    }

})();
