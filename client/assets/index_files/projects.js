!function t(e,n,r){function a(i,s){if(!n[i]){if(!e[i]){var l="function"==typeof require&&require;if(!s&&l)return l(i,!0);if(o)return o(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[i]={exports:{}};e[i][0].call(c.exports,function(t){var n=e[i][1][t];return a(n?n:t)},c,c.exports,t,e,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)a(r[i]);return a}({1:[function(t){function e(t,e){return $.post("/dy/v2/projects/subscribe/",{projid:e,newsletterSignup:"true",email:t},function(t){-1!=t.indexOf("has been subscribed")?$(".js-emailSignup").html("<div class='grid-12'>Thanks! You've been subscribed.</div>"):$(".js-emailSignup > div").html("Sorry, there was an error. Please try again.")}),!1}function n(){$(this).parent().find('input[name="amount"]').val()?$(this).parent().submit():$(this).parent().find('input[name="amount"]').focus()}t("../v2/js/modules/tooltip.bsfy"),t("../v2/js/modules/tabsBox.bsfy"),gg.forms=t("../v2/js/modules/forms.bsfy"),t("../v2/js/modules/ggSlideshow.bsfy");t("../v2/js/modules/hide.bsfy");deferred.push(function(){$(".js-emailSignup").submit(function(){e($(".js-emailSignup > input").val(),$(".js-emailSignup").attr("data-proj"))}),$(".js-other").click(n);var t=$("[data-project-id]").data("projectId");$.getJSON("/dy/v2/user/last-donation-to/project/"+t).done(function(t){var e=t.donationDate;if(e){var n=$(".js-lastDonationCont").show(),r=n.find(".js-lastDonationContent");r.find(".js-lastDonationDate").html(e),r.fadeIn(500)}})})},{"../v2/js/modules/forms.bsfy":2,"../v2/js/modules/ggSlideshow.bsfy":3,"../v2/js/modules/hide.bsfy":4,"../v2/js/modules/tabsBox.bsfy":5,"../v2/js/modules/tooltip.bsfy":6}],2:[function(t,e){function n(t,e){return f(t,!0,e,!0,null,null,null)}function r(t,e,n){return f(t,!0,e,!1,n,null,null)}function a(t,e){return f(t,!0,e,!1,2,null,null)}function o(t){return f(t,!1,null,!1,2,null,null)}function i(t,e,n,r){return f(t,!0,e,!0,null,n,r)}function s(t,e,n,r,a){return f(t,!0,e,!1,n,r,a)}function l(t,e,n,r){return f(t,!0,e,!1,2,n,r)}function u(t,e,n){return f(t,!1,null,!0,null,e,n)}function c(t,e,n,r){return f(t,!1,null,!1,e,n,r)}function d(t){t.value=t.value.replace(/\D/g,"").replace(/^0/,"")}function f(t,e,n,r,a,o,i){if(!t.value)return!1;t.value=p(t.value);var s,l,u,c=h(t.value),d=parseFloat(c);return l=o||i?o?i?" between "+o+" and "+i+".":" at least "+o+".":" at most "+i+".":".",isNaN(d)?(e&&(alert(n+" is required to be a number"+l),t.select(),setTimeout(function(){t.focus()},10)),!1):(r?(s=n+" must be an Integer"+l,u=/^-?[\d,]*\.?0{0,2}$/):(s=n+" must be a decimal number with "+a+" decimal places"+l,u=new RegExp("^-?[\\d,]*\\.?\\d{0,"+a+"}$")),u.test(c)?o&&o>d||i&&d>i?(e&&(alert(s),t.select(),setTimeout(function(){t.focus()},10)),!1):!0:(e&&(alert(s),t.select(),setTimeout(function(){t.focus()},10)),!1))}function p(t){return t.replace(/\s+/g,"")}function h(t){return t.replace(/,+/g,"")}function g(t,e,n){if(t&&t.value&&t.value.length>e&&(t.value=t.value.substring(0,e)),n&&document.getElementById(n)){var r=e-t.value.length;document.getElementById(n).innerHTML=r+"&nbsp;characters remaining"}}function m(){$(".js-autoTextCounter").off("input").on("input",function(){g(this,$(this).attr("maxlength"),$(this).attr("data-counterId"))})}function v(t){var e=t.form,n=t.prefix||"",r=e.find("input,select,textarea"),a=t.propertyMap,o=function(t){return t};a&&(o=function(t){return a[t]}),$.each(t.data,function(t,e){var a=o(t);if(a){var i="[name='"+n+a+"']",s=r.filter(i).val(e);switch(s.attr("type")){case"checkbox":1==e?s.prop("checked",!0):s.prop("checked",!1);break;case"radio":console.log("need to handle radio buttons....");break;default:s.val(e)}}})}e.exports={validateInteger:n,validateFloat:r,validateTwoDecimalFloat:a,validateTwoDecimalFloatNoAlert:o,validateIntegerBounded:i,validateFloatBounded:s,validateTwoDecimalFloatBounded:l,validateIntegerBoundedNoAlert:u,validateFloatBoundedNoAlert:c,textCounter:g,autoTextCounter:m,autoValidate:d,fillFormFromObject:v}},{}],3:[function(){function t(){var t=$(".js-slideshow").attr("data-slideshow");$(".js-slideshow").attr("srcset",""),$(".js-slideshow").attr("src",gg.slideshow[t]),$(".js-slideshowLink").attr("href",gg.slideshow[t]),e()}function e(){for(var t=2,e=-1*t;t>=e;e++)null!=gg&&null!=gg.slideshow&&null!=r&&null!=r(e)&&null!=gg.slideshow[r(e)]&&((new Image).src=gg.slideshow[r(e)])}function n(t,e){return(t%e+e)%e}function r(t){return n(parseInt($(".js-slideshow").attr("data-slideshow"))+t,gg.slideshow.length)}function a(){$(".js-slideshow").attr("data-slideshow",r(-1)),t()}function o(){$(".js-slideshow").attr("data-slideshow",r(1)),t()}$(".ggSlideshow-left").click(a),$(".ggSlideshow-right").click(o),$(e)},{}],4:[function(t,e){e.exports=function(t,e,n){var r=!1;$("html").on("click touchstart",function(){!r&&$(t).is(":visible")&&($(t).hide(),n&&"function"==typeof n&&n()),r=!1}).on("click touchstart",e,function(){r=!0})}},{}],5:[function(){function t(){$(".tabsBox-tab").removeClass("tabsBox-tab_selected"),$(this).parent().addClass("tabsBox-tab_selected");var t=$(this).parent().index();$(".tabsBox-content").hide(),$(".tabsBox-content").eq(t).show().first("a").focus()}$(".tabsBox-tab > a").click(t)},{}],6:[function(t,e){function n(t){var e=$(this).find(".js-tooltip-popup");if(0==e.length){var n={body:$(this).attr("data-tooltip")};e=$(a(n));var r=$(this).position().left+$(this).width()/2,o=r-e.width()/2;(o+e.width()>$(window).width()||0>o)&&(o=$(window).width()/10),e=e.css("left",o),$(this).append(e)}0===$(t.target).closest(".js-tooltip-popup").length&&e.toggle();var i=Math.max(document.documentElement.clientHeight,window.innerHeight||0),s=$(document).scrollTop()+i;e.position().top+e.height()>s?e.css("top",$(this).position().top-$(this).height()-e.height()-10).find(".triangle").addClass("triangle_bottom").removeClass("triangle_top").filter(".triangle_white").attr("style","bottom:-13px"):e.css("top",$(this).position().top+$(this).height()+10).find(".triangle").addClass("triangle_top").removeClass("triangle_bottom").filter(".triangle_white").attr("style","top:-13px")}var r=t("./hide.bsfy"),a=t("../templates/tooltip.hbs");$(document).on("click",".tooltip",n),r(".js-tooltip-popup",".js-tooltip-popup"),e.exports={tooltipInit:n}},{"../templates/tooltip.hbs":7,"./hide.bsfy":4}],7:[function(t,e){var n=t("hbsfy/runtime");e.exports=n.template({compiler:[7,">= 4.0.0"],main:function(t,e,n,r,a){var o,i;return'<div class="layout_abs box_horizontalPadded1 box_verticalPadded2 text_4n box_topMarginHalf triangle_parent zindex_modal col_white border_default js-tooltip-popup" style="width:350px;max-width:80%;display:none;">\n   <div class="triangle triangle_defaultBorder triangle_top"></div>\n   <div class="triangle triangle_white triangle_top" style="top:-13px"></div>\n   '+(null!=(i=null!=(i=n.body||(null!=e?e.body:e))?i:n.helperMissing,o="function"==typeof i?i.call(null!=e?e:{},{name:"body",hash:{},data:a}):i)?o:"")+"\n</div>\n"},useData:!0})},{"hbsfy/runtime":27}],8:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}function o(){var t=new s.HandlebarsEnvironment;return p.extend(t,s),t.SafeString=u["default"],t.Exception=d["default"],t.Utils=p,t.escapeExpression=p.escapeExpression,t.VM=g,t.template=function(e){return g.template(e,t)},t}n.__esModule=!0;var i=t("./handlebars/base"),s=a(i),l=t("./handlebars/safe-string"),u=r(l),c=t("./handlebars/exception"),d=r(c),f=t("./handlebars/utils"),p=a(f),h=t("./handlebars/runtime"),g=a(h),m=t("./handlebars/no-conflict"),v=r(m),b=o();b.create=o,v["default"](b),b["default"]=b,n["default"]=b,e.exports=n["default"]},{"./handlebars/base":9,"./handlebars/exception":12,"./handlebars/no-conflict":22,"./handlebars/runtime":23,"./handlebars/safe-string":24,"./handlebars/utils":25}],9:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},l.registerDefaultHelpers(this),u.registerDefaultDecorators(this)}n.__esModule=!0,n.HandlebarsEnvironment=a;var o=t("./utils"),i=t("./exception"),s=r(i),l=t("./helpers"),u=t("./decorators"),c=t("./logger"),d=r(c),f="4.0.3";n.VERSION=f;var p=7;n.COMPILER_REVISION=p;var h={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};n.REVISION_CHANGES=h;var g="[object Object]";a.prototype={constructor:a,logger:d["default"],log:d["default"].log,registerHelper:function(t,e){if(o.toString.call(t)===g){if(e)throw new s["default"]("Arg not supported with multiple helpers");o.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if(o.toString.call(t)===g)o.extend(this.partials,t);else{if("undefined"==typeof e)throw new s["default"]("Attempting to register a partial as undefined");this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if(o.toString.call(t)===g){if(e)throw new s["default"]("Arg not supported with multiple decorators");o.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]}};var m=d["default"].log;n.log=m,n.createFrame=o.createFrame,n.logger=d["default"]},{"./decorators":10,"./exception":12,"./helpers":13,"./logger":21,"./utils":25}],10:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t){i["default"](t)}n.__esModule=!0,n.registerDefaultDecorators=a;var o=t("./decorators/inline"),i=r(o)},{"./decorators/inline":11}],11:[function(t,e,n){"use strict";n.__esModule=!0;var r=t("../utils");n["default"]=function(t){t.registerDecorator("inline",function(t,e,n,a){var o=t;return e.partials||(e.partials={},o=function(a,o){var i=n.partials;n.partials=r.extend({},i,e.partials);var s=t(a,o);return n.partials=i,s}),e.partials[a.args[0]]=a.fn,o})},e.exports=n["default"]},{"../utils":25}],12:[function(t,e,n){"use strict";function r(t,e){var n=e&&e.loc,o=void 0,i=void 0;n&&(o=n.start.line,i=n.start.column,t+=" - "+o+":"+i);for(var s=Error.prototype.constructor.call(this,t),l=0;l<a.length;l++)this[a[l]]=s[a[l]];Error.captureStackTrace&&Error.captureStackTrace(this,r),n&&(this.lineNumber=o,this.column=i)}n.__esModule=!0;var a=["description","fileName","lineNumber","message","name","number","stack"];r.prototype=new Error,n["default"]=r,e.exports=n["default"]},{}],13:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t){i["default"](t),l["default"](t),c["default"](t),f["default"](t),h["default"](t),m["default"](t),b["default"](t)}n.__esModule=!0,n.registerDefaultHelpers=a;var o=t("./helpers/block-helper-missing"),i=r(o),s=t("./helpers/each"),l=r(s),u=t("./helpers/helper-missing"),c=r(u),d=t("./helpers/if"),f=r(d),p=t("./helpers/log"),h=r(p),g=t("./helpers/lookup"),m=r(g),v=t("./helpers/with"),b=r(v)},{"./helpers/block-helper-missing":14,"./helpers/each":15,"./helpers/helper-missing":16,"./helpers/if":17,"./helpers/log":18,"./helpers/lookup":19,"./helpers/with":20}],14:[function(t,e,n){"use strict";n.__esModule=!0;var r=t("../utils");n["default"]=function(t){t.registerHelper("blockHelperMissing",function(e,n){var a=n.inverse,o=n.fn;if(e===!0)return o(this);if(e===!1||null==e)return a(this);if(r.isArray(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):a(this);if(n.data&&n.ids){var i=r.createFrame(n.data);i.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:i}}return o(e,n)})},e.exports=n["default"]},{"../utils":25}],15:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var a=t("../utils"),o=t("../exception"),i=r(o);n["default"]=function(t){t.registerHelper("each",function(t,e){function n(e,n,o){u&&(u.key=e,u.index=n,u.first=0===n,u.last=!!o,c&&(u.contextPath=c+e)),l+=r(t[e],{data:u,blockParams:a.blockParams([t[e],e],[c+e,null])})}if(!e)throw new i["default"]("Must pass iterator to #each");var r=e.fn,o=e.inverse,s=0,l="",u=void 0,c=void 0;if(e.data&&e.ids&&(c=a.appendContextPath(e.data.contextPath,e.ids[0])+"."),a.isFunction(t)&&(t=t.call(this)),e.data&&(u=a.createFrame(e.data)),t&&"object"==typeof t)if(a.isArray(t))for(var d=t.length;d>s;s++)s in t&&n(s,s,s===t.length-1);else{var f=void 0;for(var p in t)t.hasOwnProperty(p)&&(void 0!==f&&n(f,s-1),f=p,s++);void 0!==f&&n(f,s-1,!0)}return 0===s&&(l=o(this)),l})},e.exports=n["default"]},{"../exception":12,"../utils":25}],16:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var a=t("../exception"),o=r(a);n["default"]=function(t){t.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new o["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=n["default"]},{"../exception":12}],17:[function(t,e,n){"use strict";n.__esModule=!0;var r=t("../utils");n["default"]=function(t){t.registerHelper("if",function(t,e){return r.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||r.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers["if"].call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},e.exports=n["default"]},{"../utils":25}],18:[function(t,e,n){"use strict";n.__esModule=!0,n["default"]=function(t){t.registerHelper("log",function(){for(var e=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)e.push(arguments[r]);var a=1;null!=n.hash.level?a=n.hash.level:n.data&&null!=n.data.level&&(a=n.data.level),e[0]=a,t.log.apply(t,e)})},e.exports=n["default"]},{}],19:[function(t,e,n){"use strict";n.__esModule=!0,n["default"]=function(t){t.registerHelper("lookup",function(t,e){return t&&t[e]})},e.exports=n["default"]},{}],20:[function(t,e,n){"use strict";n.__esModule=!0;var r=t("../utils");n["default"]=function(t){t.registerHelper("with",function(t,e){r.isFunction(t)&&(t=t.call(this));var n=e.fn;if(r.isEmpty(t))return e.inverse(this);var a=e.data;return e.data&&e.ids&&(a=r.createFrame(e.data),a.contextPath=r.appendContextPath(e.data.contextPath,e.ids[0])),n(t,{data:a,blockParams:r.blockParams([t],[a&&a.contextPath])})})},e.exports=n["default"]},{"../utils":25}],21:[function(t,e,n){"use strict";n.__esModule=!0;var r=t("./utils"),a={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=r.indexOf(a.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=a.lookupLevel(t),"undefined"!=typeof console&&a.lookupLevel(a.level)<=t){var e=a.methodMap[t];console[e]||(e="log");for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;n>o;o++)r[o-1]=arguments[o];console[e].apply(console,r)}}};n["default"]=a,e.exports=n["default"]},{"./utils":25}],22:[function(t,e,n){(function(t){"use strict";n.__esModule=!0,n["default"]=function(e){var n="undefined"!=typeof t?t:window,r=n.Handlebars;e.noConflict=function(){n.Handlebars===e&&(n.Handlebars=r)}},e.exports=n["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],23:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}function o(t){var e=t&&t[0]||1,n=v.COMPILER_REVISION;if(e!==n){if(n>e){var r=v.REVISION_CHANGES[n],a=v.REVISION_CHANGES[e];throw new m["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+a+").")}throw new m["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}}function i(t,e){function n(n,r,a){a.hash&&(r=h.extend({},r,a.hash),a.ids&&(a.ids[0]=!0)),n=e.VM.resolvePartial.call(this,n,r,a);var o=e.VM.invokePartial.call(this,n,r,a);if(null==o&&e.compile&&(a.partials[a.name]=e.compile(n,t.compilerOptions,e),o=a.partials[a.name](r,a)),null!=o){if(a.indent){for(var i=o.split("\n"),s=0,l=i.length;l>s&&(i[s]||s+1!==l);s++)i[s]=a.indent+i[s];o=i.join("\n")}return o}throw new m["default"]("The partial "+a.name+" could not be compiled when running in runtime-only mode")}function r(e){function n(e){return""+t.main(a,e,a.helpers,a.partials,i,l,s)}var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=o.data;r._setup(o),!o.partial&&t.useData&&(i=d(e,i));var s=void 0,l=t.useBlockParams?[]:void 0;return t.useDepths&&(s=o.depths?e!==o.depths[0]?[e].concat(o.depths):o.depths:[e]),(n=f(t.main,n,a,o.depths||[],i,l))(e,o)}if(!e)throw new m["default"]("No environment passed to template");if(!t||!t.main)throw new m["default"]("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var a={strict:function(t,e){if(!(e in t))throw new m["default"]('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var n=t.length,r=0;n>r;r++)if(t[r]&&null!=t[r][e])return t[r][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:h.escapeExpression,invokePartial:n,fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,r,a){var o=this.programs[t],i=this.fn(t);return e||a||r||n?o=s(this,t,i,e,n,r,a):o||(o=this.programs[t]=s(this,t,i)),o},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=h.extend({},e,t)),n},noop:e.VM.noop,compilerInfo:t.compiler};return r.isTop=!0,r._setup=function(n){n.partial?(a.helpers=n.helpers,a.partials=n.partials,a.decorators=n.decorators):(a.helpers=a.merge(n.helpers,e.helpers),t.usePartial&&(a.partials=a.merge(n.partials,e.partials)),(t.usePartial||t.useDecorators)&&(a.decorators=a.merge(n.decorators,e.decorators)))},r._child=function(e,n,r,o){if(t.useBlockParams&&!r)throw new m["default"]("must pass block params");if(t.useDepths&&!o)throw new m["default"]("must pass parent depths");return s(a,e,t[e],n,0,r,o)},r}function s(t,e,n,r,a,o,i){function s(e){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=i;return i&&e!==i[0]&&(s=[e].concat(i)),n(t,e,t.helpers,t.partials,a.data||r,o&&[a.blockParams].concat(o),s)}return s=f(n,s,t,i,r,o),s.program=e,s.depth=i?i.length:0,s.blockParams=a||0,s}function l(t,e,n){return t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],t}function u(t,e,n){n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var r=void 0;if(n.fn&&n.fn!==c&&(n.data=v.createFrame(n.data),r=n.data["partial-block"]=n.fn,r.partials&&(n.partials=h.extend({},n.partials,r.partials))),void 0===t&&r&&(t=r),void 0===t)throw new m["default"]("The partial "+n.name+" could not be found");return t instanceof Function?t(e,n):void 0}function c(){return""}function d(t,e){return e&&"root"in e||(e=e?v.createFrame(e):{},e.root=t),e}function f(t,e,n,r,a,o){if(t.decorator){var i={};e=t.decorator(e,i,n,r&&r[0],a,o,r),h.extend(e,i)}return e}n.__esModule=!0,n.checkRevision=o,n.template=i,n.wrapProgram=s,n.resolvePartial=l,n.invokePartial=u,n.noop=c;var p=t("./utils"),h=a(p),g=t("./exception"),m=r(g),v=t("./base")},{"./base":9,"./exception":12,"./utils":25}],24:[function(t,e,n){"use strict";function r(t){this.string=t}n.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},n["default"]=r,e.exports=n["default"]},{}],25:[function(t,e,n){"use strict";function r(t){return d[t]}function a(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}function o(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;return-1}function i(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}return p.test(t)?t.replace(f,r):t}function s(t){return t||0===t?m(t)&&0===t.length?!0:!1:!0}function l(t){var e=a({},t);return e._parent=t,e}function u(t,e){return t.path=e,t}function c(t,e){return(t?t+".":"")+e}n.__esModule=!0,n.extend=a,n.indexOf=o,n.escapeExpression=i,n.isEmpty=s,n.createFrame=l,n.blockParams=u,n.appendContextPath=c;var d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},f=/[&<>"'`=]/g,p=/[&<>"'`=]/,h=Object.prototype.toString;n.toString=h;var g=function(t){return"function"==typeof t};g(/x/)&&(n.isFunction=g=function(t){return"function"==typeof t&&"[object Function]"===h.call(t)}),n.isFunction=g;var m=Array.isArray||function(t){return t&&"object"==typeof t?"[object Array]"===h.call(t):!1};n.isArray=m},{}],26:[function(t,e){e.exports=t("./dist/cjs/handlebars.runtime")["default"]},{"./dist/cjs/handlebars.runtime":8}],27:[function(t,e){e.exports=t("handlebars/runtime")["default"]},{"handlebars/runtime":26}]},{},[1]);