var index = {
    bindEvent:function(){
        var self = this;
        $('.J-menu-all-bt').on('click', function(){
            $('.nav-shopnr').toggle();
        });
        $(window).on('scroll',function(){
            if(self.getScroll().t>100){
                $('.index_float_callback').css('display','inline-block');
            }else{
                $('.index_float_callback').hide();
            }
        });
    },
    getScroll:function () {
        var o = document.documentElement,
            k = document.body;
        var m, j, g, n;
        if (o && o.scrollTop) {
            m = o.scrollTop;
            j = o.scrollLeft;
            g = o.scrollWidth;
            n = o.scrollHeight
        } else {
            if (k) {
                m = k.scrollTop;
                j = k.scrollLeft;
                g = k.scrollWidth;
                n = k.scrollHeight
            }
        }
        return {
            t: m || window.pageYOffset,
            l: j || window.pageXOffset,
            w: g,
            h: n
        }
    },
    sliderBox:function (obj){
        var sbObj = obj.find('ul.index-main-image'),
            tbLi = obj.find('.flicking-con li'),
            step = obj.width(),//obj.attr('data-step'),
            size = tbLi.length,//obj.attr('data-size'),
            sliderBoxObj = new SliderBox({
                sliderBox: sbObj,
                step: step,
                size: size,
                duration: 3000,
                thumbs: tbLi
            }),
            slider = new TouchPanel({
                touchPanel: obj,
                sliderBox: sliderBoxObj
            });
        tbLi.css('width',step*1/32 + 'px').css('height',step*1/32 + 'px');
        sbObj.find('li').css('width',step+'px');
        sbObj.css('position', 'absolute').css('width',step*size+'px');
    },
    init:function(){
        this.sliderBox($('.index-visual'));
        this.bindEvent();
    }
}
index.init();