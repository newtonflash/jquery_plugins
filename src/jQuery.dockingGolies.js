jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    });

(function($){

    $.fn.dockingGolies = function (options) {

        var defaults = {
                goliWidth: 40,
                goliHoverOffset: 10,
                expandCollapseDuration: 400,    //in milliseconds
                hoverEffectDuration: 200,    //in milliseconds
                goliSelectedWidth : 50,
                expandEffect: "easeInOutBack", //elastic, plain
                collapseEffect: "easeOutBounce", //elastic, plain
                hoverEffect:"easeOutBack",
                outEffect:"easeOutBack",
                dockingEffect: false,
                goliClassName: "goli",
                goliSelectedClassName: "selected",
                goliClass: "goli",
                onGoliClick : "",
                hasCap :true,
                capClassName : "cap",
                capWidth: 60,
                zIndexStart:6000,
                hasExternalController: false
            },
            $currentTarget = {};

        if (this.length == 0) return this;

        if(this.length>1){
            this.each(function(){
                if($(this).data("options") == null){
                    $(this).dockingGolies(options);
                }
            });
            return this;
        }

        var options = $.extend(true, {}, defaults, options),
            ele = this,
            $this = $(this);

        if(options.hasCap){
            $this.prepend("<a href='#'class='" + options.capClassName + "'>");
        }

        var $golis = $($this.find("." + options.goliClassName)),
            $cap = options.hasCap ? $($this.find("."+options.capClassName)) : {},
            goliCount = $golis.length,
            isAnimating = false,
            isOpen = false,
            totalWidth = (goliCount - 1) * (options.goliWidth + options.goliHoverOffset) + (options.hasCap ?  options.capWidth : 0),
            isTouchEnabled = (function is_touch_device() {
                return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
            })(),
            collapseTimeout;

        // make all the necessary adjustment to position, styling and other stuff
        var init = function () {
            $this.data("options", options)
            $this.hide();

            $this.css({
                "width":totalWidth,
                "position":"relative"
            });

            if(options.hasCap) {
                $cap.css({
                    "left":totalWidth/2
                });
            }

            for (var i = 0; i < goliCount; i++) {
                var $currentGoli = $($golis[i]);
                if(i === 0){
                    $currentTarget = $currentGoli;
                }
                if(!options.hasExternalController){
                    $currentTarget.addClass(options.goliSelectedClassName);
                }

                $currentTarget.css({
                    width : options.goliSelectedWidth,
                    height: options.goliSelectedWidth
                });

                $currentGoli.css({
                    "left":totalWidth/2
                });
            }

            setPositionData();

            $golis.on("click.selectGoli", onGoliSelection);

            if(!isTouchEnabled){
                if(options.hasCap){
                    $cap.on("mouseenter", onHover);
                } else{
                    $this.on("mouseenter", onHover);
                }
            } else{
                onHover();
            }

            $this.on("mouseleave", onOut);

            $this.fadeIn(400);
        };

        var resetGolisDimension = function(){
            for (var i = 0; i < goliCount; i++) {
                var $currentGoli = $($golis[i]);
                if (!$currentGoli.hasClass(options.goliSelectedClassName)) {
                    $currentGoli.animate({
                        "width": options.goliWidth,
                        "height": options.goliWidth
                    }, 100);
                }
            }
        };

        var setPositionData = function () {
            var lastPosition = 0;

            if(options.hasCap){
                $cap.data("position", lastPosition);
                $cap.css("z-index", options.zIndexStart + 1);
                lastPosition = options.capWidth;

            }

            for (var i = 0; i < goliCount; i++) {
                var $goli = $($golis[i]);
                $goli.css("z-index", options.zIndexStart - i);
                $goli.data("position", lastPosition);

                lastPosition += options.goliWidth + options.goliHoverOffset;
            }
        };

        var onHover = function (evt) {
            if(isAnimating) return;

            console.log('hover', isAnimating);

            isAnimating = true;
            isOpen = false;
            var delay = 10;

            if( options.hasCap){
                $cap.animate(
                    {
                        left: $cap.data("position")
                    },
                    {
                        duration: options.expandCollapseDuration,
                        easing: options.expandEffect
                    }
                )
            }
            for (var i = 0; i < goliCount; i++) {
                var $currentGoli = $($golis[i]);

                $currentGoli.off("mouseenter");
                $currentGoli.off("mouseleave");

                $currentGoli.delay( ( i  ) * delay ).animate({
                        left: $currentGoli.data("position")
                    },
                    {
                        duration: options.expandCollapseDuration,
                        easing: options.expandEffect,
                        complete: function () {
                            isAnimating = false;
                            isOpen = true;
                            $(this).on("mouseenter", onGoliHover);
                            $(this).on("mouseleave", onGoliOut);
                        }
                    }
                );
            }

            /*setTimeout(function(){
             isAnimating = false;
             },  goliCount * (options.expandCollapseDuration +delay));*/
        };

        var onOut = function (evt) {

            if (isAnimating || !isOpen) return;
            isAnimating = true;

            if(collapseTimeout) clearTimeout (collapseTimeout);

            collapseTimeout = setTimeout(function(){
                if( options.hasCap){
                    $cap.animate(
                        {
                            left: totalWidth/2
                        },
                        {
                            duration: options.expandCollapseDuration,
                            easing: options.collapseEffect
                        }
                    )
                }
                for (var i = 0; i < goliCount; i++) {
                    var $currentGoli = $($golis[i]);

                    $currentGoli.off("mouseenter");
                    $currentGoli.off("mouseleave");

                    $currentGoli.animate({
                            left: totalWidth/2
                        },
                        {
                            duration: options.expandCollapseDuration,
                            easing: options.collapseEffect,

                            complete: function () {
                                isAnimating = false;
                                isOpen = false;
                                resetGolisDimension();
                            }
                        }
                    );
                }
            }, options.expandCollapseDuration + 200 );
        };

        var onGoliSelection = function (evt) {
            evt.preventDefault();
            var $target = $(evt.target);

            updateSelection($target);

            if(typeof options.onGoliClick === "function"){
                options.onGoliClick($target.index());
            }
        };

        var onGoliHover = function (evt) {
            if (isOpen) {
                var $goli = $(evt.target);

                if (!$goli.hasClass(options.goliSelectedClassName)) {
                    $goli.stop().animate(
                        {
                            width: options.goliSelectedWidth,
                            height: options.goliSelectedWidth
                        },
                        {
                            duration: options.hoverEffectDuration,
                            easing: options.hoverEffect
                        }
                    );
                }
            }
        };

        var onGoliOut = function (evt) {
            if (isOpen) {
                var $goli = $(evt.target);
                if (!$goli.hasClass(options.goliSelectedClassName)) {
                    $goli.stop().animate({
                            width: options.goliWidth,
                            height: options.goliWidth
                        },
                        {
                            duration: options.hoverEffectDuration,
                            easing: options.outEffect
                        }
                    );
                }
            }
        };

        var updateSelection = function($target){

            if(!options.hasExternalController) {
                $($this.find("." + options.goliSelectedClassName)).animate({
                    width: options.goliWidth,
                    height: options.goliWidth
                }, 100, function () {
                    $(this).removeClass(options.goliSelectedClassName);
                });
            } else {

                $($this.find("." + options.goliClassName)).animate({
                    width: options.goliWidth,
                    height: options.goliWidth
                },90);
            }

            if(!options.hasExternalController){
                $target.addClass(options.goliSelectedClassName);
            }


            // change the z index of selected element
            if(!options.hasCap){
                for (var i = 0; i < goliCount; i++) {
                    var $goli = $($golis[i]);
                    if($goli === $target) continue;
                    $goli.css("z-index", options.zIndexStart - (i+1));
                }
                $target.css("z-index" , options.zIndexStart );
            }

            $target.stop().animate(
                {
                    width: options.goliSelectedWidth,
                    height: options.goliSelectedWidth
                },
                {
                    duration: options.hoverEffectDuration,
                    easing: options.hoverEffect
                }
            );

        };

        this.changeSelection = function(index){
            if( index * 1 >= 0 && index * 1 < goliCount ){
                updateSelection($($golis[index]));
            }
        };

        init();

        return this;
    }
})(jQuery);
