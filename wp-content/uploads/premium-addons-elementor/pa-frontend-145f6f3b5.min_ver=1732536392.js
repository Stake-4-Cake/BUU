!function(e){function t(n,i){var s=null,l=n.find(".premium-post-ticker__posts-wrapper"),a=n.find(".premium-post-ticker__outer-wrapper").data("ticker-settings");function t(){l.find(".slick-slide").not(".slick-current").each(function(e,t){i(t).removeClass("animated "+a.animation).addClass("elementor-invisible")})}function p(e){if(e.length){var t=0,i=e.closest(".premium-post-ticker__post-title"),n=e.data("typing"),a=n.length;i.addClass("premium-text-typing"),e.text(n.substr(0,t++)),s=setInterval(function(){t<=a?e.text(n.substr(0,t++)):(clearInterval(s),i.removeClass("premium-text-typing"))},40)}}a&&(""!==a.animation&&"layout-4"!==a.layout&&l.on("init",function(e){t()}),a.typing&&(l.on("init",function(e,t){p(l.find('[data-slick-index="'+t.currentSlide+'"] .premium-post-ticker__post-title a'))}),l.on("beforeChange",function(e,t,i,n){var a=l.find('[data-slick-index="'+i+'"] .premium-post-ticker__post-title'),r=l.find('[data-slick-index="'+i+'"] .premium-post-ticker__post-title a'),o=l.find('[data-slick-index="'+n+'"] .premium-post-ticker__post-title a');clearInterval(s),a.removeClass("premium-text-typing"),r.text(""),p(o)})),l.find(".premium-post-ticker__post-wrapper").length<=6&&l.find(".premium-post-ticker__post-wrapper").map(function(e,t){l.append(i(t).clone())}),l.slick(function(){l.off("mouseenter.paTickerPause");var e=n.closest(".premium-tabs-content-section"),t=a.autoPlay;0<e.length&&(e.hasClass("content-current")||(t=!1));var i={infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:t,rows:0,speed:a.speed,fade:a.fade,draggable:!0,pauseOnHover:a.pauseOnHover,vertical:a.vertical};a.autoPlay&&(i.autoplaySpeed=a.autoplaySpeed);a.infinite&&(i.autoplaySpeed=0,i.cssEase="linear",i.useCSS=!1,"layout-4"===a.layout||a.vertical||(i.variableWidth=!0));"layout-4"===a.layout&&(i.vertical=!0,i.slidesToShow=a.slidesToShow||1);!n.hasClass("premium-reversed-yes")||"layout-4"===a.layout||a.vertical||a.typing||a.fade||(i.rtl=!0);return i}()),""!==a.animation&&"layout-4"!==a.layout&&(l.on("beforeChange",function(){t()}),l.on("afterChange",function(){l.find(".slick-active.elementor-invisible").each(function(e,t){i(t).removeClass("elementor-invisible").addClass(a.animation+" animated")})})),a.arrows&&n.find(".premium-post-ticker__arrows a").on("click.paTickerNav",function(){i(this).hasClass("prev-arrow")?l.slick("slickPrev"):i(this).hasClass("next-arrow")&&l.slick("slickNext")}),n.find(".premium-post-ticker__outer-wrapper").removeClass("premium-post-ticker__hidden"))}e(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/premium-post-ticker.default",t)})}(jQuery);!function(e){function t(n,a){var f=n.find(".premium-atext__wrapper"),c=f.data("settings"),s=c.delay||2500,r=f.find(".premium-atext__text"),e=f.data("start-effect");if("switch"===c.style){var t=f.find(".premium-fancy-list-items").length,i=""!==c.count||["typing","slide","autofade"].includes(c.effect)?c.count*t:"infinite";function o(){if("typing"===c.effect){var t=[];c.strings.forEach(function(e){t.push(e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"))});var e="animated-text-"+Math.floor(100*Math.random());r.attr("id",e);var i=new Typed("#"+e,{strings:t,typeSpeed:c.typeSpeed,backSpeed:c.backSpeed,startDelay:c.startDelay,backDelay:c.backDelay,showCursor:c.showCursor,loop:c.loop});n.hasClass("fancy-text-stop")&&i.stop(),a(".fancy-text-stop").bind("fancy-text-start",function(){i.start()})}else if("slide"===c.effect)s=c.pause,r.vTicker({speed:c.speed,showItems:c.showItems,pause:c.pause,mousePause:c.mousePause,direction:"up"});else{!function(){var i=f.find(".premium-fancy-list-items"),n=f.find(".premium-atext__items-wrapper"),a=1,e=c.delay||2500,s=c.count;if(s)var r=1,o=f.find(".premium-fancy-list-items").length;var m=setInterval(function(){if("clip"===c.effect)n.animate({width:0},c.speed/2||1e3,function(){i.eq(a).addClass("premium-fancy-item-visible").removeClass("premium-fancy-item-hidden"),i.filter(function(e){return e!==a}).addClass("premium-fancy-item-hidden").removeClass("premium-fancy-item-visible");var e=n.find(".premium-fancy-item-visible").outerWidth();n.animate({width:e+10},c.speed/2||1e3,function(){a++,i.length===a&&(a=0),s&&o*s===++r&&clearInterval(m)})});else{var e="";"custom"===c.effect&&(e="animated "+c.animation),"custom"===c.effect&&"slideInUp"!==c.animation&&"slideInDown"!==c.animation&&"fadeInUp"!==c.animation&&"fadeInDown"!==c.animation?n.css("transition","width 0.5s"):"rotate"===c.effect&&n.css("transition","width 0.2s  0.5s"),i.eq(a).addClass("premium-fancy-item-visible "+e).removeClass("premium-fancy-item-hidden"),i.filter(function(e){return e!==a}).addClass("premium-fancy-item-hidden").removeClass("premium-fancy-item-visible "+e);var t=n.find(".premium-fancy-item-visible").outerWidth();n.css("width",t),a++,i.length===a&&(a=0),s&&o*s===++r&&clearInterval(m)}},e)}()}}if("viewport"===e){var m=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&(o(),m.unobserve(e.target))})});m.observe(f[0])}else o();"typing"!==c.effect&&setTimeout(function(){r.css("opacity","1")},500),c.loading&&"typing"!==c.effect&&(n.find(".premium-atext__text").append('<span class="premium-loading-bar"></span>'),n.find(".premium-loading-bar").css({"animation-iteration-count":i,"animation-duration":s+"ms"}))}else{var d=c.effect;if(["tilt","flip","wave","pop"].includes(d)){var l=r.text().trim().split(""),u=l.map(function(e,t){" "==e&&(e="&nbsp;");var i=document.createElement("span");return i.className="premium-atext__letter",i.innerHTML=e,i.style.animationDelay=t/l.length+"s",i});r.html(u),setTimeout(function(){f.css("opacity",1)},1e3)}else if("shape"===d){var p=c.delay||4,v=c.duration||1.2,y=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&(f.addClass("draw-shape"),setInterval(function(){f.addClass("hide-shape"),setTimeout(function(){f.removeClass("hide-shape")},1e3)},1e3*(v+p)),y.unobserve(e.target))})});y.observe(f[0])}}}e(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-fancy-text.default",t)})}(jQuery);