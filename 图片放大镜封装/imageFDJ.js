/**
 * Created by Administrator on 2016/8/5.
 */
(function($){
    $.fn.ljkFDJ = function( options ){
        var settings = {
            big_image_width  : 200,        //宽
            big_image_height : 200,        //高
            big_image_offset : 20                 //间距
        };
        $.extend( settings, options );

        $(this).hover(function(){
            var $this = $(this);
            var small_image_left = $this.get(0).offsetLeft,
                small_image_top = $this.get(0).offsetTop,
                small_image_width = $this.get(0).offsetWidth,
                small_image_height = $this.get(0).offsetHeight;

            var big_image_src = $this.attr('alt');        //大图src地址

            //防止重复创建
            if( !$('.big-image-box').length ){
                $this.after($("<span class='big-image-box'><img src='"+ big_image_src +"' class='big-image'></span>"));
            }

            var big_image_box_left = small_image_left + small_image_width + settings.big_image_offset; //左边的偏移加上小图的宽度加上间距
            var $big_image_box = $('.big-image-box');     //大图显示div
            $big_image_box.show();
            //设置放大镜div的显示位置
            $big_image_box.css({
                width : settings.big_image_width,
                height : settings.big_image_height,
                left:big_image_box_left,
                top:small_image_top
            });

            $(document.body).mousemove(function( e ){
                var target = e || window.event,
                    big_image = $('.big-image'),
                    big_image_width = big_image.get(0).offsetWidth,
                    big_image_height = big_image.get(0).offsetHeight;

                var scaleX = Math.round( big_image_width / small_image_width ),      //大图与小图的比例
                    scaleY = Math.round( big_image_height / small_image_height );


                var scrollX = target.pageX - small_image_left - ($big_image_box.width() / scaleX ) / 2 , //获取大图滚动条距离顶部的高度
                    scrollY = target.pageY - small_image_top - ($big_image_box.height() / scaleY ) / 2 ; //获取大图滚动条距离左边的高度

                //一个元素overflow：hidden  scrollTop就是 不可见元素距离顶部的高度  scrollLeft 同理
                //改变元素的　scrollTop scrollLeft 的值  达到 和 background-position 一样的效果

                $big_image_box.get(0).scrollTop = scrollY * scaleY;
                $big_image_box.get(0).scrollLeft = scrollX * scaleX;

            })

        },function(){
            $(document.body).off('mousemove');
            $('.big-image-box').hide().remove();
        })
    }
})(jQuery);