/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/new-event.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/jquery-editable-select/dist/jquery-editable-select.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/jquery-editable-select/dist/jquery-editable-select.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\n * jQuery Editable Select\n * Indri Muska <indrimuska@gmail.com>\n *\n * Source on GitHub @ https://github.com/indrimuska/jquery-editable-select\n */\n\ninput.es-input { padding-right: 20px !important; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAADJEc7MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAG2YAABzjgAA4DIAAIM2AAB5CAAAxgwAADT6AAAgbL5TJ5gAAABGSURBVHjaYvz//z8DOYCJgUzA0tnZidPK8vJyRpw24pLEpwnuVHRFhDQxMDAwMPz//x+OOzo6/iPz8WFGuocqAAAA//8DAD/sORHYg7kaAAAAAElFTkSuQmCC) right center no-repeat; }\ninput.es-input.open {\n\t-webkit-border-bottom-left-radius: 0; -moz-border-radius-bottomleft: 0; border-bottom-left-radius: 0;\n\t-webkit-border-bottom-right-radius: 0; -moz-border-radius-bottomright: 0; border-bottom-right-radius: 0; }\n.es-list { position: absolute; padding: 0; margin: 0; border: 1px solid #d1d1d1; display: none; z-index: 1000; background: #fff; max-height: 160px; overflow-y: auto;\n\t-moz-box-shadow: 0 2px 3px #ccc; -webkit-box-shadow: 0 2px 3px #ccc; box-shadow: 0 2px 3px #ccc; }\n.es-list li { display: block; padding: 5px 10px; margin: 0; }\n.es-list li.selected { background: #f3f3f3; }\n.es-list li[disabled] { opacity: .5; }", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/base.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/base.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html, body {\r\n    height: 100%;    \r\n}\r\n\r\nbody {\r\n    font-size: 16px;\r\n}\r\n\r\nheader {\r\n    font-weight: bold;\r\n    font-size: 120%;\r\n    padding: 0 0 1em 0;\r\n}\r\n\r\nsection, header {\r\n    min-width: 220px; \r\n    max-width: 320px;\r\n    margin: 0 auto;\r\n}\r\n\r\ninput, textarea, button {\r\n    width: 100%;\r\n}\r\n\r\n.right {\r\n    float: right;\r\n}\r\n\r\n.col-70 {\r\n    width: 70%;\r\n    display: inline-block;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.lbl-tip {\r\n    color:grey;\r\n    font-size: small;\r\n}\r\n\r\nsection.form .opt-lbl-row {\r\n    padding-bottom: 0.5em;\r\n}\r\n\r\nsection.form label {\r\n    display: block;\r\n    padding: 0 0 1em 0;    \r\n}\r\n\r\n/*validation*/\r\n.submitted :invalid, .invalid {\r\n    border: 1px dashed red;\r\n    background:  rgb(252, 174, 174, 0.2) \r\n}\r\n\r\n.err {\r\n    color: red;\r\n    font-size: small;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/new-event.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/new-event.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*base rules*/\r\n\r\nsection.form .lbl {\r\n    width: 15%;\r\n    display: inline-block;\r\n}\r\n\r\nsection.form .date {\r\n    width: 40%;\r\n}\r\n\r\nsection.form .time {\r\n    width: 23%;\r\n}\r\n\r\n\r\n/*concrete elements rules*/\r\n.event-end input{\r\n    vertical-align: top;\r\n}\r\n\r\n.event-end .lbl {\r\n    margin-top: 0.15em;\r\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/jquery-editable-select/dist/jquery-editable-select.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/jquery-editable-select/dist/jquery-editable-select.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./jquery-editable-select.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/jquery-editable-select/dist/jquery-editable-select.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/jquery-editable-select/dist/jquery-editable-select.min.js":
/*!********************************************************************************!*\
  !*** ./node_modules/jquery-editable-select/dist/jquery-editable-select.min.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! jQuery Editable Select - v2.2.5 - https://github.com/indrimuska/jquery-editable-select - (c) 2016 Indri Muska - MIT */
