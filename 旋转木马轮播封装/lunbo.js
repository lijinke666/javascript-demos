/**
 * Created by Administrator on 2016/5/10.
 */
(function($){
    var Carousel = function(element,setting){
        this.element= element;
        this.ul = this.element.find("ul");
        this.btnPrev = this.element.find(".btn-left");
        this.btnNext = this.element.find(".btn-right");
        this.Li = this.element.find("li");
        this.firstLi=this.Li.eq(0);
        //默认参数
        this.options={
            "width":1000,             //外部大div的宽
            "height":270,             //外部大div的高
            "posterWidth":640,        //banner图实际的宽度
            "posterHeight":270,      //banner图实际的高度
            "scale":0.9,             //第一张图片与第二张图片的缩放比
            "speed":500,             //切换速度
            "align":"middle"         //对齐方式
        };
        $.extend(this.options,this.getOption());        //jquery extend() 方法  有人工参数 没有则用默认参数
        //console.log(this.getOption());
        this.setValue();
        this.otherValue();
    };
    Carousel.prototype={
        //获取参数
        getOption:function(){
             var set =this.element.data("setting");  //遍历当前元素的data
            if(set && set!=""){                   //如果当前data存在
                return set;
            }else{
                return {};                         //否则return 一个空对象
            }
        },

        //设置宽高
        setValue:function(){
            //设置外部大div宽高
            this.element.css({
                "width":this.options.width+"px",
                "height":this.options.height+"px"
            });
            //ul的宽高
            this.ul.css({
                "width":this.options.width+"px",
                "height":this.options.height+"px"
            });
            //按钮的宽高
            var btnWidth=(this.options.width - this.options.posterWidth) /2;      //按钮宽高等于 总宽-banner图宽/2
            var size = this.Li.size();
            //zIndex 层级关系  按钮3  第一张图2  其他图1 0
            this.btnPrev.css({
                "width":btnWidth +"px",
                "height":this.options.height+"px",
                "zIndex":Math.ceil(size/2)
            });
            this.btnNext.css({
                "width":btnWidth +"px",
                "height":this.options.height+"px",
                "zIndex":Math.ceil(size/2)
            });

            //设置第一张图的位置
            this.firstLi.css({
                "width":this.options.posterWidth+"px",
                "height":this.options.posterHeight+"px",
                "left":btnWidth +"px",
                "zIndex":Math.floor(size/2)
            });
        },

        otherValue:function(){
            var size = Math.floor(this.Li.size()/2);
            this.Li.slice(1,Math.ceil(size)+1).each(function(){
                size--;
                $(this).css({
                    "zIndex":size
                })
            });
        }
    };
    Carousel.init=function(element){
        var _this_ = this;
        element.each(function(){         //遍历所有的节点
            new _this_($(this));         //遍历对少次 就 new 多少次
        });
    };
    window['Carousel']=Carousel;     //因为是闭包 所以要为 window注入 才能访问到
})(jQuery);