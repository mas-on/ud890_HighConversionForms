!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=9)}([function(t,e,i){"use strict";function n(){var t=window.navigator.userAgent;return t.indexOf("MSIE ")>0||/Trident\/7\./.test(t)||11==document.documentMode}function r(){$("[placeholder]:not(.date,.time)").each((function(){var t=$(this).attr("placeholder");this.removeAttribute("placeholder");var e=t.indexOf("[optional]")>0;e&&(t=t.replace("[optional]","").trim());var i="<div>"+t+":</div>";e&&(i+='<span class="lbl-tip">optional</span>'),$(this).before(i)}))}function o(t){var e=t.getFullYear(),i=t.getMonth()+1,n=t.getDate();return e+"-"+(i>9?i:"0"+i)+"-"+(n>9?n:"0"+n)}function s(t,e){return(t>9?t:"0"+t)+":"+(e>9?e:"0"+e)}function l(){return Math.round((new Date).getTime()+100*Math.random())}function a(t){var e=new Uint8Array(t);return[].slice.call(e).map((function(t){return("00"+t.toString(16)).slice(-2)})).join("")}function u(t){return window.TextEncoder?new TextEncoder("utf-8").encode(t):function(t){for(var e=unescape(encodeURIComponent(t)),i=new Uint8Array(e.length),n=0;n<e.length;n++)i[n]=e.charCodeAt(n);return i}(t)}function c(t){const e=u(t);var i=(window.crypto||window.msCrypto).subtle.digest("SHA-256",e);if(void 0!==i.oncomplete){var n="";return setTimeout((function(){n=a(i.result)}),10),n}return i.then((function(t){return a(t)}))}function d(t){$(t).filter(":visible").blur((function(){this.checkValidity()?$(this).removeClass("invalid"):$(this).addClass("invalid")}))}i.d(e,"d",(function(){return n})),i.d(e,"e",(function(){return r})),i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return s})),i.d(e,"f",(function(){return l})),i.d(e,"c",(function(){return c})),i.d(e,"g",(function(){return d}))},function(t,e,i){"use strict";function n(){try{return"localStorage"in window&&null!==window.localStorage}catch(t){return!1}}function r(t){var e=localStorage.getItem(t),i=[];return null!=e&&0!==e.length&&(i=JSON.parse(e)),i}function o(t,e){localStorage.setItem(t,JSON.stringify(e))}i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return o}))},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var r=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=n.sources.map((function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"}));return[i].concat(o).concat([r]).join("\n")}var s;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i})).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(n[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];null!=s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(t,e,i){var n,r,o={},s=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),l=function(t,e){return e?e.querySelector(t):document.querySelector(t)},a=function(t){var e={};return function(t,i){if("function"==typeof t)return t();if(void 0===e[t]){var n=l.call(this,t,i);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,c=0,d=[],f=i(6);function p(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=o[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(y(n.parts[s],e))}else{var l=[];for(s=0;s<n.parts.length;s++)l.push(y(n.parts[s],e));o[n.id]={id:n.id,refs:1,parts:l}}}}function h(t,e){for(var i=[],n={},r=0;r<t.length;r++){var o=t[r],s=e.base?o[0]+e.base:o[0],l={css:o[1],media:o[2],sourceMap:o[3]};n[s]?n[s].parts.push(l):i.push(n[s]={id:s,parts:[l]})}return i}function v(t,e){var i=a(t.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=d[d.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),d.push(e);else if("bottom"===t.insertAt)i.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(t.insertAt.before,i);i.insertBefore(e,r)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return i.nc}();n&&(t.attrs.nonce=n)}return m(e,t.attrs),v(t,e),e}function m(t,e){Object.keys(e).forEach((function(i){t.setAttribute(i,e[i])}))}function y(t,e){var i,n,r,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var s=c++;i=u||(u=g(e)),n=w.bind(null,i,s,!1),r=w.bind(null,i,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),v(t,e),e}(e),n=S.bind(null,i,e),r=function(){b(i),i.href&&URL.revokeObjectURL(i.href)}):(i=g(e),n=x.bind(null,i),r=function(){b(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var i=h(t,e);return p(i,e),function(t){for(var n=[],r=0;r<i.length;r++){var s=i[r];(l=o[s.id]).refs--,n.push(l)}t&&p(h(t,e),e);for(r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete o[l.id]}}}};var $,A=($=[],function(t,e){return $[t]=e,$.filter(Boolean).join("\n")});function w(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=A(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function x(t,e){var i=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function S(t,e,i){var n=i.css,r=i.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(n=f(n)),r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([n],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(s),l&&URL.revokeObjectURL(l)}},function(t,e,i){var n=i(5);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(3)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,i){(t.exports=i(2)(!1)).push([t.i,"html, body {\n    height: 100%;    \n}\n\nbody {\n    font-size: 16px;\n}\n\nheader {\n    font-weight: bold;\n    font-size: 120%;\n    padding: 0 0 1em 0;\n}\n\nsection, header {\n    min-width: 220px; \n    max-width: 320px;\n    margin: 0 auto;\n}\n\ninput, textarea, button {\n    width: 100%;\n}\n\n.right {\n    float: right;\n}\n\n.col-70 {\n    width: 70%;\n    display: inline-block;\n}\n\n.hidden {\n    display: none;\n}\n\n.lbl-tip {\n    color:grey;\n    font-size: small;\n}\n\nsection.form .opt-lbl-row {\n    padding-bottom: 0.5em;\n}\n\nsection.form label {\n    display: block;\n    padding: 0 0 1em 0;    \n}\n\n/*validation*/\n.submitted :invalid, .invalid {\n    border: 1px dashed red;\n    background:  rgb(252, 174, 174, 0.2) \n}\n\n.err {\n    color: red;\n    font-size: small;\n}",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var i=e.protocol+"//"+e.host,n=i+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var r,o=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?i+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},,,function(t,e,i){"use strict";i.r(e);i(10);var n=i(1),r=i(0);function o(t){return t.find(".date").first().val()+"T"+t.find(".time").first().val()+":00"}i(11),i(4),i(13),$((function(){var t,e,i=$("#event-type"),s=$(".event-start .date"),l=$(".event-end .date"),a=$(".event-start .time"),u=$(".event-end .time"),c=$("#submit"),d=$("#err-msg");function f(){var t=p(s,a),e=p(l,u);if(void 0!==e&&e<t){e=t;var i=r.a(e);l.val(i).attr("min",r.a(t)),u.val(r.b(e.getHours(),e.getMinutes()))}}function p(t,e){var i,n=new Date(t.val());(i=n)instanceof Date&&!isNaN(i)||(t.prop("required")?((n=new Date).setMinutes(n.getMinutes()+1),t.val(r.a(n))):(n=void 0,t.val("")));var o=""===e.val()||void 0===e.val()?[0,0]:e.val().split(":");return 2==o.length&&2==o[0].length&&2==o[1].length||(e.prop("required")?e.val(r.b(0,0)):e.val(""),o=[0,0]),void 0!==n&&n.setHours(o[0],o[1]),n}function h(t,e){var i=new Date,n=p(t,e);void 0!==n&&n<i&&(t.val(r.a(i)),e.val(r.b(i.getHours(),i.getMinutes())))}function v(){return!!n.c()||(d.text("Please, try another browser"),!1)}v()&&(t=i,e=n.a("evt-types"),$.each(e,(function(e,i){t.append($("<option></option>").attr("value",i).text(i))}))),i.editableSelect(),r.d()?($("#event-type.es-input").before("<span>Choose or enter event type:</span>"),r.e()):$("#event-type.es-input").attr("placeholder","Choose or enter event type"),function(){var t=new Date,e=new Date;t.setHours(t.getHours()+1),e.setHours(e.getHours()+2);var i=r.a(t);s.val(i).attr("min",i),l.val(r.a(e)).attr("min",i),a.val(r.b(t.getHours(),0)),u.val(r.b(e.getHours(),0))}(),s.blur((function(){h(s,a),f()})),a.blur((function(){h(s,a),f()})),l.blur((function(){h(l,u),f()})),u.blur((function(){h(l,u),f()})),r.g(".form input,textarea,select"),c.click((function(){if(d.text(""),$(".form").addClass("submitted"),$(".form :invalid").length>0)d.text("Please, fill required fields");else{if(!v())return;!function(){var t=n.a("evt-types"),e=$("#event-type").val();-1===$.inArray(e,t)&&t.push(e),n.b("evt-types",t)}(),t=n.a("events"),e={},$(".form input,textarea:visible").not(".date,.time").each((function(){e[$(this).attr("id")]=$(this).val(),e.uid=r.f()})),e["event-start"]=o($(".form .event-start")),e["event-end"]=o($(".form .event-end")),t.push(e),n.b("events",t),location.href="events.html"}var t,e;return!1}))}))},function(t,e){var i;i=jQuery,EditableSelect=function(t,e){this.options=e,this.$select=i(t),this.$input=i('<input type="text" autocomplete="off">'),this.$list=i('<ul class="es-list">'),this.utility=new EditableSelectUtility(this),["focus","manual"].indexOf(this.options.trigger)<0&&(this.options.trigger="focus"),["default","fade","slide"].indexOf(this.options.effects)<0&&(this.options.effects="default"),isNaN(this.options.duration)&&["fast","slow"].indexOf(this.options.duration)<0&&(this.options.duration="fast"),this.$select.replaceWith(this.$input),this.$list.appendTo(this.options.appendTo||this.$input.parent()),this.utility.initialize(),this.utility.initializeList(),this.utility.initializeInput(),this.utility.trigger("created")},EditableSelect.DEFAULTS={filter:!0,effects:"default",duration:"fast",trigger:"focus"},EditableSelect.prototype.filter=function(){var t=0,e=this.$input.val().toLowerCase().trim();this.$list.find("li").addClass("es-visible").show(),this.options.filter&&(t=this.$list.find("li").filter((function(t,n){return i(n).text().toLowerCase().indexOf(e)<0})).hide().removeClass("es-visible").length,this.$list.find("li").length==t&&this.hide())},EditableSelect.prototype.show=function(){if(this.$list.css({top:this.$input.position().top+this.$input.outerHeight()-1,left:this.$input.position().left,width:this.$input.outerWidth()}),!this.$list.is(":visible")&&this.$list.find("li.es-visible").length>0){var t={default:"show",fade:"fadeIn",slide:"slideDown"}[this.options.effects];this.utility.trigger("show"),this.$input.addClass("open"),this.$list[t](this.options.duration,i.proxy(this.utility.trigger,this.utility,"shown"))}},EditableSelect.prototype.hide=function(){var t={default:"hide",fade:"fadeOut",slide:"slideUp"}[this.options.effects];this.utility.trigger("hide"),this.$input.removeClass("open"),this.$list[t](this.options.duration,i.proxy(this.utility.trigger,this.utility,"hidden"))},EditableSelect.prototype.select=function(t){this.$list.has(t)&&t.is("li.es-visible:not([disabled])")&&(this.$input.val(t.text()),this.options.filter&&this.hide(),this.filter(),this.utility.trigger("select",t))},EditableSelect.prototype.add=function(t,e,n,r){var o=i("<li>").html(t),s=i("<option>").text(t),l=this.$list.find("li").length;0==(e=isNaN(e)?l:Math.min(Math.max(0,e),l))?(this.$list.prepend(o),this.$select.prepend(s)):(this.$list.find("li").eq(e-1).after(o),this.$select.find("option").eq(e-1).after(s)),this.utility.setAttributes(o,n,r),this.utility.setAttributes(s,n,r),this.filter()},EditableSelect.prototype.remove=function(t){var e=this.$list.find("li").length;t=isNaN(t)?e:Math.min(Math.max(0,t),e-1),this.$list.find("li").eq(t).remove(),this.$select.find("option").eq(t).remove(),this.filter()},EditableSelect.prototype.clear=function(){this.$list.find("li").remove(),this.$select.find("option").remove(),this.filter()},EditableSelect.prototype.destroy=function(){this.$list.off("mousemove mousedown mouseup"),this.$input.off("focus blur input keydown"),this.$input.replaceWith(this.$select),this.$list.remove(),this.$select.removeData("editable-select")},EditableSelectUtility=function(t){this.es=t},EditableSelectUtility.prototype.initialize=function(){var t=this;t.setAttributes(t.es.$input,t.es.$select[0].attributes,t.es.$select.data()),t.es.$input.addClass("es-input").data("editable-select",t.es),t.es.$select.find("option").each((function(e,n){var r=i(n).remove();t.es.add(r.text(),e,n.attributes,r.data()),r.attr("selected")&&t.es.$input.val(r.text())})),t.es.filter()},EditableSelectUtility.prototype.initializeList=function(){var t=this;t.es.$list.on("mousemove","li:not([disabled])",(function(){t.es.$list.find(".selected").removeClass("selected"),i(this).addClass("selected")})).on("mousedown","li",(function(e){i(this).is("[disabled]")?e.preventDefault():t.es.select(i(this))})).on("mouseup",(function(){t.es.$list.find("li.selected").removeClass("selected")}))},EditableSelectUtility.prototype.initializeInput=function(){var t=this;switch(this.es.options.trigger){default:case"focus":t.es.$input.on("focus",i.proxy(t.es.show,t.es)).on("blur",i.proxy(t.es.hide,t.es));break;case"manual":}t.es.$input.on("input keydown",(function(e){switch(e.keyCode){case 38:var i=(n=t.es.$list.find("li.es-visible:not([disabled])")).index(n.filter("li.selected"));t.highlight(i-1),e.preventDefault();break;case 40:var n;i=(n=t.es.$list.find("li.es-visible:not([disabled])")).index(n.filter("li.selected")),t.highlight(i+1),e.preventDefault();break;case 13:t.es.$list.is(":visible")&&(t.es.select(t.es.$list.find("li.selected")),e.preventDefault());break;case 9:case 27:t.es.hide();break;default:t.es.filter(),t.highlight(0)}}))},EditableSelectUtility.prototype.highlight=function(t){var e=this;e.es.show(),setTimeout((function(){var i=e.es.$list.find("li.es-visible"),n=e.es.$list.find("li.selected").removeClass("selected"),r=i.index(n);if(i.length>0){var o=(i.length+t)%i.length,s=i.eq(o),l=s.position().top;s.addClass("selected"),o<r&&l<0&&e.es.$list.scrollTop(e.es.$list.scrollTop()+l),o>r&&l+s.outerHeight()>e.es.$list.outerHeight()&&e.es.$list.scrollTop(e.es.$list.scrollTop()+s.outerHeight()+2*(l-e.es.$list.outerHeight()))}}))},EditableSelectUtility.prototype.setAttributes=function(t,e,n){i.each(e||{},(function(e,i){t.attr(i.name,i.value)})),t.data(n)},EditableSelectUtility.prototype.trigger=function(t){var e=Array.prototype.slice.call(arguments,1),i=[t+".editable-select"];i.push(e),this.es.$select.trigger.apply(this.es.$select,i),this.es.$input.trigger.apply(this.es.$input,i)},Plugin=function(t){var e=Array.prototype.slice.call(arguments,1);return this.each((function(){var n=i(this),r=n.data("editable-select"),o=i.extend({},EditableSelect.DEFAULTS,n.data(),"object"==typeof t&&t);r||(r=new EditableSelect(this,o)),"string"==typeof t&&r[t].apply(r,e)}))},i.fn.editableSelect=Plugin,i.fn.editableSelect.Constructor=EditableSelect},function(t,e,i){var n=i(12);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(3)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,i){(t.exports=i(2)(!1)).push([t.i,"/**\n * jQuery Editable Select\n * Indri Muska <indrimuska@gmail.com>\n *\n * Source on GitHub @ https://github.com/indrimuska/jquery-editable-select\n */\n\ninput.es-input { padding-right: 20px !important; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAADJEc7MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAG2YAABzjgAA4DIAAIM2AAB5CAAAxgwAADT6AAAgbL5TJ5gAAABGSURBVHjaYvz//z8DOYCJgUzA0tnZidPK8vJyRpw24pLEpwnuVHRFhDQxMDAwMPz//x+OOzo6/iPz8WFGuocqAAAA//8DAD/sORHYg7kaAAAAAElFTkSuQmCC) right center no-repeat; }\ninput.es-input.open {\n\t-webkit-border-bottom-left-radius: 0; -moz-border-radius-bottomleft: 0; border-bottom-left-radius: 0;\n\t-webkit-border-bottom-right-radius: 0; -moz-border-radius-bottomright: 0; border-bottom-right-radius: 0; }\n.es-list { position: absolute; padding: 0; margin: 0; border: 1px solid #d1d1d1; display: none; z-index: 1000; background: #fff; max-height: 160px; overflow-y: auto;\n\t-moz-box-shadow: 0 2px 3px #ccc; -webkit-box-shadow: 0 2px 3px #ccc; box-shadow: 0 2px 3px #ccc; }\n.es-list li { display: block; padding: 5px 10px; margin: 0; }\n.es-list li.selected { background: #f3f3f3; }\n.es-list li[disabled] { opacity: .5; }",""])},function(t,e,i){var n=i(14);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(3)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,i){(t.exports=i(2)(!1)).push([t.i,"/*base rules*/\n\nsection.form .lbl {\n    width: 15%;\n    display: inline-block;\n}\n\nsection.form .date {\n    width: 40%;\n}\n\nsection.form .time {\n    width: 23%;\n}\n\n\n/*concrete elements rules*/\n.event-end input{\n    vertical-align: top;\n}\n\n.event-end .lbl {\n    margin-top: 0.15em;\n}\n",""])}]);