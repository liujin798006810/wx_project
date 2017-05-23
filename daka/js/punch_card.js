/**
 * Created by Administrator on 2017/5/22.
 */
$(function () {
    // 随机添加颜色
    $('.avatar-circle').each(function () {
        var random = parseInt(Math.random() * 6) + 1;
        $(this).addClass('bg-' + random);
    });

    //点击切换
    $('.nav_head').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');

        var index = $(this).index(),
            item = $('.container>div');
        item.hide();
        item.eq(index).show();
    });

    $('.nav_item_con').on('click', 'li', function () {
        $(this).addClass('li_act').siblings().removeClass('li_act');

        var index = $(this).index(),
            itemList = $('.ul_con>ul');

        itemList.hide();
        itemList.eq(index).show();
    });
});