+function(a){EditableSelect=function(b,c){this.options=c,this.$select=a(b),this.$input=a('<input type="text" autocomplete="off">'),this.$list=a('<ul class="es-list">'),this.utility=new EditableSelectUtility(this),["focus","manual"].indexOf(this.options.trigger)<0&&(this.options.trigger="focus"),["default","fade","slide"].indexOf(this.options.effects)<0&&(this.options.effects="default"),isNaN(this.options.duration)&&["fast","slow"].indexOf(this.options.duration)<0&&(this.options.duration="fast"),this.$select.replaceWith(this.$input),this.$list.appendTo(this.options.appendTo||this.$input.parent()),this.utility.initialize(),this.utility.initializeList(),this.utility.initializeInput(),this.utility.trigger("created")},EditableSelect.DEFAULTS={filter:!0,effects:"default",duration:"fast",trigger:"focus"},EditableSelect.prototype.filter=function(){var b=0,c=this.$input.val().toLowerCase().trim();this.$list.find("li").addClass("es-visible").show(),this.options.filter&&(b=this.$list.find("li").filter(function(b,d){return a(d).text().toLowerCase().indexOf(c)<0}).hide().removeClass("es-visible").length,this.$list.find("li").length==b&&this.hide())},EditableSelect.prototype.show=function(){if(this.$list.css({top:this.$input.position().top+this.$input.outerHeight()-1,left:this.$input.position().left,width:this.$input.outerWidth()}),!this.$list.is(":visible")&&this.$list.find("li.es-visible").length>0){var b={"default":"show",fade:"fadeIn",slide:"slideDown"},c=b[this.options.effects];this.utility.trigger("show"),this.$input.addClass("open"),this.$list[c](this.options.duration,a.proxy(this.utility.trigger,this.utility,"shown"))}},EditableSelect.prototype.hide=function(){var b={"default":"hide",fade:"fadeOut",slide:"slideUp"},c=b[this.options.effects];this.utility.trigger("hide"),this.$input.removeClass("open"),this.$list[c](this.options.duration,a.proxy(this.utility.trigger,this.utility,"hidden"))},EditableSelect.prototype.select=function(a){this.$list.has(a)&&a.is("li.es-visible:not([disabled])")&&(this.$input.val(a.text()),this.options.filter&&this.hide(),this.filter(),this.utility.trigger("select",a))},EditableSelect.prototype.add=function(b,c,d,e){var f=a("<li>").html(b),g=a("<option>").text(b),h=this.$list.find("li").length;c=isNaN(c)?h:Math.min(Math.max(0,c),h),0==c?(this.$list.prepend(f),this.$select.prepend(g)):(this.$list.find("li").eq(c-1).after(f),this.$select.find("option").eq(c-1).after(g)),this.utility.setAttributes(f,d,e),this.utility.setAttributes(g,d,e),this.filter()},EditableSelect.prototype.remove=function(a){var b=this.$list.find("li").length;a=isNaN(a)?b:Math.min(Math.max(0,a),b-1),this.$list.find("li").eq(a).remove(),this.$select.find("option").eq(a).remove(),this.filter()},EditableSelect.prototype.clear=function(){this.$list.find("li").remove(),this.$select.find("option").remove(),this.filter()},EditableSelect.prototype.destroy=function(){this.$list.off("mousemove mousedown mouseup"),this.$input.off("focus blur input keydown"),this.$input.replaceWith(this.$select),this.$list.remove(),this.$select.removeData("editable-select")},EditableSelectUtility=function(a){this.es=a},EditableSelectUtility.prototype.initialize=function(){var b=this;b.setAttributes(b.es.$input,b.es.$select[0].attributes,b.es.$select.data()),b.es.$input.addClass("es-input").data("editable-select",b.es),b.es.$select.find("option").each(function(c,d){var e=a(d).remove();b.es.add(e.text(),c,d.attributes,e.data()),e.attr("selected")&&b.es.$input.val(e.text())}),b.es.filter()},EditableSelectUtility.prototype.initializeList=function(){var b=this;b.es.$list.on("mousemove","li:not([disabled])",function(){b.es.$list.find(".selected").removeClass("selected"),a(this).addClass("selected")}).on("mousedown","li",function(c){a(this).is("[disabled]")?c.preventDefault():b.es.select(a(this))}).on("mouseup",function(){b.es.$list.find("li.selected").removeClass("selected")})},EditableSelectUtility.prototype.initializeInput=function(){var b=this;switch(this.es.options.trigger){default:case"focus":b.es.$input.on("focus",a.proxy(b.es.show,b.es)).on("blur",a.proxy(b.es.hide,b.es));break;case"manual":}b.es.$input.on("input keydown",function(a){switch(a.keyCode){case 38:var c=b.es.$list.find("li.es-visible:not([disabled])"),d=c.index(c.filter("li.selected"));b.highlight(d-1),a.preventDefault();break;case 40:var c=b.es.$list.find("li.es-visible:not([disabled])"),d=c.index(c.filter("li.selected"));b.highlight(d+1),a.preventDefault();break;case 13:b.es.$list.is(":visible")&&(b.es.select(b.es.$list.find("li.selected")),a.preventDefault());break;case 9:case 27:b.es.hide();break;default:b.es.filter(),b.highlight(0)}})},EditableSelectUtility.prototype.highlight=function(a){var b=this;b.es.show(),setTimeout(function(){var c=b.es.$list.find("li.es-visible"),d=b.es.$list.find("li.selected").removeClass("selected"),e=c.index(d);if(c.length>0){var f=(c.length+a)%c.length,g=c.eq(f),h=g.position().top;g.addClass("selected"),f<e&&h<0&&b.es.$list.scrollTop(b.es.$list.scrollTop()+h),f>e&&h+g.outerHeight()>b.es.$list.outerHeight()&&b.es.$list.scrollTop(b.es.$list.scrollTop()+g.outerHeight()+2*(h-b.es.$list.outerHeight()))}})},EditableSelectUtility.prototype.setAttributes=function(b,c,d){a.each(c||{},function(a,c){b.attr(c.name,c.value)}),b.data(d)},EditableSelectUtility.prototype.trigger=function(a){var b=Array.prototype.slice.call(arguments,1),c=[a+".editable-select"];c.push(b),this.es.$select.trigger.apply(this.es.$select,c),this.es.$input.trigger.apply(this.es.$input,c)},Plugin=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),e=d.data("editable-select"),f=a.extend({},EditableSelect.DEFAULTS,d.data(),"object"==typeof b&&b);e||(e=new EditableSelect(this,f)),"string"==typeof b&&e[b].apply(e,c)})},a.fn.editableSelect=Plugin,a.fn.editableSelect.Constructor=EditableSelect}(jQuery);

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/css/base.css":
/*!**************************!*\
  !*** ./src/css/base.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./base.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/base.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/new-event.css":
/*!*******************************!*\
  !*** ./src/css/new-event.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./new-event.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/new-event.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/lib/common.js":
/*!******************************!*\
  !*** ./src/js/lib/common.js ***!
  \******************************/
