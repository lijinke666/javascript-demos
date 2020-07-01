/**
 * Created by Administrator on 2016/7/23.
 */
(function($){
    var LJkBanner = function LJkBanner( element, options ){
        this.element = element;
        var PicIndex =0;
        var bannerMoveUl = this.element.find("ul"),
            bannerMoveLi = bannerMoveUl.find("li"),
            bannerShowEqList = this.element.find(".banner-list");
        var banner_width = bannerMoveLi.width(),
            banner_size  = bannerMoveLi.size();
        var defaults =　{
            time: 4000,
            isCreateEqList:false
        };
        var options = $.extend(defaults,options);
        this.initBannerWidth({
            ele:bannerMoveUl,
            width:banner_width,
            size:banner_size
        });
        this.bannerMove(bannerMoveUl,PicIndex,banner_width,bannerShowEqList.find("a"));
        this.setIntervalMove({
            ele:bannerMoveUl,
            bannerWidth:banner_width,
            bannerSize:banner_size,
            PicIndex:PicIndex,
            time:options.time
        });
        if(options.isCreateEqList === true ){
            this.createList({
                ele:bannerMoveLi,
                appendBox:bannerShowEqList,
                bannerMoveUl:bannerMoveUl,
                width:banner_width
            })
        }

    };
    LJkBanner.prototype = {
        initBannerWidth:function( options ){
            options.ele.css({
                "width": options.width * options.size
            })
        },
        bannerMove:function( ele, Index, bannerWidth ,eqList ){
            var _this = this;
            ele.css({
                left: - Index * bannerWidth
            });
            eqList.eq(Index).addClass("on").siblings().removeClass("on");
        },
        setIntervalMove:function( options ){
            var _this = this,
                pic;
            options.ele.hover(function () {
                clearInterval( pic );
            }, function () {
                pic = setInterval(function () {
                    if ( options.PicIndex == options.bannerSize - 1) {
                        options.PicIndex = 0;
                    } else {
                        options.PicIndex++;
                    }
                    _this.bannerMove( options.ele, options.PicIndex ,options.bannerWidth);
                }, options.time);
            }).trigger("mouseleave");
        },
        createList:function( options ){
            var _this = this;
            $.each(options.ele, function (i) {
                var aNode = '';
                if (i == 0) {
                    aNode = $("<a href='javascript:void(0)' class='on'></a>");
                } else {
                    aNode = $("<a href='javascript:void(0)'></a>");
                }
                options.appendBox.append(aNode);
                options.appendBox.on("click", "a", function () {
                    var list_a =  options.appendBox.find("a"),
                        index = list_a.index(this),
                        $this = $(this);
                    $this.addClass("on").siblings().removeClass("on");
                    _this.bannerMove(options.bannerMoveUl,index,options.width)
                });
            });
        },
        arrowMove:function( options ){
            //
        //向右切换
        options.rightArrow.on("click", function () {
            if (options.PicIndex == options.size - 1) {
                options.PicIndex = 0;
            } else {
                options.PicIndex++;
            }
            move(options.PicIndex)
        });

        //向左切换
        $left_arrow.on("click", function () {
            if (PicIndex == 0) {
                PicIndex = $banner_length - 1;
            } else {
                PicIndex--;
            }
            move(PicIndex)
        });
        }
    };
    window['LJKBanner'] = LJkBanner;
})(jQuery);
// $(function() {
//     var PicIndex = 0;   //图片索引
//     var bannerPic;       //计时器
//     var $banner = $(".banner"),
//         $bannerMove = $(".banner-move"),
//         $banner_move = $bannerMove.find("li"),
//         $banner_list = $(".banner-list"),
//         $banner_width = $banner_move.width(),
//         $banner_length = $banner_move.size(),
//         $arrow = $(".arrow-box"),
//         $left_arrow = $arrow.find(".left-arrow"),     //左切换按钮
//         $right_arrow = $arrow.find(".right-arrow");    //右切换按钮
//
//     //动态加载小圈圈
//     createList($banner_move);
//     initBannerWidth($bannerMove);
//     //幻灯片切换
//     move(0);
//     function move(Index) {
//         var a = $banner_list.find("a");
//         $banner_move.css({"left": -Index * $banner_width});
//         a.eq(Index).addClass("on").siblings().removeClass("on");
//     }
//
//     //初始化轮播宽度
//     function initBannerWidth(ele) {
//         ele.css({
//             "width": $banner_length * $banner_width
//         })
//     }
//
//     //动态加载索引点
//     function createList(ele) {
//         $.each(ele, function (i) {
//             var aNode = '';
//             if (i == 0) {
//                 aNode = $("<a href='javascript:void(0)' class='on'></a>");
//             } else {
//                 aNode = $("<a href='javascript:void(0)'></a>");
//             }
//             $banner_list.append(aNode);
//         });
//     }
//
//     //计时轮播
//     $banner.hover(function () {
//         clearInterval(bannerPic);
//     }, function () {
//         bannerPic = setInterval(function () {
//             if (PicIndex == $banner_length - 1) {
//                 PicIndex = 0;
//             } else {
//                 PicIndex++;
//             }
//             move(PicIndex);
//         }, 6000);
//     }).trigger("mouseleave");
//
//     //点击索引点切换轮播图
//     $banner_list.on("click", "a", function () {
//         var list_a = $banner_list.find("a"),
//             index = list_a.index(this),
//             $this = $(this);
//         $this.addClass("on").siblings().removeClass("on");
//         move(index)
//     });
//
//     //向右切换
//     $right_arrow.on("click", function () {
//         if (PicIndex == $banner_length - 1) {
//             PicIndex = 0;
//         } else {
//             PicIndex++;
//         }
//         move(PicIndex)
//     });
//
//     //向左切换
//     $left_arrow.on("click", function () {
//         if (PicIndex == 0) {
//             PicIndex = $banner_length - 1;
//         } else {
//             PicIndex--;
//         }
//         move(PicIndex)
//     });
// });