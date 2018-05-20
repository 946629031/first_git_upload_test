$(document).ready(function() {
    
    var i = 0;
    $(".form_box li").click(function() {

        //隐藏所点击的分类
        $(this).parents('.content_brands').css('display','none');

        i ++;
        var newClassName = 'youClickTimes' + i;
        $(this).parents('.content_brands').addClass(newClassName);

        //添加html
        $(".content_inner").append('<div class="addSelected" id="' + newClassName + '" style="display:inline-block; cursor: pointer; margin: 0 2px; line-height: 24px; border: solid 1px #C8C8C8;">&nbsp&nbsp<a>' + $(this).text() + '</a> <p>x</p>&nbsp&nbsp</div>');
    });


    // 鼠标移入移出，改变已选btn的描边颜色
    $(".content_inner").on('mouseenter','.addSelected',function() {
        $(this).css('border','solid 1px #f00');
        $(this).children('p').css('color','#f00');
    });
    $(".content_inner").on('mouseleave','.addSelected',function() {
        $(this).css('border','solid 1px #C8C8C8');
        $(this).children('p').css('color','#323232');
    });


    //点击删除已选分类btn
    $(".content_inner").on('click','.addSelected',function() {
        //展示父分类列表
        var idName = $(this).attr('id');
        $('.'+idName).css('display','flex');

        //隐藏所点击的分类btn
        $(this).css('display','none');
    });


    // $(".getJSONdata").click(function(){
    //     $.getJSON("js/data.json",function(result){
    //         $.each(result, function(i, field){
    //             // $(".jsondata").append(field + " ");
    //         });
    //     });
    // });


    $(".getJSONdata").click(function(){
        var request = new XMLHttpRequest();
        request.open('get','js/jquery-3.3.1.min.js');
        request.send();
        request.
    });


});