/*! exports provided: isIE, removePlaceholders, formatDate, formatTime, uniqId, uniqArr, hash, validateOnBlur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return isIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePlaceholders", function() { return removePlaceholders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqId", function() { return uniqId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqArr", function() { return uniqArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateOnBlur", function() { return validateOnBlur; });
function isIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  return (msie > 0 || (/Trident\/7\./).test(ua) || document.documentMode == 11);
}

function removePlaceholders() {
  $('[placeholder]:not(.date,.time)').each(function() {    
    var ph = $(this).attr('placeholder');
    this.removeAttribute('placeholder');
    
    var isOpt = ph.indexOf('[optional]') > 0;
    if (isOpt) {
      ph = ph.replace('[optional]','').trim();
    }            
    var lbl = '<div>' + ph + ':</div>';
    if (isOpt) {
      lbl = lbl + '<span class="lbl-tip">optional</span>';
    }
    $(this).before(lbl);
  });
}

function formatDate(dt) {
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var day = dt.getDate();
    return year + '-' + (month > 9 ? month : '0' + month) + '-' + (day > 9 ? day : '0' + day);
  }

function formatTime(h, m) {
    return (h > 9 ? h : '0' + h) + ':' + (m > 9 ? m : '0' + m);
}

function uniqId() {
  return Math.round(new Date().getTime() + (Math.random() * 100));
}

function uniqArr(a) {
  var seen = {};
  return a.filter(function(item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

function hexString(buffer) {
  // convert hash to byte array
  var byteArray = new Uint8Array(buffer); 
  var hashArray = [].slice.call(byteArray);
  // convert bytes to hex string
  var hashHex = hashArray.map(function(value) {
    return ('00' + value.toString(16)).slice(-2);
  });
  return hashHex.join('');
}

//not for long strings
function utf8encode_ie(str) {
  var strUtf8 = unescape(encodeURIComponent(str));
  var arr = new Uint8Array(strUtf8.length);
  for (var i = 0; i < strUtf8.length; i++) {
      arr[i] = strUtf8.charCodeAt(i);
  }
  return arr;
}

function textEncode(msg) {
  if (window.TextEncoder) {
    return new TextEncoder('utf-8').encode(msg);
  }
  //for IE:
  return utf8encode_ie(msg);
}

function hash(message) {
  const data = textEncode(message);
  
  var cryptoObj = window.crypto || window.msCrypto; // IE11
  var digest = cryptoObj.subtle.digest('SHA-256', data);
  
  if (digest.oncomplete !== undefined) { //IE11
    var res = '';
    setTimeout(function() { //gets result synchronously
      res = hexString(digest.result);}, 10); 
    return res;
  } 
  else { //all except IE
    return digest.then(function(value){
      return hexString(value);
    });    
  }  
}

function validateOnBlur(selector) {    
  $(selector).filter(':visible')
    .blur(function () {
      if (this.checkValidity())
        $(this).removeClass("invalid");
      else
        $(this).addClass("invalid");
    });
  }



/***/ }),

/***/ "./src/js/lib/estorage.js":
/*!********************************!*\
  !*** ./src/js/lib/estorage.js ***!
  \********************************/
/*! exports provided: supports_local_storage, get_from_storage, save_to_storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supports_local_storage", function() { return supports_local_storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_from_storage", function() { return get_from_storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save_to_storage", function() { return save_to_storage; });
//for testing page as local file in IE, add file://127.0.0.1/ to trusted sites and use url file://127.0.0.1/c$/pathtofile/file.html

function supports_local_storage() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e){
      return false;
    }
}
  
function get_from_storage(itemName) {
    var json = localStorage.getItem(itemName);
    var items = [];
    if (json !== undefined && json !== null && json.length !== 0)
        items = JSON.parse(json);

    return items;
}

function save_to_storage(itemName, obj) {
    localStorage.setItem(itemName, JSON.stringify(obj));
}



/***/ }),

/***/ "./src/js/new-event.js":
/*!*****************************!*\
  !*** ./src/js/new-event.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_editable_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-editable-select */ "./node_modules/jquery-editable-select/dist/jquery-editable-select.min.js");
/* harmony import */ var jquery_editable_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_editable_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_estorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/estorage.js */ "./src/js/lib/estorage.js");
/* harmony import */ var _lib_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/common.js */ "./src/js/lib/common.js");
//The import and export statements have been standardized in ES2015. Although they are not supported in most browsers yet, webpack does support them out of the box.




__webpack_require__(/*! jquery-editable-select/dist/jquery-editable-select.css */ "./node_modules/jquery-editable-select/dist/jquery-editable-select.css");
__webpack_require__(/*! ../css/base.css */ "./src/css/base.css");
__webpack_require__(/*! ../css/new-event.css */ "./src/css/new-event.css");

//help functions
function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

function checkType() {  
  var types = _lib_estorage_js__WEBPACK_IMPORTED_MODULE_1__["get_from_storage"]('evt-types');
  var tested = $("#event-type").val();
  if ($.inArray(tested, types) === -1)
    types.push(tested);

  _lib_estorage_js__WEBPACK_IMPORTED_MODULE_1__["save_to_storage"]('evt-types', types);
}

function composeDatetime(parent) {
  var d = parent.find(".date").first().val();
  var t = parent.find(".time").first().val();
  return d + "T" + t + ":00";
}

function saveEventDetails() {
  var events = _lib_estorage_js__WEBPACK_IMPORTED_MODULE_1__["get_from_storage"]('events');
  var evt = {};
  $(".form input,textarea:visible").not(".date,.time").each(function () {
    evt[$(this).attr('id')] = $(this).val();
    evt["uid"] = _lib_common_js__WEBPACK_IMPORTED_MODULE_2__["uniqId"]();
  });
  
  //dates
  evt["event-start"] = composeDatetime($(".form .event-start"));
  evt["event-end"] = composeDatetime($(".form .event-end"));

  events.push(evt);
  _lib_estorage_js__WEBPACK_IMPORTED_MODULE_1__["save_to_storage"]('events', events);
}




//on load
$(function () {
  var eType = $('#event-type');  

  var startDInput = $('.event-start .date');
  var endDInput = $('.event-end .date');
  var startTInput = $('.event-start .time');
  var endTInput = $('.event-end .time');

  var submit = $('#submit');
  var errmsg = $("#err-msg");

  //set event type options
  if (checkStorage())
    fillEventTypes(eType);

  eType.editableSelect();  

  //for IE (placeholder disappears on focus): change placeholders to labels
  if (_lib_common_js__WEBPACK_IMPORTED_MODULE_2__["isIE"]()) {   
    $('#event-type.es-input').before('<span>Choose or enter event type:</span>');
    _lib_common_js__WEBPACK_IMPORTED_MODULE_2__["removePlaceholders"]();
  }
  else { //just add a placeholder for a created element
    $('#event-type.es-input').attr('placeholder', 'Choose or enter event type');   
  }

  setDefaultDateTime();
  setDateTimeCheckers();

  //validate on blur
  _lib_common_js__WEBPACK_IMPORTED_MODULE_2__["validateOnBlur"]('.form input,textarea,select');  

  //validate and save event
  submit.click(function () {
    errmsg.text("");
    $(".form").addClass("submitted");

    if ($(".form :invalid").length > 0) {
      errmsg.text("Please, fill required fields");
    }
    else {
      if (!checkStorage())
        return;

      checkType();
      saveEventDetails();
      location.href = 'events.html';
    }

    return false;
  });

  /*********functions*****************/
  function fillEventTypes(el) {
    var types = _lib_estorage_js__WEBPACK_IMPORTED_MODULE_1__["get_from_storage"]('evt-types');
    $.each(types, function (i, t) {
      el.append($("<option></option>")
        .attr("value", t)
        .text(t));
    });
  }

  function setDefaultDateTime() {
    var start = new Date();
    var end = new Date();
    start.setHours(start.getHours() + 1); //next hour for default event start time
    end.setHours(end.getHours() + 2);

    var frmStart = _lib_common_js__WEBPACK_IMPORTED_MODULE_2__["formatDate"](start);
    startDInput.val(frmStart).attr('min', frmStart);
    endDInput.val(_lib_common_js__WEBPACK_IMPORTED_MODULE_2__["formatDate"](end)).attr('min', frmStart);
    startTInput.val(_lib_common_js__WEBPACK_IMPORTED_MODULE_2__["formatTime"](start.getHours(), 0));
    endTInput.val(_lib_common_js__WEBPACK_IMPORTED_MODULE_2__["formatTime"](end.getHours(), 0));
  }

  function setDateTimeCheckers() {
    startDInput.blur(function () {
      checkMinValue(startDInput, startTInput);
      checkEndDatetime();
    });

    startTInput.blur(function () {
      checkMinValue(startDInput, startTInput);
      checkEndDatetime();
    });

    endDInput.blur(function () {
      checkMinValue(endDInput, endTInput);
      checkEndDatetime();
    });

    endTInput.blur(function () {
      checkMinValue(endDInput, endTInput);
      checkEndDatetime();
    });
  }
  function checkEndDatetime() {
    var dtStart = getAndFixDateFrom(startDInput, startTInput);
    var dtEnd = getAndFixDateFrom(endDInput, endTInput);

    if (dtEnd !== undefined && dtEnd < dtStart) {
      dtEnd = dtStart;
      var frmEnd = _lib_common_js__WEBPACK_IMPORTED_MODULE_2__["formatDate"](dtEnd);
      endDInput.val(frmEnd).attr('min', _lib_common_js__WEBPACK_IMPORTED_MODULE_2__["formatDate"](dtStart));
      endTInput.val(_lib_common_js__WEBPACK_IMPORTED_MODULE_2__["formatTime"](dtEnd.getHours(), dtEnd.getMinutes()));
    }
  }

  function getAndFixDateFrom(dateInput, timeInput) {
    var dt = new Date(dateInput.val());

    if (!isValidDate(dt)) {
      if (dateInput.prop('required')) {
        dt = new Date();
        dt.setMinutes(dt.getMinutes() + 1);
        dateInput.val(_lib_common_js__WEBPACK_IMPORTED_MODULE_2__["formatDate"](dt));
      }
      else {
        dt = undefined;
        dateInput.val('');
      }
    }

    var t = (timeInput.val() === '' || timeInput.val() === undefined) ? [0, 0] : timeInput.val().split(':');
    if (t.length != 2 || t[0].length != 2 || t[1].length != 2) {
      if (timeInput.prop('required')) {
        timeInput.val(_lib_common_js__WEBPACK_IMPORTED_MODULE_2__["formatTime"](0, 0));
      }
      else {
        timeInput.val('');
      }
      t = [0, 0];
    }
    if (dt !== undefined)
      dt.setHours(t[0], t[1]);

    return dt;
  }

  function checkMinValue(dateInput, timeInput) {
    var now = new Date();
    var dt = getAndFixDateFrom(dateInput, timeInput);
    if (dt !== undefined && dt < now) {
      dateInput.val(_lib_common_js__WEBPACK_IMPORTED_MODULE_2__["formatDate"](now));
      timeInput.val(_lib_common_js__WEBPACK_IMPORTED_MODULE_2__["formatTime"](now.getHours(), now.getMinutes()));
    }
  }

  function checkStorage() {
    if (!_lib_estorage_js__WEBPACK_IMPORTED_MODULE_1__["supports_local_storage"]()) {
      errmsg.text("Please, try another browser");
      return false;
    }
    return true;
  }
  
});


/***/ })

/******/ });