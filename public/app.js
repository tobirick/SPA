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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.View = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handlebars = __webpack_require__(4);

var _handlebars2 = _interopRequireDefault(_handlebars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var myTemplate = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./index.handlebars\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var View = exports.View = function () {
    function View() {
        _classCallCheck(this, View);
    }

    _createClass(View, null, [{
        key: 'render',
        value: async function render(view) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            document.getElementById('app').innerHTML = myTemplate(data);
        }
    }]);

    return View;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = exports.Controller = function Controller() {
    _classCallCheck(this, Controller);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _View = __webpack_require__(0);

var _Router = __webpack_require__(6);

var _controllers = __webpack_require__(7);

window.onload = function () {
    console.log("App is running");
    init();
};

var domElement = document.getElementById('app');

var init = function init() {
    var router = new _Router.Router();

    var homeController = new _controllers.controllers.HomeController();
    router.addRoute('home', homeController.test);

    var errorController = new _controllers.controllers.ErrorController();
    router.addRoute('*', errorController.test);

    router.checkRoute();
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**!

 @license
 handlebars v4.0.11

Copyright (C) 2011-2017 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["Handlebars"] = factory();else root["Handlebars"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};

			/******/ // The require function
			/******/function __webpack_require__(moduleId) {

				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;

				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };

				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

				/******/ // Flag the module as loaded
				/******/module.loaded = true;

				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}

			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;

			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;

			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";

			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;

			var _handlebarsRuntime = __webpack_require__(2);

			var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

			// Compiler imports

			var _handlebarsCompilerAst = __webpack_require__(35);

			var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

			var _handlebarsCompilerBase = __webpack_require__(36);

			var _handlebarsCompilerCompiler = __webpack_require__(41);

			var _handlebarsCompilerJavascriptCompiler = __webpack_require__(42);

			var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

			var _handlebarsCompilerVisitor = __webpack_require__(39);

			var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

			var _handlebarsNoConflict = __webpack_require__(34);

			var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

			var _create = _handlebarsRuntime2['default'].create;
			function create() {
				var hb = _create();

				hb.compile = function (input, options) {
					return _handlebarsCompilerCompiler.compile(input, options, hb);
				};
				hb.precompile = function (input, options) {
					return _handlebarsCompilerCompiler.precompile(input, options, hb);
				};

				hb.AST = _handlebarsCompilerAst2['default'];
				hb.Compiler = _handlebarsCompilerCompiler.Compiler;
				hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
				hb.Parser = _handlebarsCompilerBase.parser;
				hb.parse = _handlebarsCompilerBase.parse;

				return hb;
			}

			var inst = create();
			inst.create = create;

			_handlebarsNoConflict2['default'](inst);

			inst.Visitor = _handlebarsCompilerVisitor2['default'];

			inst['default'] = inst;

			exports['default'] = inst;
			module.exports = exports['default'];

			/***/
		},
		/* 1 */
		/***/function (module, exports) {

			"use strict";

			exports["default"] = function (obj) {
				return obj && obj.__esModule ? obj : {
					"default": obj
				};
			};

			exports.__esModule = true;

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireWildcard = __webpack_require__(3)['default'];

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;

			var _handlebarsBase = __webpack_require__(4);

			var base = _interopRequireWildcard(_handlebarsBase);

			// Each of these augment the Handlebars object. No need to setup here.
			// (This is done to easily share code between commonjs and browse envs)

			var _handlebarsSafeString = __webpack_require__(21);

			var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

			var _handlebarsException = __webpack_require__(6);

			var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

			var _handlebarsUtils = __webpack_require__(5);

			var Utils = _interopRequireWildcard(_handlebarsUtils);

			var _handlebarsRuntime = __webpack_require__(22);

			var runtime = _interopRequireWildcard(_handlebarsRuntime);

			var _handlebarsNoConflict = __webpack_require__(34);

			var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

			// For compatibility and usage outside of module systems, make the Handlebars object a namespace
			function create() {
				var hb = new base.HandlebarsEnvironment();

				Utils.extend(hb, base);
				hb.SafeString = _handlebarsSafeString2['default'];
				hb.Exception = _handlebarsException2['default'];
				hb.Utils = Utils;
				hb.escapeExpression = Utils.escapeExpression;

				hb.VM = runtime;
				hb.template = function (spec) {
					return runtime.template(spec, hb);
				};

				return hb;
			}

			var inst = create();
			inst.create = create;

			_handlebarsNoConflict2['default'](inst);

			inst['default'] = inst;

			exports['default'] = inst;
			module.exports = exports['default'];

			/***/
		},
		/* 3 */
		/***/function (module, exports) {

			"use strict";

			exports["default"] = function (obj) {
				if (obj && obj.__esModule) {
					return obj;
				} else {
					var newObj = {};

					if (obj != null) {
						for (var key in obj) {
							if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
						}
					}

					newObj["default"] = obj;
					return newObj;
				}
			};

			exports.__esModule = true;

			/***/
		},
		/* 4 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;
			exports.HandlebarsEnvironment = HandlebarsEnvironment;

			var _utils = __webpack_require__(5);

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			var _helpers = __webpack_require__(10);

			var _decorators = __webpack_require__(18);

			var _logger = __webpack_require__(20);

			var _logger2 = _interopRequireDefault(_logger);

			var VERSION = '4.0.11';
			exports.VERSION = VERSION;
			var COMPILER_REVISION = 7;

			exports.COMPILER_REVISION = COMPILER_REVISION;
			var REVISION_CHANGES = {
				1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
				2: '== 1.0.0-rc.3',
				3: '== 1.0.0-rc.4',
				4: '== 1.x.x',
				5: '== 2.0.0-alpha.x',
				6: '>= 2.0.0-beta.1',
				7: '>= 4.0.0'
			};

			exports.REVISION_CHANGES = REVISION_CHANGES;
			var objectType = '[object Object]';

			function HandlebarsEnvironment(helpers, partials, decorators) {
				this.helpers = helpers || {};
				this.partials = partials || {};
				this.decorators = decorators || {};

				_helpers.registerDefaultHelpers(this);
				_decorators.registerDefaultDecorators(this);
			}

			HandlebarsEnvironment.prototype = {
				constructor: HandlebarsEnvironment,

				logger: _logger2['default'],
				log: _logger2['default'].log,

				registerHelper: function registerHelper(name, fn) {
					if (_utils.toString.call(name) === objectType) {
						if (fn) {
							throw new _exception2['default']('Arg not supported with multiple helpers');
						}
						_utils.extend(this.helpers, name);
					} else {
						this.helpers[name] = fn;
					}
				},
				unregisterHelper: function unregisterHelper(name) {
					delete this.helpers[name];
				},

				registerPartial: function registerPartial(name, partial) {
					if (_utils.toString.call(name) === objectType) {
						_utils.extend(this.partials, name);
					} else {
						if (typeof partial === 'undefined') {
							throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
						}
						this.partials[name] = partial;
					}
				},
				unregisterPartial: function unregisterPartial(name) {
					delete this.partials[name];
				},

				registerDecorator: function registerDecorator(name, fn) {
					if (_utils.toString.call(name) === objectType) {
						if (fn) {
							throw new _exception2['default']('Arg not supported with multiple decorators');
						}
						_utils.extend(this.decorators, name);
					} else {
						this.decorators[name] = fn;
					}
				},
				unregisterDecorator: function unregisterDecorator(name) {
					delete this.decorators[name];
				}
			};

			var log = _logger2['default'].log;

			exports.log = log;
			exports.createFrame = _utils.createFrame;
			exports.logger = _logger2['default'];

			/***/
		},
		/* 5 */
		/***/function (module, exports) {

			'use strict';

			exports.__esModule = true;
			exports.extend = extend;
			exports.indexOf = indexOf;
			exports.escapeExpression = escapeExpression;
			exports.isEmpty = isEmpty;
			exports.createFrame = createFrame;
			exports.blockParams = blockParams;
			exports.appendContextPath = appendContextPath;
			var escape = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#x27;',
				'`': '&#x60;',
				'=': '&#x3D;'
			};

			var badChars = /[&<>"'`=]/g,
			    possible = /[&<>"'`=]/;

			function escapeChar(chr) {
				return escape[chr];
			}

			function extend(obj /* , ...source */) {
				for (var i = 1; i < arguments.length; i++) {
					for (var key in arguments[i]) {
						if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
							obj[key] = arguments[i][key];
						}
					}
				}

				return obj;
			}

			var toString = Object.prototype.toString;

			exports.toString = toString;
			// Sourced from lodash
			// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
			/* eslint-disable func-style */
			var isFunction = function isFunction(value) {
				return typeof value === 'function';
			};
			// fallback for older versions of Chrome and Safari
			/* istanbul ignore next */
			if (isFunction(/x/)) {
				exports.isFunction = isFunction = function isFunction(value) {
					return typeof value === 'function' && toString.call(value) === '[object Function]';
				};
			}
			exports.isFunction = isFunction;

			/* eslint-enable func-style */

			/* istanbul ignore next */
			var isArray = Array.isArray || function (value) {
				return value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? toString.call(value) === '[object Array]' : false;
			};

			exports.isArray = isArray;
			// Older IE versions do not directly support indexOf so we must implement our own, sadly.

			function indexOf(array, value) {
				for (var i = 0, len = array.length; i < len; i++) {
					if (array[i] === value) {
						return i;
					}
				}
				return -1;
			}

			function escapeExpression(string) {
				if (typeof string !== 'string') {
					// don't escape SafeStrings, since they're already safe
					if (string && string.toHTML) {
						return string.toHTML();
					} else if (string == null) {
						return '';
					} else if (!string) {
						return string + '';
					}

					// Force a string conversion as this will be done by the append regardless and
					// the regex test will do this transparently behind the scenes, causing issues if
					// an object's to string has escaped characters in it.
					string = '' + string;
				}

				if (!possible.test(string)) {
					return string;
				}
				return string.replace(badChars, escapeChar);
			}

			function isEmpty(value) {
				if (!value && value !== 0) {
					return true;
				} else if (isArray(value) && value.length === 0) {
					return true;
				} else {
					return false;
				}
			}

			function createFrame(object) {
				var frame = extend({}, object);
				frame._parent = object;
				return frame;
			}

			function blockParams(params, ids) {
				params.path = ids;
				return params;
			}

			function appendContextPath(contextPath, id) {
				return (contextPath ? contextPath + '.' : '') + id;
			}

			/***/
		},
		/* 6 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _Object$defineProperty = __webpack_require__(7)['default'];

			exports.__esModule = true;

			var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

			function Exception(message, node) {
				var loc = node && node.loc,
				    line = undefined,
				    column = undefined;
				if (loc) {
					line = loc.start.line;
					column = loc.start.column;

					message += ' - ' + line + ':' + column;
				}

				var tmp = Error.prototype.constructor.call(this, message);

				// Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
				for (var idx = 0; idx < errorProps.length; idx++) {
					this[errorProps[idx]] = tmp[errorProps[idx]];
				}

				/* istanbul ignore else */
				if (Error.captureStackTrace) {
					Error.captureStackTrace(this, Exception);
				}

				try {
					if (loc) {
						this.lineNumber = line;

						// Work around issue under safari where we can't directly set the column value
						/* istanbul ignore next */
						if (_Object$defineProperty) {
							Object.defineProperty(this, 'column', {
								value: column,
								enumerable: true
							});
						} else {
							this.column = column;
						}
					}
				} catch (nop) {
					/* Ignore if the browser is very particular */
				}
			}

			Exception.prototype = new Error();

			exports['default'] = Exception;
			module.exports = exports['default'];

			/***/
		},
		/* 7 */
		/***/function (module, exports, __webpack_require__) {

			module.exports = { "default": __webpack_require__(8), __esModule: true };

			/***/
		},
		/* 8 */
		/***/function (module, exports, __webpack_require__) {

			var $ = __webpack_require__(9);
			module.exports = function defineProperty(it, key, desc) {
				return $.setDesc(it, key, desc);
			};

			/***/
		},
		/* 9 */
		/***/function (module, exports) {

			var $Object = Object;
			module.exports = {
				create: $Object.create,
				getProto: $Object.getPrototypeOf,
				isEnum: {}.propertyIsEnumerable,
				getDesc: $Object.getOwnPropertyDescriptor,
				setDesc: $Object.defineProperty,
				setDescs: $Object.defineProperties,
				getKeys: $Object.keys,
				getNames: $Object.getOwnPropertyNames,
				getSymbols: $Object.getOwnPropertySymbols,
				each: [].forEach
			};

			/***/
		},
		/* 10 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;
			exports.registerDefaultHelpers = registerDefaultHelpers;

			var _helpersBlockHelperMissing = __webpack_require__(11);

			var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

			var _helpersEach = __webpack_require__(12);

			var _helpersEach2 = _interopRequireDefault(_helpersEach);

			var _helpersHelperMissing = __webpack_require__(13);

			var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

			var _helpersIf = __webpack_require__(14);

			var _helpersIf2 = _interopRequireDefault(_helpersIf);

			var _helpersLog = __webpack_require__(15);

			var _helpersLog2 = _interopRequireDefault(_helpersLog);

			var _helpersLookup = __webpack_require__(16);

			var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

			var _helpersWith = __webpack_require__(17);

			var _helpersWith2 = _interopRequireDefault(_helpersWith);

			function registerDefaultHelpers(instance) {
				_helpersBlockHelperMissing2['default'](instance);
				_helpersEach2['default'](instance);
				_helpersHelperMissing2['default'](instance);
				_helpersIf2['default'](instance);
				_helpersLog2['default'](instance);
				_helpersLookup2['default'](instance);
				_helpersWith2['default'](instance);
			}

			/***/
		},
		/* 11 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(5);

			exports['default'] = function (instance) {
				instance.registerHelper('blockHelperMissing', function (context, options) {
					var inverse = options.inverse,
					    fn = options.fn;

					if (context === true) {
						return fn(this);
					} else if (context === false || context == null) {
						return inverse(this);
					} else if (_utils.isArray(context)) {
						if (context.length > 0) {
							if (options.ids) {
								options.ids = [options.name];
							}

							return instance.helpers.each(context, options);
						} else {
							return inverse(this);
						}
					} else {
						if (options.data && options.ids) {
							var data = _utils.createFrame(options.data);
							data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
							options = { data: data };
						}

						return fn(context, options);
					}
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 12 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;

			var _utils = __webpack_require__(5);

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			exports['default'] = function (instance) {
				instance.registerHelper('each', function (context, options) {
					if (!options) {
						throw new _exception2['default']('Must pass iterator to #each');
					}

					var fn = options.fn,
					    inverse = options.inverse,
					    i = 0,
					    ret = '',
					    data = undefined,
					    contextPath = undefined;

					if (options.data && options.ids) {
						contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
					}

					if (_utils.isFunction(context)) {
						context = context.call(this);
					}

					if (options.data) {
						data = _utils.createFrame(options.data);
					}

					function execIteration(field, index, last) {
						if (data) {
							data.key = field;
							data.index = index;
							data.first = index === 0;
							data.last = !!last;

							if (contextPath) {
								data.contextPath = contextPath + field;
							}
						}

						ret = ret + fn(context[field], {
							data: data,
							blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
						});
					}

					if (context && (typeof context === 'undefined' ? 'undefined' : _typeof(context)) === 'object') {
						if (_utils.isArray(context)) {
							for (var j = context.length; i < j; i++) {
								if (i in context) {
									execIteration(i, i, i === context.length - 1);
								}
							}
						} else {
							var priorKey = undefined;

							for (var key in context) {
								if (context.hasOwnProperty(key)) {
									// We're running the iterations one step out of sync so we can detect
									// the last iteration without have to scan the object twice and create
									// an itermediate keys array.
									if (priorKey !== undefined) {
										execIteration(priorKey, i - 1);
									}
									priorKey = key;
									i++;
								}
							}
							if (priorKey !== undefined) {
								execIteration(priorKey, i - 1, true);
							}
						}
					}

					if (i === 0) {
						ret = inverse(this);
					}

					return ret;
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 13 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			exports['default'] = function (instance) {
				instance.registerHelper('helperMissing', function () /* [args, ]options */{
					if (arguments.length === 1) {
						// A missing field in a {{foo}} construct.
						return undefined;
					} else {
						// Someone is actually trying to call something, blow up.
						throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
					}
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 14 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(5);

			exports['default'] = function (instance) {
				instance.registerHelper('if', function (conditional, options) {
					if (_utils.isFunction(conditional)) {
						conditional = conditional.call(this);
					}

					// Default behavior is to render the positive path if the value is truthy and not empty.
					// The `includeZero` option may be set to treat the condtional as purely not empty based on the
					// behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
					if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
						return options.inverse(this);
					} else {
						return options.fn(this);
					}
				});

				instance.registerHelper('unless', function (conditional, options) {
					return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 15 */
		/***/function (module, exports) {

			'use strict';

			exports.__esModule = true;

			exports['default'] = function (instance) {
				instance.registerHelper('log', function () /* message, options */{
					var args = [undefined],
					    options = arguments[arguments.length - 1];
					for (var i = 0; i < arguments.length - 1; i++) {
						args.push(arguments[i]);
					}

					var level = 1;
					if (options.hash.level != null) {
						level = options.hash.level;
					} else if (options.data && options.data.level != null) {
						level = options.data.level;
					}
					args[0] = level;

					instance.log.apply(instance, args);
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 16 */
		/***/function (module, exports) {

			'use strict';

			exports.__esModule = true;

			exports['default'] = function (instance) {
				instance.registerHelper('lookup', function (obj, field) {
					return obj && obj[field];
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 17 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(5);

			exports['default'] = function (instance) {
				instance.registerHelper('with', function (context, options) {
					if (_utils.isFunction(context)) {
						context = context.call(this);
					}

					var fn = options.fn;

					if (!_utils.isEmpty(context)) {
						var data = options.data;
						if (options.data && options.ids) {
							data = _utils.createFrame(options.data);
							data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
						}

						return fn(context, {
							data: data,
							blockParams: _utils.blockParams([context], [data && data.contextPath])
						});
					} else {
						return options.inverse(this);
					}
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 18 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;
			exports.registerDefaultDecorators = registerDefaultDecorators;

			var _decoratorsInline = __webpack_require__(19);

			var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

			function registerDefaultDecorators(instance) {
				_decoratorsInline2['default'](instance);
			}

			/***/
		},
		/* 19 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(5);

			exports['default'] = function (instance) {
				instance.registerDecorator('inline', function (fn, props, container, options) {
					var ret = fn;
					if (!props.partials) {
						props.partials = {};
						ret = function ret(context, options) {
							// Create a new partials stack frame prior to exec.
							var original = container.partials;
							container.partials = _utils.extend({}, original, props.partials);
							var ret = fn(context, options);
							container.partials = original;
							return ret;
						};
					}

					props.partials[options.args[0]] = options.fn;

					return ret;
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 20 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(5);

			var logger = {
				methodMap: ['debug', 'info', 'warn', 'error'],
				level: 'info',

				// Maps a given level value to the `methodMap` indexes above.
				lookupLevel: function lookupLevel(level) {
					if (typeof level === 'string') {
						var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
						if (levelMap >= 0) {
							level = levelMap;
						} else {
							level = parseInt(level, 10);
						}
					}

					return level;
				},

				// Can be overridden in the host environment
				log: function log(level) {
					level = logger.lookupLevel(level);

					if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
						var method = logger.methodMap[level];
						if (!console[method]) {
							// eslint-disable-line no-console
							method = 'log';
						}

						for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
							message[_key - 1] = arguments[_key];
						}

						console[method].apply(console, message); // eslint-disable-line no-console
					}
				}
			};

			exports['default'] = logger;
			module.exports = exports['default'];

			/***/
		},
		/* 21 */
		/***/function (module, exports) {

			// Build out our basic SafeString type
			'use strict';

			exports.__esModule = true;
			function SafeString(string) {
				this.string = string;
			}

			SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
				return '' + this.string;
			};

			exports['default'] = SafeString;
			module.exports = exports['default'];

			/***/
		},
		/* 22 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _Object$seal = __webpack_require__(23)['default'];

			var _interopRequireWildcard = __webpack_require__(3)['default'];

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;
			exports.checkRevision = checkRevision;
			exports.template = template;
			exports.wrapProgram = wrapProgram;
			exports.resolvePartial = resolvePartial;
			exports.invokePartial = invokePartial;
			exports.noop = noop;

			var _utils = __webpack_require__(5);

			var Utils = _interopRequireWildcard(_utils);

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			var _base = __webpack_require__(4);

			function checkRevision(compilerInfo) {
				var compilerRevision = compilerInfo && compilerInfo[0] || 1,
				    currentRevision = _base.COMPILER_REVISION;

				if (compilerRevision !== currentRevision) {
					if (compilerRevision < currentRevision) {
						var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
						    compilerVersions = _base.REVISION_CHANGES[compilerRevision];
						throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
					} else {
						// Use the embedded version info since the runtime doesn't know about this revision yet
						throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
					}
				}
			}

			function template(templateSpec, env) {
				/* istanbul ignore next */
				if (!env) {
					throw new _exception2['default']('No environment passed to template');
				}
				if (!templateSpec || !templateSpec.main) {
					throw new _exception2['default']('Unknown template object: ' + (typeof templateSpec === 'undefined' ? 'undefined' : _typeof(templateSpec)));
				}

				templateSpec.main.decorator = templateSpec.main_d;

				// Note: Using env.VM references rather than local var references throughout this section to allow
				// for external users to override these as psuedo-supported APIs.
				env.VM.checkRevision(templateSpec.compiler);

				function invokePartialWrapper(partial, context, options) {
					if (options.hash) {
						context = Utils.extend({}, context, options.hash);
						if (options.ids) {
							options.ids[0] = true;
						}
					}

					partial = env.VM.resolvePartial.call(this, partial, context, options);
					var result = env.VM.invokePartial.call(this, partial, context, options);

					if (result == null && env.compile) {
						options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
						result = options.partials[options.name](context, options);
					}
					if (result != null) {
						if (options.indent) {
							var lines = result.split('\n');
							for (var i = 0, l = lines.length; i < l; i++) {
								if (!lines[i] && i + 1 === l) {
									break;
								}

								lines[i] = options.indent + lines[i];
							}
							result = lines.join('\n');
						}
						return result;
					} else {
						throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
					}
				}

				// Just add water
				var container = {
					strict: function strict(obj, name) {
						if (!(name in obj)) {
							throw new _exception2['default']('"' + name + '" not defined in ' + obj);
						}
						return obj[name];
					},
					lookup: function lookup(depths, name) {
						var len = depths.length;
						for (var i = 0; i < len; i++) {
							if (depths[i] && depths[i][name] != null) {
								return depths[i][name];
							}
						}
					},
					lambda: function lambda(current, context) {
						return typeof current === 'function' ? current.call(context) : current;
					},

					escapeExpression: Utils.escapeExpression,
					invokePartial: invokePartialWrapper,

					fn: function fn(i) {
						var ret = templateSpec[i];
						ret.decorator = templateSpec[i + '_d'];
						return ret;
					},

					programs: [],
					program: function program(i, data, declaredBlockParams, blockParams, depths) {
						var programWrapper = this.programs[i],
						    fn = this.fn(i);
						if (data || depths || blockParams || declaredBlockParams) {
							programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
						} else if (!programWrapper) {
							programWrapper = this.programs[i] = wrapProgram(this, i, fn);
						}
						return programWrapper;
					},

					data: function data(value, depth) {
						while (value && depth--) {
							value = value._parent;
						}
						return value;
					},
					merge: function merge(param, common) {
						var obj = param || common;

						if (param && common && param !== common) {
							obj = Utils.extend({}, common, param);
						}

						return obj;
					},
					// An empty object to use as replacement for null-contexts
					nullContext: _Object$seal({}),

					noop: env.VM.noop,
					compilerInfo: templateSpec.compiler
				};

				function ret(context) {
					var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

					var data = options.data;

					ret._setup(options);
					if (!options.partial && templateSpec.useData) {
						data = initData(context, data);
					}
					var depths = undefined,
					    blockParams = templateSpec.useBlockParams ? [] : undefined;
					if (templateSpec.useDepths) {
						if (options.depths) {
							depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
						} else {
							depths = [context];
						}
					}

					function main(context /*, options*/) {
						return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
					}
					main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
					return main(context, options);
				}
				ret.isTop = true;

				ret._setup = function (options) {
					if (!options.partial) {
						container.helpers = container.merge(options.helpers, env.helpers);

						if (templateSpec.usePartial) {
							container.partials = container.merge(options.partials, env.partials);
						}
						if (templateSpec.usePartial || templateSpec.useDecorators) {
							container.decorators = container.merge(options.decorators, env.decorators);
						}
					} else {
						container.helpers = options.helpers;
						container.partials = options.partials;
						container.decorators = options.decorators;
					}
				};

				ret._child = function (i, data, blockParams, depths) {
					if (templateSpec.useBlockParams && !blockParams) {
						throw new _exception2['default']('must pass block params');
					}
					if (templateSpec.useDepths && !depths) {
						throw new _exception2['default']('must pass parent depths');
					}

					return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
				};
				return ret;
			}

			function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
				function prog(context) {
					var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

					var currentDepths = depths;
					if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
						currentDepths = [context].concat(depths);
					}

					return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
				}

				prog = executeDecorators(fn, prog, container, depths, data, blockParams);

				prog.program = i;
				prog.depth = depths ? depths.length : 0;
				prog.blockParams = declaredBlockParams || 0;
				return prog;
			}

			function resolvePartial(partial, context, options) {
				if (!partial) {
					if (options.name === '@partial-block') {
						partial = options.data['partial-block'];
					} else {
						partial = options.partials[options.name];
					}
				} else if (!partial.call && !options.name) {
					// This is a dynamic partial that returned a string
					options.name = partial;
					partial = options.partials[partial];
				}
				return partial;
			}

			function invokePartial(partial, context, options) {
				// Use the current closure context to save the partial-block if this partial
				var currentPartialBlock = options.data && options.data['partial-block'];
				options.partial = true;
				if (options.ids) {
					options.data.contextPath = options.ids[0] || options.data.contextPath;
				}

				var partialBlock = undefined;
				if (options.fn && options.fn !== noop) {
					(function () {
						options.data = _base.createFrame(options.data);
						// Wrapper function to get access to currentPartialBlock from the closure
						var fn = options.fn;
						partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
							var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

							// Restore the partial-block from the closure for the execution of the block
							// i.e. the part inside the block of the partial call.
							options.data = _base.createFrame(options.data);
							options.data['partial-block'] = currentPartialBlock;
							return fn(context, options);
						};
						if (fn.partials) {
							options.partials = Utils.extend({}, options.partials, fn.partials);
						}
					})();
				}

				if (partial === undefined && partialBlock) {
					partial = partialBlock;
				}

				if (partial === undefined) {
					throw new _exception2['default']('The partial ' + options.name + ' could not be found');
				} else if (partial instanceof Function) {
					return partial(context, options);
				}
			}

			function noop() {
				return '';
			}

			function initData(context, data) {
				if (!data || !('root' in data)) {
					data = data ? _base.createFrame(data) : {};
					data.root = context;
				}
				return data;
			}

			function executeDecorators(fn, prog, container, depths, data, blockParams) {
				if (fn.decorator) {
					var props = {};
					prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
					Utils.extend(prog, props);
				}
				return prog;
			}

			/***/
		},
		/* 23 */
		/***/function (module, exports, __webpack_require__) {

			module.exports = { "default": __webpack_require__(24), __esModule: true };

			/***/
		},
		/* 24 */
		/***/function (module, exports, __webpack_require__) {

			__webpack_require__(25);
			module.exports = __webpack_require__(30).Object.seal;

			/***/
		},
		/* 25 */
		/***/function (module, exports, __webpack_require__) {

			// 19.1.2.17 Object.seal(O)
			var isObject = __webpack_require__(26);

			__webpack_require__(27)('seal', function ($seal) {
				return function seal(it) {
					return $seal && isObject(it) ? $seal(it) : it;
				};
			});

			/***/
		},
		/* 26 */
		/***/function (module, exports) {

			module.exports = function (it) {
				return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
			};

			/***/
		},
		/* 27 */
		/***/function (module, exports, __webpack_require__) {

			// most Object methods by ES6 should accept primitives
			var $export = __webpack_require__(28),
			    core = __webpack_require__(30),
			    fails = __webpack_require__(33);
			module.exports = function (KEY, exec) {
				var fn = (core.Object || {})[KEY] || Object[KEY],
				    exp = {};
				exp[KEY] = exec(fn);
				$export($export.S + $export.F * fails(function () {
					fn(1);
				}), 'Object', exp);
			};

			/***/
		},
		/* 28 */
		/***/function (module, exports, __webpack_require__) {

			var global = __webpack_require__(29),
			    core = __webpack_require__(30),
			    ctx = __webpack_require__(31),
			    PROTOTYPE = 'prototype';

			var $export = function $export(type, name, source) {
				var IS_FORCED = type & $export.F,
				    IS_GLOBAL = type & $export.G,
				    IS_STATIC = type & $export.S,
				    IS_PROTO = type & $export.P,
				    IS_BIND = type & $export.B,
				    IS_WRAP = type & $export.W,
				    exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
				    target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
				    key,
				    own,
				    out;
				if (IS_GLOBAL) source = name;
				for (key in source) {
					// contains in native
					own = !IS_FORCED && target && key in target;
					if (own && key in exports) continue;
					// export native or passed
					out = own ? target[key] : source[key];
					// prevent global pollution for namespaces
					exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
					// bind timers to global for call from export context
					: IS_BIND && own ? ctx(out, global)
					// wrap global constructors for prevent change them in library
					: IS_WRAP && target[key] == out ? function (C) {
						var F = function F(param) {
							return this instanceof C ? new C(param) : C(param);
						};
						F[PROTOTYPE] = C[PROTOTYPE];
						return F;
						// make static versions for prototype methods
					}(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
					if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
				}
			};
			// type bitmap
			$export.F = 1; // forced
			$export.G = 2; // global
			$export.S = 4; // static
			$export.P = 8; // proto
			$export.B = 16; // bind
			$export.W = 32; // wrap
			module.exports = $export;

			/***/
		},
		/* 29 */
		/***/function (module, exports) {

			// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
			var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
			if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

			/***/
		},
		/* 30 */
		/***/function (module, exports) {

			var core = module.exports = { version: '1.2.6' };
			if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

			/***/
		},
		/* 31 */
		/***/function (module, exports, __webpack_require__) {

			// optional / simple context binding
			var aFunction = __webpack_require__(32);
			module.exports = function (fn, that, length) {
				aFunction(fn);
				if (that === undefined) return fn;
				switch (length) {
					case 1:
						return function (a) {
							return fn.call(that, a);
						};
					case 2:
						return function (a, b) {
							return fn.call(that, a, b);
						};
					case 3:
						return function (a, b, c) {
							return fn.call(that, a, b, c);
						};
				}
				return function () /* ...args */{
					return fn.apply(that, arguments);
				};
			};

			/***/
		},
		/* 32 */
		/***/function (module, exports) {

			module.exports = function (it) {
				if (typeof it != 'function') throw TypeError(it + ' is not a function!');
				return it;
			};

			/***/
		},
		/* 33 */
		/***/function (module, exports) {

			module.exports = function (exec) {
				try {
					return !!exec();
				} catch (e) {
					return true;
				}
			};

			/***/
		},
		/* 34 */
		/***/function (module, exports) {

			/* WEBPACK VAR INJECTION */(function (global) {
				/* global window */
				'use strict';

				exports.__esModule = true;

				exports['default'] = function (Handlebars) {
					/* istanbul ignore next */
					var root = typeof global !== 'undefined' ? global : window,
					    $Handlebars = root.Handlebars;
					/* istanbul ignore next */
					Handlebars.noConflict = function () {
						if (root.Handlebars === Handlebars) {
							root.Handlebars = $Handlebars;
						}
						return Handlebars;
					};
				};

				module.exports = exports['default'];
				/* WEBPACK VAR INJECTION */
			}).call(exports, function () {
				return this;
			}());

			/***/
		},
		/* 35 */
		/***/function (module, exports) {

			'use strict';

			exports.__esModule = true;
			var AST = {
				// Public API used to evaluate derived attributes regarding AST nodes
				helpers: {
					// a mustache is definitely a helper if:
					// * it is an eligible helper, and
					// * it has at least one parameter or hash segment
					helperExpression: function helperExpression(node) {
						return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
					},

					scopedId: function scopedId(path) {
						return (/^\.|this\b/.test(path.original)
						);
					},

					// an ID is simple if it only has one part, and that part is not
					// `..` or `this`.
					simpleId: function simpleId(path) {
						return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
					}
				}
			};

			// Must be exported as an object rather than the root of the module as the jison lexer
			// must modify the object to operate properly.
			exports['default'] = AST;
			module.exports = exports['default'];

			/***/
		},
		/* 36 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			var _interopRequireWildcard = __webpack_require__(3)['default'];

			exports.__esModule = true;
			exports.parse = parse;

			var _parser = __webpack_require__(37);

			var _parser2 = _interopRequireDefault(_parser);

			var _whitespaceControl = __webpack_require__(38);

			var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

			var _helpers = __webpack_require__(40);

			var Helpers = _interopRequireWildcard(_helpers);

			var _utils = __webpack_require__(5);

			exports.parser = _parser2['default'];

			var yy = {};
			_utils.extend(yy, Helpers);

			function parse(input, options) {
				// Just return if an already-compiled AST was passed in.
				if (input.type === 'Program') {
					return input;
				}

				_parser2['default'].yy = yy;

				// Altering the shared object here, but this is ok as parser is a sync operation
				yy.locInfo = function (locInfo) {
					return new yy.SourceLocation(options && options.srcName, locInfo);
				};

				var strip = new _whitespaceControl2['default'](options);
				return strip.accept(_parser2['default'].parse(input));
			}

			/***/
		},
		/* 37 */
		/***/function (module, exports) {

			// File ignored in coverage tests via setting in .istanbul.yml
			/* Jison generated parser */
			"use strict";

			exports.__esModule = true;
			var handlebars = function () {
				var parser = { trace: function trace() {},
					yy: {},
					symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
					terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
					productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
					performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$
					/**/) {

						var $0 = $$.length - 1;
						switch (yystate) {
							case 1:
								return $$[$0 - 1];
								break;
							case 2:
								this.$ = yy.prepareProgram($$[$0]);
								break;
							case 3:
								this.$ = $$[$0];
								break;
							case 4:
								this.$ = $$[$0];
								break;
							case 5:
								this.$ = $$[$0];
								break;
							case 6:
								this.$ = $$[$0];
								break;
							case 7:
								this.$ = $$[$0];
								break;
							case 8:
								this.$ = $$[$0];
								break;
							case 9:
								this.$ = {
									type: 'CommentStatement',
									value: yy.stripComment($$[$0]),
									strip: yy.stripFlags($$[$0], $$[$0]),
									loc: yy.locInfo(this._$)
								};

								break;
							case 10:
								this.$ = {
									type: 'ContentStatement',
									original: $$[$0],
									value: $$[$0],
									loc: yy.locInfo(this._$)
								};

								break;
							case 11:
								this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
								break;
							case 12:
								this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
								break;
							case 13:
								this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
								break;
							case 14:
								this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
								break;
							case 15:
								this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
								break;
							case 16:
								this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
								break;
							case 17:
								this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
								break;
							case 18:
								this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
								break;
							case 19:
								var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
								    program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
								program.chained = true;

								this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

								break;
							case 20:
								this.$ = $$[$0];
								break;
							case 21:
								this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
								break;
							case 22:
								this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
								break;
							case 23:
								this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
								break;
							case 24:
								this.$ = {
									type: 'PartialStatement',
									name: $$[$0 - 3],
									params: $$[$0 - 2],
									hash: $$[$0 - 1],
									indent: '',
									strip: yy.stripFlags($$[$0 - 4], $$[$0]),
									loc: yy.locInfo(this._$)
								};

								break;
							case 25:
								this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
								break;
							case 26:
								this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
								break;
							case 27:
								this.$ = $$[$0];
								break;
							case 28:
								this.$ = $$[$0];
								break;
							case 29:
								this.$ = {
									type: 'SubExpression',
									path: $$[$0 - 3],
									params: $$[$0 - 2],
									hash: $$[$0 - 1],
									loc: yy.locInfo(this._$)
								};

								break;
							case 30:
								this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
								break;
							case 31:
								this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
								break;
							case 32:
								this.$ = yy.id($$[$0 - 1]);
								break;
							case 33:
								this.$ = $$[$0];
								break;
							case 34:
								this.$ = $$[$0];
								break;
							case 35:
								this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
								break;
							case 36:
								this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
								break;
							case 37:
								this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
								break;
							case 38:
								this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
								break;
							case 39:
								this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
								break;
							case 40:
								this.$ = $$[$0];
								break;
							case 41:
								this.$ = $$[$0];
								break;
							case 42:
								this.$ = yy.preparePath(true, $$[$0], this._$);
								break;
							case 43:
								this.$ = yy.preparePath(false, $$[$0], this._$);
								break;
							case 44:
								$$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
								break;
							case 45:
								this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
								break;
							case 46:
								this.$ = [];
								break;
							case 47:
								$$[$0 - 1].push($$[$0]);
								break;
							case 48:
								this.$ = [$$[$0]];
								break;
							case 49:
								$$[$0 - 1].push($$[$0]);
								break;
							case 50:
								this.$ = [];
								break;
							case 51:
								$$[$0 - 1].push($$[$0]);
								break;
							case 58:
								this.$ = [];
								break;
							case 59:
								$$[$0 - 1].push($$[$0]);
								break;
							case 64:
								this.$ = [];
								break;
							case 65:
								$$[$0 - 1].push($$[$0]);
								break;
							case 70:
								this.$ = [];
								break;
							case 71:
								$$[$0 - 1].push($$[$0]);
								break;
							case 78:
								this.$ = [];
								break;
							case 79:
								$$[$0 - 1].push($$[$0]);
								break;
							case 82:
								this.$ = [];
								break;
							case 83:
								$$[$0 - 1].push($$[$0]);
								break;
							case 86:
								this.$ = [];
								break;
							case 87:
								$$[$0 - 1].push($$[$0]);
								break;
							case 90:
								this.$ = [];
								break;
							case 91:
								$$[$0 - 1].push($$[$0]);
								break;
							case 94:
								this.$ = [];
								break;
							case 95:
								$$[$0 - 1].push($$[$0]);
								break;
							case 98:
								this.$ = [$$[$0]];
								break;
							case 99:
								$$[$0 - 1].push($$[$0]);
								break;
							case 100:
								this.$ = [$$[$0]];
								break;
							case 101:
								$$[$0 - 1].push($$[$0]);
								break;
						}
					},
					table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
					defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
					parseError: function parseError(str, hash) {
						throw new Error(str);
					},
					parse: function parse(input) {
						var self = this,
						    stack = [0],
						    vstack = [null],
						    lstack = [],
						    table = this.table,
						    yytext = "",
						    yylineno = 0,
						    yyleng = 0,
						    recovering = 0,
						    TERROR = 2,
						    EOF = 1;
						this.lexer.setInput(input);
						this.lexer.yy = this.yy;
						this.yy.lexer = this.lexer;
						this.yy.parser = this;
						if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
						var yyloc = this.lexer.yylloc;
						lstack.push(yyloc);
						var ranges = this.lexer.options && this.lexer.options.ranges;
						if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
						function popStack(n) {
							stack.length = stack.length - 2 * n;
							vstack.length = vstack.length - n;
							lstack.length = lstack.length - n;
						}
						function lex() {
							var token;
							token = self.lexer.lex() || 1;
							if (typeof token !== "number") {
								token = self.symbols_[token] || token;
							}
							return token;
						}
						var symbol,
						    preErrorSymbol,
						    state,
						    action,
						    a,
						    r,
						    yyval = {},
						    p,
						    len,
						    newState,
						    expected;
						while (true) {
							state = stack[stack.length - 1];
							if (this.defaultActions[state]) {
								action = this.defaultActions[state];
							} else {
								if (symbol === null || typeof symbol == "undefined") {
									symbol = lex();
								}
								action = table[state] && table[state][symbol];
							}
							if (typeof action === "undefined" || !action.length || !action[0]) {
								var errStr = "";
								if (!recovering) {
									expected = [];
									for (p in table[state]) {
										if (this.terminals_[p] && p > 2) {
											expected.push("'" + this.terminals_[p] + "'");
										}
									}if (this.lexer.showPosition) {
										errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
									} else {
										errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
									}
									this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
								}
							}
							if (action[0] instanceof Array && action.length > 1) {
								throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
							}
							switch (action[0]) {
								case 1:
									stack.push(symbol);
									vstack.push(this.lexer.yytext);
									lstack.push(this.lexer.yylloc);
									stack.push(action[1]);
									symbol = null;
									if (!preErrorSymbol) {
										yyleng = this.lexer.yyleng;
										yytext = this.lexer.yytext;
										yylineno = this.lexer.yylineno;
										yyloc = this.lexer.yylloc;
										if (recovering > 0) recovering--;
									} else {
										symbol = preErrorSymbol;
										preErrorSymbol = null;
									}
									break;
								case 2:
									len = this.productions_[action[1]][1];
									yyval.$ = vstack[vstack.length - len];
									yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
									if (ranges) {
										yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
									}
									r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
									if (typeof r !== "undefined") {
										return r;
									}
									if (len) {
										stack = stack.slice(0, -1 * len * 2);
										vstack = vstack.slice(0, -1 * len);
										lstack = lstack.slice(0, -1 * len);
									}
									stack.push(this.productions_[action[1]][0]);
									vstack.push(yyval.$);
									lstack.push(yyval._$);
									newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
									stack.push(newState);
									break;
								case 3:
									return true;
							}
						}
						return true;
					}
				};
				/* Jison generated lexer */
				var lexer = function () {
					var lexer = { EOF: 1,
						parseError: function parseError(str, hash) {
							if (this.yy.parser) {
								this.yy.parser.parseError(str, hash);
							} else {
								throw new Error(str);
							}
						},
						setInput: function setInput(input) {
							this._input = input;
							this._more = this._less = this.done = false;
							this.yylineno = this.yyleng = 0;
							this.yytext = this.matched = this.match = '';
							this.conditionStack = ['INITIAL'];
							this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
							if (this.options.ranges) this.yylloc.range = [0, 0];
							this.offset = 0;
							return this;
						},
						input: function input() {
							var ch = this._input[0];
							this.yytext += ch;
							this.yyleng++;
							this.offset++;
							this.match += ch;
							this.matched += ch;
							var lines = ch.match(/(?:\r\n?|\n).*/g);
							if (lines) {
								this.yylineno++;
								this.yylloc.last_line++;
							} else {
								this.yylloc.last_column++;
							}
							if (this.options.ranges) this.yylloc.range[1]++;

							this._input = this._input.slice(1);
							return ch;
						},
						unput: function unput(ch) {
							var len = ch.length;
							var lines = ch.split(/(?:\r\n?|\n)/g);

							this._input = ch + this._input;
							this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
							//this.yyleng -= len;
							this.offset -= len;
							var oldLines = this.match.split(/(?:\r\n?|\n)/g);
							this.match = this.match.substr(0, this.match.length - 1);
							this.matched = this.matched.substr(0, this.matched.length - 1);

							if (lines.length - 1) this.yylineno -= lines.length - 1;
							var r = this.yylloc.range;

							this.yylloc = { first_line: this.yylloc.first_line,
								last_line: this.yylineno + 1,
								first_column: this.yylloc.first_column,
								last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
							};

							if (this.options.ranges) {
								this.yylloc.range = [r[0], r[0] + this.yyleng - len];
							}
							return this;
						},
						more: function more() {
							this._more = true;
							return this;
						},
						less: function less(n) {
							this.unput(this.match.slice(n));
						},
						pastInput: function pastInput() {
							var past = this.matched.substr(0, this.matched.length - this.match.length);
							return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
						},
						upcomingInput: function upcomingInput() {
							var next = this.match;
							if (next.length < 20) {
								next += this._input.substr(0, 20 - next.length);
							}
							return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
						},
						showPosition: function showPosition() {
							var pre = this.pastInput();
							var c = new Array(pre.length + 1).join("-");
							return pre + this.upcomingInput() + "\n" + c + "^";
						},
						next: function next() {
							if (this.done) {
								return this.EOF;
							}
							if (!this._input) this.done = true;

							var token, match, tempMatch, index, col, lines;
							if (!this._more) {
								this.yytext = '';
								this.match = '';
							}
							var rules = this._currentRules();
							for (var i = 0; i < rules.length; i++) {
								tempMatch = this._input.match(this.rules[rules[i]]);
								if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
									match = tempMatch;
									index = i;
									if (!this.options.flex) break;
								}
							}
							if (match) {
								lines = match[0].match(/(?:\r\n?|\n).*/g);
								if (lines) this.yylineno += lines.length;
								this.yylloc = { first_line: this.yylloc.last_line,
									last_line: this.yylineno + 1,
									first_column: this.yylloc.last_column,
									last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
								this.yytext += match[0];
								this.match += match[0];
								this.matches = match;
								this.yyleng = this.yytext.length;
								if (this.options.ranges) {
									this.yylloc.range = [this.offset, this.offset += this.yyleng];
								}
								this._more = false;
								this._input = this._input.slice(match[0].length);
								this.matched += match[0];
								token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
								if (this.done && this._input) this.done = false;
								if (token) return token;else return;
							}
							if (this._input === "") {
								return this.EOF;
							} else {
								return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
							}
						},
						lex: function lex() {
							var r = this.next();
							if (typeof r !== 'undefined') {
								return r;
							} else {
								return this.lex();
							}
						},
						begin: function begin(condition) {
							this.conditionStack.push(condition);
						},
						popState: function popState() {
							return this.conditionStack.pop();
						},
						_currentRules: function _currentRules() {
							return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
						},
						topState: function topState() {
							return this.conditionStack[this.conditionStack.length - 2];
						},
						pushState: function begin(condition) {
							this.begin(condition);
						} };
					lexer.options = {};
					lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START
					/**/) {

						function strip(start, end) {
							return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
						}

						var YYSTATE = YY_START;
						switch ($avoiding_name_collisions) {
							case 0:
								if (yy_.yytext.slice(-2) === "\\\\") {
									strip(0, 1);
									this.begin("mu");
								} else if (yy_.yytext.slice(-1) === "\\") {
									strip(0, 1);
									this.begin("emu");
								} else {
									this.begin("mu");
								}
								if (yy_.yytext) return 15;

								break;
							case 1:
								return 15;
								break;
							case 2:
								this.popState();
								return 15;

								break;
							case 3:
								this.begin('raw');return 15;
								break;
							case 4:
								this.popState();
								// Should be using `this.topState()` below, but it currently
								// returns the second top instead of the first top. Opened an
								// issue about it at https://github.com/zaach/jison/issues/291
								if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
									return 15;
								} else {
									yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
									return 'END_RAW_BLOCK';
								}

								break;
							case 5:
								return 15;
								break;
							case 6:
								this.popState();
								return 14;

								break;
							case 7:
								return 65;
								break;
							case 8:
								return 68;
								break;
							case 9:
								return 19;
								break;
							case 10:
								this.popState();
								this.begin('raw');
								return 23;

								break;
							case 11:
								return 55;
								break;
							case 12:
								return 60;
								break;
							case 13:
								return 29;
								break;
							case 14:
								return 47;
								break;
							case 15:
								this.popState();return 44;
								break;
							case 16:
								this.popState();return 44;
								break;
							case 17:
								return 34;
								break;
							case 18:
								return 39;
								break;
							case 19:
								return 51;
								break;
							case 20:
								return 48;
								break;
							case 21:
								this.unput(yy_.yytext);
								this.popState();
								this.begin('com');

								break;
							case 22:
								this.popState();
								return 14;

								break;
							case 23:
								return 48;
								break;
							case 24:
								return 73;
								break;
							case 25:
								return 72;
								break;
							case 26:
								return 72;
								break;
							case 27:
								return 87;
								break;
							case 28:
								// ignore whitespace
								break;
							case 29:
								this.popState();return 54;
								break;
							case 30:
								this.popState();return 33;
								break;
							case 31:
								yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
								break;
							case 32:
								yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
								break;
							case 33:
								return 85;
								break;
							case 34:
								return 82;
								break;
							case 35:
								return 82;
								break;
							case 36:
								return 83;
								break;
							case 37:
								return 84;
								break;
							case 38:
								return 81;
								break;
							case 39:
								return 75;
								break;
							case 40:
								return 77;
								break;
							case 41:
								return 72;
								break;
							case 42:
								yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
								break;
							case 43:
								return 'INVALID';
								break;
							case 44:
								return 5;
								break;
						}
					};
					lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
					lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
					return lexer;
				}();
				parser.lexer = lexer;
				function Parser() {
					this.yy = {};
				}Parser.prototype = parser;parser.Parser = Parser;
				return new Parser();
			}();exports["default"] = handlebars;
			module.exports = exports["default"];

			/***/
		},
		/* 38 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;

			var _visitor = __webpack_require__(39);

			var _visitor2 = _interopRequireDefault(_visitor);

			function WhitespaceControl() {
				var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

				this.options = options;
			}
			WhitespaceControl.prototype = new _visitor2['default']();

			WhitespaceControl.prototype.Program = function (program) {
				var doStandalone = !this.options.ignoreStandalone;

				var isRoot = !this.isRootSeen;
				this.isRootSeen = true;

				var body = program.body;
				for (var i = 0, l = body.length; i < l; i++) {
					var current = body[i],
					    strip = this.accept(current);

					if (!strip) {
						continue;
					}

					var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
					    _isNextWhitespace = isNextWhitespace(body, i, isRoot),
					    openStandalone = strip.openStandalone && _isPrevWhitespace,
					    closeStandalone = strip.closeStandalone && _isNextWhitespace,
					    inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

					if (strip.close) {
						omitRight(body, i, true);
					}
					if (strip.open) {
						omitLeft(body, i, true);
					}

					if (doStandalone && inlineStandalone) {
						omitRight(body, i);

						if (omitLeft(body, i)) {
							// If we are on a standalone node, save the indent info for partials
							if (current.type === 'PartialStatement') {
								// Pull out the whitespace from the final line
								current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
							}
						}
					}
					if (doStandalone && openStandalone) {
						omitRight((current.program || current.inverse).body);

						// Strip out the previous content node if it's whitespace only
						omitLeft(body, i);
					}
					if (doStandalone && closeStandalone) {
						// Always strip the next node
						omitRight(body, i);

						omitLeft((current.inverse || current.program).body);
					}
				}

				return program;
			};

			WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
				this.accept(block.program);
				this.accept(block.inverse);

				// Find the inverse program that is involed with whitespace stripping.
				var program = block.program || block.inverse,
				    inverse = block.program && block.inverse,
				    firstInverse = inverse,
				    lastInverse = inverse;

				if (inverse && inverse.chained) {
					firstInverse = inverse.body[0].program;

					// Walk the inverse chain to find the last inverse that is actually in the chain.
					while (lastInverse.chained) {
						lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
					}
				}

				var strip = {
					open: block.openStrip.open,
					close: block.closeStrip.close,

					// Determine the standalone candiacy. Basically flag our content as being possibly standalone
					// so our parent can determine if we actually are standalone
					openStandalone: isNextWhitespace(program.body),
					closeStandalone: isPrevWhitespace((firstInverse || program).body)
				};

				if (block.openStrip.close) {
					omitRight(program.body, null, true);
				}

				if (inverse) {
					var inverseStrip = block.inverseStrip;

					if (inverseStrip.open) {
						omitLeft(program.body, null, true);
					}

					if (inverseStrip.close) {
						omitRight(firstInverse.body, null, true);
					}
					if (block.closeStrip.open) {
						omitLeft(lastInverse.body, null, true);
					}

					// Find standalone else statments
					if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
						omitLeft(program.body);
						omitRight(firstInverse.body);
					}
				} else if (block.closeStrip.open) {
					omitLeft(program.body, null, true);
				}

				return strip;
			};

			WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
				return mustache.strip;
			};

			WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
				/* istanbul ignore next */
				var strip = node.strip || {};
				return {
					inlineStandalone: true,
					open: strip.open,
					close: strip.close
				};
			};

			function isPrevWhitespace(body, i, isRoot) {
				if (i === undefined) {
					i = body.length;
				}

				// Nodes that end with newlines are considered whitespace (but are special
				// cased for strip operations)
				var prev = body[i - 1],
				    sibling = body[i - 2];
				if (!prev) {
					return isRoot;
				}

				if (prev.type === 'ContentStatement') {
					return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
				}
			}
			function isNextWhitespace(body, i, isRoot) {
				if (i === undefined) {
					i = -1;
				}

				var next = body[i + 1],
				    sibling = body[i + 2];
				if (!next) {
					return isRoot;
				}

				if (next.type === 'ContentStatement') {
					return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
				}
			}

			// Marks the node to the right of the position as omitted.
			// I.e. {{foo}}' ' will mark the ' ' node as omitted.
			//
			// If i is undefined, then the first child will be marked as such.
			//
			// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
			// content is met.
			function omitRight(body, i, multiple) {
				var current = body[i == null ? 0 : i + 1];
				if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
					return;
				}

				var original = current.value;
				current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
				current.rightStripped = current.value !== original;
			}

			// Marks the node to the left of the position as omitted.
			// I.e. ' '{{foo}} will mark the ' ' node as omitted.
			//
			// If i is undefined then the last child will be marked as such.
			//
			// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
			// content is met.
			function omitLeft(body, i, multiple) {
				var current = body[i == null ? body.length - 1 : i - 1];
				if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
					return;
				}

				// We omit the last node if it's whitespace only and not preceeded by a non-content node.
				var original = current.value;
				current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
				current.leftStripped = current.value !== original;
				return current.leftStripped;
			}

			exports['default'] = WhitespaceControl;
			module.exports = exports['default'];

			/***/
		},
		/* 39 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			function Visitor() {
				this.parents = [];
			}

			Visitor.prototype = {
				constructor: Visitor,
				mutating: false,

				// Visits a given value. If mutating, will replace the value if necessary.
				acceptKey: function acceptKey(node, name) {
					var value = this.accept(node[name]);
					if (this.mutating) {
						// Hacky sanity check: This may have a few false positives for type for the helper
						// methods but will generally do the right thing without a lot of overhead.
						if (value && !Visitor.prototype[value.type]) {
							throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
						}
						node[name] = value;
					}
				},

				// Performs an accept operation with added sanity check to ensure
				// required keys are not removed.
				acceptRequired: function acceptRequired(node, name) {
					this.acceptKey(node, name);

					if (!node[name]) {
						throw new _exception2['default'](node.type + ' requires ' + name);
					}
				},

				// Traverses a given array. If mutating, empty respnses will be removed
				// for child elements.
				acceptArray: function acceptArray(array) {
					for (var i = 0, l = array.length; i < l; i++) {
						this.acceptKey(array, i);

						if (!array[i]) {
							array.splice(i, 1);
							i--;
							l--;
						}
					}
				},

				accept: function accept(object) {
					if (!object) {
						return;
					}

					/* istanbul ignore next: Sanity code */
					if (!this[object.type]) {
						throw new _exception2['default']('Unknown type: ' + object.type, object);
					}

					if (this.current) {
						this.parents.unshift(this.current);
					}
					this.current = object;

					var ret = this[object.type](object);

					this.current = this.parents.shift();

					if (!this.mutating || ret) {
						return ret;
					} else if (ret !== false) {
						return object;
					}
				},

				Program: function Program(program) {
					this.acceptArray(program.body);
				},

				MustacheStatement: visitSubExpression,
				Decorator: visitSubExpression,

				BlockStatement: visitBlock,
				DecoratorBlock: visitBlock,

				PartialStatement: visitPartial,
				PartialBlockStatement: function PartialBlockStatement(partial) {
					visitPartial.call(this, partial);

					this.acceptKey(partial, 'program');
				},

				ContentStatement: function ContentStatement() /* content */{},
				CommentStatement: function CommentStatement() /* comment */{},

				SubExpression: visitSubExpression,

				PathExpression: function PathExpression() /* path */{},

				StringLiteral: function StringLiteral() /* string */{},
				NumberLiteral: function NumberLiteral() /* number */{},
				BooleanLiteral: function BooleanLiteral() /* bool */{},
				UndefinedLiteral: function UndefinedLiteral() /* literal */{},
				NullLiteral: function NullLiteral() /* literal */{},

				Hash: function Hash(hash) {
					this.acceptArray(hash.pairs);
				},
				HashPair: function HashPair(pair) {
					this.acceptRequired(pair, 'value');
				}
			};

			function visitSubExpression(mustache) {
				this.acceptRequired(mustache, 'path');
				this.acceptArray(mustache.params);
				this.acceptKey(mustache, 'hash');
			}
			function visitBlock(block) {
				visitSubExpression.call(this, block);

				this.acceptKey(block, 'program');
				this.acceptKey(block, 'inverse');
			}
			function visitPartial(partial) {
				this.acceptRequired(partial, 'name');
				this.acceptArray(partial.params);
				this.acceptKey(partial, 'hash');
			}

			exports['default'] = Visitor;
			module.exports = exports['default'];

			/***/
		},
		/* 40 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;
			exports.SourceLocation = SourceLocation;
			exports.id = id;
			exports.stripFlags = stripFlags;
			exports.stripComment = stripComment;
			exports.preparePath = preparePath;
			exports.prepareMustache = prepareMustache;
			exports.prepareRawBlock = prepareRawBlock;
			exports.prepareBlock = prepareBlock;
			exports.prepareProgram = prepareProgram;
			exports.preparePartialBlock = preparePartialBlock;

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			function validateClose(open, close) {
				close = close.path ? close.path.original : close;

				if (open.path.original !== close) {
					var errorNode = { loc: open.path.loc };

					throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
				}
			}

			function SourceLocation(source, locInfo) {
				this.source = source;
				this.start = {
					line: locInfo.first_line,
					column: locInfo.first_column
				};
				this.end = {
					line: locInfo.last_line,
					column: locInfo.last_column
				};
			}

			function id(token) {
				if (/^\[.*\]$/.test(token)) {
					return token.substr(1, token.length - 2);
				} else {
					return token;
				}
			}

			function stripFlags(open, close) {
				return {
					open: open.charAt(2) === '~',
					close: close.charAt(close.length - 3) === '~'
				};
			}

			function stripComment(comment) {
				return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
			}

			function preparePath(data, parts, loc) {
				loc = this.locInfo(loc);

				var original = data ? '@' : '',
				    dig = [],
				    depth = 0,
				    depthString = '';

				for (var i = 0, l = parts.length; i < l; i++) {
					var part = parts[i].part,


					// If we have [] syntax then we do not treat path references as operators,
					// i.e. foo.[this] resolves to approximately context.foo['this']
					isLiteral = parts[i].original !== part;
					original += (parts[i].separator || '') + part;

					if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
						if (dig.length > 0) {
							throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
						} else if (part === '..') {
							depth++;
							depthString += '../';
						}
					} else {
						dig.push(part);
					}
				}

				return {
					type: 'PathExpression',
					data: data,
					depth: depth,
					parts: dig,
					original: original,
					loc: loc
				};
			}

			function prepareMustache(path, params, hash, open, strip, locInfo) {
				// Must use charAt to support IE pre-10
				var escapeFlag = open.charAt(3) || open.charAt(2),
				    escaped = escapeFlag !== '{' && escapeFlag !== '&';

				var decorator = /\*/.test(open);
				return {
					type: decorator ? 'Decorator' : 'MustacheStatement',
					path: path,
					params: params,
					hash: hash,
					escaped: escaped,
					strip: strip,
					loc: this.locInfo(locInfo)
				};
			}

			function prepareRawBlock(openRawBlock, contents, close, locInfo) {
				validateClose(openRawBlock, close);

				locInfo = this.locInfo(locInfo);
				var program = {
					type: 'Program',
					body: contents,
					strip: {},
					loc: locInfo
				};

				return {
					type: 'BlockStatement',
					path: openRawBlock.path,
					params: openRawBlock.params,
					hash: openRawBlock.hash,
					program: program,
					openStrip: {},
					inverseStrip: {},
					closeStrip: {},
					loc: locInfo
				};
			}

			function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
				if (close && close.path) {
					validateClose(openBlock, close);
				}

				var decorator = /\*/.test(openBlock.open);

				program.blockParams = openBlock.blockParams;

				var inverse = undefined,
				    inverseStrip = undefined;

				if (inverseAndProgram) {
					if (decorator) {
						throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
					}

					if (inverseAndProgram.chain) {
						inverseAndProgram.program.body[0].closeStrip = close.strip;
					}

					inverseStrip = inverseAndProgram.strip;
					inverse = inverseAndProgram.program;
				}

				if (inverted) {
					inverted = inverse;
					inverse = program;
					program = inverted;
				}

				return {
					type: decorator ? 'DecoratorBlock' : 'BlockStatement',
					path: openBlock.path,
					params: openBlock.params,
					hash: openBlock.hash,
					program: program,
					inverse: inverse,
					openStrip: openBlock.strip,
					inverseStrip: inverseStrip,
					closeStrip: close && close.strip,
					loc: this.locInfo(locInfo)
				};
			}

			function prepareProgram(statements, loc) {
				if (!loc && statements.length) {
					var firstLoc = statements[0].loc,
					    lastLoc = statements[statements.length - 1].loc;

					/* istanbul ignore else */
					if (firstLoc && lastLoc) {
						loc = {
							source: firstLoc.source,
							start: {
								line: firstLoc.start.line,
								column: firstLoc.start.column
							},
							end: {
								line: lastLoc.end.line,
								column: lastLoc.end.column
							}
						};
					}
				}

				return {
					type: 'Program',
					body: statements,
					strip: {},
					loc: loc
				};
			}

			function preparePartialBlock(open, program, close, locInfo) {
				validateClose(open, close);

				return {
					type: 'PartialBlockStatement',
					name: open.path,
					params: open.params,
					hash: open.hash,
					program: program,
					openStrip: open.strip,
					closeStrip: close && close.strip,
					loc: this.locInfo(locInfo)
				};
			}

			/***/
		},
		/* 41 */
		/***/function (module, exports, __webpack_require__) {

			/* eslint-disable new-cap */

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;
			exports.Compiler = Compiler;
			exports.precompile = precompile;
			exports.compile = compile;

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			var _utils = __webpack_require__(5);

			var _ast = __webpack_require__(35);

			var _ast2 = _interopRequireDefault(_ast);

			var slice = [].slice;

			function Compiler() {}

			// the foundHelper register will disambiguate helper lookup from finding a
			// function in a context. This is necessary for mustache compatibility, which
			// requires that context functions in blocks are evaluated by blockHelperMissing,
			// and then proceed as if the resulting value was provided to blockHelperMissing.

			Compiler.prototype = {
				compiler: Compiler,

				equals: function equals(other) {
					var len = this.opcodes.length;
					if (other.opcodes.length !== len) {
						return false;
					}

					for (var i = 0; i < len; i++) {
						var opcode = this.opcodes[i],
						    otherOpcode = other.opcodes[i];
						if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
							return false;
						}
					}

					// We know that length is the same between the two arrays because they are directly tied
					// to the opcode behavior above.
					len = this.children.length;
					for (var i = 0; i < len; i++) {
						if (!this.children[i].equals(other.children[i])) {
							return false;
						}
					}

					return true;
				},

				guid: 0,

				compile: function compile(program, options) {
					this.sourceNode = [];
					this.opcodes = [];
					this.children = [];
					this.options = options;
					this.stringParams = options.stringParams;
					this.trackIds = options.trackIds;

					options.blockParams = options.blockParams || [];

					// These changes will propagate to the other compiler components
					var knownHelpers = options.knownHelpers;
					options.knownHelpers = {
						'helperMissing': true,
						'blockHelperMissing': true,
						'each': true,
						'if': true,
						'unless': true,
						'with': true,
						'log': true,
						'lookup': true
					};
					if (knownHelpers) {
						for (var _name in knownHelpers) {
							/* istanbul ignore else */
							if (_name in knownHelpers) {
								this.options.knownHelpers[_name] = knownHelpers[_name];
							}
						}
					}

					return this.accept(program);
				},

				compileProgram: function compileProgram(program) {
					var childCompiler = new this.compiler(),

					// eslint-disable-line new-cap
					result = childCompiler.compile(program, this.options),
					    guid = this.guid++;

					this.usePartial = this.usePartial || result.usePartial;

					this.children[guid] = result;
					this.useDepths = this.useDepths || result.useDepths;

					return guid;
				},

				accept: function accept(node) {
					/* istanbul ignore next: Sanity code */
					if (!this[node.type]) {
						throw new _exception2['default']('Unknown type: ' + node.type, node);
					}

					this.sourceNode.unshift(node);
					var ret = this[node.type](node);
					this.sourceNode.shift();
					return ret;
				},

				Program: function Program(program) {
					this.options.blockParams.unshift(program.blockParams);

					var body = program.body,
					    bodyLength = body.length;
					for (var i = 0; i < bodyLength; i++) {
						this.accept(body[i]);
					}

					this.options.blockParams.shift();

					this.isSimple = bodyLength === 1;
					this.blockParams = program.blockParams ? program.blockParams.length : 0;

					return this;
				},

				BlockStatement: function BlockStatement(block) {
					transformLiteralToPath(block);

					var program = block.program,
					    inverse = block.inverse;

					program = program && this.compileProgram(program);
					inverse = inverse && this.compileProgram(inverse);

					var type = this.classifySexpr(block);

					if (type === 'helper') {
						this.helperSexpr(block, program, inverse);
					} else if (type === 'simple') {
						this.simpleSexpr(block);

						// now that the simple mustache is resolved, we need to
						// evaluate it by executing `blockHelperMissing`
						this.opcode('pushProgram', program);
						this.opcode('pushProgram', inverse);
						this.opcode('emptyHash');
						this.opcode('blockValue', block.path.original);
					} else {
						this.ambiguousSexpr(block, program, inverse);

						// now that the simple mustache is resolved, we need to
						// evaluate it by executing `blockHelperMissing`
						this.opcode('pushProgram', program);
						this.opcode('pushProgram', inverse);
						this.opcode('emptyHash');
						this.opcode('ambiguousBlockValue');
					}

					this.opcode('append');
				},

				DecoratorBlock: function DecoratorBlock(decorator) {
					var program = decorator.program && this.compileProgram(decorator.program);
					var params = this.setupFullMustacheParams(decorator, program, undefined),
					    path = decorator.path;

					this.useDecorators = true;
					this.opcode('registerDecorator', params.length, path.original);
				},

				PartialStatement: function PartialStatement(partial) {
					this.usePartial = true;

					var program = partial.program;
					if (program) {
						program = this.compileProgram(partial.program);
					}

					var params = partial.params;
					if (params.length > 1) {
						throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
					} else if (!params.length) {
						if (this.options.explicitPartialContext) {
							this.opcode('pushLiteral', 'undefined');
						} else {
							params.push({ type: 'PathExpression', parts: [], depth: 0 });
						}
					}

					var partialName = partial.name.original,
					    isDynamic = partial.name.type === 'SubExpression';
					if (isDynamic) {
						this.accept(partial.name);
					}

					this.setupFullMustacheParams(partial, program, undefined, true);

					var indent = partial.indent || '';
					if (this.options.preventIndent && indent) {
						this.opcode('appendContent', indent);
						indent = '';
					}

					this.opcode('invokePartial', isDynamic, partialName, indent);
					this.opcode('append');
				},
				PartialBlockStatement: function PartialBlockStatement(partialBlock) {
					this.PartialStatement(partialBlock);
				},

				MustacheStatement: function MustacheStatement(mustache) {
					this.SubExpression(mustache);

					if (mustache.escaped && !this.options.noEscape) {
						this.opcode('appendEscaped');
					} else {
						this.opcode('append');
					}
				},
				Decorator: function Decorator(decorator) {
					this.DecoratorBlock(decorator);
				},

				ContentStatement: function ContentStatement(content) {
					if (content.value) {
						this.opcode('appendContent', content.value);
					}
				},

				CommentStatement: function CommentStatement() {},

				SubExpression: function SubExpression(sexpr) {
					transformLiteralToPath(sexpr);
					var type = this.classifySexpr(sexpr);

					if (type === 'simple') {
						this.simpleSexpr(sexpr);
					} else if (type === 'helper') {
						this.helperSexpr(sexpr);
					} else {
						this.ambiguousSexpr(sexpr);
					}
				},
				ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
					var path = sexpr.path,
					    name = path.parts[0],
					    isBlock = program != null || inverse != null;

					this.opcode('getContext', path.depth);

					this.opcode('pushProgram', program);
					this.opcode('pushProgram', inverse);

					path.strict = true;
					this.accept(path);

					this.opcode('invokeAmbiguous', name, isBlock);
				},

				simpleSexpr: function simpleSexpr(sexpr) {
					var path = sexpr.path;
					path.strict = true;
					this.accept(path);
					this.opcode('resolvePossibleLambda');
				},

				helperSexpr: function helperSexpr(sexpr, program, inverse) {
					var params = this.setupFullMustacheParams(sexpr, program, inverse),
					    path = sexpr.path,
					    name = path.parts[0];

					if (this.options.knownHelpers[name]) {
						this.opcode('invokeKnownHelper', params.length, name);
					} else if (this.options.knownHelpersOnly) {
						throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
					} else {
						path.strict = true;
						path.falsy = true;

						this.accept(path);
						this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
					}
				},

				PathExpression: function PathExpression(path) {
					this.addDepth(path.depth);
					this.opcode('getContext', path.depth);

					var name = path.parts[0],
					    scoped = _ast2['default'].helpers.scopedId(path),
					    blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

					if (blockParamId) {
						this.opcode('lookupBlockParam', blockParamId, path.parts);
					} else if (!name) {
						// Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
						this.opcode('pushContext');
					} else if (path.data) {
						this.options.data = true;
						this.opcode('lookupData', path.depth, path.parts, path.strict);
					} else {
						this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
					}
				},

				StringLiteral: function StringLiteral(string) {
					this.opcode('pushString', string.value);
				},

				NumberLiteral: function NumberLiteral(number) {
					this.opcode('pushLiteral', number.value);
				},

				BooleanLiteral: function BooleanLiteral(bool) {
					this.opcode('pushLiteral', bool.value);
				},

				UndefinedLiteral: function UndefinedLiteral() {
					this.opcode('pushLiteral', 'undefined');
				},

				NullLiteral: function NullLiteral() {
					this.opcode('pushLiteral', 'null');
				},

				Hash: function Hash(hash) {
					var pairs = hash.pairs,
					    i = 0,
					    l = pairs.length;

					this.opcode('pushHash');

					for (; i < l; i++) {
						this.pushParam(pairs[i].value);
					}
					while (i--) {
						this.opcode('assignToHash', pairs[i].key);
					}
					this.opcode('popHash');
				},

				// HELPERS
				opcode: function opcode(name) {
					this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
				},

				addDepth: function addDepth(depth) {
					if (!depth) {
						return;
					}

					this.useDepths = true;
				},

				classifySexpr: function classifySexpr(sexpr) {
					var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

					var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

					// a mustache is an eligible helper if:
					// * its id is simple (a single part, not `this` or `..`)
					var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

					// if a mustache is an eligible helper but not a definite
					// helper, it is ambiguous, and will be resolved in a later
					// pass or at runtime.
					var isEligible = !isBlockParam && (isHelper || isSimple);

					// if ambiguous, we can possibly resolve the ambiguity now
					// An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
					if (isEligible && !isHelper) {
						var _name2 = sexpr.path.parts[0],
						    options = this.options;

						if (options.knownHelpers[_name2]) {
							isHelper = true;
						} else if (options.knownHelpersOnly) {
							isEligible = false;
						}
					}

					if (isHelper) {
						return 'helper';
					} else if (isEligible) {
						return 'ambiguous';
					} else {
						return 'simple';
					}
				},

				pushParams: function pushParams(params) {
					for (var i = 0, l = params.length; i < l; i++) {
						this.pushParam(params[i]);
					}
				},

				pushParam: function pushParam(val) {
					var value = val.value != null ? val.value : val.original || '';

					if (this.stringParams) {
						if (value.replace) {
							value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
						}

						if (val.depth) {
							this.addDepth(val.depth);
						}
						this.opcode('getContext', val.depth || 0);
						this.opcode('pushStringParam', value, val.type);

						if (val.type === 'SubExpression') {
							// SubExpressions get evaluated and passed in
							// in string params mode.
							this.accept(val);
						}
					} else {
						if (this.trackIds) {
							var blockParamIndex = undefined;
							if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
								blockParamIndex = this.blockParamIndex(val.parts[0]);
							}
							if (blockParamIndex) {
								var blockParamChild = val.parts.slice(1).join('.');
								this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
							} else {
								value = val.original || value;
								if (value.replace) {
									value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
								}

								this.opcode('pushId', val.type, value);
							}
						}
						this.accept(val);
					}
				},

				setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
					var params = sexpr.params;
					this.pushParams(params);

					this.opcode('pushProgram', program);
					this.opcode('pushProgram', inverse);

					if (sexpr.hash) {
						this.accept(sexpr.hash);
					} else {
						this.opcode('emptyHash', omitEmpty);
					}

					return params;
				},

				blockParamIndex: function blockParamIndex(name) {
					for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
						var blockParams = this.options.blockParams[depth],
						    param = blockParams && _utils.indexOf(blockParams, name);
						if (blockParams && param >= 0) {
							return [depth, param];
						}
					}
				}
			};

			function precompile(input, options, env) {
				if (input == null || typeof input !== 'string' && input.type !== 'Program') {
					throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
				}

				options = options || {};
				if (!('data' in options)) {
					options.data = true;
				}
				if (options.compat) {
					options.useDepths = true;
				}

				var ast = env.parse(input, options),
				    environment = new env.Compiler().compile(ast, options);
				return new env.JavaScriptCompiler().compile(environment, options);
			}

			function compile(input, options, env) {
				if (options === undefined) options = {};

				if (input == null || typeof input !== 'string' && input.type !== 'Program') {
					throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
				}

				options = _utils.extend({}, options);
				if (!('data' in options)) {
					options.data = true;
				}
				if (options.compat) {
					options.useDepths = true;
				}

				var compiled = undefined;

				function compileInput() {
					var ast = env.parse(input, options),
					    environment = new env.Compiler().compile(ast, options),
					    templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
					return env.template(templateSpec);
				}

				// Template is only compiled on first use and cached after that point.
				function ret(context, execOptions) {
					if (!compiled) {
						compiled = compileInput();
					}
					return compiled.call(this, context, execOptions);
				}
				ret._setup = function (setupOptions) {
					if (!compiled) {
						compiled = compileInput();
					}
					return compiled._setup(setupOptions);
				};
				ret._child = function (i, data, blockParams, depths) {
					if (!compiled) {
						compiled = compileInput();
					}
					return compiled._child(i, data, blockParams, depths);
				};
				return ret;
			}

			function argEquals(a, b) {
				if (a === b) {
					return true;
				}

				if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
					for (var i = 0; i < a.length; i++) {
						if (!argEquals(a[i], b[i])) {
							return false;
						}
					}
					return true;
				}
			}

			function transformLiteralToPath(sexpr) {
				if (!sexpr.path.parts) {
					var literal = sexpr.path;
					// Casting to string here to make false and 0 literal values play nicely with the rest
					// of the system.
					sexpr.path = {
						type: 'PathExpression',
						data: false,
						depth: 0,
						parts: [literal.original + ''],
						original: literal.original + '',
						loc: literal.loc
					};
				}
			}

			/***/
		},
		/* 42 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(1)['default'];

			exports.__esModule = true;

			var _base = __webpack_require__(4);

			var _exception = __webpack_require__(6);

			var _exception2 = _interopRequireDefault(_exception);

			var _utils = __webpack_require__(5);

			var _codeGen = __webpack_require__(43);

			var _codeGen2 = _interopRequireDefault(_codeGen);

			function Literal(value) {
				this.value = value;
			}

			function JavaScriptCompiler() {}

			JavaScriptCompiler.prototype = {
				// PUBLIC API: You can override these methods in a subclass to provide
				// alternative compiled forms for name lookup and buffering semantics
				nameLookup: function nameLookup(parent, name /* , type*/) {
					if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
						return [parent, '.', name];
					} else {
						return [parent, '[', JSON.stringify(name), ']'];
					}
				},
				depthedLookup: function depthedLookup(name) {
					return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
				},

				compilerInfo: function compilerInfo() {
					var revision = _base.COMPILER_REVISION,
					    versions = _base.REVISION_CHANGES[revision];
					return [revision, versions];
				},

				appendToBuffer: function appendToBuffer(source, location, explicit) {
					// Force a source as this simplifies the merge logic.
					if (!_utils.isArray(source)) {
						source = [source];
					}
					source = this.source.wrap(source, location);

					if (this.environment.isSimple) {
						return ['return ', source, ';'];
					} else if (explicit) {
						// This is a case where the buffer operation occurs as a child of another
						// construct, generally braces. We have to explicitly output these buffer
						// operations to ensure that the emitted code goes in the correct location.
						return ['buffer += ', source, ';'];
					} else {
						source.appendToBuffer = true;
						return source;
					}
				},

				initializeBuffer: function initializeBuffer() {
					return this.quotedString('');
				},
				// END PUBLIC API

				compile: function compile(environment, options, context, asObject) {
					this.environment = environment;
					this.options = options;
					this.stringParams = this.options.stringParams;
					this.trackIds = this.options.trackIds;
					this.precompile = !asObject;

					this.name = this.environment.name;
					this.isChild = !!context;
					this.context = context || {
						decorators: [],
						programs: [],
						environments: []
					};

					this.preamble();

					this.stackSlot = 0;
					this.stackVars = [];
					this.aliases = {};
					this.registers = { list: [] };
					this.hashes = [];
					this.compileStack = [];
					this.inlineStack = [];
					this.blockParams = [];

					this.compileChildren(environment, options);

					this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
					this.useBlockParams = this.useBlockParams || environment.useBlockParams;

					var opcodes = environment.opcodes,
					    opcode = undefined,
					    firstLoc = undefined,
					    i = undefined,
					    l = undefined;

					for (i = 0, l = opcodes.length; i < l; i++) {
						opcode = opcodes[i];

						this.source.currentLocation = opcode.loc;
						firstLoc = firstLoc || opcode.loc;
						this[opcode.opcode].apply(this, opcode.args);
					}

					// Flush any trailing content that might be pending.
					this.source.currentLocation = firstLoc;
					this.pushSource('');

					/* istanbul ignore next */
					if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
						throw new _exception2['default']('Compile completed with content left on stack');
					}

					if (!this.decorators.isEmpty()) {
						this.useDecorators = true;

						this.decorators.prepend('var decorators = container.decorators;\n');
						this.decorators.push('return fn;');

						if (asObject) {
							this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
						} else {
							this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
							this.decorators.push('}\n');
							this.decorators = this.decorators.merge();
						}
					} else {
						this.decorators = undefined;
					}

					var fn = this.createFunctionContext(asObject);
					if (!this.isChild) {
						var ret = {
							compiler: this.compilerInfo(),
							main: fn
						};

						if (this.decorators) {
							ret.main_d = this.decorators; // eslint-disable-line camelcase
							ret.useDecorators = true;
						}

						var _context = this.context;
						var programs = _context.programs;
						var decorators = _context.decorators;

						for (i = 0, l = programs.length; i < l; i++) {
							if (programs[i]) {
								ret[i] = programs[i];
								if (decorators[i]) {
									ret[i + '_d'] = decorators[i];
									ret.useDecorators = true;
								}
							}
						}

						if (this.environment.usePartial) {
							ret.usePartial = true;
						}
						if (this.options.data) {
							ret.useData = true;
						}
						if (this.useDepths) {
							ret.useDepths = true;
						}
						if (this.useBlockParams) {
							ret.useBlockParams = true;
						}
						if (this.options.compat) {
							ret.compat = true;
						}

						if (!asObject) {
							ret.compiler = JSON.stringify(ret.compiler);

							this.source.currentLocation = { start: { line: 1, column: 0 } };
							ret = this.objectLiteral(ret);

							if (options.srcName) {
								ret = ret.toStringWithSourceMap({ file: options.destName });
								ret.map = ret.map && ret.map.toString();
							} else {
								ret = ret.toString();
							}
						} else {
							ret.compilerOptions = this.options;
						}

						return ret;
					} else {
						return fn;
					}
				},

				preamble: function preamble() {
					// track the last context pushed into place to allow skipping the
					// getContext opcode when it would be a noop
					this.lastContext = 0;
					this.source = new _codeGen2['default'](this.options.srcName);
					this.decorators = new _codeGen2['default'](this.options.srcName);
				},

				createFunctionContext: function createFunctionContext(asObject) {
					var varDeclarations = '';

					var locals = this.stackVars.concat(this.registers.list);
					if (locals.length > 0) {
						varDeclarations += ', ' + locals.join(', ');
					}

					// Generate minimizer alias mappings
					//
					// When using true SourceNodes, this will update all references to the given alias
					// as the source nodes are reused in situ. For the non-source node compilation mode,
					// aliases will not be used, but this case is already being run on the client and
					// we aren't concern about minimizing the template size.
					var aliasCount = 0;
					for (var alias in this.aliases) {
						// eslint-disable-line guard-for-in
						var node = this.aliases[alias];

						if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
							varDeclarations += ', alias' + ++aliasCount + '=' + alias;
							node.children[0] = 'alias' + aliasCount;
						}
					}

					var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

					if (this.useBlockParams || this.useDepths) {
						params.push('blockParams');
					}
					if (this.useDepths) {
						params.push('depths');
					}

					// Perform a second pass over the output to merge content when possible
					var source = this.mergeSource(varDeclarations);

					if (asObject) {
						params.push(source);

						return Function.apply(this, params);
					} else {
						return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
					}
				},
				mergeSource: function mergeSource(varDeclarations) {
					var isSimple = this.environment.isSimple,
					    appendOnly = !this.forceBuffer,
					    appendFirst = undefined,
					    sourceSeen = undefined,
					    bufferStart = undefined,
					    bufferEnd = undefined;
					this.source.each(function (line) {
						if (line.appendToBuffer) {
							if (bufferStart) {
								line.prepend('  + ');
							} else {
								bufferStart = line;
							}
							bufferEnd = line;
						} else {
							if (bufferStart) {
								if (!sourceSeen) {
									appendFirst = true;
								} else {
									bufferStart.prepend('buffer += ');
								}
								bufferEnd.add(';');
								bufferStart = bufferEnd = undefined;
							}

							sourceSeen = true;
							if (!isSimple) {
								appendOnly = false;
							}
						}
					});

					if (appendOnly) {
						if (bufferStart) {
							bufferStart.prepend('return ');
							bufferEnd.add(';');
						} else if (!sourceSeen) {
							this.source.push('return "";');
						}
					} else {
						varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

						if (bufferStart) {
							bufferStart.prepend('return buffer + ');
							bufferEnd.add(';');
						} else {
							this.source.push('return buffer;');
						}
					}

					if (varDeclarations) {
						this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
					}

					return this.source.merge();
				},

				// [blockValue]
				//
				// On stack, before: hash, inverse, program, value
				// On stack, after: return value of blockHelperMissing
				//
				// The purpose of this opcode is to take a block of the form
				// `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
				// replace it on the stack with the result of properly
				// invoking blockHelperMissing.
				blockValue: function blockValue(name) {
					var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
					    params = [this.contextName(0)];
					this.setupHelperArgs(name, 0, params);

					var blockName = this.popStack();
					params.splice(1, 0, blockName);

					this.push(this.source.functionCall(blockHelperMissing, 'call', params));
				},

				// [ambiguousBlockValue]
				//
				// On stack, before: hash, inverse, program, value
				// Compiler value, before: lastHelper=value of last found helper, if any
				// On stack, after, if no lastHelper: same as [blockValue]
				// On stack, after, if lastHelper: value
				ambiguousBlockValue: function ambiguousBlockValue() {
					// We're being a bit cheeky and reusing the options value from the prior exec
					var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
					    params = [this.contextName(0)];
					this.setupHelperArgs('', 0, params, true);

					this.flushInline();

					var current = this.topStack();
					params.splice(1, 0, current);

					this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
				},

				// [appendContent]
				//
				// On stack, before: ...
				// On stack, after: ...
				//
				// Appends the string value of `content` to the current buffer
				appendContent: function appendContent(content) {
					if (this.pendingContent) {
						content = this.pendingContent + content;
					} else {
						this.pendingLocation = this.source.currentLocation;
					}

					this.pendingContent = content;
				},

				// [append]
				//
				// On stack, before: value, ...
				// On stack, after: ...
				//
				// Coerces `value` to a String and appends it to the current buffer.
				//
				// If `value` is truthy, or 0, it is coerced into a string and appended
				// Otherwise, the empty string is appended
				append: function append() {
					if (this.isInline()) {
						this.replaceStack(function (current) {
							return [' != null ? ', current, ' : ""'];
						});

						this.pushSource(this.appendToBuffer(this.popStack()));
					} else {
						var local = this.popStack();
						this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
						if (this.environment.isSimple) {
							this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
						}
					}
				},

				// [appendEscaped]
				//
				// On stack, before: value, ...
				// On stack, after: ...
				//
				// Escape `value` and append it to the buffer
				appendEscaped: function appendEscaped() {
					this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
				},

				// [getContext]
				//
				// On stack, before: ...
				// On stack, after: ...
				// Compiler value, after: lastContext=depth
				//
				// Set the value of the `lastContext` compiler value to the depth
				getContext: function getContext(depth) {
					this.lastContext = depth;
				},

				// [pushContext]
				//
				// On stack, before: ...
				// On stack, after: currentContext, ...
				//
				// Pushes the value of the current context onto the stack.
				pushContext: function pushContext() {
					this.pushStackLiteral(this.contextName(this.lastContext));
				},

				// [lookupOnContext]
				//
				// On stack, before: ...
				// On stack, after: currentContext[name], ...
				//
				// Looks up the value of `name` on the current context and pushes
				// it onto the stack.
				lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
					var i = 0;

					if (!scoped && this.options.compat && !this.lastContext) {
						// The depthed query is expected to handle the undefined logic for the root level that
						// is implemented below, so we evaluate that directly in compat mode
						this.push(this.depthedLookup(parts[i++]));
					} else {
						this.pushContext();
					}

					this.resolvePath('context', parts, i, falsy, strict);
				},

				// [lookupBlockParam]
				//
				// On stack, before: ...
				// On stack, after: blockParam[name], ...
				//
				// Looks up the value of `parts` on the given block param and pushes
				// it onto the stack.
				lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
					this.useBlockParams = true;

					this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
					this.resolvePath('context', parts, 1);
				},

				// [lookupData]
				//
				// On stack, before: ...
				// On stack, after: data, ...
				//
				// Push the data lookup operator
				lookupData: function lookupData(depth, parts, strict) {
					if (!depth) {
						this.pushStackLiteral('data');
					} else {
						this.pushStackLiteral('container.data(data, ' + depth + ')');
					}

					this.resolvePath('data', parts, 0, true, strict);
				},

				resolvePath: function resolvePath(type, parts, i, falsy, strict) {
					// istanbul ignore next

					var _this = this;

					if (this.options.strict || this.options.assumeObjects) {
						this.push(strictLookup(this.options.strict && strict, this, parts, type));
						return;
					}

					var len = parts.length;
					for (; i < len; i++) {
						/* eslint-disable no-loop-func */
						this.replaceStack(function (current) {
							var lookup = _this.nameLookup(current, parts[i], type);
							// We want to ensure that zero and false are handled properly if the context (falsy flag)
							// needs to have the special handling for these values.
							if (!falsy) {
								return [' != null ? ', lookup, ' : ', current];
							} else {
								// Otherwise we can use generic falsy handling
								return [' && ', lookup];
							}
						});
						/* eslint-enable no-loop-func */
					}
				},

				// [resolvePossibleLambda]
				//
				// On stack, before: value, ...
				// On stack, after: resolved value, ...
				//
				// If the `value` is a lambda, replace it on the stack by
				// the return value of the lambda
				resolvePossibleLambda: function resolvePossibleLambda() {
					this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
				},

				// [pushStringParam]
				//
				// On stack, before: ...
				// On stack, after: string, currentContext, ...
				//
				// This opcode is designed for use in string mode, which
				// provides the string value of a parameter along with its
				// depth rather than resolving it immediately.
				pushStringParam: function pushStringParam(string, type) {
					this.pushContext();
					this.pushString(type);

					// If it's a subexpression, the string result
					// will be pushed after this opcode.
					if (type !== 'SubExpression') {
						if (typeof string === 'string') {
							this.pushString(string);
						} else {
							this.pushStackLiteral(string);
						}
					}
				},

				emptyHash: function emptyHash(omitEmpty) {
					if (this.trackIds) {
						this.push('{}'); // hashIds
					}
					if (this.stringParams) {
						this.push('{}'); // hashContexts
						this.push('{}'); // hashTypes
					}
					this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
				},
				pushHash: function pushHash() {
					if (this.hash) {
						this.hashes.push(this.hash);
					}
					this.hash = { values: [], types: [], contexts: [], ids: [] };
				},
				popHash: function popHash() {
					var hash = this.hash;
					this.hash = this.hashes.pop();

					if (this.trackIds) {
						this.push(this.objectLiteral(hash.ids));
					}
					if (this.stringParams) {
						this.push(this.objectLiteral(hash.contexts));
						this.push(this.objectLiteral(hash.types));
					}

					this.push(this.objectLiteral(hash.values));
				},

				// [pushString]
				//
				// On stack, before: ...
				// On stack, after: quotedString(string), ...
				//
				// Push a quoted version of `string` onto the stack
				pushString: function pushString(string) {
					this.pushStackLiteral(this.quotedString(string));
				},

				// [pushLiteral]
				//
				// On stack, before: ...
				// On stack, after: value, ...
				//
				// Pushes a value onto the stack. This operation prevents
				// the compiler from creating a temporary variable to hold
				// it.
				pushLiteral: function pushLiteral(value) {
					this.pushStackLiteral(value);
				},

				// [pushProgram]
				//
				// On stack, before: ...
				// On stack, after: program(guid), ...
				//
				// Push a program expression onto the stack. This takes
				// a compile-time guid and converts it into a runtime-accessible
				// expression.
				pushProgram: function pushProgram(guid) {
					if (guid != null) {
						this.pushStackLiteral(this.programExpression(guid));
					} else {
						this.pushStackLiteral(null);
					}
				},

				// [registerDecorator]
				//
				// On stack, before: hash, program, params..., ...
				// On stack, after: ...
				//
				// Pops off the decorator's parameters, invokes the decorator,
				// and inserts the decorator into the decorators list.
				registerDecorator: function registerDecorator(paramSize, name) {
					var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
					    options = this.setupHelperArgs(name, paramSize);

					this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
				},

				// [invokeHelper]
				//
				// On stack, before: hash, inverse, program, params..., ...
				// On stack, after: result of helper invocation
				//
				// Pops off the helper's parameters, invokes the helper,
				// and pushes the helper's return value onto the stack.
				//
				// If the helper is not found, `helperMissing` is called.
				invokeHelper: function invokeHelper(paramSize, name, isSimple) {
					var nonHelper = this.popStack(),
					    helper = this.setupHelper(paramSize, name),
					    simple = isSimple ? [helper.name, ' || '] : '';

					var lookup = ['('].concat(simple, nonHelper);
					if (!this.options.strict) {
						lookup.push(' || ', this.aliasable('helpers.helperMissing'));
					}
					lookup.push(')');

					this.push(this.source.functionCall(lookup, 'call', helper.callParams));
				},

				// [invokeKnownHelper]
				//
				// On stack, before: hash, inverse, program, params..., ...
				// On stack, after: result of helper invocation
				//
				// This operation is used when the helper is known to exist,
				// so a `helperMissing` fallback is not required.
				invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
					var helper = this.setupHelper(paramSize, name);
					this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
				},

				// [invokeAmbiguous]
				//
				// On stack, before: hash, inverse, program, params..., ...
				// On stack, after: result of disambiguation
				//
				// This operation is used when an expression like `{{foo}}`
				// is provided, but we don't know at compile-time whether it
				// is a helper or a path.
				//
				// This operation emits more code than the other options,
				// and can be avoided by passing the `knownHelpers` and
				// `knownHelpersOnly` flags at compile-time.
				invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
					this.useRegister('helper');

					var nonHelper = this.popStack();

					this.emptyHash();
					var helper = this.setupHelper(0, name, helperCall);

					var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

					var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
					if (!this.options.strict) {
						lookup[0] = '(helper = ';
						lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
					}

					this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
				},

				// [invokePartial]
				//
				// On stack, before: context, ...
				// On stack after: result of partial invocation
				//
				// This operation pops off a context, invokes a partial with that context,
				// and pushes the result of the invocation back.
				invokePartial: function invokePartial(isDynamic, name, indent) {
					var params = [],
					    options = this.setupParams(name, 1, params);

					if (isDynamic) {
						name = this.popStack();
						delete options.name;
					}

					if (indent) {
						options.indent = JSON.stringify(indent);
					}
					options.helpers = 'helpers';
					options.partials = 'partials';
					options.decorators = 'container.decorators';

					if (!isDynamic) {
						params.unshift(this.nameLookup('partials', name, 'partial'));
					} else {
						params.unshift(name);
					}

					if (this.options.compat) {
						options.depths = 'depths';
					}
					options = this.objectLiteral(options);
					params.push(options);

					this.push(this.source.functionCall('container.invokePartial', '', params));
				},

				// [assignToHash]
				//
				// On stack, before: value, ..., hash, ...
				// On stack, after: ..., hash, ...
				//
				// Pops a value off the stack and assigns it to the current hash
				assignToHash: function assignToHash(key) {
					var value = this.popStack(),
					    context = undefined,
					    type = undefined,
					    id = undefined;

					if (this.trackIds) {
						id = this.popStack();
					}
					if (this.stringParams) {
						type = this.popStack();
						context = this.popStack();
					}

					var hash = this.hash;
					if (context) {
						hash.contexts[key] = context;
					}
					if (type) {
						hash.types[key] = type;
					}
					if (id) {
						hash.ids[key] = id;
					}
					hash.values[key] = value;
				},

				pushId: function pushId(type, name, child) {
					if (type === 'BlockParam') {
						this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
					} else if (type === 'PathExpression') {
						this.pushString(name);
					} else if (type === 'SubExpression') {
						this.pushStackLiteral('true');
					} else {
						this.pushStackLiteral('null');
					}
				},

				// HELPERS

				compiler: JavaScriptCompiler,

				compileChildren: function compileChildren(environment, options) {
					var children = environment.children,
					    child = undefined,
					    compiler = undefined;

					for (var i = 0, l = children.length; i < l; i++) {
						child = children[i];
						compiler = new this.compiler(); // eslint-disable-line new-cap

						var existing = this.matchExistingProgram(child);

						if (existing == null) {
							this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
							var index = this.context.programs.length;
							child.index = index;
							child.name = 'program' + index;
							this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
							this.context.decorators[index] = compiler.decorators;
							this.context.environments[index] = child;

							this.useDepths = this.useDepths || compiler.useDepths;
							this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
							child.useDepths = this.useDepths;
							child.useBlockParams = this.useBlockParams;
						} else {
							child.index = existing.index;
							child.name = 'program' + existing.index;

							this.useDepths = this.useDepths || existing.useDepths;
							this.useBlockParams = this.useBlockParams || existing.useBlockParams;
						}
					}
				},
				matchExistingProgram: function matchExistingProgram(child) {
					for (var i = 0, len = this.context.environments.length; i < len; i++) {
						var environment = this.context.environments[i];
						if (environment && environment.equals(child)) {
							return environment;
						}
					}
				},

				programExpression: function programExpression(guid) {
					var child = this.environment.children[guid],
					    programParams = [child.index, 'data', child.blockParams];

					if (this.useBlockParams || this.useDepths) {
						programParams.push('blockParams');
					}
					if (this.useDepths) {
						programParams.push('depths');
					}

					return 'container.program(' + programParams.join(', ') + ')';
				},

				useRegister: function useRegister(name) {
					if (!this.registers[name]) {
						this.registers[name] = true;
						this.registers.list.push(name);
					}
				},

				push: function push(expr) {
					if (!(expr instanceof Literal)) {
						expr = this.source.wrap(expr);
					}

					this.inlineStack.push(expr);
					return expr;
				},

				pushStackLiteral: function pushStackLiteral(item) {
					this.push(new Literal(item));
				},

				pushSource: function pushSource(source) {
					if (this.pendingContent) {
						this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
						this.pendingContent = undefined;
					}

					if (source) {
						this.source.push(source);
					}
				},

				replaceStack: function replaceStack(callback) {
					var prefix = ['('],
					    stack = undefined,
					    createdStack = undefined,
					    usedLiteral = undefined;

					/* istanbul ignore next */
					if (!this.isInline()) {
						throw new _exception2['default']('replaceStack on non-inline');
					}

					// We want to merge the inline statement into the replacement statement via ','
					var top = this.popStack(true);

					if (top instanceof Literal) {
						// Literals do not need to be inlined
						stack = [top.value];
						prefix = ['(', stack];
						usedLiteral = true;
					} else {
						// Get or create the current stack name for use by the inline
						createdStack = true;
						var _name = this.incrStack();

						prefix = ['((', this.push(_name), ' = ', top, ')'];
						stack = this.topStack();
					}

					var item = callback.call(this, stack);

					if (!usedLiteral) {
						this.popStack();
					}
					if (createdStack) {
						this.stackSlot--;
					}
					this.push(prefix.concat(item, ')'));
				},

				incrStack: function incrStack() {
					this.stackSlot++;
					if (this.stackSlot > this.stackVars.length) {
						this.stackVars.push('stack' + this.stackSlot);
					}
					return this.topStackName();
				},
				topStackName: function topStackName() {
					return 'stack' + this.stackSlot;
				},
				flushInline: function flushInline() {
					var inlineStack = this.inlineStack;
					this.inlineStack = [];
					for (var i = 0, len = inlineStack.length; i < len; i++) {
						var entry = inlineStack[i];
						/* istanbul ignore if */
						if (entry instanceof Literal) {
							this.compileStack.push(entry);
						} else {
							var stack = this.incrStack();
							this.pushSource([stack, ' = ', entry, ';']);
							this.compileStack.push(stack);
						}
					}
				},
				isInline: function isInline() {
					return this.inlineStack.length;
				},

				popStack: function popStack(wrapped) {
					var inline = this.isInline(),
					    item = (inline ? this.inlineStack : this.compileStack).pop();

					if (!wrapped && item instanceof Literal) {
						return item.value;
					} else {
						if (!inline) {
							/* istanbul ignore next */
							if (!this.stackSlot) {
								throw new _exception2['default']('Invalid stack pop');
							}
							this.stackSlot--;
						}
						return item;
					}
				},

				topStack: function topStack() {
					var stack = this.isInline() ? this.inlineStack : this.compileStack,
					    item = stack[stack.length - 1];

					/* istanbul ignore if */
					if (item instanceof Literal) {
						return item.value;
					} else {
						return item;
					}
				},

				contextName: function contextName(context) {
					if (this.useDepths && context) {
						return 'depths[' + context + ']';
					} else {
						return 'depth' + context;
					}
				},

				quotedString: function quotedString(str) {
					return this.source.quotedString(str);
				},

				objectLiteral: function objectLiteral(obj) {
					return this.source.objectLiteral(obj);
				},

				aliasable: function aliasable(name) {
					var ret = this.aliases[name];
					if (ret) {
						ret.referenceCount++;
						return ret;
					}

					ret = this.aliases[name] = this.source.wrap(name);
					ret.aliasable = true;
					ret.referenceCount = 1;

					return ret;
				},

				setupHelper: function setupHelper(paramSize, name, blockHelper) {
					var params = [],
					    paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
					var foundHelper = this.nameLookup('helpers', name, 'helper'),
					    callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');

					return {
						params: params,
						paramsInit: paramsInit,
						name: foundHelper,
						callParams: [callContext].concat(params)
					};
				},

				setupParams: function setupParams(helper, paramSize, params) {
					var options = {},
					    contexts = [],
					    types = [],
					    ids = [],
					    objectArgs = !params,
					    param = undefined;

					if (objectArgs) {
						params = [];
					}

					options.name = this.quotedString(helper);
					options.hash = this.popStack();

					if (this.trackIds) {
						options.hashIds = this.popStack();
					}
					if (this.stringParams) {
						options.hashTypes = this.popStack();
						options.hashContexts = this.popStack();
					}

					var inverse = this.popStack(),
					    program = this.popStack();

					// Avoid setting fn and inverse if neither are set. This allows
					// helpers to do a check for `if (options.fn)`
					if (program || inverse) {
						options.fn = program || 'container.noop';
						options.inverse = inverse || 'container.noop';
					}

					// The parameters go on to the stack in order (making sure that they are evaluated in order)
					// so we need to pop them off the stack in reverse order
					var i = paramSize;
					while (i--) {
						param = this.popStack();
						params[i] = param;

						if (this.trackIds) {
							ids[i] = this.popStack();
						}
						if (this.stringParams) {
							types[i] = this.popStack();
							contexts[i] = this.popStack();
						}
					}

					if (objectArgs) {
						options.args = this.source.generateArray(params);
					}

					if (this.trackIds) {
						options.ids = this.source.generateArray(ids);
					}
					if (this.stringParams) {
						options.types = this.source.generateArray(types);
						options.contexts = this.source.generateArray(contexts);
					}

					if (this.options.data) {
						options.data = 'data';
					}
					if (this.useBlockParams) {
						options.blockParams = 'blockParams';
					}
					return options;
				},

				setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
					var options = this.setupParams(helper, paramSize, params);
					options = this.objectLiteral(options);
					if (useRegister) {
						this.useRegister('options');
						params.push('options');
						return ['options=', options];
					} else if (params) {
						params.push(options);
						return '';
					} else {
						return options;
					}
				}
			};

			(function () {
				var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

				var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

				for (var i = 0, l = reservedWords.length; i < l; i++) {
					compilerWords[reservedWords[i]] = true;
				}
			})();

			JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
				return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
			};

			function strictLookup(requireTerminal, compiler, parts, type) {
				var stack = compiler.popStack(),
				    i = 0,
				    len = parts.length;
				if (requireTerminal) {
					len--;
				}

				for (; i < len; i++) {
					stack = compiler.nameLookup(stack, parts[i], type);
				}

				if (requireTerminal) {
					return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
				} else {
					return stack;
				}
			}

			exports['default'] = JavaScriptCompiler;
			module.exports = exports['default'];

			/***/
		},
		/* 43 */
		/***/function (module, exports, __webpack_require__) {

			/* global define */
			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(5);

			var SourceNode = undefined;

			try {
				/* istanbul ignore next */
				if (false) {
					// We don't support this in AMD environments. For these environments, we asusme that
					// they are running on the browser and thus have no need for the source-map library.
					var SourceMap = require('source-map');
					SourceNode = SourceMap.SourceNode;
				}
			} catch (err) {}
			/* NOP */

			/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
			if (!SourceNode) {
				SourceNode = function SourceNode(line, column, srcFile, chunks) {
					this.src = '';
					if (chunks) {
						this.add(chunks);
					}
				};
				/* istanbul ignore next */
				SourceNode.prototype = {
					add: function add(chunks) {
						if (_utils.isArray(chunks)) {
							chunks = chunks.join('');
						}
						this.src += chunks;
					},
					prepend: function prepend(chunks) {
						if (_utils.isArray(chunks)) {
							chunks = chunks.join('');
						}
						this.src = chunks + this.src;
					},
					toStringWithSourceMap: function toStringWithSourceMap() {
						return { code: this.toString() };
					},
					toString: function toString() {
						return this.src;
					}
				};
			}

			function castChunk(chunk, codeGen, loc) {
				if (_utils.isArray(chunk)) {
					var ret = [];

					for (var i = 0, len = chunk.length; i < len; i++) {
						ret.push(codeGen.wrap(chunk[i], loc));
					}
					return ret;
				} else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
					// Handle primitives that the SourceNode will throw up on
					return chunk + '';
				}
				return chunk;
			}

			function CodeGen(srcFile) {
				this.srcFile = srcFile;
				this.source = [];
			}

			CodeGen.prototype = {
				isEmpty: function isEmpty() {
					return !this.source.length;
				},
				prepend: function prepend(source, loc) {
					this.source.unshift(this.wrap(source, loc));
				},
				push: function push(source, loc) {
					this.source.push(this.wrap(source, loc));
				},

				merge: function merge() {
					var source = this.empty();
					this.each(function (line) {
						source.add(['  ', line, '\n']);
					});
					return source;
				},

				each: function each(iter) {
					for (var i = 0, len = this.source.length; i < len; i++) {
						iter(this.source[i]);
					}
				},

				empty: function empty() {
					var loc = this.currentLocation || { start: {} };
					return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
				},
				wrap: function wrap(chunk) {
					var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

					if (chunk instanceof SourceNode) {
						return chunk;
					}

					chunk = castChunk(chunk, this, loc);

					return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
				},

				functionCall: function functionCall(fn, type, params) {
					params = this.generateList(params);
					return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
				},

				quotedString: function quotedString(str) {
					return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
					.replace(/\u2029/g, '\\u2029') + '"';
				},

				objectLiteral: function objectLiteral(obj) {
					var pairs = [];

					for (var key in obj) {
						if (obj.hasOwnProperty(key)) {
							var value = castChunk(obj[key], this);
							if (value !== 'undefined') {
								pairs.push([this.quotedString(key), ':', value]);
							}
						}
					}

					var ret = this.generateList(pairs);
					ret.prepend('{');
					ret.add('}');
					return ret;
				},

				generateList: function generateList(entries) {
					var ret = this.empty();

					for (var i = 0, len = entries.length; i < len; i++) {
						if (i) {
							ret.add(',');
						}

						ret.add(castChunk(entries[i], this));
					}

					return ret;
				},

				generateArray: function generateArray(entries) {
					var ret = this.generateList(entries);
					ret.prepend('[');
					ret.add(']');

					return ret;
				}
			};

			exports['default'] = CodeGen;
			module.exports = exports['default'];

			/***/
		}]
		/******/)
	);
});
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = exports.Router = function () {
    function Router() {
        _classCallCheck(this, Router);

        this.routes = [];

        window.addEventListener('hashchange', this.checkRoute.bind(this));
    }

    _createClass(Router, [{
        key: 'addRoute',
        value: function addRoute(hash, func) {
            this.routes[hash] = func;
        }
    }, {
        key: 'checkRoute',
        value: function checkRoute() {
            var errorRouteIdentifier = '*';
            var currentHash = location.hash.slice(1);
            var matchedRoute = this.routes[currentHash] ? this.routes[currentHash] : this.routes[errorRouteIdentifier];
            matchedRoute();
        }
    }]);

    return Router;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.controllers = undefined;

var _HomeController = __webpack_require__(8);

var _HomeController2 = _interopRequireDefault(_HomeController);

var _ErrorController = __webpack_require__(9);

var _ErrorController2 = _interopRequireDefault(_ErrorController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllers = exports.controllers = {
    HomeController: _HomeController2.default,
    ErrorController: _ErrorController2.default
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(1);

var _View = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeController = function (_Controller) {
    _inherits(HomeController, _Controller);

    function HomeController() {
        _classCallCheck(this, HomeController);

        return _possibleConstructorReturn(this, (HomeController.__proto__ || Object.getPrototypeOf(HomeController)).apply(this, arguments));
    }

    _createClass(HomeController, [{
        key: 'test',
        value: function test() {
            var data = {
                title: 'Tobi',
                body: 'huhu'
            };
            _View.View.render('index', data);
        }
    }]);

    return HomeController;
}(_Controller2.Controller);

exports.default = HomeController;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(1);

var _View = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorController = function (_Controller) {
    _inherits(ErrorController, _Controller);

    function ErrorController() {
        _classCallCheck(this, ErrorController);

        return _possibleConstructorReturn(this, (ErrorController.__proto__ || Object.getPrototypeOf(ErrorController)).apply(this, arguments));
    }

    _createClass(ErrorController, [{
        key: 'test',
        value: function test() {
            console.log("Page not found");
        }
    }]);

    return ErrorController;
}(_Controller2.Controller);

exports.default = ErrorController;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2E2YzYzZGU3NmQ5Y2E1OGNmNTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9oYW5kbGViYXJzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvUm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvSG9tZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0Vycm9yQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJteVRlbXBsYXRlIiwicmVxdWlyZSIsIlZpZXciLCJ2aWV3IiwiZGF0YSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJDb250cm9sbGVyIiwid2luZG93Iiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsImluaXQiLCJkb21FbGVtZW50Iiwicm91dGVyIiwiaG9tZUNvbnRyb2xsZXIiLCJIb21lQ29udHJvbGxlciIsImFkZFJvdXRlIiwidGVzdCIsImVycm9yQ29udHJvbGxlciIsIkVycm9yQ29udHJvbGxlciIsImNoZWNrUm91dGUiLCJ3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsIm1vZHVsZXMiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiaWQiLCJsb2FkZWQiLCJjYWxsIiwibSIsImMiLCJwIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9fZXNNb2R1bGUiLCJfaGFuZGxlYmFyc1J1bnRpbWUiLCJfaGFuZGxlYmFyc1J1bnRpbWUyIiwiX2hhbmRsZWJhcnNDb21waWxlckFzdCIsIl9oYW5kbGViYXJzQ29tcGlsZXJBc3QyIiwiX2hhbmRsZWJhcnNDb21waWxlckJhc2UiLCJfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIiLCJfaGFuZGxlYmFyc0NvbXBpbGVySmF2YXNjcmlwdENvbXBpbGVyIiwiX2hhbmRsZWJhcnNDb21waWxlckphdmFzY3JpcHRDb21waWxlcjIiLCJfaGFuZGxlYmFyc0NvbXBpbGVyVmlzaXRvciIsIl9oYW5kbGViYXJzQ29tcGlsZXJWaXNpdG9yMiIsIl9oYW5kbGViYXJzTm9Db25mbGljdCIsIl9oYW5kbGViYXJzTm9Db25mbGljdDIiLCJfY3JlYXRlIiwiY3JlYXRlIiwiaGIiLCJjb21waWxlIiwiaW5wdXQiLCJvcHRpb25zIiwicHJlY29tcGlsZSIsIkFTVCIsIkNvbXBpbGVyIiwiSmF2YVNjcmlwdENvbXBpbGVyIiwiUGFyc2VyIiwicGFyc2VyIiwicGFyc2UiLCJpbnN0IiwiVmlzaXRvciIsIm9iaiIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX2hhbmRsZWJhcnNCYXNlIiwiYmFzZSIsIl9oYW5kbGViYXJzU2FmZVN0cmluZyIsIl9oYW5kbGViYXJzU2FmZVN0cmluZzIiLCJfaGFuZGxlYmFyc0V4Y2VwdGlvbiIsIl9oYW5kbGViYXJzRXhjZXB0aW9uMiIsIl9oYW5kbGViYXJzVXRpbHMiLCJVdGlscyIsInJ1bnRpbWUiLCJIYW5kbGViYXJzRW52aXJvbm1lbnQiLCJleHRlbmQiLCJTYWZlU3RyaW5nIiwiRXhjZXB0aW9uIiwiZXNjYXBlRXhwcmVzc2lvbiIsIlZNIiwidGVtcGxhdGUiLCJzcGVjIiwibmV3T2JqIiwia2V5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJfdXRpbHMiLCJfZXhjZXB0aW9uIiwiX2V4Y2VwdGlvbjIiLCJfaGVscGVycyIsIl9kZWNvcmF0b3JzIiwiX2xvZ2dlciIsIl9sb2dnZXIyIiwiVkVSU0lPTiIsIkNPTVBJTEVSX1JFVklTSU9OIiwiUkVWSVNJT05fQ0hBTkdFUyIsIm9iamVjdFR5cGUiLCJoZWxwZXJzIiwicGFydGlhbHMiLCJkZWNvcmF0b3JzIiwicmVnaXN0ZXJEZWZhdWx0SGVscGVycyIsInJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMiLCJjb25zdHJ1Y3RvciIsImxvZ2dlciIsInJlZ2lzdGVySGVscGVyIiwibmFtZSIsImZuIiwidG9TdHJpbmciLCJ1bnJlZ2lzdGVySGVscGVyIiwicmVnaXN0ZXJQYXJ0aWFsIiwicGFydGlhbCIsInVucmVnaXN0ZXJQYXJ0aWFsIiwicmVnaXN0ZXJEZWNvcmF0b3IiLCJ1bnJlZ2lzdGVyRGVjb3JhdG9yIiwiY3JlYXRlRnJhbWUiLCJpbmRleE9mIiwiaXNFbXB0eSIsImJsb2NrUGFyYW1zIiwiYXBwZW5kQ29udGV4dFBhdGgiLCJlc2NhcGUiLCJiYWRDaGFycyIsInBvc3NpYmxlIiwiZXNjYXBlQ2hhciIsImNociIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJpc0Z1bmN0aW9uIiwidmFsdWUiLCJpc0FycmF5IiwiQXJyYXkiLCJhcnJheSIsImxlbiIsInN0cmluZyIsInRvSFRNTCIsInJlcGxhY2UiLCJvYmplY3QiLCJmcmFtZSIsIl9wYXJlbnQiLCJwYXJhbXMiLCJpZHMiLCJwYXRoIiwiY29udGV4dFBhdGgiLCJfT2JqZWN0JGRlZmluZVByb3BlcnR5IiwiZXJyb3JQcm9wcyIsIm1lc3NhZ2UiLCJub2RlIiwibG9jIiwibGluZSIsInVuZGVmaW5lZCIsImNvbHVtbiIsInN0YXJ0IiwidG1wIiwiRXJyb3IiLCJpZHgiLCJjYXB0dXJlU3RhY2tUcmFjZSIsImxpbmVOdW1iZXIiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJub3AiLCIkIiwiaXQiLCJkZXNjIiwic2V0RGVzYyIsIiRPYmplY3QiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiaXNFbnVtIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJnZXREZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwic2V0RGVzY3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ2V0S2V5cyIsImtleXMiLCJnZXROYW1lcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZWFjaCIsImZvckVhY2giLCJfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZyIsIl9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nMiIsIl9oZWxwZXJzRWFjaCIsIl9oZWxwZXJzRWFjaDIiLCJfaGVscGVyc0hlbHBlck1pc3NpbmciLCJfaGVscGVyc0hlbHBlck1pc3NpbmcyIiwiX2hlbHBlcnNJZiIsIl9oZWxwZXJzSWYyIiwiX2hlbHBlcnNMb2ciLCJfaGVscGVyc0xvZzIiLCJfaGVscGVyc0xvb2t1cCIsIl9oZWxwZXJzTG9va3VwMiIsIl9oZWxwZXJzV2l0aCIsIl9oZWxwZXJzV2l0aDIiLCJpbnN0YW5jZSIsImNvbnRleHQiLCJpbnZlcnNlIiwicmV0IiwiZXhlY0l0ZXJhdGlvbiIsImZpZWxkIiwiaW5kZXgiLCJsYXN0IiwiZmlyc3QiLCJqIiwicHJpb3JLZXkiLCJjb25kaXRpb25hbCIsImhhc2giLCJpbmNsdWRlWmVybyIsImFyZ3MiLCJwdXNoIiwibGV2ZWwiLCJhcHBseSIsIl9kZWNvcmF0b3JzSW5saW5lIiwiX2RlY29yYXRvcnNJbmxpbmUyIiwicHJvcHMiLCJjb250YWluZXIiLCJvcmlnaW5hbCIsIm1ldGhvZE1hcCIsImxvb2t1cExldmVsIiwibGV2ZWxNYXAiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlSW50IiwibWV0aG9kIiwiX2xlbiIsIl9rZXkiLCJfT2JqZWN0JHNlYWwiLCJjaGVja1JldmlzaW9uIiwid3JhcFByb2dyYW0iLCJyZXNvbHZlUGFydGlhbCIsImludm9rZVBhcnRpYWwiLCJub29wIiwiX2Jhc2UiLCJjb21waWxlckluZm8iLCJjb21waWxlclJldmlzaW9uIiwiY3VycmVudFJldmlzaW9uIiwicnVudGltZVZlcnNpb25zIiwiY29tcGlsZXJWZXJzaW9ucyIsInRlbXBsYXRlU3BlYyIsImVudiIsIm1haW4iLCJkZWNvcmF0b3IiLCJtYWluX2QiLCJjb21waWxlciIsImludm9rZVBhcnRpYWxXcmFwcGVyIiwicmVzdWx0IiwiY29tcGlsZXJPcHRpb25zIiwiaW5kZW50IiwibGluZXMiLCJzcGxpdCIsImwiLCJqb2luIiwic3RyaWN0IiwibG9va3VwIiwiZGVwdGhzIiwibGFtYmRhIiwiY3VycmVudCIsInByb2dyYW1zIiwicHJvZ3JhbSIsImRlY2xhcmVkQmxvY2tQYXJhbXMiLCJwcm9ncmFtV3JhcHBlciIsImRlcHRoIiwibWVyZ2UiLCJwYXJhbSIsImNvbW1vbiIsIm51bGxDb250ZXh0IiwiX3NldHVwIiwidXNlRGF0YSIsImluaXREYXRhIiwidXNlQmxvY2tQYXJhbXMiLCJ1c2VEZXB0aHMiLCJjb25jYXQiLCJleGVjdXRlRGVjb3JhdG9ycyIsImlzVG9wIiwidXNlUGFydGlhbCIsInVzZURlY29yYXRvcnMiLCJfY2hpbGQiLCJwcm9nIiwiY3VycmVudERlcHRocyIsImN1cnJlbnRQYXJ0aWFsQmxvY2siLCJwYXJ0aWFsQmxvY2siLCJwYXJ0aWFsQmxvY2tXcmFwcGVyIiwiRnVuY3Rpb24iLCJzZWFsIiwiaXNPYmplY3QiLCIkc2VhbCIsIiRleHBvcnQiLCJjb3JlIiwiZmFpbHMiLCJLRVkiLCJleGVjIiwiZXhwIiwiUyIsIkYiLCJnbG9iYWwiLCJjdHgiLCJQUk9UT1RZUEUiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiSVNfR0xPQkFMIiwiRyIsIklTX1NUQVRJQyIsIklTX1BST1RPIiwiUCIsIklTX0JJTkQiLCJCIiwiSVNfV1JBUCIsIlciLCJ0YXJnZXQiLCJvd24iLCJvdXQiLCJDIiwiTWF0aCIsInNlbGYiLCJfX2ciLCJ2ZXJzaW9uIiwiX19lIiwiYUZ1bmN0aW9uIiwidGhhdCIsImEiLCJiIiwiVHlwZUVycm9yIiwiZSIsIkhhbmRsZWJhcnMiLCIkSGFuZGxlYmFycyIsIm5vQ29uZmxpY3QiLCJoZWxwZXJFeHByZXNzaW9uIiwic2NvcGVkSWQiLCJzaW1wbGVJZCIsInBhcnRzIiwiX3BhcnNlciIsIl9wYXJzZXIyIiwiX3doaXRlc3BhY2VDb250cm9sIiwiX3doaXRlc3BhY2VDb250cm9sMiIsIkhlbHBlcnMiLCJ5eSIsImxvY0luZm8iLCJTb3VyY2VMb2NhdGlvbiIsInNyY05hbWUiLCJzdHJpcCIsImFjY2VwdCIsImhhbmRsZWJhcnMiLCJ0cmFjZSIsInN5bWJvbHNfIiwidGVybWluYWxzXyIsInByb2R1Y3Rpb25zXyIsInBlcmZvcm1BY3Rpb24iLCJhbm9ueW1vdXMiLCJ5eXRleHQiLCJ5eWxlbmciLCJ5eWxpbmVubyIsInl5c3RhdGUiLCIkJCIsIl8kIiwiJDAiLCJwcmVwYXJlUHJvZ3JhbSIsInN0cmlwQ29tbWVudCIsInN0cmlwRmxhZ3MiLCJwcmVwYXJlUmF3QmxvY2siLCJwcmVwYXJlQmxvY2siLCJvcGVuIiwiY2hhaW5lZCIsImNoYWluIiwicHJlcGFyZU11c3RhY2hlIiwicHJlcGFyZVBhcnRpYWxCbG9jayIsInBhaXJzIiwiTnVtYmVyIiwicHJlcGFyZVBhdGgiLCJwYXJ0Iiwic2VwYXJhdG9yIiwidGFibGUiLCJkZWZhdWx0QWN0aW9ucyIsInBhcnNlRXJyb3IiLCJzdHIiLCJzdGFjayIsInZzdGFjayIsImxzdGFjayIsInJlY292ZXJpbmciLCJURVJST1IiLCJFT0YiLCJsZXhlciIsInNldElucHV0IiwieXlsbG9jIiwieXlsb2MiLCJyYW5nZXMiLCJwb3BTdGFjayIsIm4iLCJsZXgiLCJ0b2tlbiIsInN5bWJvbCIsInByZUVycm9yU3ltYm9sIiwic3RhdGUiLCJhY3Rpb24iLCJyIiwieXl2YWwiLCJuZXdTdGF0ZSIsImV4cGVjdGVkIiwiZXJyU3RyIiwic2hvd1Bvc2l0aW9uIiwidGV4dCIsIm1hdGNoIiwiZmlyc3RfbGluZSIsImxhc3RfbGluZSIsImZpcnN0X2NvbHVtbiIsImxhc3RfY29sdW1uIiwicmFuZ2UiLCJzbGljZSIsIl9pbnB1dCIsIl9tb3JlIiwiX2xlc3MiLCJkb25lIiwibWF0Y2hlZCIsImNvbmRpdGlvblN0YWNrIiwib2Zmc2V0IiwiY2giLCJ1bnB1dCIsInN1YnN0ciIsIm9sZExpbmVzIiwibW9yZSIsImxlc3MiLCJwYXN0SW5wdXQiLCJwYXN0IiwidXBjb21pbmdJbnB1dCIsIm5leHQiLCJwcmUiLCJ0ZW1wTWF0Y2giLCJjb2wiLCJydWxlcyIsIl9jdXJyZW50UnVsZXMiLCJmbGV4IiwibWF0Y2hlcyIsImJlZ2luIiwiY29uZGl0aW9uIiwicG9wU3RhdGUiLCJwb3AiLCJjb25kaXRpb25zIiwidG9wU3RhdGUiLCJwdXNoU3RhdGUiLCJ5eV8iLCIkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zIiwiWVlfU1RBUlQiLCJlbmQiLCJZWVNUQVRFIiwiX3Zpc2l0b3IiLCJfdmlzaXRvcjIiLCJXaGl0ZXNwYWNlQ29udHJvbCIsIlByb2dyYW0iLCJkb1N0YW5kYWxvbmUiLCJpZ25vcmVTdGFuZGFsb25lIiwiaXNSb290IiwiaXNSb290U2VlbiIsImJvZHkiLCJfaXNQcmV2V2hpdGVzcGFjZSIsImlzUHJldldoaXRlc3BhY2UiLCJfaXNOZXh0V2hpdGVzcGFjZSIsImlzTmV4dFdoaXRlc3BhY2UiLCJvcGVuU3RhbmRhbG9uZSIsImNsb3NlU3RhbmRhbG9uZSIsImlubGluZVN0YW5kYWxvbmUiLCJjbG9zZSIsIm9taXRSaWdodCIsIm9taXRMZWZ0IiwiQmxvY2tTdGF0ZW1lbnQiLCJEZWNvcmF0b3JCbG9jayIsIlBhcnRpYWxCbG9ja1N0YXRlbWVudCIsImJsb2NrIiwiZmlyc3RJbnZlcnNlIiwibGFzdEludmVyc2UiLCJvcGVuU3RyaXAiLCJjbG9zZVN0cmlwIiwiaW52ZXJzZVN0cmlwIiwiRGVjb3JhdG9yIiwiTXVzdGFjaGVTdGF0ZW1lbnQiLCJtdXN0YWNoZSIsIlBhcnRpYWxTdGF0ZW1lbnQiLCJDb21tZW50U3RhdGVtZW50IiwicHJldiIsInNpYmxpbmciLCJtdWx0aXBsZSIsInJpZ2h0U3RyaXBwZWQiLCJsZWZ0U3RyaXBwZWQiLCJwYXJlbnRzIiwibXV0YXRpbmciLCJhY2NlcHRLZXkiLCJhY2NlcHRSZXF1aXJlZCIsImFjY2VwdEFycmF5Iiwic3BsaWNlIiwidW5zaGlmdCIsInNoaWZ0IiwidmlzaXRTdWJFeHByZXNzaW9uIiwidmlzaXRCbG9jayIsInZpc2l0UGFydGlhbCIsIkNvbnRlbnRTdGF0ZW1lbnQiLCJTdWJFeHByZXNzaW9uIiwiUGF0aEV4cHJlc3Npb24iLCJTdHJpbmdMaXRlcmFsIiwiTnVtYmVyTGl0ZXJhbCIsIkJvb2xlYW5MaXRlcmFsIiwiVW5kZWZpbmVkTGl0ZXJhbCIsIk51bGxMaXRlcmFsIiwiSGFzaCIsIkhhc2hQYWlyIiwicGFpciIsInZhbGlkYXRlQ2xvc2UiLCJlcnJvck5vZGUiLCJjaGFyQXQiLCJjb21tZW50IiwiZGlnIiwiZGVwdGhTdHJpbmciLCJpc0xpdGVyYWwiLCJlc2NhcGVGbGFnIiwiZXNjYXBlZCIsIm9wZW5SYXdCbG9jayIsImNvbnRlbnRzIiwib3BlbkJsb2NrIiwiaW52ZXJzZUFuZFByb2dyYW0iLCJpbnZlcnRlZCIsInN0YXRlbWVudHMiLCJmaXJzdExvYyIsImxhc3RMb2MiLCJfYXN0IiwiX2FzdDIiLCJlcXVhbHMiLCJvdGhlciIsIm9wY29kZXMiLCJvcGNvZGUiLCJvdGhlck9wY29kZSIsImFyZ0VxdWFscyIsImNoaWxkcmVuIiwiZ3VpZCIsInNvdXJjZU5vZGUiLCJzdHJpbmdQYXJhbXMiLCJ0cmFja0lkcyIsImtub3duSGVscGVycyIsIl9uYW1lIiwiY29tcGlsZVByb2dyYW0iLCJjaGlsZENvbXBpbGVyIiwiYm9keUxlbmd0aCIsImlzU2ltcGxlIiwidHJhbnNmb3JtTGl0ZXJhbFRvUGF0aCIsImNsYXNzaWZ5U2V4cHIiLCJoZWxwZXJTZXhwciIsInNpbXBsZVNleHByIiwiYW1iaWd1b3VzU2V4cHIiLCJzZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyIsImV4cGxpY2l0UGFydGlhbENvbnRleHQiLCJwYXJ0aWFsTmFtZSIsImlzRHluYW1pYyIsInByZXZlbnRJbmRlbnQiLCJub0VzY2FwZSIsImNvbnRlbnQiLCJzZXhwciIsImlzQmxvY2siLCJrbm93bkhlbHBlcnNPbmx5IiwiZmFsc3kiLCJhZGREZXB0aCIsInNjb3BlZCIsImJsb2NrUGFyYW1JZCIsImJsb2NrUGFyYW1JbmRleCIsIm51bWJlciIsImJvb2wiLCJwdXNoUGFyYW0iLCJpc0Jsb2NrUGFyYW0iLCJpc0hlbHBlciIsImlzRWxpZ2libGUiLCJfbmFtZTIiLCJwdXNoUGFyYW1zIiwidmFsIiwiYmxvY2tQYXJhbUNoaWxkIiwib21pdEVtcHR5IiwiY29tcGF0IiwiYXN0IiwiZW52aXJvbm1lbnQiLCJjb21waWxlZCIsImNvbXBpbGVJbnB1dCIsImV4ZWNPcHRpb25zIiwic2V0dXBPcHRpb25zIiwibGl0ZXJhbCIsIl9jb2RlR2VuIiwiX2NvZGVHZW4yIiwiTGl0ZXJhbCIsIm5hbWVMb29rdXAiLCJwYXJlbnQiLCJpc1ZhbGlkSmF2YVNjcmlwdFZhcmlhYmxlTmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZXB0aGVkTG9va3VwIiwiYWxpYXNhYmxlIiwicmV2aXNpb24iLCJ2ZXJzaW9ucyIsImFwcGVuZFRvQnVmZmVyIiwibG9jYXRpb24iLCJleHBsaWNpdCIsIndyYXAiLCJpbml0aWFsaXplQnVmZmVyIiwicXVvdGVkU3RyaW5nIiwiYXNPYmplY3QiLCJpc0NoaWxkIiwiZW52aXJvbm1lbnRzIiwicHJlYW1ibGUiLCJzdGFja1Nsb3QiLCJzdGFja1ZhcnMiLCJhbGlhc2VzIiwicmVnaXN0ZXJzIiwibGlzdCIsImhhc2hlcyIsImNvbXBpbGVTdGFjayIsImlubGluZVN0YWNrIiwiY29tcGlsZUNoaWxkcmVuIiwiY3VycmVudExvY2F0aW9uIiwicHVzaFNvdXJjZSIsInByZXBlbmQiLCJjcmVhdGVGdW5jdGlvbkNvbnRleHQiLCJfY29udGV4dCIsIm9iamVjdExpdGVyYWwiLCJ0b1N0cmluZ1dpdGhTb3VyY2VNYXAiLCJmaWxlIiwiZGVzdE5hbWUiLCJtYXAiLCJsYXN0Q29udGV4dCIsInZhckRlY2xhcmF0aW9ucyIsImxvY2FscyIsImFsaWFzQ291bnQiLCJhbGlhcyIsInJlZmVyZW5jZUNvdW50IiwibWVyZ2VTb3VyY2UiLCJhcHBlbmRPbmx5IiwiZm9yY2VCdWZmZXIiLCJhcHBlbmRGaXJzdCIsInNvdXJjZVNlZW4iLCJidWZmZXJTdGFydCIsImJ1ZmZlckVuZCIsImFkZCIsInN1YnN0cmluZyIsImJsb2NrVmFsdWUiLCJibG9ja0hlbHBlck1pc3NpbmciLCJjb250ZXh0TmFtZSIsInNldHVwSGVscGVyQXJncyIsImJsb2NrTmFtZSIsImZ1bmN0aW9uQ2FsbCIsImFtYmlndW91c0Jsb2NrVmFsdWUiLCJmbHVzaElubGluZSIsInRvcFN0YWNrIiwibGFzdEhlbHBlciIsImFwcGVuZENvbnRlbnQiLCJwZW5kaW5nQ29udGVudCIsInBlbmRpbmdMb2NhdGlvbiIsImFwcGVuZCIsImlzSW5saW5lIiwicmVwbGFjZVN0YWNrIiwibG9jYWwiLCJhcHBlbmRFc2NhcGVkIiwiZ2V0Q29udGV4dCIsInB1c2hDb250ZXh0IiwicHVzaFN0YWNrTGl0ZXJhbCIsImxvb2t1cE9uQ29udGV4dCIsInJlc29sdmVQYXRoIiwibG9va3VwQmxvY2tQYXJhbSIsImxvb2t1cERhdGEiLCJfdGhpcyIsImFzc3VtZU9iamVjdHMiLCJzdHJpY3RMb29rdXAiLCJyZXNvbHZlUG9zc2libGVMYW1iZGEiLCJwdXNoU3RyaW5nUGFyYW0iLCJwdXNoU3RyaW5nIiwiZW1wdHlIYXNoIiwicHVzaEhhc2giLCJ2YWx1ZXMiLCJ0eXBlcyIsImNvbnRleHRzIiwicG9wSGFzaCIsInB1c2hMaXRlcmFsIiwicHVzaFByb2dyYW0iLCJwcm9ncmFtRXhwcmVzc2lvbiIsInBhcmFtU2l6ZSIsImZvdW5kRGVjb3JhdG9yIiwiaW52b2tlSGVscGVyIiwibm9uSGVscGVyIiwiaGVscGVyIiwic2V0dXBIZWxwZXIiLCJzaW1wbGUiLCJjYWxsUGFyYW1zIiwiaW52b2tlS25vd25IZWxwZXIiLCJpbnZva2VBbWJpZ3VvdXMiLCJoZWxwZXJDYWxsIiwidXNlUmVnaXN0ZXIiLCJoZWxwZXJOYW1lIiwicGFyYW1zSW5pdCIsInNldHVwUGFyYW1zIiwiYXNzaWduVG9IYXNoIiwicHVzaElkIiwiY2hpbGQiLCJleGlzdGluZyIsIm1hdGNoRXhpc3RpbmdQcm9ncmFtIiwicHJvZ3JhbVBhcmFtcyIsImV4cHIiLCJpdGVtIiwiY2FsbGJhY2siLCJwcmVmaXgiLCJjcmVhdGVkU3RhY2siLCJ1c2VkTGl0ZXJhbCIsInRvcCIsImluY3JTdGFjayIsInRvcFN0YWNrTmFtZSIsImVudHJ5Iiwid3JhcHBlZCIsImlubGluZSIsImJsb2NrSGVscGVyIiwiZm91bmRIZWxwZXIiLCJjYWxsQ29udGV4dCIsIm9iamVjdEFyZ3MiLCJoYXNoSWRzIiwiaGFzaFR5cGVzIiwiaGFzaENvbnRleHRzIiwiZ2VuZXJhdGVBcnJheSIsInJlc2VydmVkV29yZHMiLCJjb21waWxlcldvcmRzIiwiUkVTRVJWRURfV09SRFMiLCJyZXF1aXJlVGVybWluYWwiLCJTb3VyY2VOb2RlIiwiU291cmNlTWFwIiwiZXJyIiwic3JjRmlsZSIsImNodW5rcyIsInNyYyIsImNvZGUiLCJjYXN0Q2h1bmsiLCJjaHVuayIsImNvZGVHZW4iLCJDb2RlR2VuIiwiZW1wdHkiLCJpdGVyIiwiZ2VuZXJhdGVMaXN0IiwiZW50cmllcyIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiZ2V0IiwiUm91dGVyIiwicm91dGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJpbmQiLCJmdW5jIiwiZXJyb3JSb3V0ZUlkZW50aWZpZXIiLCJjdXJyZW50SGFzaCIsIm1hdGNoZWRSb3V0ZSIsImNvbnRyb2xsZXJzIiwidGl0bGUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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LENBQXBCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUNBOzs7Ozs7OztJQUVxQkosYzs7Ozs7Ozs7Ozs7K0JBQ1Y7QUFDSCxnQkFBTWIsT0FBTztBQUNUNnVCLHVCQUFPLE1BREU7QUFFVHhTLHNCQUFNO0FBRkcsYUFBYjtBQUlBLHVCQUFLeVMsTUFBTCxDQUFZLE9BQVosRUFBcUI5dUIsSUFBckI7QUFDSDs7Ozs7O2tCQVBnQmEsYzs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOztBQUNBOzs7Ozs7OztJQUVxQkksZTs7Ozs7Ozs7Ozs7K0JBQ1Y7QUFDSFYsb0JBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNIOzs7Ozs7a0JBSGdCUyxlIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdhNmM2M2RlNzZkOWNhNThjZjUyIiwiaW1wb3J0IEhhbmRsZWJhcnMgZnJvbSAnaGFuZGxlYmFycy9kaXN0L2hhbmRsZWJhcnMnO1xyXG5jb25zdCBteVRlbXBsYXRlID0gcmVxdWlyZSgnLi9pbmRleC5oYW5kbGViYXJzJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlldyB7XHJcbiAgICBzdGF0aWMgYXN5bmMgcmVuZGVyKHZpZXcsIGRhdGEgPSBcIlwiKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmlubmVySFRNTCA9IG15VGVtcGxhdGUoZGF0YSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9WaWV3LmpzIiwiZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xyXG4gICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9Db250cm9sbGVyLmpzIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vY29yZS9WaWV3JztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi9jb3JlL1JvdXRlcic7XHJcbmltcG9ydCB7IGNvbnRyb2xsZXJzIH0gZnJvbSAnLi9jb250cm9sbGVycy5qcyc7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJBcHAgaXMgcnVubmluZ1wiKTtcclxuICAgIGluaXQoKTtcclxufTtcclxuXHJcbmNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XHJcblxyXG5jb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhvbWVDb250cm9sbGVyID0gbmV3IGNvbnRyb2xsZXJzLkhvbWVDb250cm9sbGVyKCk7XHJcbiAgICByb3V0ZXIuYWRkUm91dGUoJ2hvbWUnLCBob21lQ29udHJvbGxlci50ZXN0KTtcclxuXHJcbiAgICBjb25zdCBlcnJvckNvbnRyb2xsZXIgPSBuZXcgY29udHJvbGxlcnMuRXJyb3JDb250cm9sbGVyKCk7XHJcbiAgICByb3V0ZXIuYWRkUm91dGUoJyonLCBlcnJvckNvbnRyb2xsZXIudGVzdCk7XHJcblxyXG4gICAgcm91dGVyLmNoZWNrUm91dGUoKTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIiwiLyoqIVxuXG4gQGxpY2Vuc2VcbiBoYW5kbGViYXJzIHY0LjAuMTFcblxuQ29weXJpZ2h0IChDKSAyMDExLTIwMTcgYnkgWWVodWRhIEthdHpcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSGFuZGxlYmFyc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIYW5kbGViYXJzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2hhbmRsZWJhcnNSdW50aW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNSdW50aW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNSdW50aW1lKTtcblxuXHQvLyBDb21waWxlciBpbXBvcnRzXG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJBc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlckFzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzQ29tcGlsZXJBc3QpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyQmFzZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQxKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlckphdmFzY3JpcHRDb21waWxlciA9IF9fd2VicGFja19yZXF1aXJlX18oNDIpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVySmF2YXNjcmlwdENvbXBpbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNDb21waWxlckphdmFzY3JpcHRDb21waWxlcik7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJWaXNpdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJWaXNpdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IpO1xuXG5cdHZhciBfaGFuZGxlYmFyc05vQ29uZmxpY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNOb0NvbmZsaWN0KTtcblxuXHR2YXIgX2NyZWF0ZSA9IF9oYW5kbGViYXJzUnVudGltZTJbJ2RlZmF1bHQnXS5jcmVhdGU7XG5cdGZ1bmN0aW9uIGNyZWF0ZSgpIHtcblx0ICB2YXIgaGIgPSBfY3JlYXRlKCk7XG5cblx0ICBoYi5jb21waWxlID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zKSB7XG5cdCAgICByZXR1cm4gX2hhbmRsZWJhcnNDb21waWxlckNvbXBpbGVyLmNvbXBpbGUoaW5wdXQsIG9wdGlvbnMsIGhiKTtcblx0ICB9O1xuXHQgIGhiLnByZWNvbXBpbGUgPSBmdW5jdGlvbiAoaW5wdXQsIG9wdGlvbnMpIHtcblx0ICAgIHJldHVybiBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIucHJlY29tcGlsZShpbnB1dCwgb3B0aW9ucywgaGIpO1xuXHQgIH07XG5cblx0ICBoYi5BU1QgPSBfaGFuZGxlYmFyc0NvbXBpbGVyQXN0MlsnZGVmYXVsdCddO1xuXHQgIGhiLkNvbXBpbGVyID0gX2hhbmRsZWJhcnNDb21waWxlckNvbXBpbGVyLkNvbXBpbGVyO1xuXHQgIGhiLkphdmFTY3JpcHRDb21waWxlciA9IF9oYW5kbGViYXJzQ29tcGlsZXJKYXZhc2NyaXB0Q29tcGlsZXIyWydkZWZhdWx0J107XG5cdCAgaGIuUGFyc2VyID0gX2hhbmRsZWJhcnNDb21waWxlckJhc2UucGFyc2VyO1xuXHQgIGhiLnBhcnNlID0gX2hhbmRsZWJhcnNDb21waWxlckJhc2UucGFyc2U7XG5cblx0ICByZXR1cm4gaGI7XG5cdH1cblxuXHR2YXIgaW5zdCA9IGNyZWF0ZSgpO1xuXHRpbnN0LmNyZWF0ZSA9IGNyZWF0ZTtcblxuXHRfaGFuZGxlYmFyc05vQ29uZmxpY3QyWydkZWZhdWx0J10oaW5zdCk7XG5cblx0aW5zdC5WaXNpdG9yID0gX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IyWydkZWZhdWx0J107XG5cblx0aW5zdFsnZGVmYXVsdCddID0gaW5zdDtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBpbnN0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG5cdCAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcblx0ICAgIFwiZGVmYXVsdFwiOiBvYmpcblx0ICB9O1xuXHR9O1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpWydkZWZhdWx0J107XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2hhbmRsZWJhcnNCYXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuXHR2YXIgYmFzZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGViYXJzQmFzZSk7XG5cblx0Ly8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuXHQvLyAoVGhpcyBpcyBkb25lIHRvIGVhc2lseSBzaGFyZSBjb2RlIGJldHdlZW4gY29tbW9uanMgYW5kIGJyb3dzZSBlbnZzKVxuXG5cdHZhciBfaGFuZGxlYmFyc1NhZmVTdHJpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNTYWZlU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNTYWZlU3RyaW5nKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNFeGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzRXhjZXB0aW9uKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNVdGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNVdGlscyk7XG5cblx0dmFyIF9oYW5kbGViYXJzUnVudGltZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xuXG5cdHZhciBydW50aW1lID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNSdW50aW1lKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNCk7XG5cblx0dmFyIF9oYW5kbGViYXJzTm9Db25mbGljdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzTm9Db25mbGljdCk7XG5cblx0Ly8gRm9yIGNvbXBhdGliaWxpdHkgYW5kIHVzYWdlIG91dHNpZGUgb2YgbW9kdWxlIHN5c3RlbXMsIG1ha2UgdGhlIEhhbmRsZWJhcnMgb2JqZWN0IGEgbmFtZXNwYWNlXG5cdGZ1bmN0aW9uIGNyZWF0ZSgpIHtcblx0ICB2YXIgaGIgPSBuZXcgYmFzZS5IYW5kbGViYXJzRW52aXJvbm1lbnQoKTtcblxuXHQgIFV0aWxzLmV4dGVuZChoYiwgYmFzZSk7XG5cdCAgaGIuU2FmZVN0cmluZyA9IF9oYW5kbGViYXJzU2FmZVN0cmluZzJbJ2RlZmF1bHQnXTtcblx0ICBoYi5FeGNlcHRpb24gPSBfaGFuZGxlYmFyc0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXTtcblx0ICBoYi5VdGlscyA9IFV0aWxzO1xuXHQgIGhiLmVzY2FwZUV4cHJlc3Npb24gPSBVdGlscy5lc2NhcGVFeHByZXNzaW9uO1xuXG5cdCAgaGIuVk0gPSBydW50aW1lO1xuXHQgIGhiLnRlbXBsYXRlID0gZnVuY3Rpb24gKHNwZWMpIHtcblx0ICAgIHJldHVybiBydW50aW1lLnRlbXBsYXRlKHNwZWMsIGhiKTtcblx0ICB9O1xuXG5cdCAgcmV0dXJuIGhiO1xuXHR9XG5cblx0dmFyIGluc3QgPSBjcmVhdGUoKTtcblx0aW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cblx0X2hhbmRsZWJhcnNOb0NvbmZsaWN0MlsnZGVmYXVsdCddKGluc3QpO1xuXG5cdGluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gaW5zdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuXHQgIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcblx0ICAgIHJldHVybiBvYmo7XG5cdCAgfSBlbHNlIHtcblx0ICAgIHZhciBuZXdPYmogPSB7fTtcblxuXHQgICAgaWYgKG9iaiAhPSBudWxsKSB7XG5cdCAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcblx0ICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXHQgICAgcmV0dXJuIG5ld09iajtcblx0ICB9XG5cdH07XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuSGFuZGxlYmFyc0Vudmlyb25tZW50ID0gSGFuZGxlYmFyc0Vudmlyb25tZW50O1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfaGVscGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG5cdHZhciBfZGVjb3JhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xuXG5cdHZhciBfbG9nZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG5cblx0dmFyIF9sb2dnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9nZ2VyKTtcblxuXHR2YXIgVkVSU0lPTiA9ICc0LjAuMTEnO1xuXHRleHBvcnRzLlZFUlNJT04gPSBWRVJTSU9OO1xuXHR2YXIgQ09NUElMRVJfUkVWSVNJT04gPSA3O1xuXG5cdGV4cG9ydHMuQ09NUElMRVJfUkVWSVNJT04gPSBDT01QSUxFUl9SRVZJU0lPTjtcblx0dmFyIFJFVklTSU9OX0NIQU5HRVMgPSB7XG5cdCAgMTogJzw9IDEuMC5yYy4yJywgLy8gMS4wLnJjLjIgaXMgYWN0dWFsbHkgcmV2MiBidXQgZG9lc24ndCByZXBvcnQgaXRcblx0ICAyOiAnPT0gMS4wLjAtcmMuMycsXG5cdCAgMzogJz09IDEuMC4wLXJjLjQnLFxuXHQgIDQ6ICc9PSAxLngueCcsXG5cdCAgNTogJz09IDIuMC4wLWFscGhhLngnLFxuXHQgIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuXHQgIDc6ICc+PSA0LjAuMCdcblx0fTtcblxuXHRleHBvcnRzLlJFVklTSU9OX0NIQU5HRVMgPSBSRVZJU0lPTl9DSEFOR0VTO1xuXHR2YXIgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5cdGZ1bmN0aW9uIEhhbmRsZWJhcnNFbnZpcm9ubWVudChoZWxwZXJzLCBwYXJ0aWFscywgZGVjb3JhdG9ycykge1xuXHQgIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG5cdCAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuXHQgIHRoaXMuZGVjb3JhdG9ycyA9IGRlY29yYXRvcnMgfHwge307XG5cblx0ICBfaGVscGVycy5yZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuXHQgIF9kZWNvcmF0b3JzLnJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnModGhpcyk7XG5cdH1cblxuXHRIYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuXHQgIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cblx0ICBsb2dnZXI6IF9sb2dnZXIyWydkZWZhdWx0J10sXG5cdCAgbG9nOiBfbG9nZ2VyMlsnZGVmYXVsdCddLmxvZyxcblxuXHQgIHJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbiByZWdpc3RlckhlbHBlcihuYW1lLCBmbikge1xuXHQgICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG5cdCAgICAgIGlmIChmbikge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTtcblx0ICAgICAgfVxuXHQgICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmhlbHBlcnNbbmFtZV0gPSBmbjtcblx0ICAgIH1cblx0ICB9LFxuXHQgIHVucmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uIHVucmVnaXN0ZXJIZWxwZXIobmFtZSkge1xuXHQgICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcblx0ICB9LFxuXG5cdCAgcmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbiByZWdpc3RlclBhcnRpYWwobmFtZSwgcGFydGlhbCkge1xuXHQgICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG5cdCAgICAgIF91dGlscy5leHRlbmQodGhpcy5wYXJ0aWFscywgbmFtZSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpZiAodHlwZW9mIHBhcnRpYWwgPT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0F0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBwYXJ0aWFsIGNhbGxlZCBcIicgKyBuYW1lICsgJ1wiIGFzIHVuZGVmaW5lZCcpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uIHVucmVnaXN0ZXJQYXJ0aWFsKG5hbWUpIHtcblx0ICAgIGRlbGV0ZSB0aGlzLnBhcnRpYWxzW25hbWVdO1xuXHQgIH0sXG5cblx0ICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gcmVnaXN0ZXJEZWNvcmF0b3IobmFtZSwgZm4pIHtcblx0ICAgIGlmIChfdXRpbHMudG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuXHQgICAgICBpZiAoZm4pIHtcblx0ICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBkZWNvcmF0b3JzJyk7XG5cdCAgICAgIH1cblx0ICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLmRlY29yYXRvcnMsIG5hbWUpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5kZWNvcmF0b3JzW25hbWVdID0gZm47XG5cdCAgICB9XG5cdCAgfSxcblx0ICB1bnJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbiB1bnJlZ2lzdGVyRGVjb3JhdG9yKG5hbWUpIHtcblx0ICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG5cdCAgfVxuXHR9O1xuXG5cdHZhciBsb2cgPSBfbG9nZ2VyMlsnZGVmYXVsdCddLmxvZztcblxuXHRleHBvcnRzLmxvZyA9IGxvZztcblx0ZXhwb3J0cy5jcmVhdGVGcmFtZSA9IF91dGlscy5jcmVhdGVGcmFtZTtcblx0ZXhwb3J0cy5sb2dnZXIgPSBfbG9nZ2VyMlsnZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG5cdGV4cG9ydHMuaW5kZXhPZiA9IGluZGV4T2Y7XG5cdGV4cG9ydHMuZXNjYXBlRXhwcmVzc2lvbiA9IGVzY2FwZUV4cHJlc3Npb247XG5cdGV4cG9ydHMuaXNFbXB0eSA9IGlzRW1wdHk7XG5cdGV4cG9ydHMuY3JlYXRlRnJhbWUgPSBjcmVhdGVGcmFtZTtcblx0ZXhwb3J0cy5ibG9ja1BhcmFtcyA9IGJsb2NrUGFyYW1zO1xuXHRleHBvcnRzLmFwcGVuZENvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGg7XG5cdHZhciBlc2NhcGUgPSB7XG5cdCAgJyYnOiAnJmFtcDsnLFxuXHQgICc8JzogJyZsdDsnLFxuXHQgICc+JzogJyZndDsnLFxuXHQgICdcIic6ICcmcXVvdDsnLFxuXHQgIFwiJ1wiOiAnJiN4Mjc7Jyxcblx0ICAnYCc6ICcmI3g2MDsnLFxuXHQgICc9JzogJyYjeDNEOydcblx0fTtcblxuXHR2YXIgYmFkQ2hhcnMgPSAvWyY8PlwiJ2A9XS9nLFxuXHQgICAgcG9zc2libGUgPSAvWyY8PlwiJ2A9XS87XG5cblx0ZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcblx0ICByZXR1cm4gZXNjYXBlW2Nocl07XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQob2JqIC8qICwgLi4uc291cmNlICovKSB7XG5cdCAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0ICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcblx0ICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcblx0ICAgICAgICBvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgcmV0dXJuIG9iajtcblx0fVxuXG5cdHZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cblx0ZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuXHQvLyBTb3VyY2VkIGZyb20gbG9kYXNoXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXN0aWVqcy9sb2Rhc2gvYmxvYi9tYXN0ZXIvTElDRU5TRS50eHRcblx0LyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xuXHR2YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcblx0ICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuXHR9O1xuXHQvLyBmYWxsYmFjayBmb3Igb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBTYWZhcmlcblx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0aWYgKGlzRnVuY3Rpb24oL3gvKSkge1xuXHQgIGV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdCAgfTtcblx0fVxuXHRleHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5cdC8qIGVzbGludC1lbmFibGUgZnVuYy1zdHlsZSAqL1xuXG5cdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nIDogZmFsc2U7XG5cdH07XG5cblx0ZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblx0Ly8gT2xkZXIgSUUgdmVyc2lvbnMgZG8gbm90IGRpcmVjdGx5IHN1cHBvcnQgaW5kZXhPZiBzbyB3ZSBtdXN0IGltcGxlbWVudCBvdXIgb3duLCBzYWRseS5cblxuXHRmdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuXHQgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuXHQgICAgICByZXR1cm4gaTtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIC0xO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcblx0ICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcblx0ICAgIC8vIGRvbid0IGVzY2FwZSBTYWZlU3RyaW5ncywgc2luY2UgdGhleSdyZSBhbHJlYWR5IHNhZmVcblx0ICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuXHQgICAgICByZXR1cm4gc3RyaW5nLnRvSFRNTCgpO1xuXHQgICAgfSBlbHNlIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuXHQgICAgICByZXR1cm4gJyc7XG5cdCAgICB9IGVsc2UgaWYgKCFzdHJpbmcpIHtcblx0ICAgICAgcmV0dXJuIHN0cmluZyArICcnO1xuXHQgICAgfVxuXG5cdCAgICAvLyBGb3JjZSBhIHN0cmluZyBjb252ZXJzaW9uIGFzIHRoaXMgd2lsbCBiZSBkb25lIGJ5IHRoZSBhcHBlbmQgcmVnYXJkbGVzcyBhbmRcblx0ICAgIC8vIHRoZSByZWdleCB0ZXN0IHdpbGwgZG8gdGhpcyB0cmFuc3BhcmVudGx5IGJlaGluZCB0aGUgc2NlbmVzLCBjYXVzaW5nIGlzc3VlcyBpZlxuXHQgICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG5cdCAgICBzdHJpbmcgPSAnJyArIHN0cmluZztcblx0ICB9XG5cblx0ICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkge1xuXHQgICAgcmV0dXJuIHN0cmluZztcblx0ICB9XG5cdCAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGJhZENoYXJzLCBlc2NhcGVDaGFyKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcblx0ICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfSBlbHNlIHtcblx0ICAgIHJldHVybiBmYWxzZTtcblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVGcmFtZShvYmplY3QpIHtcblx0ICB2YXIgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG5cdCAgZnJhbWUuX3BhcmVudCA9IG9iamVjdDtcblx0ICByZXR1cm4gZnJhbWU7XG5cdH1cblxuXHRmdW5jdGlvbiBibG9ja1BhcmFtcyhwYXJhbXMsIGlkcykge1xuXHQgIHBhcmFtcy5wYXRoID0gaWRzO1xuXHQgIHJldHVybiBwYXJhbXM7XG5cdH1cblxuXHRmdW5jdGlvbiBhcHBlbmRDb250ZXh0UGF0aChjb250ZXh0UGF0aCwgaWQpIHtcblx0ICByZXR1cm4gKGNvbnRleHRQYXRoID8gY29udGV4dFBhdGggKyAnLicgOiAnJykgKyBpZDtcblx0fVxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgZXJyb3JQcm9wcyA9IFsnZGVzY3JpcHRpb24nLCAnZmlsZU5hbWUnLCAnbGluZU51bWJlcicsICdtZXNzYWdlJywgJ25hbWUnLCAnbnVtYmVyJywgJ3N0YWNrJ107XG5cblx0ZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcblx0ICB2YXIgbG9jID0gbm9kZSAmJiBub2RlLmxvYyxcblx0ICAgICAgbGluZSA9IHVuZGVmaW5lZCxcblx0ICAgICAgY29sdW1uID0gdW5kZWZpbmVkO1xuXHQgIGlmIChsb2MpIHtcblx0ICAgIGxpbmUgPSBsb2Muc3RhcnQubGluZTtcblx0ICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XG5cblx0ICAgIG1lc3NhZ2UgKz0gJyAtICcgKyBsaW5lICsgJzonICsgY29sdW1uO1xuXHQgIH1cblxuXHQgIHZhciB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuXHQgIC8vIFVuZm9ydHVuYXRlbHkgZXJyb3JzIGFyZSBub3QgZW51bWVyYWJsZSBpbiBDaHJvbWUgKGF0IGxlYXN0KSwgc28gYGZvciBwcm9wIGluIHRtcGAgZG9lc24ndCB3b3JrLlxuXHQgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuXHQgICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG5cdCAgfVxuXG5cdCAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblx0ICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcblx0ICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEV4Y2VwdGlvbik7XG5cdCAgfVxuXG5cdCAgdHJ5IHtcblx0ICAgIGlmIChsb2MpIHtcblx0ICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcblxuXHQgICAgICAvLyBXb3JrIGFyb3VuZCBpc3N1ZSB1bmRlciBzYWZhcmkgd2hlcmUgd2UgY2FuJ3QgZGlyZWN0bHkgc2V0IHRoZSBjb2x1bW4gdmFsdWVcblx0ICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICAgICAgaWYgKF9PYmplY3QkZGVmaW5lUHJvcGVydHkpIHtcblx0ICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbHVtbicsIHtcblx0ICAgICAgICAgIHZhbHVlOiBjb2x1bW4sXG5cdCAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9IGNhdGNoIChub3ApIHtcblx0ICAgIC8qIElnbm9yZSBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IHBhcnRpY3VsYXIgKi9cblx0ICB9XG5cdH1cblxuXHRFeGNlcHRpb24ucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gRXhjZXB0aW9uO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcblx0ICByZXR1cm4gJC5zZXREZXNjKGl0LCBrZXksIGRlc2MpO1xuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHR2YXIgJE9iamVjdCA9IE9iamVjdDtcblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG5cdCAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcblx0ICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcblx0ICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcblx0ICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuXHQgIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcblx0ICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG5cdCAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuXHQgIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuXHQgIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcblx0fTtcblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLnJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMgPSByZWdpc3RlckRlZmF1bHRIZWxwZXJzO1xuXG5cdHZhciBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG5cdHZhciBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nKTtcblxuXHR2YXIgX2hlbHBlcnNFYWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cblx0dmFyIF9oZWxwZXJzRWFjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzRWFjaCk7XG5cblx0dmFyIF9oZWxwZXJzSGVscGVyTWlzc2luZyA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xuXG5cdHZhciBfaGVscGVyc0hlbHBlck1pc3NpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0hlbHBlck1pc3NpbmcpO1xuXG5cdHZhciBfaGVscGVyc0lmID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cblx0dmFyIF9oZWxwZXJzSWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0lmKTtcblxuXHR2YXIgX2hlbHBlcnNMb2cgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcblxuXHR2YXIgX2hlbHBlcnNMb2cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0xvZyk7XG5cblx0dmFyIF9oZWxwZXJzTG9va3VwID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5cblx0dmFyIF9oZWxwZXJzTG9va3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNMb29rdXApO1xuXG5cdHZhciBfaGVscGVyc1dpdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblxuXHR2YXIgX2hlbHBlcnNXaXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNXaXRoKTtcblxuXHRmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG5cdCAgX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzRWFjaDJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNIZWxwZXJNaXNzaW5nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc0lmMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc0xvZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNMb29rdXAyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzV2l0aDJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdH1cblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuXHQgICAgdmFyIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG5cdCAgICAgICAgZm4gPSBvcHRpb25zLmZuO1xuXG5cdCAgICBpZiAoY29udGV4dCA9PT0gdHJ1ZSkge1xuXHQgICAgICByZXR1cm4gZm4odGhpcyk7XG5cdCAgICB9IGVsc2UgaWYgKGNvbnRleHQgPT09IGZhbHNlIHx8IGNvbnRleHQgPT0gbnVsbCkge1xuXHQgICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcblx0ICAgIH0gZWxzZSBpZiAoX3V0aWxzLmlzQXJyYXkoY29udGV4dCkpIHtcblx0ICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuXHQgICAgICAgIGlmIChvcHRpb25zLmlkcykge1xuXHQgICAgICAgICAgb3B0aW9ucy5pZHMgPSBbb3B0aW9ucy5uYW1lXTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICByZXR1cm4gaW5zdGFuY2UuaGVscGVycy5lYWNoKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG5cdCAgICAgICAgdmFyIGRhdGEgPSBfdXRpbHMuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcblx0ICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcblx0ICAgICAgICBvcHRpb25zID0geyBkYXRhOiBkYXRhIH07XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgICB9XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgICBpZiAoIW9wdGlvbnMpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgZm4gPSBvcHRpb25zLmZuLFxuXHQgICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG5cdCAgICAgICAgaSA9IDAsXG5cdCAgICAgICAgcmV0ID0gJycsXG5cdCAgICAgICAgZGF0YSA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBjb250ZXh0UGF0aCA9IHVuZGVmaW5lZDtcblxuXHQgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuXHQgICAgICBjb250ZXh0UGF0aCA9IF91dGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKSArICcuJztcblx0ICAgIH1cblxuXHQgICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG5cdCAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChvcHRpb25zLmRhdGEpIHtcblx0ICAgICAgZGF0YSA9IF91dGlscy5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBleGVjSXRlcmF0aW9uKGZpZWxkLCBpbmRleCwgbGFzdCkge1xuXHQgICAgICBpZiAoZGF0YSkge1xuXHQgICAgICAgIGRhdGEua2V5ID0gZmllbGQ7XG5cdCAgICAgICAgZGF0YS5pbmRleCA9IGluZGV4O1xuXHQgICAgICAgIGRhdGEuZmlyc3QgPSBpbmRleCA9PT0gMDtcblx0ICAgICAgICBkYXRhLmxhc3QgPSAhIWxhc3Q7XG5cblx0ICAgICAgICBpZiAoY29udGV4dFBhdGgpIHtcblx0ICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXG5cdCAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbZmllbGRdLCB7XG5cdCAgICAgICAgZGF0YTogZGF0YSxcblx0ICAgICAgICBibG9ja1BhcmFtczogX3V0aWxzLmJsb2NrUGFyYW1zKFtjb250ZXh0W2ZpZWxkXSwgZmllbGRdLCBbY29udGV4dFBhdGggKyBmaWVsZCwgbnVsbF0pXG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoY29udGV4dCAmJiB0eXBlb2YgY29udGV4dCA9PT0gJ29iamVjdCcpIHtcblx0ICAgICAgaWYgKF91dGlscy5pc0FycmF5KGNvbnRleHQpKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaiA9IGNvbnRleHQubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG5cdCAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG5cdCAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24oaSwgaSwgaSA9PT0gY29udGV4dC5sZW5ndGggLSAxKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdmFyIHByaW9yS2V5ID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbnRleHQpIHtcblx0ICAgICAgICAgIGlmIChjb250ZXh0Lmhhc093blByb3BlcnR5KGtleSkpIHtcblx0ICAgICAgICAgICAgLy8gV2UncmUgcnVubmluZyB0aGUgaXRlcmF0aW9ucyBvbmUgc3RlcCBvdXQgb2Ygc3luYyBzbyB3ZSBjYW4gZGV0ZWN0XG5cdCAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcblx0ICAgICAgICAgICAgLy8gYW4gaXRlcm1lZGlhdGUga2V5cyBhcnJheS5cblx0ICAgICAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcHJpb3JLZXkgPSBrZXk7XG5cdCAgICAgICAgICAgIGkrKztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxLCB0cnVlKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgaWYgKGkgPT09IDApIHtcblx0ICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdoZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKCkgLyogW2FyZ3MsIF1vcHRpb25zICove1xuXHQgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcblx0ICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG5cdCAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcblx0ICAgIH1cblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdpZicsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuXHQgICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkge1xuXHQgICAgICBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cblx0ICAgIC8vIFRoZSBgaW5jbHVkZVplcm9gIG9wdGlvbiBtYXkgYmUgc2V0IHRvIHRyZWF0IHRoZSBjb25kdGlvbmFsIGFzIHB1cmVseSBub3QgZW1wdHkgYmFzZWQgb24gdGhlXG5cdCAgICAvLyBiZWhhdmlvciBvZiBpc0VtcHR5LiBFZmZlY3RpdmVseSB0aGlzIGRldGVybWluZXMgaWYgMCBpcyBoYW5kbGVkIGJ5IHRoZSBwb3NpdGl2ZSBwYXRoIG9yIG5lZ2F0aXZlLlxuXHQgICAgaWYgKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsIHx8IF91dGlscy5pc0VtcHR5KGNvbmRpdGlvbmFsKSkge1xuXHQgICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG5cdCAgICB9XG5cdCAgfSk7XG5cblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24gKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG5cdCAgICByZXR1cm4gaW5zdGFuY2UuaGVscGVyc1snaWYnXS5jYWxsKHRoaXMsIGNvbmRpdGlvbmFsLCB7IGZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaCB9KTtcblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb2cnLCBmdW5jdGlvbiAoKSAvKiBtZXNzYWdlLCBvcHRpb25zICove1xuXHQgICAgdmFyIGFyZ3MgPSBbdW5kZWZpbmVkXSxcblx0ICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHQgICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGxldmVsID0gMTtcblx0ICAgIGlmIChvcHRpb25zLmhhc2gubGV2ZWwgIT0gbnVsbCkge1xuXHQgICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcblx0ICAgIH0gZWxzZSBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuZGF0YS5sZXZlbCAhPSBudWxsKSB7XG5cdCAgICAgIGxldmVsID0gb3B0aW9ucy5kYXRhLmxldmVsO1xuXHQgICAgfVxuXHQgICAgYXJnc1swXSA9IGxldmVsO1xuXG5cdCAgICBpbnN0YW5jZS5sb2cuYXBwbHkoaW5zdGFuY2UsIGFyZ3MpO1xuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDE2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvb2t1cCcsIGZ1bmN0aW9uIChvYmosIGZpZWxkKSB7XG5cdCAgICByZXR1cm4gb2JqICYmIG9ialtmaWVsZF07XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignd2l0aCcsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgICBpZiAoX3V0aWxzLmlzRnVuY3Rpb24oY29udGV4dCkpIHtcblx0ICAgICAgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGZuID0gb3B0aW9ucy5mbjtcblxuXHQgICAgaWYgKCFfdXRpbHMuaXNFbXB0eShjb250ZXh0KSkge1xuXHQgICAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblx0ICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuXHQgICAgICAgIGRhdGEgPSBfdXRpbHMuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcblx0ICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIHtcblx0ICAgICAgICBkYXRhOiBkYXRhLFxuXHQgICAgICAgIGJsb2NrUGFyYW1zOiBfdXRpbHMuYmxvY2tQYXJhbXMoW2NvbnRleHRdLCBbZGF0YSAmJiBkYXRhLmNvbnRleHRQYXRoXSlcblx0ICAgICAgfSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDE4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMucmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyA9IHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnM7XG5cblx0dmFyIF9kZWNvcmF0b3JzSW5saW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5cblx0dmFyIF9kZWNvcmF0b3JzSW5saW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlY29yYXRvcnNJbmxpbmUpO1xuXG5cdGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMoaW5zdGFuY2UpIHtcblx0ICBfZGVjb3JhdG9yc0lubGluZTJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdH1cblxuLyoqKi8gfSksXG4vKiAxOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbiAoZm4sIHByb3BzLCBjb250YWluZXIsIG9wdGlvbnMpIHtcblx0ICAgIHZhciByZXQgPSBmbjtcblx0ICAgIGlmICghcHJvcHMucGFydGlhbHMpIHtcblx0ICAgICAgcHJvcHMucGFydGlhbHMgPSB7fTtcblx0ICAgICAgcmV0ID0gZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cblx0ICAgICAgICB2YXIgb3JpZ2luYWwgPSBjb250YWluZXIucGFydGlhbHM7XG5cdCAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gX3V0aWxzLmV4dGVuZCh7fSwgb3JpZ2luYWwsIHByb3BzLnBhcnRpYWxzKTtcblx0ICAgICAgICB2YXIgcmV0ID0gZm4oY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG5cdCAgICAgICAgcmV0dXJuIHJldDtcblx0ICAgICAgfTtcblx0ICAgIH1cblxuXHQgICAgcHJvcHMucGFydGlhbHNbb3B0aW9ucy5hcmdzWzBdXSA9IG9wdGlvbnMuZm47XG5cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgbG9nZ2VyID0ge1xuXHQgIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcblx0ICBsZXZlbDogJ2luZm8nLFxuXG5cdCAgLy8gTWFwcyBhIGdpdmVuIGxldmVsIHZhbHVlIHRvIHRoZSBgbWV0aG9kTWFwYCBpbmRleGVzIGFib3ZlLlxuXHQgIGxvb2t1cExldmVsOiBmdW5jdGlvbiBsb29rdXBMZXZlbChsZXZlbCkge1xuXHQgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgdmFyIGxldmVsTWFwID0gX3V0aWxzLmluZGV4T2YobG9nZ2VyLm1ldGhvZE1hcCwgbGV2ZWwudG9Mb3dlckNhc2UoKSk7XG5cdCAgICAgIGlmIChsZXZlbE1hcCA+PSAwKSB7XG5cdCAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBsZXZlbCA9IHBhcnNlSW50KGxldmVsLCAxMCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGxldmVsO1xuXHQgIH0sXG5cblx0ICAvLyBDYW4gYmUgb3ZlcnJpZGRlbiBpbiB0aGUgaG9zdCBlbnZpcm9ubWVudFxuXHQgIGxvZzogZnVuY3Rpb24gbG9nKGxldmVsKSB7XG5cdCAgICBsZXZlbCA9IGxvZ2dlci5sb29rdXBMZXZlbChsZXZlbCk7XG5cblx0ICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcblx0ICAgICAgdmFyIG1ldGhvZCA9IGxvZ2dlci5tZXRob2RNYXBbbGV2ZWxdO1xuXHQgICAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xuXHQgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXHQgICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuXHQgICAgICB9XG5cblx0ICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lc3NhZ2UgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdCAgICAgICAgbWVzc2FnZVtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG5cdCAgICAgIH1cblxuXHQgICAgICBjb25zb2xlW21ldGhvZF0uYXBwbHkoY29uc29sZSwgbWVzc2FnZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXHQgICAgfVxuXHQgIH1cblx0fTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBsb2dnZXI7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDIxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gQnVpbGQgb3V0IG91ciBiYXNpYyBTYWZlU3RyaW5nIHR5cGVcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGZ1bmN0aW9uIFNhZmVTdHJpbmcoc3RyaW5nKSB7XG5cdCAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG5cdH1cblxuXHRTYWZlU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyA9IFNhZmVTdHJpbmcucHJvdG90eXBlLnRvSFRNTCA9IGZ1bmN0aW9uICgpIHtcblx0ICByZXR1cm4gJycgKyB0aGlzLnN0cmluZztcblx0fTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTYWZlU3RyaW5nO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAyMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX09iamVjdCRzZWFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMylbJ2RlZmF1bHQnXTtcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpWydkZWZhdWx0J107XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5jaGVja1JldmlzaW9uID0gY2hlY2tSZXZpc2lvbjtcblx0ZXhwb3J0cy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRleHBvcnRzLndyYXBQcm9ncmFtID0gd3JhcFByb2dyYW07XG5cdGV4cG9ydHMucmVzb2x2ZVBhcnRpYWwgPSByZXNvbHZlUGFydGlhbDtcblx0ZXhwb3J0cy5pbnZva2VQYXJ0aWFsID0gaW52b2tlUGFydGlhbDtcblx0ZXhwb3J0cy5ub29wID0gbm9vcDtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfYmFzZSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cblx0ZnVuY3Rpb24gY2hlY2tSZXZpc2lvbihjb21waWxlckluZm8pIHtcblx0ICB2YXIgY29tcGlsZXJSZXZpc2lvbiA9IGNvbXBpbGVySW5mbyAmJiBjb21waWxlckluZm9bMF0gfHwgMSxcblx0ICAgICAgY3VycmVudFJldmlzaW9uID0gX2Jhc2UuQ09NUElMRVJfUkVWSVNJT047XG5cblx0ICBpZiAoY29tcGlsZXJSZXZpc2lvbiAhPT0gY3VycmVudFJldmlzaW9uKSB7XG5cdCAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuXHQgICAgICB2YXIgcnVudGltZVZlcnNpb25zID0gX2Jhc2UuUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuXHQgICAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICsgJ1BsZWFzZSB1cGRhdGUgeW91ciBwcmVjb21waWxlciB0byBhIG5ld2VyIHZlcnNpb24gKCcgKyBydW50aW1lVmVyc2lvbnMgKyAnKSBvciBkb3duZ3JhZGUgeW91ciBydW50aW1lIHRvIGFuIG9sZGVyIHZlcnNpb24gKCcgKyBjb21waWxlclZlcnNpb25zICsgJykuJyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArICdQbGVhc2UgdXBkYXRlIHlvdXIgcnVudGltZSB0byBhIG5ld2VyIHZlcnNpb24gKCcgKyBjb21waWxlckluZm9bMV0gKyAnKS4nKTtcblx0ICAgIH1cblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgaWYgKCFlbnYpIHtcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcblx0ICB9XG5cdCAgaWYgKCF0ZW1wbGF0ZVNwZWMgfHwgIXRlbXBsYXRlU3BlYy5tYWluKSB7XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5rbm93biB0ZW1wbGF0ZSBvYmplY3Q6ICcgKyB0eXBlb2YgdGVtcGxhdGVTcGVjKTtcblx0ICB9XG5cblx0ICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG5cdCAgLy8gTm90ZTogVXNpbmcgZW52LlZNIHJlZmVyZW5jZXMgcmF0aGVyIHRoYW4gbG9jYWwgdmFyIHJlZmVyZW5jZXMgdGhyb3VnaG91dCB0aGlzIHNlY3Rpb24gdG8gYWxsb3dcblx0ICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHN1ZWRvLXN1cHBvcnRlZCBBUElzLlxuXHQgIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cblx0ICBmdW5jdGlvbiBpbnZva2VQYXJ0aWFsV3JhcHBlcihwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG5cdCAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG5cdCAgICAgIGlmIChvcHRpb25zLmlkcykge1xuXHQgICAgICAgIG9wdGlvbnMuaWRzWzBdID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBwYXJ0aWFsID0gZW52LlZNLnJlc29sdmVQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgICB2YXIgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHQgICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIGVudi5jb21waWxlKSB7XG5cdCAgICAgIG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXSA9IGVudi5jb21waWxlKHBhcnRpYWwsIHRlbXBsYXRlU3BlYy5jb21waWxlck9wdGlvbnMsIGVudik7XG5cdCAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgIH1cblx0ICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuXHQgICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcblx0ICAgICAgICB2YXIgbGluZXMgPSByZXN1bHQuc3BsaXQoJ1xcbicpO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXG5cdCAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJlc3VsdCA9IGxpbmVzLmpvaW4oJ1xcbicpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGNvbXBpbGVkIHdoZW4gcnVubmluZyBpbiBydW50aW1lLW9ubHkgbW9kZScpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIC8vIEp1c3QgYWRkIHdhdGVyXG5cdCAgdmFyIGNvbnRhaW5lciA9IHtcblx0ICAgIHN0cmljdDogZnVuY3Rpb24gc3RyaWN0KG9iaiwgbmFtZSkge1xuXHQgICAgICBpZiAoIShuYW1lIGluIG9iaikpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnXCInICsgbmFtZSArICdcIiBub3QgZGVmaW5lZCBpbiAnICsgb2JqKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gb2JqW25hbWVdO1xuXHQgICAgfSxcblx0ICAgIGxvb2t1cDogZnVuY3Rpb24gbG9va3VwKGRlcHRocywgbmFtZSkge1xuXHQgICAgICB2YXIgbGVuID0gZGVwdGhzLmxlbmd0aDtcblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICAgIGlmIChkZXB0aHNbaV0gJiYgZGVwdGhzW2ldW25hbWVdICE9IG51bGwpIHtcblx0ICAgICAgICAgIHJldHVybiBkZXB0aHNbaV1bbmFtZV07XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9LFxuXHQgICAgbGFtYmRhOiBmdW5jdGlvbiBsYW1iZGEoY3VycmVudCwgY29udGV4dCkge1xuXHQgICAgICByZXR1cm4gdHlwZW9mIGN1cnJlbnQgPT09ICdmdW5jdGlvbicgPyBjdXJyZW50LmNhbGwoY29udGV4dCkgOiBjdXJyZW50O1xuXHQgICAgfSxcblxuXHQgICAgZXNjYXBlRXhwcmVzc2lvbjogVXRpbHMuZXNjYXBlRXhwcmVzc2lvbixcblx0ICAgIGludm9rZVBhcnRpYWw6IGludm9rZVBhcnRpYWxXcmFwcGVyLFxuXG5cdCAgICBmbjogZnVuY3Rpb24gZm4oaSkge1xuXHQgICAgICB2YXIgcmV0ID0gdGVtcGxhdGVTcGVjW2ldO1xuXHQgICAgICByZXQuZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjW2kgKyAnX2QnXTtcblx0ICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH0sXG5cblx0ICAgIHByb2dyYW1zOiBbXSxcblx0ICAgIHByb2dyYW06IGZ1bmN0aW9uIHByb2dyYW0oaSwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgICAgICB2YXIgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuXHQgICAgICAgICAgZm4gPSB0aGlzLmZuKGkpO1xuXHQgICAgICBpZiAoZGF0YSB8fCBkZXB0aHMgfHwgYmxvY2tQYXJhbXMgfHwgZGVjbGFyZWRCbG9ja1BhcmFtcykge1xuXHQgICAgICAgIHByb2dyYW1XcmFwcGVyID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuXHQgICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuXHQgICAgICAgIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG5cdCAgICB9LFxuXG5cdCAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKHZhbHVlLCBkZXB0aCkge1xuXHQgICAgICB3aGlsZSAodmFsdWUgJiYgZGVwdGgtLSkge1xuXHQgICAgICAgIHZhbHVlID0gdmFsdWUuX3BhcmVudDtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gdmFsdWU7XG5cdCAgICB9LFxuXHQgICAgbWVyZ2U6IGZ1bmN0aW9uIG1lcmdlKHBhcmFtLCBjb21tb24pIHtcblx0ICAgICAgdmFyIG9iaiA9IHBhcmFtIHx8IGNvbW1vbjtcblxuXHQgICAgICBpZiAocGFyYW0gJiYgY29tbW9uICYmIHBhcmFtICE9PSBjb21tb24pIHtcblx0ICAgICAgICBvYmogPSBVdGlscy5leHRlbmQoe30sIGNvbW1vbiwgcGFyYW0pO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIG9iajtcblx0ICAgIH0sXG5cdCAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG5cdCAgICBudWxsQ29udGV4dDogX09iamVjdCRzZWFsKHt9KSxcblxuXHQgICAgbm9vcDogZW52LlZNLm5vb3AsXG5cdCAgICBjb21waWxlckluZm86IHRlbXBsYXRlU3BlYy5jb21waWxlclxuXHQgIH07XG5cblx0ICBmdW5jdGlvbiByZXQoY29udGV4dCkge1xuXHQgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cblx0ICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG5cdCAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuXHQgICAgICBkYXRhID0gaW5pdERhdGEoY29udGV4dCwgZGF0YSk7XG5cdCAgICB9XG5cdCAgICB2YXIgZGVwdGhzID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGJsb2NrUGFyYW1zID0gdGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zID8gW10gOiB1bmRlZmluZWQ7XG5cdCAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuXHQgICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcblx0ICAgICAgICBkZXB0aHMgPSBjb250ZXh0ICE9IG9wdGlvbnMuZGVwdGhzWzBdID8gW2NvbnRleHRdLmNvbmNhdChvcHRpb25zLmRlcHRocykgOiBvcHRpb25zLmRlcHRocztcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBkZXB0aHMgPSBbY29udGV4dF07XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gbWFpbihjb250ZXh0IC8qLCBvcHRpb25zKi8pIHtcblx0ICAgICAgcmV0dXJuICcnICsgdGVtcGxhdGVTcGVjLm1haW4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICAgIH1cblx0ICAgIG1haW4gPSBleGVjdXRlRGVjb3JhdG9ycyh0ZW1wbGF0ZVNwZWMubWFpbiwgbWFpbiwgY29udGFpbmVyLCBvcHRpb25zLmRlcHRocyB8fCBbXSwgZGF0YSwgYmxvY2tQYXJhbXMpO1xuXHQgICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgfVxuXHQgIHJldC5pc1RvcCA9IHRydWU7XG5cblx0ICByZXQuX3NldHVwID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0ICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG5cdCAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuaGVscGVycywgZW52LmhlbHBlcnMpO1xuXG5cdCAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCkge1xuXHQgICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCB8fCB0ZW1wbGF0ZVNwZWMudXNlRGVjb3JhdG9ycykge1xuXHQgICAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuZGVjb3JhdG9ycywgZW52LmRlY29yYXRvcnMpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcblx0ICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3B0aW9ucy5wYXJ0aWFscztcblx0ICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBvcHRpb25zLmRlY29yYXRvcnM7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIHJldC5fY2hpbGQgPSBmdW5jdGlvbiAoaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyAmJiAhYmxvY2tQYXJhbXMpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ211c3QgcGFzcyBibG9jayBwYXJhbXMnKTtcblx0ICAgIH1cblx0ICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzICYmICFkZXB0aHMpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ211c3QgcGFzcyBwYXJlbnQgZGVwdGhzJyk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG5cdCAgfTtcblx0ICByZXR1cm4gcmV0O1xuXHR9XG5cblx0ZnVuY3Rpb24gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgIGZ1bmN0aW9uIHByb2coY29udGV4dCkge1xuXHQgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgdmFyIGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG5cdCAgICBpZiAoZGVwdGhzICYmIGNvbnRleHQgIT0gZGVwdGhzWzBdICYmICEoY29udGV4dCA9PT0gY29udGFpbmVyLm51bGxDb250ZXh0ICYmIGRlcHRoc1swXSA9PT0gbnVsbCkpIHtcblx0ICAgICAgY3VycmVudERlcHRocyA9IFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGZuKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgb3B0aW9ucy5kYXRhIHx8IGRhdGEsIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLCBjdXJyZW50RGVwdGhzKTtcblx0ICB9XG5cblx0ICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cblx0ICBwcm9nLnByb2dyYW0gPSBpO1xuXHQgIHByb2cuZGVwdGggPSBkZXB0aHMgPyBkZXB0aHMubGVuZ3RoIDogMDtcblx0ICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuXHQgIHJldHVybiBwcm9nO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzb2x2ZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuXHQgIGlmICghcGFydGlhbCkge1xuXHQgICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuXHQgICAgICBwYXJ0aWFsID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ107XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuXHQgICAgfVxuXHQgIH0gZWxzZSBpZiAoIXBhcnRpYWwuY2FsbCAmJiAhb3B0aW9ucy5uYW1lKSB7XG5cdCAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcblx0ICAgIG9wdGlvbnMubmFtZSA9IHBhcnRpYWw7XG5cdCAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1twYXJ0aWFsXTtcblx0ICB9XG5cdCAgcmV0dXJuIHBhcnRpYWw7XG5cdH1cblxuXHRmdW5jdGlvbiBpbnZva2VQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAvLyBVc2UgdGhlIGN1cnJlbnQgY2xvc3VyZSBjb250ZXh0IHRvIHNhdmUgdGhlIHBhcnRpYWwtYmxvY2sgaWYgdGhpcyBwYXJ0aWFsXG5cdCAgdmFyIGN1cnJlbnRQYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ107XG5cdCAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcblx0ICBpZiAob3B0aW9ucy5pZHMpIHtcblx0ICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCA9IG9wdGlvbnMuaWRzWzBdIHx8IG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aDtcblx0ICB9XG5cblx0ICB2YXIgcGFydGlhbEJsb2NrID0gdW5kZWZpbmVkO1xuXHQgIGlmIChvcHRpb25zLmZuICYmIG9wdGlvbnMuZm4gIT09IG5vb3ApIHtcblx0ICAgIChmdW5jdGlvbiAoKSB7XG5cdCAgICAgIG9wdGlvbnMuZGF0YSA9IF9iYXNlLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG5cdCAgICAgIC8vIFdyYXBwZXIgZnVuY3Rpb24gdG8gZ2V0IGFjY2VzcyB0byBjdXJyZW50UGFydGlhbEJsb2NrIGZyb20gdGhlIGNsb3N1cmVcblx0ICAgICAgdmFyIGZuID0gb3B0aW9ucy5mbjtcblx0ICAgICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKGNvbnRleHQpIHtcblx0ICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG5cdCAgICAgICAgLy8gUmVzdG9yZSB0aGUgcGFydGlhbC1ibG9jayBmcm9tIHRoZSBjbG9zdXJlIGZvciB0aGUgZXhlY3V0aW9uIG9mIHRoZSBibG9ja1xuXHQgICAgICAgIC8vIGkuZS4gdGhlIHBhcnQgaW5zaWRlIHRoZSBibG9jayBvZiB0aGUgcGFydGlhbCBjYWxsLlxuXHQgICAgICAgIG9wdGlvbnMuZGF0YSA9IF9iYXNlLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG5cdCAgICAgICAgb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBjdXJyZW50UGFydGlhbEJsb2NrO1xuXHQgICAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgICAgfTtcblx0ICAgICAgaWYgKGZuLnBhcnRpYWxzKSB7XG5cdCAgICAgICAgb3B0aW9ucy5wYXJ0aWFscyA9IFV0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucy5wYXJ0aWFscywgZm4ucGFydGlhbHMpO1xuXHQgICAgICB9XG5cdCAgICB9KSgpO1xuXHQgIH1cblxuXHQgIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQgJiYgcGFydGlhbEJsb2NrKSB7XG5cdCAgICBwYXJ0aWFsID0gcGFydGlhbEJsb2NrO1xuXHQgIH1cblxuXHQgIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQpIHtcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgZm91bmQnKTtcblx0ICB9IGVsc2UgaWYgKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuXHQgICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gbm9vcCgpIHtcblx0ICByZXR1cm4gJyc7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG5cdCAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG5cdCAgICBkYXRhID0gZGF0YSA/IF9iYXNlLmNyZWF0ZUZyYW1lKGRhdGEpIDoge307XG5cdCAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuXHQgIH1cblx0ICByZXR1cm4gZGF0YTtcblx0fVxuXG5cdGZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcblx0ICBpZiAoZm4uZGVjb3JhdG9yKSB7XG5cdCAgICB2YXIgcHJvcHMgPSB7fTtcblx0ICAgIHByb2cgPSBmbi5kZWNvcmF0b3IocHJvZywgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGhzICYmIGRlcHRoc1swXSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG5cdCAgICBVdGlscy5leHRlbmQocHJvZywgcHJvcHMpO1xuXHQgIH1cblx0ICByZXR1cm4gcHJvZztcblx0fVxuXG4vKioqLyB9KSxcbi8qIDIzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG4vKioqLyB9KSxcbi8qIDI0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNSk7XG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMCkuT2JqZWN0LnNlYWw7XG5cbi8qKiovIH0pLFxuLyogMjUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuMTcgT2JqZWN0LnNlYWwoTylcblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNik7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNykoJ3NlYWwnLCBmdW5jdGlvbigkc2VhbCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHNlYWwoaXQpe1xuXHQgICAgcmV0dXJuICRzZWFsICYmIGlzT2JqZWN0KGl0KSA/ICRzZWFsKGl0KSA6IGl0O1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9KSxcbi8qIDI2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcblx0fTtcblxuLyoqKi8gfSksXG4vKiAyNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpXG5cdCAgLCBjb3JlICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsIGZhaWxzICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuXHQgIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cblx0ICAgICwgZXhwID0ge307XG5cdCAgZXhwW0tFWV0gPSBleGVjKGZuKTtcblx0ICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG5cdH07XG5cbi8qKiovIH0pLFxuLyogMjggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZ2xvYmFsICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOSlcblx0ICAsIGNvcmUgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCBjdHggICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKVxuXHQgICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cblx0dmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuXHQgIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG5cdCAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkdcblx0ICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuXHQgICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG5cdCAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcblx0ICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuXHQgICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuXHQgICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG5cdCAgICAsIGtleSwgb3duLCBvdXQ7XG5cdCAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG5cdCAgZm9yKGtleSBpbiBzb3VyY2Upe1xuXHQgICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG5cdCAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuXHQgICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuXHQgICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcblx0ICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG5cdCAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcblx0ICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG5cdCAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuXHQgICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcblx0ICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG5cdCAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuXHQgICAgICB2YXIgRiA9IGZ1bmN0aW9uKHBhcmFtKXtcblx0ICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcblx0ICAgICAgfTtcblx0ICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuXHQgICAgICByZXR1cm4gRjtcblx0ICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuXHQgICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuXHQgICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuXHQgIH1cblx0fTtcblx0Ly8gdHlwZSBiaXRtYXBcblx0JGV4cG9ydC5GID0gMTsgIC8vIGZvcmNlZFxuXHQkZXhwb3J0LkcgPSAyOyAgLy8gZ2xvYmFsXG5cdCRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcblx0JGV4cG9ydC5QID0gODsgIC8vIHByb3RvXG5cdCRleHBvcnQuQiA9IDE2OyAvLyBiaW5kXG5cdCRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5cdG1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuLyoqKi8gfSksXG4vKiAyOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5cdHZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuXHQgID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0aWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuLyoqKi8gfSksXG4vKiAzMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdHZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5cdGlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4vKioqLyB9KSxcbi8qIDMxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5cdHZhciBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcblx0ICBhRnVuY3Rpb24oZm4pO1xuXHQgIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG5cdCAgc3dpdGNoKGxlbmd0aCl7XG5cdCAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcblx0ICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG5cdCAgICB9O1xuXHQgICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG5cdCAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuXHQgICAgfTtcblx0ICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuXHQgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcblx0ICAgIH07XG5cdCAgfVxuXHQgIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcblx0ICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuXHQgIH07XG5cdH07XG5cbi8qKiovIH0pLFxuLyogMzIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblxuLyoqKi8gfSksXG4vKiAzMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG5cdCAgdHJ5IHtcblx0ICAgIHJldHVybiAhIWV4ZWMoKTtcblx0ICB9IGNhdGNoKGUpe1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDM0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkgey8qIGdsb2JhbCB3aW5kb3cgKi9cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKEhhbmRsZWJhcnMpIHtcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgIHZhciByb290ID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3csXG5cdCAgICAgICRIYW5kbGViYXJzID0gcm9vdC5IYW5kbGViYXJzO1xuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgSGFuZGxlYmFycy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgaWYgKHJvb3QuSGFuZGxlYmFycyA9PT0gSGFuZGxlYmFycykge1xuXHQgICAgICByb290LkhhbmRsZWJhcnMgPSAkSGFuZGxlYmFycztcblx0ICAgIH1cblx0ICAgIHJldHVybiBIYW5kbGViYXJzO1xuXHQgIH07XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KCkpKSlcblxuLyoqKi8gfSksXG4vKiAzNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHR2YXIgQVNUID0ge1xuXHQgIC8vIFB1YmxpYyBBUEkgdXNlZCB0byBldmFsdWF0ZSBkZXJpdmVkIGF0dHJpYnV0ZXMgcmVnYXJkaW5nIEFTVCBub2Rlc1xuXHQgIGhlbHBlcnM6IHtcblx0ICAgIC8vIGEgbXVzdGFjaGUgaXMgZGVmaW5pdGVseSBhIGhlbHBlciBpZjpcblx0ICAgIC8vICogaXQgaXMgYW4gZWxpZ2libGUgaGVscGVyLCBhbmRcblx0ICAgIC8vICogaXQgaGFzIGF0IGxlYXN0IG9uZSBwYXJhbWV0ZXIgb3IgaGFzaCBzZWdtZW50XG5cdCAgICBoZWxwZXJFeHByZXNzaW9uOiBmdW5jdGlvbiBoZWxwZXJFeHByZXNzaW9uKG5vZGUpIHtcblx0ICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ1N1YkV4cHJlc3Npb24nIHx8IChub2RlLnR5cGUgPT09ICdNdXN0YWNoZVN0YXRlbWVudCcgfHwgbm9kZS50eXBlID09PSAnQmxvY2tTdGF0ZW1lbnQnKSAmJiAhIShub2RlLnBhcmFtcyAmJiBub2RlLnBhcmFtcy5sZW5ndGggfHwgbm9kZS5oYXNoKTtcblx0ICAgIH0sXG5cblx0ICAgIHNjb3BlZElkOiBmdW5jdGlvbiBzY29wZWRJZChwYXRoKSB7XG5cdCAgICAgIHJldHVybiAoL15cXC58dGhpc1xcYi8udGVzdChwYXRoLm9yaWdpbmFsKVxuXHQgICAgICApO1xuXHQgICAgfSxcblxuXHQgICAgLy8gYW4gSUQgaXMgc2ltcGxlIGlmIGl0IG9ubHkgaGFzIG9uZSBwYXJ0LCBhbmQgdGhhdCBwYXJ0IGlzIG5vdFxuXHQgICAgLy8gYC4uYCBvciBgdGhpc2AuXG5cdCAgICBzaW1wbGVJZDogZnVuY3Rpb24gc2ltcGxlSWQocGF0aCkge1xuXHQgICAgICByZXR1cm4gcGF0aC5wYXJ0cy5sZW5ndGggPT09IDEgJiYgIUFTVC5oZWxwZXJzLnNjb3BlZElkKHBhdGgpICYmICFwYXRoLmRlcHRoO1xuXHQgICAgfVxuXHQgIH1cblx0fTtcblxuXHQvLyBNdXN0IGJlIGV4cG9ydGVkIGFzIGFuIG9iamVjdCByYXRoZXIgdGhhbiB0aGUgcm9vdCBvZiB0aGUgbW9kdWxlIGFzIHRoZSBqaXNvbiBsZXhlclxuXHQvLyBtdXN0IG1vZGlmeSB0aGUgb2JqZWN0IHRvIG9wZXJhdGUgcHJvcGVybHkuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFTVDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMzYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMucGFyc2UgPSBwYXJzZTtcblxuXHR2YXIgX3BhcnNlciA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpO1xuXG5cdHZhciBfcGFyc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlcik7XG5cblx0dmFyIF93aGl0ZXNwYWNlQ29udHJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oMzgpO1xuXG5cdHZhciBfd2hpdGVzcGFjZUNvbnRyb2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2hpdGVzcGFjZUNvbnRyb2wpO1xuXG5cdHZhciBfaGVscGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oNDApO1xuXG5cdHZhciBIZWxwZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hlbHBlcnMpO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdGV4cG9ydHMucGFyc2VyID0gX3BhcnNlcjJbJ2RlZmF1bHQnXTtcblxuXHR2YXIgeXkgPSB7fTtcblx0X3V0aWxzLmV4dGVuZCh5eSwgSGVscGVycyk7XG5cblx0ZnVuY3Rpb24gcGFyc2UoaW5wdXQsIG9wdGlvbnMpIHtcblx0ICAvLyBKdXN0IHJldHVybiBpZiBhbiBhbHJlYWR5LWNvbXBpbGVkIEFTVCB3YXMgcGFzc2VkIGluLlxuXHQgIGlmIChpbnB1dC50eXBlID09PSAnUHJvZ3JhbScpIHtcblx0ICAgIHJldHVybiBpbnB1dDtcblx0ICB9XG5cblx0ICBfcGFyc2VyMlsnZGVmYXVsdCddLnl5ID0geXk7XG5cblx0ICAvLyBBbHRlcmluZyB0aGUgc2hhcmVkIG9iamVjdCBoZXJlLCBidXQgdGhpcyBpcyBvayBhcyBwYXJzZXIgaXMgYSBzeW5jIG9wZXJhdGlvblxuXHQgIHl5LmxvY0luZm8gPSBmdW5jdGlvbiAobG9jSW5mbykge1xuXHQgICAgcmV0dXJuIG5ldyB5eS5Tb3VyY2VMb2NhdGlvbihvcHRpb25zICYmIG9wdGlvbnMuc3JjTmFtZSwgbG9jSW5mbyk7XG5cdCAgfTtcblxuXHQgIHZhciBzdHJpcCA9IG5ldyBfd2hpdGVzcGFjZUNvbnRyb2wyWydkZWZhdWx0J10ob3B0aW9ucyk7XG5cdCAgcmV0dXJuIHN0cmlwLmFjY2VwdChfcGFyc2VyMlsnZGVmYXVsdCddLnBhcnNlKGlucHV0KSk7XG5cdH1cblxuLyoqKi8gfSksXG4vKiAzNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIEZpbGUgaWdub3JlZCBpbiBjb3ZlcmFnZSB0ZXN0cyB2aWEgc2V0dGluZyBpbiAuaXN0YW5idWwueW1sXG5cdC8qIEppc29uIGdlbmVyYXRlZCBwYXJzZXIgKi9cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0dmFyIGhhbmRsZWJhcnMgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIHBhcnNlciA9IHsgdHJhY2U6IGZ1bmN0aW9uIHRyYWNlKCkge30sXG5cdCAgICAgICAgeXk6IHt9LFxuXHQgICAgICAgIHN5bWJvbHNfOiB7IFwiZXJyb3JcIjogMiwgXCJyb290XCI6IDMsIFwicHJvZ3JhbVwiOiA0LCBcIkVPRlwiOiA1LCBcInByb2dyYW1fcmVwZXRpdGlvbjBcIjogNiwgXCJzdGF0ZW1lbnRcIjogNywgXCJtdXN0YWNoZVwiOiA4LCBcImJsb2NrXCI6IDksIFwicmF3QmxvY2tcIjogMTAsIFwicGFydGlhbFwiOiAxMSwgXCJwYXJ0aWFsQmxvY2tcIjogMTIsIFwiY29udGVudFwiOiAxMywgXCJDT01NRU5UXCI6IDE0LCBcIkNPTlRFTlRcIjogMTUsIFwib3BlblJhd0Jsb2NrXCI6IDE2LCBcInJhd0Jsb2NrX3JlcGV0aXRpb25fcGx1czBcIjogMTcsIFwiRU5EX1JBV19CTE9DS1wiOiAxOCwgXCJPUEVOX1JBV19CTE9DS1wiOiAxOSwgXCJoZWxwZXJOYW1lXCI6IDIwLCBcIm9wZW5SYXdCbG9ja19yZXBldGl0aW9uMFwiOiAyMSwgXCJvcGVuUmF3QmxvY2tfb3B0aW9uMFwiOiAyMiwgXCJDTE9TRV9SQVdfQkxPQ0tcIjogMjMsIFwib3BlbkJsb2NrXCI6IDI0LCBcImJsb2NrX29wdGlvbjBcIjogMjUsIFwiY2xvc2VCbG9ja1wiOiAyNiwgXCJvcGVuSW52ZXJzZVwiOiAyNywgXCJibG9ja19vcHRpb24xXCI6IDI4LCBcIk9QRU5fQkxPQ0tcIjogMjksIFwib3BlbkJsb2NrX3JlcGV0aXRpb24wXCI6IDMwLCBcIm9wZW5CbG9ja19vcHRpb24wXCI6IDMxLCBcIm9wZW5CbG9ja19vcHRpb24xXCI6IDMyLCBcIkNMT1NFXCI6IDMzLCBcIk9QRU5fSU5WRVJTRVwiOiAzNCwgXCJvcGVuSW52ZXJzZV9yZXBldGl0aW9uMFwiOiAzNSwgXCJvcGVuSW52ZXJzZV9vcHRpb24wXCI6IDM2LCBcIm9wZW5JbnZlcnNlX29wdGlvbjFcIjogMzcsIFwib3BlbkludmVyc2VDaGFpblwiOiAzOCwgXCJPUEVOX0lOVkVSU0VfQ0hBSU5cIjogMzksIFwib3BlbkludmVyc2VDaGFpbl9yZXBldGl0aW9uMFwiOiA0MCwgXCJvcGVuSW52ZXJzZUNoYWluX29wdGlvbjBcIjogNDEsIFwib3BlbkludmVyc2VDaGFpbl9vcHRpb24xXCI6IDQyLCBcImludmVyc2VBbmRQcm9ncmFtXCI6IDQzLCBcIklOVkVSU0VcIjogNDQsIFwiaW52ZXJzZUNoYWluXCI6IDQ1LCBcImludmVyc2VDaGFpbl9vcHRpb24wXCI6IDQ2LCBcIk9QRU5fRU5EQkxPQ0tcIjogNDcsIFwiT1BFTlwiOiA0OCwgXCJtdXN0YWNoZV9yZXBldGl0aW9uMFwiOiA0OSwgXCJtdXN0YWNoZV9vcHRpb24wXCI6IDUwLCBcIk9QRU5fVU5FU0NBUEVEXCI6IDUxLCBcIm11c3RhY2hlX3JlcGV0aXRpb24xXCI6IDUyLCBcIm11c3RhY2hlX29wdGlvbjFcIjogNTMsIFwiQ0xPU0VfVU5FU0NBUEVEXCI6IDU0LCBcIk9QRU5fUEFSVElBTFwiOiA1NSwgXCJwYXJ0aWFsTmFtZVwiOiA1NiwgXCJwYXJ0aWFsX3JlcGV0aXRpb24wXCI6IDU3LCBcInBhcnRpYWxfb3B0aW9uMFwiOiA1OCwgXCJvcGVuUGFydGlhbEJsb2NrXCI6IDU5LCBcIk9QRU5fUEFSVElBTF9CTE9DS1wiOiA2MCwgXCJvcGVuUGFydGlhbEJsb2NrX3JlcGV0aXRpb24wXCI6IDYxLCBcIm9wZW5QYXJ0aWFsQmxvY2tfb3B0aW9uMFwiOiA2MiwgXCJwYXJhbVwiOiA2MywgXCJzZXhwclwiOiA2NCwgXCJPUEVOX1NFWFBSXCI6IDY1LCBcInNleHByX3JlcGV0aXRpb24wXCI6IDY2LCBcInNleHByX29wdGlvbjBcIjogNjcsIFwiQ0xPU0VfU0VYUFJcIjogNjgsIFwiaGFzaFwiOiA2OSwgXCJoYXNoX3JlcGV0aXRpb25fcGx1czBcIjogNzAsIFwiaGFzaFNlZ21lbnRcIjogNzEsIFwiSURcIjogNzIsIFwiRVFVQUxTXCI6IDczLCBcImJsb2NrUGFyYW1zXCI6IDc0LCBcIk9QRU5fQkxPQ0tfUEFSQU1TXCI6IDc1LCBcImJsb2NrUGFyYW1zX3JlcGV0aXRpb25fcGx1czBcIjogNzYsIFwiQ0xPU0VfQkxPQ0tfUEFSQU1TXCI6IDc3LCBcInBhdGhcIjogNzgsIFwiZGF0YU5hbWVcIjogNzksIFwiU1RSSU5HXCI6IDgwLCBcIk5VTUJFUlwiOiA4MSwgXCJCT09MRUFOXCI6IDgyLCBcIlVOREVGSU5FRFwiOiA4MywgXCJOVUxMXCI6IDg0LCBcIkRBVEFcIjogODUsIFwicGF0aFNlZ21lbnRzXCI6IDg2LCBcIlNFUFwiOiA4NywgXCIkYWNjZXB0XCI6IDAsIFwiJGVuZFwiOiAxIH0sXG5cdCAgICAgICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDU6IFwiRU9GXCIsIDE0OiBcIkNPTU1FTlRcIiwgMTU6IFwiQ09OVEVOVFwiLCAxODogXCJFTkRfUkFXX0JMT0NLXCIsIDE5OiBcIk9QRU5fUkFXX0JMT0NLXCIsIDIzOiBcIkNMT1NFX1JBV19CTE9DS1wiLCAyOTogXCJPUEVOX0JMT0NLXCIsIDMzOiBcIkNMT1NFXCIsIDM0OiBcIk9QRU5fSU5WRVJTRVwiLCAzOTogXCJPUEVOX0lOVkVSU0VfQ0hBSU5cIiwgNDQ6IFwiSU5WRVJTRVwiLCA0NzogXCJPUEVOX0VOREJMT0NLXCIsIDQ4OiBcIk9QRU5cIiwgNTE6IFwiT1BFTl9VTkVTQ0FQRURcIiwgNTQ6IFwiQ0xPU0VfVU5FU0NBUEVEXCIsIDU1OiBcIk9QRU5fUEFSVElBTFwiLCA2MDogXCJPUEVOX1BBUlRJQUxfQkxPQ0tcIiwgNjU6IFwiT1BFTl9TRVhQUlwiLCA2ODogXCJDTE9TRV9TRVhQUlwiLCA3MjogXCJJRFwiLCA3MzogXCJFUVVBTFNcIiwgNzU6IFwiT1BFTl9CTE9DS19QQVJBTVNcIiwgNzc6IFwiQ0xPU0VfQkxPQ0tfUEFSQU1TXCIsIDgwOiBcIlNUUklOR1wiLCA4MTogXCJOVU1CRVJcIiwgODI6IFwiQk9PTEVBTlwiLCA4MzogXCJVTkRFRklORURcIiwgODQ6IFwiTlVMTFwiLCA4NTogXCJEQVRBXCIsIDg3OiBcIlNFUFwiIH0sXG5cdCAgICAgICAgcHJvZHVjdGlvbnNfOiBbMCwgWzMsIDJdLCBbNCwgMV0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzEzLCAxXSwgWzEwLCAzXSwgWzE2LCA1XSwgWzksIDRdLCBbOSwgNF0sIFsyNCwgNl0sIFsyNywgNl0sIFszOCwgNl0sIFs0MywgMl0sIFs0NSwgM10sIFs0NSwgMV0sIFsyNiwgM10sIFs4LCA1XSwgWzgsIDVdLCBbMTEsIDVdLCBbMTIsIDNdLCBbNTksIDVdLCBbNjMsIDFdLCBbNjMsIDFdLCBbNjQsIDVdLCBbNjksIDFdLCBbNzEsIDNdLCBbNzQsIDNdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbNTYsIDFdLCBbNTYsIDFdLCBbNzksIDJdLCBbNzgsIDFdLCBbODYsIDNdLCBbODYsIDFdLCBbNiwgMF0sIFs2LCAyXSwgWzE3LCAxXSwgWzE3LCAyXSwgWzIxLCAwXSwgWzIxLCAyXSwgWzIyLCAwXSwgWzIyLCAxXSwgWzI1LCAwXSwgWzI1LCAxXSwgWzI4LCAwXSwgWzI4LCAxXSwgWzMwLCAwXSwgWzMwLCAyXSwgWzMxLCAwXSwgWzMxLCAxXSwgWzMyLCAwXSwgWzMyLCAxXSwgWzM1LCAwXSwgWzM1LCAyXSwgWzM2LCAwXSwgWzM2LCAxXSwgWzM3LCAwXSwgWzM3LCAxXSwgWzQwLCAwXSwgWzQwLCAyXSwgWzQxLCAwXSwgWzQxLCAxXSwgWzQyLCAwXSwgWzQyLCAxXSwgWzQ2LCAwXSwgWzQ2LCAxXSwgWzQ5LCAwXSwgWzQ5LCAyXSwgWzUwLCAwXSwgWzUwLCAxXSwgWzUyLCAwXSwgWzUyLCAyXSwgWzUzLCAwXSwgWzUzLCAxXSwgWzU3LCAwXSwgWzU3LCAyXSwgWzU4LCAwXSwgWzU4LCAxXSwgWzYxLCAwXSwgWzYxLCAyXSwgWzYyLCAwXSwgWzYyLCAxXSwgWzY2LCAwXSwgWzY2LCAyXSwgWzY3LCAwXSwgWzY3LCAxXSwgWzcwLCAxXSwgWzcwLCAyXSwgWzc2LCAxXSwgWzc2LCAyXV0sXG5cdCAgICAgICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24gYW5vbnltb3VzKHl5dGV4dCwgeXlsZW5nLCB5eWxpbmVubywgeXksIHl5c3RhdGUsICQkLCBfJFxuXHQgICAgICAgIC8qKi8pIHtcblxuXHQgICAgICAgICAgICB2YXIgJDAgPSAkJC5sZW5ndGggLSAxO1xuXHQgICAgICAgICAgICBzd2l0Y2ggKHl5c3RhdGUpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCRbJDAgLSAxXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUHJvZ3JhbSgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0NvbW1lbnRTdGF0ZW1lbnQnLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeXkuc3RyaXBDb21tZW50KCQkWyQwXSksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwXSwgJCRbJDBdKSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdDb250ZW50U3RhdGVtZW50Jyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWw6ICQkWyQwXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICQkWyQwXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUmF3QmxvY2soJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBwYXRoOiAkJFskMCAtIDNdLCBwYXJhbXM6ICQkWyQwIC0gMl0sIGhhc2g6ICQkWyQwIC0gMV0gfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZUJsb2NrKCQkWyQwIC0gM10sICQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSwgZmFsc2UsIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlQmxvY2soJCRbJDAgLSAzXSwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCB0cnVlLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBvcGVuOiAkJFskMCAtIDVdLCBwYXRoOiAkJFskMCAtIDRdLCBwYXJhbXM6ICQkWyQwIC0gM10sIGhhc2g6ICQkWyQwIC0gMl0sIGJsb2NrUGFyYW1zOiAkJFskMCAtIDFdLCBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDVdLCAkJFskMF0pIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgcGF0aDogJCRbJDAgLSA0XSwgcGFyYW1zOiAkJFskMCAtIDNdLCBoYXNoOiAkJFskMCAtIDJdLCBibG9ja1BhcmFtczogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA1XSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gNF0sIHBhcmFtczogJCRbJDAgLSAzXSwgaGFzaDogJCRbJDAgLSAyXSwgYmxvY2tQYXJhbXM6ICQkWyQwIC0gMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNV0sICQkWyQwXSkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDFdLCAkJFskMCAtIDFdKSwgcHJvZ3JhbTogJCRbJDBdIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE5OlxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBpbnZlcnNlID0geXkucHJlcGFyZUJsb2NrKCQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSwgJCRbJDBdLCBmYWxzZSwgdGhpcy5fJCksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0gPSB5eS5wcmVwYXJlUHJvZ3JhbShbaW52ZXJzZV0sICQkWyQwIC0gMV0ubG9jKTtcblx0ICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLmNoYWluZWQgPSB0cnVlO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBzdHJpcDogJCRbJDAgLSAyXS5zdHJpcCwgcHJvZ3JhbTogcHJvZ3JhbSwgY2hhaW46IHRydWUgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgcGF0aDogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSAyXSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlTXVzdGFjaGUoJCRbJDAgLSAzXSwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDAgLSA0XSwgeXkuc3RyaXBGbGFncygkJFskMCAtIDRdLCAkJFskMF0pLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZU11c3RhY2hlKCQkWyQwIC0gM10sICQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwIC0gNF0sIHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA0XSwgJCRbJDBdKSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BhcnRpYWxTdGF0ZW1lbnQnLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAkJFskMCAtIDNdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6ICQkWyQwIC0gMl0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6ICQkWyQwIC0gMV0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGluZGVudDogJycsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNF0sICQkWyQwXSksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVBhcnRpYWxCbG9jaygkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMF0sIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gM10sIHBhcmFtczogJCRbJDAgLSAyXSwgaGFzaDogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA0XSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjk6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU3ViRXhwcmVzc2lvbicsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICQkWyQwIC0gM10sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogJCRbJDAgLSAyXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaGFzaDogJCRbJDAgLSAxXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdIYXNoJywgcGFpcnM6ICQkWyQwXSwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ0hhc2hQYWlyJywga2V5OiB5eS5pZCgkJFskMCAtIDJdKSwgdmFsdWU6ICQkWyQwXSwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LmlkKCQkWyQwIC0gMV0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnU3RyaW5nTGl0ZXJhbCcsIHZhbHVlOiAkJFskMF0sIG9yaWdpbmFsOiAkJFskMF0sIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdOdW1iZXJMaXRlcmFsJywgdmFsdWU6IE51bWJlcigkJFskMF0pLCBvcmlnaW5hbDogTnVtYmVyKCQkWyQwXSksIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdCb29sZWFuTGl0ZXJhbCcsIHZhbHVlOiAkJFskMF0gPT09ICd0cnVlJywgb3JpZ2luYWw6ICQkWyQwXSA9PT0gJ3RydWUnLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnVW5kZWZpbmVkTGl0ZXJhbCcsIG9yaWdpbmFsOiB1bmRlZmluZWQsIHZhbHVlOiB1bmRlZmluZWQsIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzOTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdOdWxsTGl0ZXJhbCcsIG9yaWdpbmFsOiBudWxsLCB2YWx1ZTogbnVsbCwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDE6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Mjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUGF0aCh0cnVlLCAkJFskMF0sIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Mzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUGF0aChmYWxzZSwgJCRbJDBdLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAyXS5wdXNoKHsgcGFydDogeXkuaWQoJCRbJDBdKSwgb3JpZ2luYWw6ICQkWyQwXSwgc2VwYXJhdG9yOiAkJFskMCAtIDFdIH0pO3RoaXMuJCA9ICQkWyQwIC0gMl07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFt7IHBhcnQ6IHl5LmlkKCQkWyQwXSksIG9yaWdpbmFsOiAkJFskMF0gfV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Nzpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gWyQkWyQwXV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ5OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1MDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNTE6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDU4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1OTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDY1OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA3MDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzE6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDc4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA3OTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgODI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDgzOlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4Njpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgODc6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDkwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5MTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDk1OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5ODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbJCRbJDBdXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTk6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEwMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbJCRbJDBdXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTAxOlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblx0ICAgICAgICB0YWJsZTogW3sgMzogMSwgNDogMiwgNTogWzIsIDQ2XSwgNjogMywgMTQ6IFsyLCA0Nl0sIDE1OiBbMiwgNDZdLCAxOTogWzIsIDQ2XSwgMjk6IFsyLCA0Nl0sIDM0OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDE6IFszXSB9LCB7IDU6IFsxLCA0XSB9LCB7IDU6IFsyLCAyXSwgNzogNSwgODogNiwgOTogNywgMTA6IDgsIDExOiA5LCAxMjogMTAsIDEzOiAxMSwgMTQ6IFsxLCAxMl0sIDE1OiBbMSwgMjBdLCAxNjogMTcsIDE5OiBbMSwgMjNdLCAyNDogMTUsIDI3OiAxNiwgMjk6IFsxLCAyMV0sIDM0OiBbMSwgMjJdLCAzOTogWzIsIDJdLCA0NDogWzIsIDJdLCA0NzogWzIsIDJdLCA0ODogWzEsIDEzXSwgNTE6IFsxLCAxNF0sIDU1OiBbMSwgMThdLCA1OTogMTksIDYwOiBbMSwgMjRdIH0sIHsgMTogWzIsIDFdIH0sIHsgNTogWzIsIDQ3XSwgMTQ6IFsyLCA0N10sIDE1OiBbMiwgNDddLCAxOTogWzIsIDQ3XSwgMjk6IFsyLCA0N10sIDM0OiBbMiwgNDddLCAzOTogWzIsIDQ3XSwgNDQ6IFsyLCA0N10sIDQ3OiBbMiwgNDddLCA0ODogWzIsIDQ3XSwgNTE6IFsyLCA0N10sIDU1OiBbMiwgNDddLCA2MDogWzIsIDQ3XSB9LCB7IDU6IFsyLCAzXSwgMTQ6IFsyLCAzXSwgMTU6IFsyLCAzXSwgMTk6IFsyLCAzXSwgMjk6IFsyLCAzXSwgMzQ6IFsyLCAzXSwgMzk6IFsyLCAzXSwgNDQ6IFsyLCAzXSwgNDc6IFsyLCAzXSwgNDg6IFsyLCAzXSwgNTE6IFsyLCAzXSwgNTU6IFsyLCAzXSwgNjA6IFsyLCAzXSB9LCB7IDU6IFsyLCA0XSwgMTQ6IFsyLCA0XSwgMTU6IFsyLCA0XSwgMTk6IFsyLCA0XSwgMjk6IFsyLCA0XSwgMzQ6IFsyLCA0XSwgMzk6IFsyLCA0XSwgNDQ6IFsyLCA0XSwgNDc6IFsyLCA0XSwgNDg6IFsyLCA0XSwgNTE6IFsyLCA0XSwgNTU6IFsyLCA0XSwgNjA6IFsyLCA0XSB9LCB7IDU6IFsyLCA1XSwgMTQ6IFsyLCA1XSwgMTU6IFsyLCA1XSwgMTk6IFsyLCA1XSwgMjk6IFsyLCA1XSwgMzQ6IFsyLCA1XSwgMzk6IFsyLCA1XSwgNDQ6IFsyLCA1XSwgNDc6IFsyLCA1XSwgNDg6IFsyLCA1XSwgNTE6IFsyLCA1XSwgNTU6IFsyLCA1XSwgNjA6IFsyLCA1XSB9LCB7IDU6IFsyLCA2XSwgMTQ6IFsyLCA2XSwgMTU6IFsyLCA2XSwgMTk6IFsyLCA2XSwgMjk6IFsyLCA2XSwgMzQ6IFsyLCA2XSwgMzk6IFsyLCA2XSwgNDQ6IFsyLCA2XSwgNDc6IFsyLCA2XSwgNDg6IFsyLCA2XSwgNTE6IFsyLCA2XSwgNTU6IFsyLCA2XSwgNjA6IFsyLCA2XSB9LCB7IDU6IFsyLCA3XSwgMTQ6IFsyLCA3XSwgMTU6IFsyLCA3XSwgMTk6IFsyLCA3XSwgMjk6IFsyLCA3XSwgMzQ6IFsyLCA3XSwgMzk6IFsyLCA3XSwgNDQ6IFsyLCA3XSwgNDc6IFsyLCA3XSwgNDg6IFsyLCA3XSwgNTE6IFsyLCA3XSwgNTU6IFsyLCA3XSwgNjA6IFsyLCA3XSB9LCB7IDU6IFsyLCA4XSwgMTQ6IFsyLCA4XSwgMTU6IFsyLCA4XSwgMTk6IFsyLCA4XSwgMjk6IFsyLCA4XSwgMzQ6IFsyLCA4XSwgMzk6IFsyLCA4XSwgNDQ6IFsyLCA4XSwgNDc6IFsyLCA4XSwgNDg6IFsyLCA4XSwgNTE6IFsyLCA4XSwgNTU6IFsyLCA4XSwgNjA6IFsyLCA4XSB9LCB7IDU6IFsyLCA5XSwgMTQ6IFsyLCA5XSwgMTU6IFsyLCA5XSwgMTk6IFsyLCA5XSwgMjk6IFsyLCA5XSwgMzQ6IFsyLCA5XSwgMzk6IFsyLCA5XSwgNDQ6IFsyLCA5XSwgNDc6IFsyLCA5XSwgNDg6IFsyLCA5XSwgNTE6IFsyLCA5XSwgNTU6IFsyLCA5XSwgNjA6IFsyLCA5XSB9LCB7IDIwOiAyNSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogMzYsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNDogMzcsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgMzk6IFsyLCA0Nl0sIDQ0OiBbMiwgNDZdLCA0NzogWzIsIDQ2XSwgNDg6IFsyLCA0Nl0sIDUxOiBbMiwgNDZdLCA1NTogWzIsIDQ2XSwgNjA6IFsyLCA0Nl0gfSwgeyA0OiAzOCwgNjogMywgMTQ6IFsyLCA0Nl0sIDE1OiBbMiwgNDZdLCAxOTogWzIsIDQ2XSwgMjk6IFsyLCA0Nl0sIDM0OiBbMiwgNDZdLCA0NDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgMTM6IDQwLCAxNTogWzEsIDIwXSwgMTc6IDM5IH0sIHsgMjA6IDQyLCA1NjogNDEsIDY0OiA0MywgNjU6IFsxLCA0NF0sIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNDogNDUsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgNTogWzIsIDEwXSwgMTQ6IFsyLCAxMF0sIDE1OiBbMiwgMTBdLCAxODogWzIsIDEwXSwgMTk6IFsyLCAxMF0sIDI5OiBbMiwgMTBdLCAzNDogWzIsIDEwXSwgMzk6IFsyLCAxMF0sIDQ0OiBbMiwgMTBdLCA0NzogWzIsIDEwXSwgNDg6IFsyLCAxMF0sIDUxOiBbMiwgMTBdLCA1NTogWzIsIDEwXSwgNjA6IFsyLCAxMF0gfSwgeyAyMDogNDYsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDQ3LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA0OCwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNDIsIDU2OiA0OSwgNjQ6IDQzLCA2NTogWzEsIDQ0XSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAzMzogWzIsIDc4XSwgNDk6IDUwLCA2NTogWzIsIDc4XSwgNzI6IFsyLCA3OF0sIDgwOiBbMiwgNzhdLCA4MTogWzIsIDc4XSwgODI6IFsyLCA3OF0sIDgzOiBbMiwgNzhdLCA4NDogWzIsIDc4XSwgODU6IFsyLCA3OF0gfSwgeyAyMzogWzIsIDMzXSwgMzM6IFsyLCAzM10sIDU0OiBbMiwgMzNdLCA2NTogWzIsIDMzXSwgNjg6IFsyLCAzM10sIDcyOiBbMiwgMzNdLCA3NTogWzIsIDMzXSwgODA6IFsyLCAzM10sIDgxOiBbMiwgMzNdLCA4MjogWzIsIDMzXSwgODM6IFsyLCAzM10sIDg0OiBbMiwgMzNdLCA4NTogWzIsIDMzXSB9LCB7IDIzOiBbMiwgMzRdLCAzMzogWzIsIDM0XSwgNTQ6IFsyLCAzNF0sIDY1OiBbMiwgMzRdLCA2ODogWzIsIDM0XSwgNzI6IFsyLCAzNF0sIDc1OiBbMiwgMzRdLCA4MDogWzIsIDM0XSwgODE6IFsyLCAzNF0sIDgyOiBbMiwgMzRdLCA4MzogWzIsIDM0XSwgODQ6IFsyLCAzNF0sIDg1OiBbMiwgMzRdIH0sIHsgMjM6IFsyLCAzNV0sIDMzOiBbMiwgMzVdLCA1NDogWzIsIDM1XSwgNjU6IFsyLCAzNV0sIDY4OiBbMiwgMzVdLCA3MjogWzIsIDM1XSwgNzU6IFsyLCAzNV0sIDgwOiBbMiwgMzVdLCA4MTogWzIsIDM1XSwgODI6IFsyLCAzNV0sIDgzOiBbMiwgMzVdLCA4NDogWzIsIDM1XSwgODU6IFsyLCAzNV0gfSwgeyAyMzogWzIsIDM2XSwgMzM6IFsyLCAzNl0sIDU0OiBbMiwgMzZdLCA2NTogWzIsIDM2XSwgNjg6IFsyLCAzNl0sIDcyOiBbMiwgMzZdLCA3NTogWzIsIDM2XSwgODA6IFsyLCAzNl0sIDgxOiBbMiwgMzZdLCA4MjogWzIsIDM2XSwgODM6IFsyLCAzNl0sIDg0OiBbMiwgMzZdLCA4NTogWzIsIDM2XSB9LCB7IDIzOiBbMiwgMzddLCAzMzogWzIsIDM3XSwgNTQ6IFsyLCAzN10sIDY1OiBbMiwgMzddLCA2ODogWzIsIDM3XSwgNzI6IFsyLCAzN10sIDc1OiBbMiwgMzddLCA4MDogWzIsIDM3XSwgODE6IFsyLCAzN10sIDgyOiBbMiwgMzddLCA4MzogWzIsIDM3XSwgODQ6IFsyLCAzN10sIDg1OiBbMiwgMzddIH0sIHsgMjM6IFsyLCAzOF0sIDMzOiBbMiwgMzhdLCA1NDogWzIsIDM4XSwgNjU6IFsyLCAzOF0sIDY4OiBbMiwgMzhdLCA3MjogWzIsIDM4XSwgNzU6IFsyLCAzOF0sIDgwOiBbMiwgMzhdLCA4MTogWzIsIDM4XSwgODI6IFsyLCAzOF0sIDgzOiBbMiwgMzhdLCA4NDogWzIsIDM4XSwgODU6IFsyLCAzOF0gfSwgeyAyMzogWzIsIDM5XSwgMzM6IFsyLCAzOV0sIDU0OiBbMiwgMzldLCA2NTogWzIsIDM5XSwgNjg6IFsyLCAzOV0sIDcyOiBbMiwgMzldLCA3NTogWzIsIDM5XSwgODA6IFsyLCAzOV0sIDgxOiBbMiwgMzldLCA4MjogWzIsIDM5XSwgODM6IFsyLCAzOV0sIDg0OiBbMiwgMzldLCA4NTogWzIsIDM5XSB9LCB7IDIzOiBbMiwgNDNdLCAzMzogWzIsIDQzXSwgNTQ6IFsyLCA0M10sIDY1OiBbMiwgNDNdLCA2ODogWzIsIDQzXSwgNzI6IFsyLCA0M10sIDc1OiBbMiwgNDNdLCA4MDogWzIsIDQzXSwgODE6IFsyLCA0M10sIDgyOiBbMiwgNDNdLCA4MzogWzIsIDQzXSwgODQ6IFsyLCA0M10sIDg1OiBbMiwgNDNdLCA4NzogWzEsIDUxXSB9LCB7IDcyOiBbMSwgMzVdLCA4NjogNTIgfSwgeyAyMzogWzIsIDQ1XSwgMzM6IFsyLCA0NV0sIDU0OiBbMiwgNDVdLCA2NTogWzIsIDQ1XSwgNjg6IFsyLCA0NV0sIDcyOiBbMiwgNDVdLCA3NTogWzIsIDQ1XSwgODA6IFsyLCA0NV0sIDgxOiBbMiwgNDVdLCA4MjogWzIsIDQ1XSwgODM6IFsyLCA0NV0sIDg0OiBbMiwgNDVdLCA4NTogWzIsIDQ1XSwgODc6IFsyLCA0NV0gfSwgeyA1MjogNTMsIDU0OiBbMiwgODJdLCA2NTogWzIsIDgyXSwgNzI6IFsyLCA4Ml0sIDgwOiBbMiwgODJdLCA4MTogWzIsIDgyXSwgODI6IFsyLCA4Ml0sIDgzOiBbMiwgODJdLCA4NDogWzIsIDgyXSwgODU6IFsyLCA4Ml0gfSwgeyAyNTogNTQsIDM4OiA1NiwgMzk6IFsxLCA1OF0sIDQzOiA1NywgNDQ6IFsxLCA1OV0sIDQ1OiA1NSwgNDc6IFsyLCA1NF0gfSwgeyAyODogNjAsIDQzOiA2MSwgNDQ6IFsxLCA1OV0sIDQ3OiBbMiwgNTZdIH0sIHsgMTM6IDYzLCAxNTogWzEsIDIwXSwgMTg6IFsxLCA2Ml0gfSwgeyAxNTogWzIsIDQ4XSwgMTg6IFsyLCA0OF0gfSwgeyAzMzogWzIsIDg2XSwgNTc6IDY0LCA2NTogWzIsIDg2XSwgNzI6IFsyLCA4Nl0sIDgwOiBbMiwgODZdLCA4MTogWzIsIDg2XSwgODI6IFsyLCA4Nl0sIDgzOiBbMiwgODZdLCA4NDogWzIsIDg2XSwgODU6IFsyLCA4Nl0gfSwgeyAzMzogWzIsIDQwXSwgNjU6IFsyLCA0MF0sIDcyOiBbMiwgNDBdLCA4MDogWzIsIDQwXSwgODE6IFsyLCA0MF0sIDgyOiBbMiwgNDBdLCA4MzogWzIsIDQwXSwgODQ6IFsyLCA0MF0sIDg1OiBbMiwgNDBdIH0sIHsgMzM6IFsyLCA0MV0sIDY1OiBbMiwgNDFdLCA3MjogWzIsIDQxXSwgODA6IFsyLCA0MV0sIDgxOiBbMiwgNDFdLCA4MjogWzIsIDQxXSwgODM6IFsyLCA0MV0sIDg0OiBbMiwgNDFdLCA4NTogWzIsIDQxXSB9LCB7IDIwOiA2NSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyNjogNjYsIDQ3OiBbMSwgNjddIH0sIHsgMzA6IDY4LCAzMzogWzIsIDU4XSwgNjU6IFsyLCA1OF0sIDcyOiBbMiwgNThdLCA3NTogWzIsIDU4XSwgODA6IFsyLCA1OF0sIDgxOiBbMiwgNThdLCA4MjogWzIsIDU4XSwgODM6IFsyLCA1OF0sIDg0OiBbMiwgNThdLCA4NTogWzIsIDU4XSB9LCB7IDMzOiBbMiwgNjRdLCAzNTogNjksIDY1OiBbMiwgNjRdLCA3MjogWzIsIDY0XSwgNzU6IFsyLCA2NF0sIDgwOiBbMiwgNjRdLCA4MTogWzIsIDY0XSwgODI6IFsyLCA2NF0sIDgzOiBbMiwgNjRdLCA4NDogWzIsIDY0XSwgODU6IFsyLCA2NF0gfSwgeyAyMTogNzAsIDIzOiBbMiwgNTBdLCA2NTogWzIsIDUwXSwgNzI6IFsyLCA1MF0sIDgwOiBbMiwgNTBdLCA4MTogWzIsIDUwXSwgODI6IFsyLCA1MF0sIDgzOiBbMiwgNTBdLCA4NDogWzIsIDUwXSwgODU6IFsyLCA1MF0gfSwgeyAzMzogWzIsIDkwXSwgNjE6IDcxLCA2NTogWzIsIDkwXSwgNzI6IFsyLCA5MF0sIDgwOiBbMiwgOTBdLCA4MTogWzIsIDkwXSwgODI6IFsyLCA5MF0sIDgzOiBbMiwgOTBdLCA4NDogWzIsIDkwXSwgODU6IFsyLCA5MF0gfSwgeyAyMDogNzUsIDMzOiBbMiwgODBdLCA1MDogNzIsIDYzOiA3MywgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDc0LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA3MjogWzEsIDgwXSB9LCB7IDIzOiBbMiwgNDJdLCAzMzogWzIsIDQyXSwgNTQ6IFsyLCA0Ml0sIDY1OiBbMiwgNDJdLCA2ODogWzIsIDQyXSwgNzI6IFsyLCA0Ml0sIDc1OiBbMiwgNDJdLCA4MDogWzIsIDQyXSwgODE6IFsyLCA0Ml0sIDgyOiBbMiwgNDJdLCA4MzogWzIsIDQyXSwgODQ6IFsyLCA0Ml0sIDg1OiBbMiwgNDJdLCA4NzogWzEsIDUxXSB9LCB7IDIwOiA3NSwgNTM6IDgxLCA1NDogWzIsIDg0XSwgNjM6IDgyLCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogODMsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDI2OiA4NCwgNDc6IFsxLCA2N10gfSwgeyA0NzogWzIsIDU1XSB9LCB7IDQ6IDg1LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDM5OiBbMiwgNDZdLCA0NDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgNDc6IFsyLCAyMF0gfSwgeyAyMDogODYsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNDogODcsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgMjY6IDg4LCA0NzogWzEsIDY3XSB9LCB7IDQ3OiBbMiwgNTddIH0sIHsgNTogWzIsIDExXSwgMTQ6IFsyLCAxMV0sIDE1OiBbMiwgMTFdLCAxOTogWzIsIDExXSwgMjk6IFsyLCAxMV0sIDM0OiBbMiwgMTFdLCAzOTogWzIsIDExXSwgNDQ6IFsyLCAxMV0sIDQ3OiBbMiwgMTFdLCA0ODogWzIsIDExXSwgNTE6IFsyLCAxMV0sIDU1OiBbMiwgMTFdLCA2MDogWzIsIDExXSB9LCB7IDE1OiBbMiwgNDldLCAxODogWzIsIDQ5XSB9LCB7IDIwOiA3NSwgMzM6IFsyLCA4OF0sIDU4OiA4OSwgNjM6IDkwLCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogOTEsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDY1OiBbMiwgOTRdLCA2NjogOTIsIDY4OiBbMiwgOTRdLCA3MjogWzIsIDk0XSwgODA6IFsyLCA5NF0sIDgxOiBbMiwgOTRdLCA4MjogWzIsIDk0XSwgODM6IFsyLCA5NF0sIDg0OiBbMiwgOTRdLCA4NTogWzIsIDk0XSB9LCB7IDU6IFsyLCAyNV0sIDE0OiBbMiwgMjVdLCAxNTogWzIsIDI1XSwgMTk6IFsyLCAyNV0sIDI5OiBbMiwgMjVdLCAzNDogWzIsIDI1XSwgMzk6IFsyLCAyNV0sIDQ0OiBbMiwgMjVdLCA0NzogWzIsIDI1XSwgNDg6IFsyLCAyNV0sIDUxOiBbMiwgMjVdLCA1NTogWzIsIDI1XSwgNjA6IFsyLCAyNV0gfSwgeyAyMDogOTMsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDc1LCAzMTogOTQsIDMzOiBbMiwgNjBdLCA2MzogOTUsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY5OiA5NiwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3NTogWzIsIDYwXSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA3NSwgMzM6IFsyLCA2Nl0sIDM2OiA5NywgNjM6IDk4LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogOTksIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzU6IFsyLCA2Nl0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNzUsIDIyOiAxMDAsIDIzOiBbMiwgNTJdLCA2MzogMTAxLCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogMTAyLCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNzUsIDMzOiBbMiwgOTJdLCA2MjogMTAzLCA2MzogMTA0LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogMTA1LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAzMzogWzEsIDEwNl0gfSwgeyAzMzogWzIsIDc5XSwgNjU6IFsyLCA3OV0sIDcyOiBbMiwgNzldLCA4MDogWzIsIDc5XSwgODE6IFsyLCA3OV0sIDgyOiBbMiwgNzldLCA4MzogWzIsIDc5XSwgODQ6IFsyLCA3OV0sIDg1OiBbMiwgNzldIH0sIHsgMzM6IFsyLCA4MV0gfSwgeyAyMzogWzIsIDI3XSwgMzM6IFsyLCAyN10sIDU0OiBbMiwgMjddLCA2NTogWzIsIDI3XSwgNjg6IFsyLCAyN10sIDcyOiBbMiwgMjddLCA3NTogWzIsIDI3XSwgODA6IFsyLCAyN10sIDgxOiBbMiwgMjddLCA4MjogWzIsIDI3XSwgODM6IFsyLCAyN10sIDg0OiBbMiwgMjddLCA4NTogWzIsIDI3XSB9LCB7IDIzOiBbMiwgMjhdLCAzMzogWzIsIDI4XSwgNTQ6IFsyLCAyOF0sIDY1OiBbMiwgMjhdLCA2ODogWzIsIDI4XSwgNzI6IFsyLCAyOF0sIDc1OiBbMiwgMjhdLCA4MDogWzIsIDI4XSwgODE6IFsyLCAyOF0sIDgyOiBbMiwgMjhdLCA4MzogWzIsIDI4XSwgODQ6IFsyLCAyOF0sIDg1OiBbMiwgMjhdIH0sIHsgMjM6IFsyLCAzMF0sIDMzOiBbMiwgMzBdLCA1NDogWzIsIDMwXSwgNjg6IFsyLCAzMF0sIDcxOiAxMDcsIDcyOiBbMSwgMTA4XSwgNzU6IFsyLCAzMF0gfSwgeyAyMzogWzIsIDk4XSwgMzM6IFsyLCA5OF0sIDU0OiBbMiwgOThdLCA2ODogWzIsIDk4XSwgNzI6IFsyLCA5OF0sIDc1OiBbMiwgOThdIH0sIHsgMjM6IFsyLCA0NV0sIDMzOiBbMiwgNDVdLCA1NDogWzIsIDQ1XSwgNjU6IFsyLCA0NV0sIDY4OiBbMiwgNDVdLCA3MjogWzIsIDQ1XSwgNzM6IFsxLCAxMDldLCA3NTogWzIsIDQ1XSwgODA6IFsyLCA0NV0sIDgxOiBbMiwgNDVdLCA4MjogWzIsIDQ1XSwgODM6IFsyLCA0NV0sIDg0OiBbMiwgNDVdLCA4NTogWzIsIDQ1XSwgODc6IFsyLCA0NV0gfSwgeyAyMzogWzIsIDQ0XSwgMzM6IFsyLCA0NF0sIDU0OiBbMiwgNDRdLCA2NTogWzIsIDQ0XSwgNjg6IFsyLCA0NF0sIDcyOiBbMiwgNDRdLCA3NTogWzIsIDQ0XSwgODA6IFsyLCA0NF0sIDgxOiBbMiwgNDRdLCA4MjogWzIsIDQ0XSwgODM6IFsyLCA0NF0sIDg0OiBbMiwgNDRdLCA4NTogWzIsIDQ0XSwgODc6IFsyLCA0NF0gfSwgeyA1NDogWzEsIDExMF0gfSwgeyA1NDogWzIsIDgzXSwgNjU6IFsyLCA4M10sIDcyOiBbMiwgODNdLCA4MDogWzIsIDgzXSwgODE6IFsyLCA4M10sIDgyOiBbMiwgODNdLCA4MzogWzIsIDgzXSwgODQ6IFsyLCA4M10sIDg1OiBbMiwgODNdIH0sIHsgNTQ6IFsyLCA4NV0gfSwgeyA1OiBbMiwgMTNdLCAxNDogWzIsIDEzXSwgMTU6IFsyLCAxM10sIDE5OiBbMiwgMTNdLCAyOTogWzIsIDEzXSwgMzQ6IFsyLCAxM10sIDM5OiBbMiwgMTNdLCA0NDogWzIsIDEzXSwgNDc6IFsyLCAxM10sIDQ4OiBbMiwgMTNdLCA1MTogWzIsIDEzXSwgNTU6IFsyLCAxM10sIDYwOiBbMiwgMTNdIH0sIHsgMzg6IDU2LCAzOTogWzEsIDU4XSwgNDM6IDU3LCA0NDogWzEsIDU5XSwgNDU6IDExMiwgNDY6IDExMSwgNDc6IFsyLCA3Nl0gfSwgeyAzMzogWzIsIDcwXSwgNDA6IDExMywgNjU6IFsyLCA3MF0sIDcyOiBbMiwgNzBdLCA3NTogWzIsIDcwXSwgODA6IFsyLCA3MF0sIDgxOiBbMiwgNzBdLCA4MjogWzIsIDcwXSwgODM6IFsyLCA3MF0sIDg0OiBbMiwgNzBdLCA4NTogWzIsIDcwXSB9LCB7IDQ3OiBbMiwgMThdIH0sIHsgNTogWzIsIDE0XSwgMTQ6IFsyLCAxNF0sIDE1OiBbMiwgMTRdLCAxOTogWzIsIDE0XSwgMjk6IFsyLCAxNF0sIDM0OiBbMiwgMTRdLCAzOTogWzIsIDE0XSwgNDQ6IFsyLCAxNF0sIDQ3OiBbMiwgMTRdLCA0ODogWzIsIDE0XSwgNTE6IFsyLCAxNF0sIDU1OiBbMiwgMTRdLCA2MDogWzIsIDE0XSB9LCB7IDMzOiBbMSwgMTE0XSB9LCB7IDMzOiBbMiwgODddLCA2NTogWzIsIDg3XSwgNzI6IFsyLCA4N10sIDgwOiBbMiwgODddLCA4MTogWzIsIDg3XSwgODI6IFsyLCA4N10sIDgzOiBbMiwgODddLCA4NDogWzIsIDg3XSwgODU6IFsyLCA4N10gfSwgeyAzMzogWzIsIDg5XSB9LCB7IDIwOiA3NSwgNjM6IDExNiwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjc6IDExNSwgNjg6IFsyLCA5Nl0sIDY5OiAxMTcsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDMzOiBbMSwgMTE4XSB9LCB7IDMyOiAxMTksIDMzOiBbMiwgNjJdLCA3NDogMTIwLCA3NTogWzEsIDEyMV0gfSwgeyAzMzogWzIsIDU5XSwgNjU6IFsyLCA1OV0sIDcyOiBbMiwgNTldLCA3NTogWzIsIDU5XSwgODA6IFsyLCA1OV0sIDgxOiBbMiwgNTldLCA4MjogWzIsIDU5XSwgODM6IFsyLCA1OV0sIDg0OiBbMiwgNTldLCA4NTogWzIsIDU5XSB9LCB7IDMzOiBbMiwgNjFdLCA3NTogWzIsIDYxXSB9LCB7IDMzOiBbMiwgNjhdLCAzNzogMTIyLCA3NDogMTIzLCA3NTogWzEsIDEyMV0gfSwgeyAzMzogWzIsIDY1XSwgNjU6IFsyLCA2NV0sIDcyOiBbMiwgNjVdLCA3NTogWzIsIDY1XSwgODA6IFsyLCA2NV0sIDgxOiBbMiwgNjVdLCA4MjogWzIsIDY1XSwgODM6IFsyLCA2NV0sIDg0OiBbMiwgNjVdLCA4NTogWzIsIDY1XSB9LCB7IDMzOiBbMiwgNjddLCA3NTogWzIsIDY3XSB9LCB7IDIzOiBbMSwgMTI0XSB9LCB7IDIzOiBbMiwgNTFdLCA2NTogWzIsIDUxXSwgNzI6IFsyLCA1MV0sIDgwOiBbMiwgNTFdLCA4MTogWzIsIDUxXSwgODI6IFsyLCA1MV0sIDgzOiBbMiwgNTFdLCA4NDogWzIsIDUxXSwgODU6IFsyLCA1MV0gfSwgeyAyMzogWzIsIDUzXSB9LCB7IDMzOiBbMSwgMTI1XSB9LCB7IDMzOiBbMiwgOTFdLCA2NTogWzIsIDkxXSwgNzI6IFsyLCA5MV0sIDgwOiBbMiwgOTFdLCA4MTogWzIsIDkxXSwgODI6IFsyLCA5MV0sIDgzOiBbMiwgOTFdLCA4NDogWzIsIDkxXSwgODU6IFsyLCA5MV0gfSwgeyAzMzogWzIsIDkzXSB9LCB7IDU6IFsyLCAyMl0sIDE0OiBbMiwgMjJdLCAxNTogWzIsIDIyXSwgMTk6IFsyLCAyMl0sIDI5OiBbMiwgMjJdLCAzNDogWzIsIDIyXSwgMzk6IFsyLCAyMl0sIDQ0OiBbMiwgMjJdLCA0NzogWzIsIDIyXSwgNDg6IFsyLCAyMl0sIDUxOiBbMiwgMjJdLCA1NTogWzIsIDIyXSwgNjA6IFsyLCAyMl0gfSwgeyAyMzogWzIsIDk5XSwgMzM6IFsyLCA5OV0sIDU0OiBbMiwgOTldLCA2ODogWzIsIDk5XSwgNzI6IFsyLCA5OV0sIDc1OiBbMiwgOTldIH0sIHsgNzM6IFsxLCAxMDldIH0sIHsgMjA6IDc1LCA2MzogMTI2LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDU6IFsyLCAyM10sIDE0OiBbMiwgMjNdLCAxNTogWzIsIDIzXSwgMTk6IFsyLCAyM10sIDI5OiBbMiwgMjNdLCAzNDogWzIsIDIzXSwgMzk6IFsyLCAyM10sIDQ0OiBbMiwgMjNdLCA0NzogWzIsIDIzXSwgNDg6IFsyLCAyM10sIDUxOiBbMiwgMjNdLCA1NTogWzIsIDIzXSwgNjA6IFsyLCAyM10gfSwgeyA0NzogWzIsIDE5XSB9LCB7IDQ3OiBbMiwgNzddIH0sIHsgMjA6IDc1LCAzMzogWzIsIDcyXSwgNDE6IDEyNywgNjM6IDEyOCwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDEyOSwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3NTogWzIsIDcyXSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDU6IFsyLCAyNF0sIDE0OiBbMiwgMjRdLCAxNTogWzIsIDI0XSwgMTk6IFsyLCAyNF0sIDI5OiBbMiwgMjRdLCAzNDogWzIsIDI0XSwgMzk6IFsyLCAyNF0sIDQ0OiBbMiwgMjRdLCA0NzogWzIsIDI0XSwgNDg6IFsyLCAyNF0sIDUxOiBbMiwgMjRdLCA1NTogWzIsIDI0XSwgNjA6IFsyLCAyNF0gfSwgeyA2ODogWzEsIDEzMF0gfSwgeyA2NTogWzIsIDk1XSwgNjg6IFsyLCA5NV0sIDcyOiBbMiwgOTVdLCA4MDogWzIsIDk1XSwgODE6IFsyLCA5NV0sIDgyOiBbMiwgOTVdLCA4MzogWzIsIDk1XSwgODQ6IFsyLCA5NV0sIDg1OiBbMiwgOTVdIH0sIHsgNjg6IFsyLCA5N10gfSwgeyA1OiBbMiwgMjFdLCAxNDogWzIsIDIxXSwgMTU6IFsyLCAyMV0sIDE5OiBbMiwgMjFdLCAyOTogWzIsIDIxXSwgMzQ6IFsyLCAyMV0sIDM5OiBbMiwgMjFdLCA0NDogWzIsIDIxXSwgNDc6IFsyLCAyMV0sIDQ4OiBbMiwgMjFdLCA1MTogWzIsIDIxXSwgNTU6IFsyLCAyMV0sIDYwOiBbMiwgMjFdIH0sIHsgMzM6IFsxLCAxMzFdIH0sIHsgMzM6IFsyLCA2M10gfSwgeyA3MjogWzEsIDEzM10sIDc2OiAxMzIgfSwgeyAzMzogWzEsIDEzNF0gfSwgeyAzMzogWzIsIDY5XSB9LCB7IDE1OiBbMiwgMTJdIH0sIHsgMTQ6IFsyLCAyNl0sIDE1OiBbMiwgMjZdLCAxOTogWzIsIDI2XSwgMjk6IFsyLCAyNl0sIDM0OiBbMiwgMjZdLCA0NzogWzIsIDI2XSwgNDg6IFsyLCAyNl0sIDUxOiBbMiwgMjZdLCA1NTogWzIsIDI2XSwgNjA6IFsyLCAyNl0gfSwgeyAyMzogWzIsIDMxXSwgMzM6IFsyLCAzMV0sIDU0OiBbMiwgMzFdLCA2ODogWzIsIDMxXSwgNzI6IFsyLCAzMV0sIDc1OiBbMiwgMzFdIH0sIHsgMzM6IFsyLCA3NF0sIDQyOiAxMzUsIDc0OiAxMzYsIDc1OiBbMSwgMTIxXSB9LCB7IDMzOiBbMiwgNzFdLCA2NTogWzIsIDcxXSwgNzI6IFsyLCA3MV0sIDc1OiBbMiwgNzFdLCA4MDogWzIsIDcxXSwgODE6IFsyLCA3MV0sIDgyOiBbMiwgNzFdLCA4MzogWzIsIDcxXSwgODQ6IFsyLCA3MV0sIDg1OiBbMiwgNzFdIH0sIHsgMzM6IFsyLCA3M10sIDc1OiBbMiwgNzNdIH0sIHsgMjM6IFsyLCAyOV0sIDMzOiBbMiwgMjldLCA1NDogWzIsIDI5XSwgNjU6IFsyLCAyOV0sIDY4OiBbMiwgMjldLCA3MjogWzIsIDI5XSwgNzU6IFsyLCAyOV0sIDgwOiBbMiwgMjldLCA4MTogWzIsIDI5XSwgODI6IFsyLCAyOV0sIDgzOiBbMiwgMjldLCA4NDogWzIsIDI5XSwgODU6IFsyLCAyOV0gfSwgeyAxNDogWzIsIDE1XSwgMTU6IFsyLCAxNV0sIDE5OiBbMiwgMTVdLCAyOTogWzIsIDE1XSwgMzQ6IFsyLCAxNV0sIDM5OiBbMiwgMTVdLCA0NDogWzIsIDE1XSwgNDc6IFsyLCAxNV0sIDQ4OiBbMiwgMTVdLCA1MTogWzIsIDE1XSwgNTU6IFsyLCAxNV0sIDYwOiBbMiwgMTVdIH0sIHsgNzI6IFsxLCAxMzhdLCA3NzogWzEsIDEzN10gfSwgeyA3MjogWzIsIDEwMF0sIDc3OiBbMiwgMTAwXSB9LCB7IDE0OiBbMiwgMTZdLCAxNTogWzIsIDE2XSwgMTk6IFsyLCAxNl0sIDI5OiBbMiwgMTZdLCAzNDogWzIsIDE2XSwgNDQ6IFsyLCAxNl0sIDQ3OiBbMiwgMTZdLCA0ODogWzIsIDE2XSwgNTE6IFsyLCAxNl0sIDU1OiBbMiwgMTZdLCA2MDogWzIsIDE2XSB9LCB7IDMzOiBbMSwgMTM5XSB9LCB7IDMzOiBbMiwgNzVdIH0sIHsgMzM6IFsyLCAzMl0gfSwgeyA3MjogWzIsIDEwMV0sIDc3OiBbMiwgMTAxXSB9LCB7IDE0OiBbMiwgMTddLCAxNTogWzIsIDE3XSwgMTk6IFsyLCAxN10sIDI5OiBbMiwgMTddLCAzNDogWzIsIDE3XSwgMzk6IFsyLCAxN10sIDQ0OiBbMiwgMTddLCA0NzogWzIsIDE3XSwgNDg6IFsyLCAxN10sIDUxOiBbMiwgMTddLCA1NTogWzIsIDE3XSwgNjA6IFsyLCAxN10gfV0sXG5cdCAgICAgICAgZGVmYXVsdEFjdGlvbnM6IHsgNDogWzIsIDFdLCA1NTogWzIsIDU1XSwgNTc6IFsyLCAyMF0sIDYxOiBbMiwgNTddLCA3NDogWzIsIDgxXSwgODM6IFsyLCA4NV0sIDg3OiBbMiwgMThdLCA5MTogWzIsIDg5XSwgMTAyOiBbMiwgNTNdLCAxMDU6IFsyLCA5M10sIDExMTogWzIsIDE5XSwgMTEyOiBbMiwgNzddLCAxMTc6IFsyLCA5N10sIDEyMDogWzIsIDYzXSwgMTIzOiBbMiwgNjldLCAxMjQ6IFsyLCAxMl0sIDEzNjogWzIsIDc1XSwgMTM3OiBbMiwgMzJdIH0sXG5cdCAgICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cik7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcblx0ICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuXHQgICAgICAgICAgICAgICAgc3RhY2sgPSBbMF0sXG5cdCAgICAgICAgICAgICAgICB2c3RhY2sgPSBbbnVsbF0sXG5cdCAgICAgICAgICAgICAgICBsc3RhY2sgPSBbXSxcblx0ICAgICAgICAgICAgICAgIHRhYmxlID0gdGhpcy50YWJsZSxcblx0ICAgICAgICAgICAgICAgIHl5dGV4dCA9IFwiXCIsXG5cdCAgICAgICAgICAgICAgICB5eWxpbmVubyA9IDAsXG5cdCAgICAgICAgICAgICAgICB5eWxlbmcgPSAwLFxuXHQgICAgICAgICAgICAgICAgcmVjb3ZlcmluZyA9IDAsXG5cdCAgICAgICAgICAgICAgICBURVJST1IgPSAyLFxuXHQgICAgICAgICAgICAgICAgRU9GID0gMTtcblx0ICAgICAgICAgICAgdGhpcy5sZXhlci5zZXRJbnB1dChpbnB1dCk7XG5cdCAgICAgICAgICAgIHRoaXMubGV4ZXIueXkgPSB0aGlzLnl5O1xuXHQgICAgICAgICAgICB0aGlzLnl5LmxleGVyID0gdGhpcy5sZXhlcjtcblx0ICAgICAgICAgICAgdGhpcy55eS5wYXJzZXIgPSB0aGlzO1xuXHQgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMubGV4ZXIueXlsbG9jID09IFwidW5kZWZpbmVkXCIpIHRoaXMubGV4ZXIueXlsbG9jID0ge307XG5cdCAgICAgICAgICAgIHZhciB5eWxvYyA9IHRoaXMubGV4ZXIueXlsbG9jO1xuXHQgICAgICAgICAgICBsc3RhY2sucHVzaCh5eWxvYyk7XG5cdCAgICAgICAgICAgIHZhciByYW5nZXMgPSB0aGlzLmxleGVyLm9wdGlvbnMgJiYgdGhpcy5sZXhlci5vcHRpb25zLnJhbmdlcztcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnl5LnBhcnNlRXJyb3IgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5wYXJzZUVycm9yID0gdGhpcy55eS5wYXJzZUVycm9yO1xuXHQgICAgICAgICAgICBmdW5jdGlvbiBwb3BTdGFjayhuKSB7XG5cdCAgICAgICAgICAgICAgICBzdGFjay5sZW5ndGggPSBzdGFjay5sZW5ndGggLSAyICogbjtcblx0ICAgICAgICAgICAgICAgIHZzdGFjay5sZW5ndGggPSB2c3RhY2subGVuZ3RoIC0gbjtcblx0ICAgICAgICAgICAgICAgIGxzdGFjay5sZW5ndGggPSBsc3RhY2subGVuZ3RoIC0gbjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBmdW5jdGlvbiBsZXgoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgdG9rZW47XG5cdCAgICAgICAgICAgICAgICB0b2tlbiA9IHNlbGYubGV4ZXIubGV4KCkgfHwgMTtcblx0ICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gIT09IFwibnVtYmVyXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHNlbGYuc3ltYm9sc19bdG9rZW5dIHx8IHRva2VuO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHZhciBzeW1ib2wsXG5cdCAgICAgICAgICAgICAgICBwcmVFcnJvclN5bWJvbCxcblx0ICAgICAgICAgICAgICAgIHN0YXRlLFxuXHQgICAgICAgICAgICAgICAgYWN0aW9uLFxuXHQgICAgICAgICAgICAgICAgYSxcblx0ICAgICAgICAgICAgICAgIHIsXG5cdCAgICAgICAgICAgICAgICB5eXZhbCA9IHt9LFxuXHQgICAgICAgICAgICAgICAgcCxcblx0ICAgICAgICAgICAgICAgIGxlbixcblx0ICAgICAgICAgICAgICAgIG5ld1N0YXRlLFxuXHQgICAgICAgICAgICAgICAgZXhwZWN0ZWQ7XG5cdCAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICBzdGF0ZSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gdGhpcy5kZWZhdWx0QWN0aW9uc1tzdGF0ZV07XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wgPT09IG51bGwgfHwgdHlwZW9mIHN5bWJvbCA9PSBcInVuZGVmaW5lZFwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCA9IGxleCgpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB0YWJsZVtzdGF0ZV0gJiYgdGFibGVbc3RhdGVdW3N5bWJvbF07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhYWN0aW9uLmxlbmd0aCB8fCAhYWN0aW9uWzBdKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGVyclN0ciA9IFwiXCI7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWNvdmVyaW5nKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocCBpbiB0YWJsZVtzdGF0ZV0pIGlmICh0aGlzLnRlcm1pbmFsc19bcF0gJiYgcCA+IDIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkLnB1c2goXCInXCIgKyB0aGlzLnRlcm1pbmFsc19bcF0gKyBcIidcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4ZXIuc2hvd1Bvc2l0aW9uKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOlxcblwiICsgdGhpcy5sZXhlci5zaG93UG9zaXRpb24oKSArIFwiXFxuRXhwZWN0aW5nIFwiICsgZXhwZWN0ZWQuam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArIChzeW1ib2wgPT0gMSA/IFwiZW5kIG9mIGlucHV0XCIgOiBcIidcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCIpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFcnJvcihlcnJTdHIsIHsgdGV4dDogdGhpcy5sZXhlci5tYXRjaCwgdG9rZW46IHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCwgbGluZTogdGhpcy5sZXhlci55eWxpbmVubywgbG9jOiB5eWxvYywgZXhwZWN0ZWQ6IGV4cGVjdGVkIH0pO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmIChhY3Rpb25bMF0gaW5zdGFuY2VvZiBBcnJheSAmJiBhY3Rpb24ubGVuZ3RoID4gMSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArIHN0YXRlICsgXCIsIHRva2VuOiBcIiArIHN5bWJvbCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGlvblswXSkge1xuXHQgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChzeW1ib2wpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB2c3RhY2sucHVzaCh0aGlzLmxleGVyLnl5dGV4dCk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxzdGFjay5wdXNoKHRoaXMubGV4ZXIueXlsbG9jKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChhY3Rpb25bMV0pO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wgPSBudWxsO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXByZUVycm9yU3ltYm9sKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eWxlbmcgPSB0aGlzLmxleGVyLnl5bGVuZztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5dGV4dCA9IHRoaXMubGV4ZXIueXl0ZXh0O1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsaW5lbm8gPSB0aGlzLmxleGVyLnl5bGluZW5vO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsb2MgPSB0aGlzLmxleGVyLnl5bGxvYztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNvdmVyaW5nID4gMCkgcmVjb3ZlcmluZy0tO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sID0gcHJlRXJyb3JTeW1ib2w7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVFcnJvclN5bWJvbCA9IG51bGw7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsZW4gPSB0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzFdO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB5eXZhbC4kID0gdnN0YWNrW3ZzdGFjay5sZW5ndGggLSBsZW5dO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB5eXZhbC5fJCA9IHsgZmlyc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5maXJzdF9saW5lLCBsYXN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9saW5lLCBmaXJzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfY29sdW1uLCBsYXN0X2NvbHVtbjogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2NvbHVtbiB9O1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2VzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eXZhbC5fJC5yYW5nZSA9IFtsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLnJhbmdlWzBdLCBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLnJhbmdlWzFdXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICByID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwoeXl2YWwsIHl5dGV4dCwgeXlsZW5nLCB5eWxpbmVubywgdGhpcy55eSwgYWN0aW9uWzFdLCB2c3RhY2ssIGxzdGFjayk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgciAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlbikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5zbGljZSgwLCAtMSAqIGxlbiAqIDIpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnN0YWNrID0gdnN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxzdGFjayA9IGxzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCh0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzBdKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdnN0YWNrLnB1c2goeXl2YWwuJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxzdGFjay5wdXNoKHl5dmFsLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGUgPSB0YWJsZVtzdGFja1tzdGFjay5sZW5ndGggLSAyXV1bc3RhY2tbc3RhY2subGVuZ3RoIC0gMV1dO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKG5ld1N0YXRlKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgLyogSmlzb24gZ2VuZXJhdGVkIGxleGVyICovXG5cdCAgICB2YXIgbGV4ZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBsZXhlciA9IHsgRU9GOiAxLFxuXHQgICAgICAgICAgICBwYXJzZUVycm9yOiBmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMueXkucGFyc2VyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcihzdHIsIGhhc2gpO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgc2V0SW5wdXQ6IGZ1bmN0aW9uIHNldElucHV0KGlucHV0KSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fbW9yZSA9IHRoaXMuX2xlc3MgPSB0aGlzLmRvbmUgPSBmYWxzZTtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDA7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2ggPSAnJztcblx0ICAgICAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbJ0lOSVRJQUwnXTtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jID0geyBmaXJzdF9saW5lOiAxLCBmaXJzdF9jb2x1bW46IDAsIGxhc3RfbGluZTogMSwgbGFzdF9jb2x1bW46IDAgfTtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB0aGlzLnl5bGxvYy5yYW5nZSA9IFswLCAwXTtcblx0ICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gaW5wdXQoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgY2ggPSB0aGlzLl9pbnB1dFswXTtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ICs9IGNoO1xuXHQgICAgICAgICAgICAgICAgdGhpcy55eWxlbmcrKztcblx0ICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0Kys7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm1hdGNoICs9IGNoO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVkICs9IGNoO1xuXHQgICAgICAgICAgICAgICAgdmFyIGxpbmVzID0gY2gubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuXHQgICAgICAgICAgICAgICAgaWYgKGxpbmVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxpbmVubysrO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfbGluZSsrO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHRoaXMueXlsbG9jLnJhbmdlWzFdKys7XG5cblx0ICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UoMSk7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gY2g7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHVucHV0OiBmdW5jdGlvbiB1bnB1dChjaCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGxlbiA9IGNoLmxlbmd0aDtcblx0ICAgICAgICAgICAgICAgIHZhciBsaW5lcyA9IGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG5cblx0ICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gY2ggKyB0aGlzLl9pbnB1dDtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIGxlbiAtIDEpO1xuXHQgICAgICAgICAgICAgICAgLy90aGlzLnl5bGVuZyAtPSBsZW47XG5cdCAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCAtPSBsZW47XG5cdCAgICAgICAgICAgICAgICB2YXIgb2xkTGluZXMgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm1hdGNoID0gdGhpcy5tYXRjaC5zdWJzdHIoMCwgdGhpcy5tYXRjaC5sZW5ndGggLSAxKTtcblx0ICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpO1xuXG5cdCAgICAgICAgICAgICAgICBpZiAobGluZXMubGVuZ3RoIC0gMSkgdGhpcy55eWxpbmVubyAtPSBsaW5lcy5sZW5ndGggLSAxO1xuXHQgICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLnl5bGxvYy5yYW5nZTtcblxuXHQgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MgPSB7IGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG5cdCAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcblx0ICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcblx0ICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyAobGluZXMubGVuZ3RoID09PSBvbGRMaW5lcy5sZW5ndGggPyB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gOiAwKSArIG9sZExpbmVzW29sZExpbmVzLmxlbmd0aCAtIGxpbmVzLmxlbmd0aF0ubGVuZ3RoIC0gbGluZXNbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIC0gbGVuXG5cdCAgICAgICAgICAgICAgICB9O1xuXG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3JbMF0sIHJbMF0gKyB0aGlzLnl5bGVuZyAtIGxlbl07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgbW9yZTogZnVuY3Rpb24gbW9yZSgpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX21vcmUgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIGxlc3M6IGZ1bmN0aW9uIGxlc3Mobikge1xuXHQgICAgICAgICAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKG4pKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgcGFzdElucHV0OiBmdW5jdGlvbiBwYXN0SW5wdXQoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgcGFzdCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIHRoaXMubWF0Y2gubGVuZ3RoKTtcblx0ICAgICAgICAgICAgICAgIHJldHVybiAocGFzdC5sZW5ndGggPiAyMCA/ICcuLi4nIDogJycpICsgcGFzdC5zdWJzdHIoLTIwKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHVwY29taW5nSW5wdXQ6IGZ1bmN0aW9uIHVwY29taW5nSW5wdXQoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IHRoaXMubWF0Y2g7XG5cdCAgICAgICAgICAgICAgICBpZiAobmV4dC5sZW5ndGggPCAyMCkge1xuXHQgICAgICAgICAgICAgICAgICAgIG5leHQgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwIC0gbmV4dC5sZW5ndGgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIChuZXh0LnN1YnN0cigwLCAyMCkgKyAobmV4dC5sZW5ndGggPiAyMCA/ICcuLi4nIDogJycpKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHNob3dQb3NpdGlvbjogZnVuY3Rpb24gc2hvd1Bvc2l0aW9uKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIHByZSA9IHRoaXMucGFzdElucHV0KCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShwcmUubGVuZ3RoICsgMSkuam9pbihcIi1cIik7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcHJlICsgdGhpcy51cGNvbWluZ0lucHV0KCkgKyBcIlxcblwiICsgYyArIFwiXlwiO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmICghdGhpcy5faW5wdXQpIHRoaXMuZG9uZSA9IHRydWU7XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0b2tlbiwgbWF0Y2gsIHRlbXBNYXRjaCwgaW5kZXgsIGNvbCwgbGluZXM7XG5cdCAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX21vcmUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCA9ICcnO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2ggPSAnJztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHZhciBydWxlcyA9IHRoaXMuX2N1cnJlbnRSdWxlcygpO1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHRlbXBNYXRjaCA9IHRoaXMuX2lucHV0Lm1hdGNoKHRoaXMucnVsZXNbcnVsZXNbaV1dKTtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAodGVtcE1hdGNoICYmICghbWF0Y2ggfHwgdGVtcE1hdGNoWzBdLmxlbmd0aCA+IG1hdGNoWzBdLmxlbmd0aCkpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0ZW1wTWF0Y2g7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbGluZXMgPSBtYXRjaFswXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmVzKSB0aGlzLnl5bGluZW5vICs9IGxpbmVzLmxlbmd0aDtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYyA9IHsgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5sZW5ndGggLSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG1hdGNoWzBdLmxlbmd0aCB9O1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ICs9IG1hdGNoWzBdO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2ggKz0gbWF0Y2hbMF07XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVzID0gbWF0Y2g7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGg7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbdGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICs9IHRoaXMueXlsZW5nXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9yZSA9IGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UobWF0Y2hbMF0ubGVuZ3RoKTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZWQgKz0gbWF0Y2hbMF07XG5cdCAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBydWxlc1tpbmRleF0sIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSAmJiB0aGlzLl9pbnB1dCkgdGhpcy5kb25lID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuKSByZXR1cm4gdG9rZW47ZWxzZSByZXR1cm47XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5faW5wdXQgPT09IFwiXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoJ0xleGljYWwgZXJyb3Igb24gbGluZSAnICsgKHRoaXMueXlsaW5lbm8gKyAxKSArICcuIFVucmVjb2duaXplZCB0ZXh0LlxcbicgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7IHRleHQ6IFwiXCIsIHRva2VuOiBudWxsLCBsaW5lOiB0aGlzLnl5bGluZW5vIH0pO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBsZXg6IGZ1bmN0aW9uIGxleCgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5uZXh0KCk7XG5cdCAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxleCgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBiZWdpbjogZnVuY3Rpb24gYmVnaW4oY29uZGl0aW9uKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goY29uZGl0aW9uKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uIHBvcFN0YXRlKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCk7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIF9jdXJyZW50UnVsZXM6IGZ1bmN0aW9uIF9jdXJyZW50UnVsZXMoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW3RoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXV0ucnVsZXM7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHRvcFN0YXRlOiBmdW5jdGlvbiB0b3BTdGF0ZSgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMl07XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24gYmVnaW4oY29uZGl0aW9uKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKGNvbmRpdGlvbik7XG5cdCAgICAgICAgICAgIH0gfTtcblx0ICAgICAgICBsZXhlci5vcHRpb25zID0ge307XG5cdCAgICAgICAgbGV4ZXIucGVyZm9ybUFjdGlvbiA9IGZ1bmN0aW9uIGFub255bW91cyh5eSwgeXlfLCAkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zLCBZWV9TVEFSVFxuXHQgICAgICAgIC8qKi8pIHtcblxuXHQgICAgICAgICAgICBmdW5jdGlvbiBzdHJpcChzdGFydCwgZW5kKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4geXlfLnl5dGV4dCA9IHl5Xy55eXRleHQuc3Vic3RyKHN0YXJ0LCB5eV8ueXlsZW5nIC0gZW5kKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHZhciBZWVNUQVRFID0gWVlfU1RBUlQ7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucykge1xuXHQgICAgICAgICAgICAgICAgY2FzZSAwOlxuXHQgICAgICAgICAgICAgICAgICAgIGlmICh5eV8ueXl0ZXh0LnNsaWNlKC0yKSA9PT0gXCJcXFxcXFxcXFwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwKDAsIDEpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKFwibXVcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5eV8ueXl0ZXh0LnNsaWNlKC0xKSA9PT0gXCJcXFxcXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXAoMCwgMSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJlbXVcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbihcIm11XCIpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICBpZiAoeXlfLnl5dGV4dCkgcmV0dXJuIDE1O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTU7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKCdyYXcnKTtyZXR1cm4gMTU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSB1c2luZyBgdGhpcy50b3BTdGF0ZSgpYCBiZWxvdywgYnV0IGl0IGN1cnJlbnRseVxuXHQgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybnMgdGhlIHNlY29uZCB0b3AgaW5zdGVhZCBvZiB0aGUgZmlyc3QgdG9wLiBPcGVuZWQgYW5cblx0ICAgICAgICAgICAgICAgICAgICAvLyBpc3N1ZSBhYm91dCBpdCBhdCBodHRwczovL2dpdGh1Yi5jb20vemFhY2gvamlzb24vaXNzdWVzLzI5MVxuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0gPT09ICdyYXcnKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNTtcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5zdWJzdHIoNSwgeXlfLnl5bGVuZyAtIDkpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0VORF9SQVdfQkxPQ0snO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE0O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDc6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDY1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA2ODtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKCdyYXcnKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjM7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTE6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDU1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNjA7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEzOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAyOTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDQ3O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDQ0O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDQ0O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMzQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE4OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAzOTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTk6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDUxO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNDg7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMudW5wdXQoeXlfLnl5dGV4dCk7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oJ2NvbScpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTQ7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDQ4O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzM7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI1OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjY6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDcyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODc7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI4OlxuXHQgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSB3aGl0ZXNwYWNlXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI5OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtyZXR1cm4gNTQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtyZXR1cm4gMzM7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMxOlxuXHQgICAgICAgICAgICAgICAgICAgIHl5Xy55eXRleHQgPSBzdHJpcCgxLCAyKS5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJyk7cmV0dXJuIDgwO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMjpcblx0ICAgICAgICAgICAgICAgICAgICB5eV8ueXl0ZXh0ID0gc3RyaXAoMSwgMikucmVwbGFjZSgvXFxcXCcvZywgXCInXCIpO3JldHVybiA4MDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDg1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODI7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM1OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzY6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDgzO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM4OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4MTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzk6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDc1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0MDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzc7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQxOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDI6XG5cdCAgICAgICAgICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQucmVwbGFjZSgvXFxcXChbXFxcXFxcXV0pL2csICckMScpO3JldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdJTlZBTElEJztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIGxleGVyLnJ1bGVzID0gWy9eKD86W15cXHgwMF0qPyg/PShcXHtcXHspKSkvLCAvXig/OlteXFx4MDBdKykvLCAvXig/OlteXFx4MDBdezIsfT8oPz0oXFx7XFx7fFxcXFxcXHtcXHt8XFxcXFxcXFxcXHtcXHt8JCkpKS8sIC9eKD86XFx7XFx7XFx7XFx7KD89W15cXC9dKSkvLCAvXig/Olxce1xce1xce1xce1xcL1teXFxzIVwiIyUtLFxcLlxcLzstPkBcXFstXFxeYFxcey1+XSsoPz1bPX1cXHNcXC8uXSlcXH1cXH1cXH1cXH0pLywgL14oPzpbXlxceDAwXSo/KD89KFxce1xce1xce1xceykpKS8sIC9eKD86W1xcc1xcU10qPy0tKH4pP1xcfVxcfSkvLCAvXig/OlxcKCkvLCAvXig/OlxcKSkvLCAvXig/Olxce1xce1xce1xceykvLCAvXig/OlxcfVxcfVxcfVxcfSkvLCAvXig/Olxce1xceyh+KT8+KS8sIC9eKD86XFx7XFx7KH4pPyM+KS8sIC9eKD86XFx7XFx7KH4pPyNcXCo/KS8sIC9eKD86XFx7XFx7KH4pP1xcLykvLCAvXig/Olxce1xceyh+KT9cXF5cXHMqKH4pP1xcfVxcfSkvLCAvXig/Olxce1xceyh+KT9cXHMqZWxzZVxccyoofik/XFx9XFx9KS8sIC9eKD86XFx7XFx7KH4pP1xcXikvLCAvXig/Olxce1xceyh+KT9cXHMqZWxzZVxcYikvLCAvXig/Olxce1xceyh+KT9cXHspLywgL14oPzpcXHtcXHsofik/JikvLCAvXig/Olxce1xceyh+KT8hLS0pLywgL14oPzpcXHtcXHsofik/IVtcXHNcXFNdKj9cXH1cXH0pLywgL14oPzpcXHtcXHsofik/XFwqPykvLCAvXig/Oj0pLywgL14oPzpcXC5cXC4pLywgL14oPzpcXC4oPz0oWz1+fVxcc1xcLy4pfF0pKSkvLCAvXig/OltcXC8uXSkvLCAvXig/OlxccyspLywgL14oPzpcXH0ofik/XFx9XFx9KS8sIC9eKD86KH4pP1xcfVxcfSkvLCAvXig/OlwiKFxcXFxbXCJdfFteXCJdKSpcIikvLCAvXig/OicoXFxcXFsnXXxbXiddKSonKS8sIC9eKD86QCkvLCAvXig/OnRydWUoPz0oW359XFxzKV0pKSkvLCAvXig/OmZhbHNlKD89KFt+fVxccyldKSkpLywgL14oPzp1bmRlZmluZWQoPz0oW359XFxzKV0pKSkvLCAvXig/Om51bGwoPz0oW359XFxzKV0pKSkvLCAvXig/Oi0/WzAtOV0rKD86XFwuWzAtOV0rKT8oPz0oW359XFxzKV0pKSkvLCAvXig/OmFzXFxzK1xcfCkvLCAvXig/OlxcfCkvLCAvXig/OihbXlxccyFcIiMlLSxcXC5cXC87LT5AXFxbLVxcXmBcXHstfl0rKD89KFs9fn1cXHNcXC8uKXxdKSkpKS8sIC9eKD86XFxbKFxcXFxcXF18W15cXF1dKSpcXF0pLywgL14oPzouKS8sIC9eKD86JCkvXTtcblx0ICAgICAgICBsZXhlci5jb25kaXRpb25zID0geyBcIm11XCI6IHsgXCJydWxlc1wiOiBbNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDMsIDQ0XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJlbXVcIjogeyBcInJ1bGVzXCI6IFsyXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJjb21cIjogeyBcInJ1bGVzXCI6IFs2XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJyYXdcIjogeyBcInJ1bGVzXCI6IFszLCA0LCA1XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJJTklUSUFMXCI6IHsgXCJydWxlc1wiOiBbMCwgMSwgNDRdLCBcImluY2x1c2l2ZVwiOiB0cnVlIH0gfTtcblx0ICAgICAgICByZXR1cm4gbGV4ZXI7XG5cdCAgICB9KSgpO1xuXHQgICAgcGFyc2VyLmxleGVyID0gbGV4ZXI7XG5cdCAgICBmdW5jdGlvbiBQYXJzZXIoKSB7XG5cdCAgICAgICAgdGhpcy55eSA9IHt9O1xuXHQgICAgfVBhcnNlci5wcm90b3R5cGUgPSBwYXJzZXI7cGFyc2VyLlBhcnNlciA9IFBhcnNlcjtcblx0ICAgIHJldHVybiBuZXcgUGFyc2VyKCk7XG5cdH0pKCk7ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBoYW5kbGViYXJzO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG4vKioqLyB9KSxcbi8qIDM4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF92aXNpdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG5cblx0dmFyIF92aXNpdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Zpc2l0b3IpO1xuXG5cdGZ1bmN0aW9uIFdoaXRlc3BhY2VDb250cm9sKCkge1xuXHQgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cblx0ICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHR9XG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZSA9IG5ldyBfdmlzaXRvcjJbJ2RlZmF1bHQnXSgpO1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5Qcm9ncmFtID0gZnVuY3Rpb24gKHByb2dyYW0pIHtcblx0ICB2YXIgZG9TdGFuZGFsb25lID0gIXRoaXMub3B0aW9ucy5pZ25vcmVTdGFuZGFsb25lO1xuXG5cdCAgdmFyIGlzUm9vdCA9ICF0aGlzLmlzUm9vdFNlZW47XG5cdCAgdGhpcy5pc1Jvb3RTZWVuID0gdHJ1ZTtcblxuXHQgIHZhciBib2R5ID0gcHJvZ3JhbS5ib2R5O1xuXHQgIGZvciAodmFyIGkgPSAwLCBsID0gYm9keS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgIHZhciBjdXJyZW50ID0gYm9keVtpXSxcblx0ICAgICAgICBzdHJpcCA9IHRoaXMuYWNjZXB0KGN1cnJlbnQpO1xuXG5cdCAgICBpZiAoIXN0cmlwKSB7XG5cdCAgICAgIGNvbnRpbnVlO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgX2lzUHJldldoaXRlc3BhY2UgPSBpc1ByZXZXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCksXG5cdCAgICAgICAgX2lzTmV4dFdoaXRlc3BhY2UgPSBpc05leHRXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCksXG5cdCAgICAgICAgb3BlblN0YW5kYWxvbmUgPSBzdHJpcC5vcGVuU3RhbmRhbG9uZSAmJiBfaXNQcmV2V2hpdGVzcGFjZSxcblx0ICAgICAgICBjbG9zZVN0YW5kYWxvbmUgPSBzdHJpcC5jbG9zZVN0YW5kYWxvbmUgJiYgX2lzTmV4dFdoaXRlc3BhY2UsXG5cdCAgICAgICAgaW5saW5lU3RhbmRhbG9uZSA9IHN0cmlwLmlubGluZVN0YW5kYWxvbmUgJiYgX2lzUHJldldoaXRlc3BhY2UgJiYgX2lzTmV4dFdoaXRlc3BhY2U7XG5cblx0ICAgIGlmIChzdHJpcC5jbG9zZSkge1xuXHQgICAgICBvbWl0UmlnaHQoYm9keSwgaSwgdHJ1ZSk7XG5cdCAgICB9XG5cdCAgICBpZiAoc3RyaXAub3Blbikge1xuXHQgICAgICBvbWl0TGVmdChib2R5LCBpLCB0cnVlKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKGRvU3RhbmRhbG9uZSAmJiBpbmxpbmVTdGFuZGFsb25lKSB7XG5cdCAgICAgIG9taXRSaWdodChib2R5LCBpKTtcblxuXHQgICAgICBpZiAob21pdExlZnQoYm9keSwgaSkpIHtcblx0ICAgICAgICAvLyBJZiB3ZSBhcmUgb24gYSBzdGFuZGFsb25lIG5vZGUsIHNhdmUgdGhlIGluZGVudCBpbmZvIGZvciBwYXJ0aWFsc1xuXHQgICAgICAgIGlmIChjdXJyZW50LnR5cGUgPT09ICdQYXJ0aWFsU3RhdGVtZW50Jykge1xuXHQgICAgICAgICAgLy8gUHVsbCBvdXQgdGhlIHdoaXRlc3BhY2UgZnJvbSB0aGUgZmluYWwgbGluZVxuXHQgICAgICAgICAgY3VycmVudC5pbmRlbnQgPSAvKFsgXFx0XSskKS8uZXhlYyhib2R5W2kgLSAxXS5vcmlnaW5hbClbMV07XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICBpZiAoZG9TdGFuZGFsb25lICYmIG9wZW5TdGFuZGFsb25lKSB7XG5cdCAgICAgIG9taXRSaWdodCgoY3VycmVudC5wcm9ncmFtIHx8IGN1cnJlbnQuaW52ZXJzZSkuYm9keSk7XG5cblx0ICAgICAgLy8gU3RyaXAgb3V0IHRoZSBwcmV2aW91cyBjb250ZW50IG5vZGUgaWYgaXQncyB3aGl0ZXNwYWNlIG9ubHlcblx0ICAgICAgb21pdExlZnQoYm9keSwgaSk7XG5cdCAgICB9XG5cdCAgICBpZiAoZG9TdGFuZGFsb25lICYmIGNsb3NlU3RhbmRhbG9uZSkge1xuXHQgICAgICAvLyBBbHdheXMgc3RyaXAgdGhlIG5leHQgbm9kZVxuXHQgICAgICBvbWl0UmlnaHQoYm9keSwgaSk7XG5cblx0ICAgICAgb21pdExlZnQoKGN1cnJlbnQuaW52ZXJzZSB8fCBjdXJyZW50LnByb2dyYW0pLmJvZHkpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHJldHVybiBwcm9ncmFtO1xuXHR9O1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5CbG9ja1N0YXRlbWVudCA9IFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5EZWNvcmF0b3JCbG9jayA9IFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5QYXJ0aWFsQmxvY2tTdGF0ZW1lbnQgPSBmdW5jdGlvbiAoYmxvY2spIHtcblx0ICB0aGlzLmFjY2VwdChibG9jay5wcm9ncmFtKTtcblx0ICB0aGlzLmFjY2VwdChibG9jay5pbnZlcnNlKTtcblxuXHQgIC8vIEZpbmQgdGhlIGludmVyc2UgcHJvZ3JhbSB0aGF0IGlzIGludm9sZWQgd2l0aCB3aGl0ZXNwYWNlIHN0cmlwcGluZy5cblx0ICB2YXIgcHJvZ3JhbSA9IGJsb2NrLnByb2dyYW0gfHwgYmxvY2suaW52ZXJzZSxcblx0ICAgICAgaW52ZXJzZSA9IGJsb2NrLnByb2dyYW0gJiYgYmxvY2suaW52ZXJzZSxcblx0ICAgICAgZmlyc3RJbnZlcnNlID0gaW52ZXJzZSxcblx0ICAgICAgbGFzdEludmVyc2UgPSBpbnZlcnNlO1xuXG5cdCAgaWYgKGludmVyc2UgJiYgaW52ZXJzZS5jaGFpbmVkKSB7XG5cdCAgICBmaXJzdEludmVyc2UgPSBpbnZlcnNlLmJvZHlbMF0ucHJvZ3JhbTtcblxuXHQgICAgLy8gV2FsayB0aGUgaW52ZXJzZSBjaGFpbiB0byBmaW5kIHRoZSBsYXN0IGludmVyc2UgdGhhdCBpcyBhY3R1YWxseSBpbiB0aGUgY2hhaW4uXG5cdCAgICB3aGlsZSAobGFzdEludmVyc2UuY2hhaW5lZCkge1xuXHQgICAgICBsYXN0SW52ZXJzZSA9IGxhc3RJbnZlcnNlLmJvZHlbbGFzdEludmVyc2UuYm9keS5sZW5ndGggLSAxXS5wcm9ncmFtO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHZhciBzdHJpcCA9IHtcblx0ICAgIG9wZW46IGJsb2NrLm9wZW5TdHJpcC5vcGVuLFxuXHQgICAgY2xvc2U6IGJsb2NrLmNsb3NlU3RyaXAuY2xvc2UsXG5cblx0ICAgIC8vIERldGVybWluZSB0aGUgc3RhbmRhbG9uZSBjYW5kaWFjeS4gQmFzaWNhbGx5IGZsYWcgb3VyIGNvbnRlbnQgYXMgYmVpbmcgcG9zc2libHkgc3RhbmRhbG9uZVxuXHQgICAgLy8gc28gb3VyIHBhcmVudCBjYW4gZGV0ZXJtaW5lIGlmIHdlIGFjdHVhbGx5IGFyZSBzdGFuZGFsb25lXG5cdCAgICBvcGVuU3RhbmRhbG9uZTogaXNOZXh0V2hpdGVzcGFjZShwcm9ncmFtLmJvZHkpLFxuXHQgICAgY2xvc2VTdGFuZGFsb25lOiBpc1ByZXZXaGl0ZXNwYWNlKChmaXJzdEludmVyc2UgfHwgcHJvZ3JhbSkuYm9keSlcblx0ICB9O1xuXG5cdCAgaWYgKGJsb2NrLm9wZW5TdHJpcC5jbG9zZSkge1xuXHQgICAgb21pdFJpZ2h0KHByb2dyYW0uYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgfVxuXG5cdCAgaWYgKGludmVyc2UpIHtcblx0ICAgIHZhciBpbnZlcnNlU3RyaXAgPSBibG9jay5pbnZlcnNlU3RyaXA7XG5cblx0ICAgIGlmIChpbnZlcnNlU3RyaXAub3Blbikge1xuXHQgICAgICBvbWl0TGVmdChwcm9ncmFtLmJvZHksIG51bGwsIHRydWUpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoaW52ZXJzZVN0cmlwLmNsb3NlKSB7XG5cdCAgICAgIG9taXRSaWdodChmaXJzdEludmVyc2UuYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgICB9XG5cdCAgICBpZiAoYmxvY2suY2xvc2VTdHJpcC5vcGVuKSB7XG5cdCAgICAgIG9taXRMZWZ0KGxhc3RJbnZlcnNlLmJvZHksIG51bGwsIHRydWUpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBGaW5kIHN0YW5kYWxvbmUgZWxzZSBzdGF0bWVudHNcblx0ICAgIGlmICghdGhpcy5vcHRpb25zLmlnbm9yZVN0YW5kYWxvbmUgJiYgaXNQcmV2V2hpdGVzcGFjZShwcm9ncmFtLmJvZHkpICYmIGlzTmV4dFdoaXRlc3BhY2UoZmlyc3RJbnZlcnNlLmJvZHkpKSB7XG5cdCAgICAgIG9taXRMZWZ0KHByb2dyYW0uYm9keSk7XG5cdCAgICAgIG9taXRSaWdodChmaXJzdEludmVyc2UuYm9keSk7XG5cdCAgICB9XG5cdCAgfSBlbHNlIGlmIChibG9jay5jbG9zZVN0cmlwLm9wZW4pIHtcblx0ICAgIG9taXRMZWZ0KHByb2dyYW0uYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHN0cmlwO1xuXHR9O1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5EZWNvcmF0b3IgPSBXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuTXVzdGFjaGVTdGF0ZW1lbnQgPSBmdW5jdGlvbiAobXVzdGFjaGUpIHtcblx0ICByZXR1cm4gbXVzdGFjaGUuc3RyaXA7XG5cdH07XG5cblx0V2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLlBhcnRpYWxTdGF0ZW1lbnQgPSBXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuQ29tbWVudFN0YXRlbWVudCA9IGZ1bmN0aW9uIChub2RlKSB7XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICB2YXIgc3RyaXAgPSBub2RlLnN0cmlwIHx8IHt9O1xuXHQgIHJldHVybiB7XG5cdCAgICBpbmxpbmVTdGFuZGFsb25lOiB0cnVlLFxuXHQgICAgb3Blbjogc3RyaXAub3Blbixcblx0ICAgIGNsb3NlOiBzdHJpcC5jbG9zZVxuXHQgIH07XG5cdH07XG5cblx0ZnVuY3Rpb24gaXNQcmV2V2hpdGVzcGFjZShib2R5LCBpLCBpc1Jvb3QpIHtcblx0ICBpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICBpID0gYm9keS5sZW5ndGg7XG5cdCAgfVxuXG5cdCAgLy8gTm9kZXMgdGhhdCBlbmQgd2l0aCBuZXdsaW5lcyBhcmUgY29uc2lkZXJlZCB3aGl0ZXNwYWNlIChidXQgYXJlIHNwZWNpYWxcblx0ICAvLyBjYXNlZCBmb3Igc3RyaXAgb3BlcmF0aW9ucylcblx0ICB2YXIgcHJldiA9IGJvZHlbaSAtIDFdLFxuXHQgICAgICBzaWJsaW5nID0gYm9keVtpIC0gMl07XG5cdCAgaWYgKCFwcmV2KSB7XG5cdCAgICByZXR1cm4gaXNSb290O1xuXHQgIH1cblxuXHQgIGlmIChwcmV2LnR5cGUgPT09ICdDb250ZW50U3RhdGVtZW50Jykge1xuXHQgICAgcmV0dXJuIChzaWJsaW5nIHx8ICFpc1Jvb3QgPyAvXFxyP1xcblxccyo/JC8gOiAvKF58XFxyP1xcbilcXHMqPyQvKS50ZXN0KHByZXYub3JpZ2luYWwpO1xuXHQgIH1cblx0fVxuXHRmdW5jdGlvbiBpc05leHRXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCkge1xuXHQgIGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0ICAgIGkgPSAtMTtcblx0ICB9XG5cblx0ICB2YXIgbmV4dCA9IGJvZHlbaSArIDFdLFxuXHQgICAgICBzaWJsaW5nID0gYm9keVtpICsgMl07XG5cdCAgaWYgKCFuZXh0KSB7XG5cdCAgICByZXR1cm4gaXNSb290O1xuXHQgIH1cblxuXHQgIGlmIChuZXh0LnR5cGUgPT09ICdDb250ZW50U3RhdGVtZW50Jykge1xuXHQgICAgcmV0dXJuIChzaWJsaW5nIHx8ICFpc1Jvb3QgPyAvXlxccyo/XFxyP1xcbi8gOiAvXlxccyo/KFxccj9cXG58JCkvKS50ZXN0KG5leHQub3JpZ2luYWwpO1xuXHQgIH1cblx0fVxuXG5cdC8vIE1hcmtzIHRoZSBub2RlIHRvIHRoZSByaWdodCBvZiB0aGUgcG9zaXRpb24gYXMgb21pdHRlZC5cblx0Ly8gSS5lLiB7e2Zvb319JyAnIHdpbGwgbWFyayB0aGUgJyAnIG5vZGUgYXMgb21pdHRlZC5cblx0Ly9cblx0Ly8gSWYgaSBpcyB1bmRlZmluZWQsIHRoZW4gdGhlIGZpcnN0IGNoaWxkIHdpbGwgYmUgbWFya2VkIGFzIHN1Y2guXG5cdC8vXG5cdC8vIElmIG11bGl0cGxlIGlzIHRydXRoeSB0aGVuIGFsbCB3aGl0ZXNwYWNlIHdpbGwgYmUgc3RyaXBwZWQgb3V0IHVudGlsIG5vbi13aGl0ZXNwYWNlXG5cdC8vIGNvbnRlbnQgaXMgbWV0LlxuXHRmdW5jdGlvbiBvbWl0UmlnaHQoYm9keSwgaSwgbXVsdGlwbGUpIHtcblx0ICB2YXIgY3VycmVudCA9IGJvZHlbaSA9PSBudWxsID8gMCA6IGkgKyAxXTtcblx0ICBpZiAoIWN1cnJlbnQgfHwgY3VycmVudC50eXBlICE9PSAnQ29udGVudFN0YXRlbWVudCcgfHwgIW11bHRpcGxlICYmIGN1cnJlbnQucmlnaHRTdHJpcHBlZCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblxuXHQgIHZhciBvcmlnaW5hbCA9IGN1cnJlbnQudmFsdWU7XG5cdCAgY3VycmVudC52YWx1ZSA9IGN1cnJlbnQudmFsdWUucmVwbGFjZShtdWx0aXBsZSA/IC9eXFxzKy8gOiAvXlsgXFx0XSpcXHI/XFxuPy8sICcnKTtcblx0ICBjdXJyZW50LnJpZ2h0U3RyaXBwZWQgPSBjdXJyZW50LnZhbHVlICE9PSBvcmlnaW5hbDtcblx0fVxuXG5cdC8vIE1hcmtzIHRoZSBub2RlIHRvIHRoZSBsZWZ0IG9mIHRoZSBwb3NpdGlvbiBhcyBvbWl0dGVkLlxuXHQvLyBJLmUuICcgJ3t7Zm9vfX0gd2lsbCBtYXJrIHRoZSAnICcgbm9kZSBhcyBvbWl0dGVkLlxuXHQvL1xuXHQvLyBJZiBpIGlzIHVuZGVmaW5lZCB0aGVuIHRoZSBsYXN0IGNoaWxkIHdpbGwgYmUgbWFya2VkIGFzIHN1Y2guXG5cdC8vXG5cdC8vIElmIG11bGl0cGxlIGlzIHRydXRoeSB0aGVuIGFsbCB3aGl0ZXNwYWNlIHdpbGwgYmUgc3RyaXBwZWQgb3V0IHVudGlsIG5vbi13aGl0ZXNwYWNlXG5cdC8vIGNvbnRlbnQgaXMgbWV0LlxuXHRmdW5jdGlvbiBvbWl0TGVmdChib2R5LCBpLCBtdWx0aXBsZSkge1xuXHQgIHZhciBjdXJyZW50ID0gYm9keVtpID09IG51bGwgPyBib2R5Lmxlbmd0aCAtIDEgOiBpIC0gMV07XG5cdCAgaWYgKCFjdXJyZW50IHx8IGN1cnJlbnQudHlwZSAhPT0gJ0NvbnRlbnRTdGF0ZW1lbnQnIHx8ICFtdWx0aXBsZSAmJiBjdXJyZW50LmxlZnRTdHJpcHBlZCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblxuXHQgIC8vIFdlIG9taXQgdGhlIGxhc3Qgbm9kZSBpZiBpdCdzIHdoaXRlc3BhY2Ugb25seSBhbmQgbm90IHByZWNlZWRlZCBieSBhIG5vbi1jb250ZW50IG5vZGUuXG5cdCAgdmFyIG9yaWdpbmFsID0gY3VycmVudC52YWx1ZTtcblx0ICBjdXJyZW50LnZhbHVlID0gY3VycmVudC52YWx1ZS5yZXBsYWNlKG11bHRpcGxlID8gL1xccyskLyA6IC9bIFxcdF0rJC8sICcnKTtcblx0ICBjdXJyZW50LmxlZnRTdHJpcHBlZCA9IGN1cnJlbnQudmFsdWUgIT09IG9yaWdpbmFsO1xuXHQgIHJldHVybiBjdXJyZW50LmxlZnRTdHJpcHBlZDtcblx0fVxuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFdoaXRlc3BhY2VDb250cm9sO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAzOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdGZ1bmN0aW9uIFZpc2l0b3IoKSB7XG5cdCAgdGhpcy5wYXJlbnRzID0gW107XG5cdH1cblxuXHRWaXNpdG9yLnByb3RvdHlwZSA9IHtcblx0ICBjb25zdHJ1Y3RvcjogVmlzaXRvcixcblx0ICBtdXRhdGluZzogZmFsc2UsXG5cblx0ICAvLyBWaXNpdHMgYSBnaXZlbiB2YWx1ZS4gSWYgbXV0YXRpbmcsIHdpbGwgcmVwbGFjZSB0aGUgdmFsdWUgaWYgbmVjZXNzYXJ5LlxuXHQgIGFjY2VwdEtleTogZnVuY3Rpb24gYWNjZXB0S2V5KG5vZGUsIG5hbWUpIHtcblx0ICAgIHZhciB2YWx1ZSA9IHRoaXMuYWNjZXB0KG5vZGVbbmFtZV0pO1xuXHQgICAgaWYgKHRoaXMubXV0YXRpbmcpIHtcblx0ICAgICAgLy8gSGFja3kgc2FuaXR5IGNoZWNrOiBUaGlzIG1heSBoYXZlIGEgZmV3IGZhbHNlIHBvc2l0aXZlcyBmb3IgdHlwZSBmb3IgdGhlIGhlbHBlclxuXHQgICAgICAvLyBtZXRob2RzIGJ1dCB3aWxsIGdlbmVyYWxseSBkbyB0aGUgcmlnaHQgdGhpbmcgd2l0aG91dCBhIGxvdCBvZiBvdmVyaGVhZC5cblx0ICAgICAgaWYgKHZhbHVlICYmICFWaXNpdG9yLnByb3RvdHlwZVt2YWx1ZS50eXBlXSkge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmV4cGVjdGVkIG5vZGUgdHlwZSBcIicgKyB2YWx1ZS50eXBlICsgJ1wiIGZvdW5kIHdoZW4gYWNjZXB0aW5nICcgKyBuYW1lICsgJyBvbiAnICsgbm9kZS50eXBlKTtcblx0ICAgICAgfVxuXHQgICAgICBub2RlW25hbWVdID0gdmFsdWU7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIFBlcmZvcm1zIGFuIGFjY2VwdCBvcGVyYXRpb24gd2l0aCBhZGRlZCBzYW5pdHkgY2hlY2sgdG8gZW5zdXJlXG5cdCAgLy8gcmVxdWlyZWQga2V5cyBhcmUgbm90IHJlbW92ZWQuXG5cdCAgYWNjZXB0UmVxdWlyZWQ6IGZ1bmN0aW9uIGFjY2VwdFJlcXVpcmVkKG5vZGUsIG5hbWUpIHtcblx0ICAgIHRoaXMuYWNjZXB0S2V5KG5vZGUsIG5hbWUpO1xuXG5cdCAgICBpZiAoIW5vZGVbbmFtZV0pIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10obm9kZS50eXBlICsgJyByZXF1aXJlcyAnICsgbmFtZSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIFRyYXZlcnNlcyBhIGdpdmVuIGFycmF5LiBJZiBtdXRhdGluZywgZW1wdHkgcmVzcG5zZXMgd2lsbCBiZSByZW1vdmVkXG5cdCAgLy8gZm9yIGNoaWxkIGVsZW1lbnRzLlxuXHQgIGFjY2VwdEFycmF5OiBmdW5jdGlvbiBhY2NlcHRBcnJheShhcnJheSkge1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgdGhpcy5hY2NlcHRLZXkoYXJyYXksIGkpO1xuXG5cdCAgICAgIGlmICghYXJyYXlbaV0pIHtcblx0ICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG5cdCAgICAgICAgaS0tO1xuXHQgICAgICAgIGwtLTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBhY2NlcHQ6IGZ1bmN0aW9uIGFjY2VwdChvYmplY3QpIHtcblx0ICAgIGlmICghb2JqZWN0KSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IFNhbml0eSBjb2RlICovXG5cdCAgICBpZiAoIXRoaXNbb2JqZWN0LnR5cGVdKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmtub3duIHR5cGU6ICcgKyBvYmplY3QudHlwZSwgb2JqZWN0KTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHRoaXMuY3VycmVudCkge1xuXHQgICAgICB0aGlzLnBhcmVudHMudW5zaGlmdCh0aGlzLmN1cnJlbnQpO1xuXHQgICAgfVxuXHQgICAgdGhpcy5jdXJyZW50ID0gb2JqZWN0O1xuXG5cdCAgICB2YXIgcmV0ID0gdGhpc1tvYmplY3QudHlwZV0ob2JqZWN0KTtcblxuXHQgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wYXJlbnRzLnNoaWZ0KCk7XG5cblx0ICAgIGlmICghdGhpcy5tdXRhdGluZyB8fCByZXQpIHtcblx0ICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH0gZWxzZSBpZiAocmV0ICE9PSBmYWxzZSkge1xuXHQgICAgICByZXR1cm4gb2JqZWN0O1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBQcm9ncmFtOiBmdW5jdGlvbiBQcm9ncmFtKHByb2dyYW0pIHtcblx0ICAgIHRoaXMuYWNjZXB0QXJyYXkocHJvZ3JhbS5ib2R5KTtcblx0ICB9LFxuXG5cdCAgTXVzdGFjaGVTdGF0ZW1lbnQ6IHZpc2l0U3ViRXhwcmVzc2lvbixcblx0ICBEZWNvcmF0b3I6IHZpc2l0U3ViRXhwcmVzc2lvbixcblxuXHQgIEJsb2NrU3RhdGVtZW50OiB2aXNpdEJsb2NrLFxuXHQgIERlY29yYXRvckJsb2NrOiB2aXNpdEJsb2NrLFxuXG5cdCAgUGFydGlhbFN0YXRlbWVudDogdmlzaXRQYXJ0aWFsLFxuXHQgIFBhcnRpYWxCbG9ja1N0YXRlbWVudDogZnVuY3Rpb24gUGFydGlhbEJsb2NrU3RhdGVtZW50KHBhcnRpYWwpIHtcblx0ICAgIHZpc2l0UGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwpO1xuXG5cdCAgICB0aGlzLmFjY2VwdEtleShwYXJ0aWFsLCAncHJvZ3JhbScpO1xuXHQgIH0sXG5cblx0ICBDb250ZW50U3RhdGVtZW50OiBmdW5jdGlvbiBDb250ZW50U3RhdGVtZW50KCkgLyogY29udGVudCAqL3t9LFxuXHQgIENvbW1lbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbW1lbnRTdGF0ZW1lbnQoKSAvKiBjb21tZW50ICove30sXG5cblx0ICBTdWJFeHByZXNzaW9uOiB2aXNpdFN1YkV4cHJlc3Npb24sXG5cblx0ICBQYXRoRXhwcmVzc2lvbjogZnVuY3Rpb24gUGF0aEV4cHJlc3Npb24oKSAvKiBwYXRoICove30sXG5cblx0ICBTdHJpbmdMaXRlcmFsOiBmdW5jdGlvbiBTdHJpbmdMaXRlcmFsKCkgLyogc3RyaW5nICove30sXG5cdCAgTnVtYmVyTGl0ZXJhbDogZnVuY3Rpb24gTnVtYmVyTGl0ZXJhbCgpIC8qIG51bWJlciAqL3t9LFxuXHQgIEJvb2xlYW5MaXRlcmFsOiBmdW5jdGlvbiBCb29sZWFuTGl0ZXJhbCgpIC8qIGJvb2wgKi97fSxcblx0ICBVbmRlZmluZWRMaXRlcmFsOiBmdW5jdGlvbiBVbmRlZmluZWRMaXRlcmFsKCkgLyogbGl0ZXJhbCAqL3t9LFxuXHQgIE51bGxMaXRlcmFsOiBmdW5jdGlvbiBOdWxsTGl0ZXJhbCgpIC8qIGxpdGVyYWwgKi97fSxcblxuXHQgIEhhc2g6IGZ1bmN0aW9uIEhhc2goaGFzaCkge1xuXHQgICAgdGhpcy5hY2NlcHRBcnJheShoYXNoLnBhaXJzKTtcblx0ICB9LFxuXHQgIEhhc2hQYWlyOiBmdW5jdGlvbiBIYXNoUGFpcihwYWlyKSB7XG5cdCAgICB0aGlzLmFjY2VwdFJlcXVpcmVkKHBhaXIsICd2YWx1ZScpO1xuXHQgIH1cblx0fTtcblxuXHRmdW5jdGlvbiB2aXNpdFN1YkV4cHJlc3Npb24obXVzdGFjaGUpIHtcblx0ICB0aGlzLmFjY2VwdFJlcXVpcmVkKG11c3RhY2hlLCAncGF0aCcpO1xuXHQgIHRoaXMuYWNjZXB0QXJyYXkobXVzdGFjaGUucGFyYW1zKTtcblx0ICB0aGlzLmFjY2VwdEtleShtdXN0YWNoZSwgJ2hhc2gnKTtcblx0fVxuXHRmdW5jdGlvbiB2aXNpdEJsb2NrKGJsb2NrKSB7XG5cdCAgdmlzaXRTdWJFeHByZXNzaW9uLmNhbGwodGhpcywgYmxvY2spO1xuXG5cdCAgdGhpcy5hY2NlcHRLZXkoYmxvY2ssICdwcm9ncmFtJyk7XG5cdCAgdGhpcy5hY2NlcHRLZXkoYmxvY2ssICdpbnZlcnNlJyk7XG5cdH1cblx0ZnVuY3Rpb24gdmlzaXRQYXJ0aWFsKHBhcnRpYWwpIHtcblx0ICB0aGlzLmFjY2VwdFJlcXVpcmVkKHBhcnRpYWwsICduYW1lJyk7XG5cdCAgdGhpcy5hY2NlcHRBcnJheShwYXJ0aWFsLnBhcmFtcyk7XG5cdCAgdGhpcy5hY2NlcHRLZXkocGFydGlhbCwgJ2hhc2gnKTtcblx0fVxuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFZpc2l0b3I7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDQwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuU291cmNlTG9jYXRpb24gPSBTb3VyY2VMb2NhdGlvbjtcblx0ZXhwb3J0cy5pZCA9IGlkO1xuXHRleHBvcnRzLnN0cmlwRmxhZ3MgPSBzdHJpcEZsYWdzO1xuXHRleHBvcnRzLnN0cmlwQ29tbWVudCA9IHN0cmlwQ29tbWVudDtcblx0ZXhwb3J0cy5wcmVwYXJlUGF0aCA9IHByZXBhcmVQYXRoO1xuXHRleHBvcnRzLnByZXBhcmVNdXN0YWNoZSA9IHByZXBhcmVNdXN0YWNoZTtcblx0ZXhwb3J0cy5wcmVwYXJlUmF3QmxvY2sgPSBwcmVwYXJlUmF3QmxvY2s7XG5cdGV4cG9ydHMucHJlcGFyZUJsb2NrID0gcHJlcGFyZUJsb2NrO1xuXHRleHBvcnRzLnByZXBhcmVQcm9ncmFtID0gcHJlcGFyZVByb2dyYW07XG5cdGV4cG9ydHMucHJlcGFyZVBhcnRpYWxCbG9jayA9IHByZXBhcmVQYXJ0aWFsQmxvY2s7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0ZnVuY3Rpb24gdmFsaWRhdGVDbG9zZShvcGVuLCBjbG9zZSkge1xuXHQgIGNsb3NlID0gY2xvc2UucGF0aCA/IGNsb3NlLnBhdGgub3JpZ2luYWwgOiBjbG9zZTtcblxuXHQgIGlmIChvcGVuLnBhdGgub3JpZ2luYWwgIT09IGNsb3NlKSB7XG5cdCAgICB2YXIgZXJyb3JOb2RlID0geyBsb2M6IG9wZW4ucGF0aC5sb2MgfTtcblxuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10ob3Blbi5wYXRoLm9yaWdpbmFsICsgXCIgZG9lc24ndCBtYXRjaCBcIiArIGNsb3NlLCBlcnJvck5vZGUpO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIFNvdXJjZUxvY2F0aW9uKHNvdXJjZSwgbG9jSW5mbykge1xuXHQgIHRoaXMuc291cmNlID0gc291cmNlO1xuXHQgIHRoaXMuc3RhcnQgPSB7XG5cdCAgICBsaW5lOiBsb2NJbmZvLmZpcnN0X2xpbmUsXG5cdCAgICBjb2x1bW46IGxvY0luZm8uZmlyc3RfY29sdW1uXG5cdCAgfTtcblx0ICB0aGlzLmVuZCA9IHtcblx0ICAgIGxpbmU6IGxvY0luZm8ubGFzdF9saW5lLFxuXHQgICAgY29sdW1uOiBsb2NJbmZvLmxhc3RfY29sdW1uXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlkKHRva2VuKSB7XG5cdCAgaWYgKC9eXFxbLipcXF0kLy50ZXN0KHRva2VuKSkge1xuXHQgICAgcmV0dXJuIHRva2VuLnN1YnN0cigxLCB0b2tlbi5sZW5ndGggLSAyKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmV0dXJuIHRva2VuO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIHN0cmlwRmxhZ3Mob3BlbiwgY2xvc2UpIHtcblx0ICByZXR1cm4ge1xuXHQgICAgb3Blbjogb3Blbi5jaGFyQXQoMikgPT09ICd+Jyxcblx0ICAgIGNsb3NlOiBjbG9zZS5jaGFyQXQoY2xvc2UubGVuZ3RoIC0gMykgPT09ICd+J1xuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBzdHJpcENvbW1lbnQoY29tbWVudCkge1xuXHQgIHJldHVybiBjb21tZW50LnJlcGxhY2UoL15cXHtcXHt+P1xcIS0/LT8vLCAnJykucmVwbGFjZSgvLT8tP34/XFx9XFx9JC8sICcnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVQYXRoKGRhdGEsIHBhcnRzLCBsb2MpIHtcblx0ICBsb2MgPSB0aGlzLmxvY0luZm8obG9jKTtcblxuXHQgIHZhciBvcmlnaW5hbCA9IGRhdGEgPyAnQCcgOiAnJyxcblx0ICAgICAgZGlnID0gW10sXG5cdCAgICAgIGRlcHRoID0gMCxcblx0ICAgICAgZGVwdGhTdHJpbmcgPSAnJztcblxuXHQgIGZvciAodmFyIGkgPSAwLCBsID0gcGFydHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICB2YXIgcGFydCA9IHBhcnRzW2ldLnBhcnQsXG5cblx0ICAgIC8vIElmIHdlIGhhdmUgW10gc3ludGF4IHRoZW4gd2UgZG8gbm90IHRyZWF0IHBhdGggcmVmZXJlbmNlcyBhcyBvcGVyYXRvcnMsXG5cdCAgICAvLyBpLmUuIGZvby5bdGhpc10gcmVzb2x2ZXMgdG8gYXBwcm94aW1hdGVseSBjb250ZXh0LmZvb1sndGhpcyddXG5cdCAgICBpc0xpdGVyYWwgPSBwYXJ0c1tpXS5vcmlnaW5hbCAhPT0gcGFydDtcblx0ICAgIG9yaWdpbmFsICs9IChwYXJ0c1tpXS5zZXBhcmF0b3IgfHwgJycpICsgcGFydDtcblxuXHQgICAgaWYgKCFpc0xpdGVyYWwgJiYgKHBhcnQgPT09ICcuLicgfHwgcGFydCA9PT0gJy4nIHx8IHBhcnQgPT09ICd0aGlzJykpIHtcblx0ICAgICAgaWYgKGRpZy5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0ludmFsaWQgcGF0aDogJyArIG9yaWdpbmFsLCB7IGxvYzogbG9jIH0pO1xuXHQgICAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcblx0ICAgICAgICBkZXB0aCsrO1xuXHQgICAgICAgIGRlcHRoU3RyaW5nICs9ICcuLi8nO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBkaWcucHVzaChwYXJ0KTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogJ1BhdGhFeHByZXNzaW9uJyxcblx0ICAgIGRhdGE6IGRhdGEsXG5cdCAgICBkZXB0aDogZGVwdGgsXG5cdCAgICBwYXJ0czogZGlnLFxuXHQgICAgb3JpZ2luYWw6IG9yaWdpbmFsLFxuXHQgICAgbG9jOiBsb2Ncblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZU11c3RhY2hlKHBhdGgsIHBhcmFtcywgaGFzaCwgb3Blbiwgc3RyaXAsIGxvY0luZm8pIHtcblx0ICAvLyBNdXN0IHVzZSBjaGFyQXQgdG8gc3VwcG9ydCBJRSBwcmUtMTBcblx0ICB2YXIgZXNjYXBlRmxhZyA9IG9wZW4uY2hhckF0KDMpIHx8IG9wZW4uY2hhckF0KDIpLFxuXHQgICAgICBlc2NhcGVkID0gZXNjYXBlRmxhZyAhPT0gJ3snICYmIGVzY2FwZUZsYWcgIT09ICcmJztcblxuXHQgIHZhciBkZWNvcmF0b3IgPSAvXFwqLy50ZXN0KG9wZW4pO1xuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiBkZWNvcmF0b3IgPyAnRGVjb3JhdG9yJyA6ICdNdXN0YWNoZVN0YXRlbWVudCcsXG5cdCAgICBwYXRoOiBwYXRoLFxuXHQgICAgcGFyYW1zOiBwYXJhbXMsXG5cdCAgICBoYXNoOiBoYXNoLFxuXHQgICAgZXNjYXBlZDogZXNjYXBlZCxcblx0ICAgIHN0cmlwOiBzdHJpcCxcblx0ICAgIGxvYzogdGhpcy5sb2NJbmZvKGxvY0luZm8pXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVSYXdCbG9jayhvcGVuUmF3QmxvY2ssIGNvbnRlbnRzLCBjbG9zZSwgbG9jSW5mbykge1xuXHQgIHZhbGlkYXRlQ2xvc2Uob3BlblJhd0Jsb2NrLCBjbG9zZSk7XG5cblx0ICBsb2NJbmZvID0gdGhpcy5sb2NJbmZvKGxvY0luZm8pO1xuXHQgIHZhciBwcm9ncmFtID0ge1xuXHQgICAgdHlwZTogJ1Byb2dyYW0nLFxuXHQgICAgYm9keTogY29udGVudHMsXG5cdCAgICBzdHJpcDoge30sXG5cdCAgICBsb2M6IGxvY0luZm9cblx0ICB9O1xuXG5cdCAgcmV0dXJuIHtcblx0ICAgIHR5cGU6ICdCbG9ja1N0YXRlbWVudCcsXG5cdCAgICBwYXRoOiBvcGVuUmF3QmxvY2sucGF0aCxcblx0ICAgIHBhcmFtczogb3BlblJhd0Jsb2NrLnBhcmFtcyxcblx0ICAgIGhhc2g6IG9wZW5SYXdCbG9jay5oYXNoLFxuXHQgICAgcHJvZ3JhbTogcHJvZ3JhbSxcblx0ICAgIG9wZW5TdHJpcDoge30sXG5cdCAgICBpbnZlcnNlU3RyaXA6IHt9LFxuXHQgICAgY2xvc2VTdHJpcDoge30sXG5cdCAgICBsb2M6IGxvY0luZm9cblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZUJsb2NrKG9wZW5CbG9jaywgcHJvZ3JhbSwgaW52ZXJzZUFuZFByb2dyYW0sIGNsb3NlLCBpbnZlcnRlZCwgbG9jSW5mbykge1xuXHQgIGlmIChjbG9zZSAmJiBjbG9zZS5wYXRoKSB7XG5cdCAgICB2YWxpZGF0ZUNsb3NlKG9wZW5CbG9jaywgY2xvc2UpO1xuXHQgIH1cblxuXHQgIHZhciBkZWNvcmF0b3IgPSAvXFwqLy50ZXN0KG9wZW5CbG9jay5vcGVuKTtcblxuXHQgIHByb2dyYW0uYmxvY2tQYXJhbXMgPSBvcGVuQmxvY2suYmxvY2tQYXJhbXM7XG5cblx0ICB2YXIgaW52ZXJzZSA9IHVuZGVmaW5lZCxcblx0ICAgICAgaW52ZXJzZVN0cmlwID0gdW5kZWZpbmVkO1xuXG5cdCAgaWYgKGludmVyc2VBbmRQcm9ncmFtKSB7XG5cdCAgICBpZiAoZGVjb3JhdG9yKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmV4cGVjdGVkIGludmVyc2UgYmxvY2sgb24gZGVjb3JhdG9yJywgaW52ZXJzZUFuZFByb2dyYW0pO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoaW52ZXJzZUFuZFByb2dyYW0uY2hhaW4pIHtcblx0ICAgICAgaW52ZXJzZUFuZFByb2dyYW0ucHJvZ3JhbS5ib2R5WzBdLmNsb3NlU3RyaXAgPSBjbG9zZS5zdHJpcDtcblx0ICAgIH1cblxuXHQgICAgaW52ZXJzZVN0cmlwID0gaW52ZXJzZUFuZFByb2dyYW0uc3RyaXA7XG5cdCAgICBpbnZlcnNlID0gaW52ZXJzZUFuZFByb2dyYW0ucHJvZ3JhbTtcblx0ICB9XG5cblx0ICBpZiAoaW52ZXJ0ZWQpIHtcblx0ICAgIGludmVydGVkID0gaW52ZXJzZTtcblx0ICAgIGludmVyc2UgPSBwcm9ncmFtO1xuXHQgICAgcHJvZ3JhbSA9IGludmVydGVkO1xuXHQgIH1cblxuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiBkZWNvcmF0b3IgPyAnRGVjb3JhdG9yQmxvY2snIDogJ0Jsb2NrU3RhdGVtZW50Jyxcblx0ICAgIHBhdGg6IG9wZW5CbG9jay5wYXRoLFxuXHQgICAgcGFyYW1zOiBvcGVuQmxvY2sucGFyYW1zLFxuXHQgICAgaGFzaDogb3BlbkJsb2NrLmhhc2gsXG5cdCAgICBwcm9ncmFtOiBwcm9ncmFtLFxuXHQgICAgaW52ZXJzZTogaW52ZXJzZSxcblx0ICAgIG9wZW5TdHJpcDogb3BlbkJsb2NrLnN0cmlwLFxuXHQgICAgaW52ZXJzZVN0cmlwOiBpbnZlcnNlU3RyaXAsXG5cdCAgICBjbG9zZVN0cmlwOiBjbG9zZSAmJiBjbG9zZS5zdHJpcCxcblx0ICAgIGxvYzogdGhpcy5sb2NJbmZvKGxvY0luZm8pXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVQcm9ncmFtKHN0YXRlbWVudHMsIGxvYykge1xuXHQgIGlmICghbG9jICYmIHN0YXRlbWVudHMubGVuZ3RoKSB7XG5cdCAgICB2YXIgZmlyc3RMb2MgPSBzdGF0ZW1lbnRzWzBdLmxvYyxcblx0ICAgICAgICBsYXN0TG9jID0gc3RhdGVtZW50c1tzdGF0ZW1lbnRzLmxlbmd0aCAtIDFdLmxvYztcblxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblx0ICAgIGlmIChmaXJzdExvYyAmJiBsYXN0TG9jKSB7XG5cdCAgICAgIGxvYyA9IHtcblx0ICAgICAgICBzb3VyY2U6IGZpcnN0TG9jLnNvdXJjZSxcblx0ICAgICAgICBzdGFydDoge1xuXHQgICAgICAgICAgbGluZTogZmlyc3RMb2Muc3RhcnQubGluZSxcblx0ICAgICAgICAgIGNvbHVtbjogZmlyc3RMb2Muc3RhcnQuY29sdW1uXG5cdCAgICAgICAgfSxcblx0ICAgICAgICBlbmQ6IHtcblx0ICAgICAgICAgIGxpbmU6IGxhc3RMb2MuZW5kLmxpbmUsXG5cdCAgICAgICAgICBjb2x1bW46IGxhc3RMb2MuZW5kLmNvbHVtblxuXHQgICAgICAgIH1cblx0ICAgICAgfTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogJ1Byb2dyYW0nLFxuXHQgICAgYm9keTogc3RhdGVtZW50cyxcblx0ICAgIHN0cmlwOiB7fSxcblx0ICAgIGxvYzogbG9jXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVQYXJ0aWFsQmxvY2sob3BlbiwgcHJvZ3JhbSwgY2xvc2UsIGxvY0luZm8pIHtcblx0ICB2YWxpZGF0ZUNsb3NlKG9wZW4sIGNsb3NlKTtcblxuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiAnUGFydGlhbEJsb2NrU3RhdGVtZW50Jyxcblx0ICAgIG5hbWU6IG9wZW4ucGF0aCxcblx0ICAgIHBhcmFtczogb3Blbi5wYXJhbXMsXG5cdCAgICBoYXNoOiBvcGVuLmhhc2gsXG5cdCAgICBwcm9ncmFtOiBwcm9ncmFtLFxuXHQgICAgb3BlblN0cmlwOiBvcGVuLnN0cmlwLFxuXHQgICAgY2xvc2VTdHJpcDogY2xvc2UgJiYgY2xvc2Uuc3RyaXAsXG5cdCAgICBsb2M6IHRoaXMubG9jSW5mbyhsb2NJbmZvKVxuXHQgIH07XG5cdH1cblxuLyoqKi8gfSksXG4vKiA0MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG5ldy1jYXAgKi9cblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5Db21waWxlciA9IENvbXBpbGVyO1xuXHRleHBvcnRzLnByZWNvbXBpbGUgPSBwcmVjb21waWxlO1xuXHRleHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfYXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSk7XG5cblx0dmFyIF9hc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXN0KTtcblxuXHR2YXIgc2xpY2UgPSBbXS5zbGljZTtcblxuXHRmdW5jdGlvbiBDb21waWxlcigpIHt9XG5cblx0Ly8gdGhlIGZvdW5kSGVscGVyIHJlZ2lzdGVyIHdpbGwgZGlzYW1iaWd1YXRlIGhlbHBlciBsb29rdXAgZnJvbSBmaW5kaW5nIGFcblx0Ly8gZnVuY3Rpb24gaW4gYSBjb250ZXh0LiBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgbXVzdGFjaGUgY29tcGF0aWJpbGl0eSwgd2hpY2hcblx0Ly8gcmVxdWlyZXMgdGhhdCBjb250ZXh0IGZ1bmN0aW9ucyBpbiBibG9ja3MgYXJlIGV2YWx1YXRlZCBieSBibG9ja0hlbHBlck1pc3NpbmcsXG5cdC8vIGFuZCB0aGVuIHByb2NlZWQgYXMgaWYgdGhlIHJlc3VsdGluZyB2YWx1ZSB3YXMgcHJvdmlkZWQgdG8gYmxvY2tIZWxwZXJNaXNzaW5nLlxuXG5cdENvbXBpbGVyLnByb3RvdHlwZSA9IHtcblx0ICBjb21waWxlcjogQ29tcGlsZXIsXG5cblx0ICBlcXVhbHM6IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuXHQgICAgdmFyIGxlbiA9IHRoaXMub3Bjb2Rlcy5sZW5ndGg7XG5cdCAgICBpZiAob3RoZXIub3Bjb2Rlcy5sZW5ndGggIT09IGxlbikge1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgdmFyIG9wY29kZSA9IHRoaXMub3Bjb2Rlc1tpXSxcblx0ICAgICAgICAgIG90aGVyT3Bjb2RlID0gb3RoZXIub3Bjb2Rlc1tpXTtcblx0ICAgICAgaWYgKG9wY29kZS5vcGNvZGUgIT09IG90aGVyT3Bjb2RlLm9wY29kZSB8fCAhYXJnRXF1YWxzKG9wY29kZS5hcmdzLCBvdGhlck9wY29kZS5hcmdzKSkge1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICAvLyBXZSBrbm93IHRoYXQgbGVuZ3RoIGlzIHRoZSBzYW1lIGJldHdlZW4gdGhlIHR3byBhcnJheXMgYmVjYXVzZSB0aGV5IGFyZSBkaXJlY3RseSB0aWVkXG5cdCAgICAvLyB0byB0aGUgb3Bjb2RlIGJlaGF2aW9yIGFib3ZlLlxuXHQgICAgbGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGlmICghdGhpcy5jaGlsZHJlbltpXS5lcXVhbHMob3RoZXIuY2hpbGRyZW5baV0pKSB7XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH0sXG5cblx0ICBndWlkOiAwLFxuXG5cdCAgY29tcGlsZTogZnVuY3Rpb24gY29tcGlsZShwcm9ncmFtLCBvcHRpb25zKSB7XG5cdCAgICB0aGlzLnNvdXJjZU5vZGUgPSBbXTtcblx0ICAgIHRoaXMub3Bjb2RlcyA9IFtdO1xuXHQgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXHQgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0ICAgIHRoaXMuc3RyaW5nUGFyYW1zID0gb3B0aW9ucy5zdHJpbmdQYXJhbXM7XG5cdCAgICB0aGlzLnRyYWNrSWRzID0gb3B0aW9ucy50cmFja0lkcztcblxuXHQgICAgb3B0aW9ucy5ibG9ja1BhcmFtcyA9IG9wdGlvbnMuYmxvY2tQYXJhbXMgfHwgW107XG5cblx0ICAgIC8vIFRoZXNlIGNoYW5nZXMgd2lsbCBwcm9wYWdhdGUgdG8gdGhlIG90aGVyIGNvbXBpbGVyIGNvbXBvbmVudHNcblx0ICAgIHZhciBrbm93bkhlbHBlcnMgPSBvcHRpb25zLmtub3duSGVscGVycztcblx0ICAgIG9wdGlvbnMua25vd25IZWxwZXJzID0ge1xuXHQgICAgICAnaGVscGVyTWlzc2luZyc6IHRydWUsXG5cdCAgICAgICdibG9ja0hlbHBlck1pc3NpbmcnOiB0cnVlLFxuXHQgICAgICAnZWFjaCc6IHRydWUsXG5cdCAgICAgICdpZic6IHRydWUsXG5cdCAgICAgICd1bmxlc3MnOiB0cnVlLFxuXHQgICAgICAnd2l0aCc6IHRydWUsXG5cdCAgICAgICdsb2cnOiB0cnVlLFxuXHQgICAgICAnbG9va3VwJzogdHJ1ZVxuXHQgICAgfTtcblx0ICAgIGlmIChrbm93bkhlbHBlcnMpIHtcblx0ICAgICAgZm9yICh2YXIgX25hbWUgaW4ga25vd25IZWxwZXJzKSB7XG5cdCAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblx0ICAgICAgICBpZiAoX25hbWUgaW4ga25vd25IZWxwZXJzKSB7XG5cdCAgICAgICAgICB0aGlzLm9wdGlvbnMua25vd25IZWxwZXJzW19uYW1lXSA9IGtub3duSGVscGVyc1tfbmFtZV07XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB0aGlzLmFjY2VwdChwcm9ncmFtKTtcblx0ICB9LFxuXG5cdCAgY29tcGlsZVByb2dyYW06IGZ1bmN0aW9uIGNvbXBpbGVQcm9ncmFtKHByb2dyYW0pIHtcblx0ICAgIHZhciBjaGlsZENvbXBpbGVyID0gbmV3IHRoaXMuY29tcGlsZXIoKSxcblx0ICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0ICAgIHJlc3VsdCA9IGNoaWxkQ29tcGlsZXIuY29tcGlsZShwcm9ncmFtLCB0aGlzLm9wdGlvbnMpLFxuXHQgICAgICAgIGd1aWQgPSB0aGlzLmd1aWQrKztcblxuXHQgICAgdGhpcy51c2VQYXJ0aWFsID0gdGhpcy51c2VQYXJ0aWFsIHx8IHJlc3VsdC51c2VQYXJ0aWFsO1xuXG5cdCAgICB0aGlzLmNoaWxkcmVuW2d1aWRdID0gcmVzdWx0O1xuXHQgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCByZXN1bHQudXNlRGVwdGhzO1xuXG5cdCAgICByZXR1cm4gZ3VpZDtcblx0ICB9LFxuXG5cdCAgYWNjZXB0OiBmdW5jdGlvbiBhY2NlcHQobm9kZSkge1xuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IFNhbml0eSBjb2RlICovXG5cdCAgICBpZiAoIXRoaXNbbm9kZS50eXBlXSkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5rbm93biB0eXBlOiAnICsgbm9kZS50eXBlLCBub2RlKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5zb3VyY2VOb2RlLnVuc2hpZnQobm9kZSk7XG5cdCAgICB2YXIgcmV0ID0gdGhpc1tub2RlLnR5cGVdKG5vZGUpO1xuXHQgICAgdGhpcy5zb3VyY2VOb2RlLnNoaWZ0KCk7XG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0sXG5cblx0ICBQcm9ncmFtOiBmdW5jdGlvbiBQcm9ncmFtKHByb2dyYW0pIHtcblx0ICAgIHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy51bnNoaWZ0KHByb2dyYW0uYmxvY2tQYXJhbXMpO1xuXG5cdCAgICB2YXIgYm9keSA9IHByb2dyYW0uYm9keSxcblx0ICAgICAgICBib2R5TGVuZ3RoID0gYm9keS5sZW5ndGg7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHlMZW5ndGg7IGkrKykge1xuXHQgICAgICB0aGlzLmFjY2VwdChib2R5W2ldKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5vcHRpb25zLmJsb2NrUGFyYW1zLnNoaWZ0KCk7XG5cblx0ICAgIHRoaXMuaXNTaW1wbGUgPSBib2R5TGVuZ3RoID09PSAxO1xuXHQgICAgdGhpcy5ibG9ja1BhcmFtcyA9IHByb2dyYW0uYmxvY2tQYXJhbXMgPyBwcm9ncmFtLmJsb2NrUGFyYW1zLmxlbmd0aCA6IDA7XG5cblx0ICAgIHJldHVybiB0aGlzO1xuXHQgIH0sXG5cblx0ICBCbG9ja1N0YXRlbWVudDogZnVuY3Rpb24gQmxvY2tTdGF0ZW1lbnQoYmxvY2spIHtcblx0ICAgIHRyYW5zZm9ybUxpdGVyYWxUb1BhdGgoYmxvY2spO1xuXG5cdCAgICB2YXIgcHJvZ3JhbSA9IGJsb2NrLnByb2dyYW0sXG5cdCAgICAgICAgaW52ZXJzZSA9IGJsb2NrLmludmVyc2U7XG5cblx0ICAgIHByb2dyYW0gPSBwcm9ncmFtICYmIHRoaXMuY29tcGlsZVByb2dyYW0ocHJvZ3JhbSk7XG5cdCAgICBpbnZlcnNlID0gaW52ZXJzZSAmJiB0aGlzLmNvbXBpbGVQcm9ncmFtKGludmVyc2UpO1xuXG5cdCAgICB2YXIgdHlwZSA9IHRoaXMuY2xhc3NpZnlTZXhwcihibG9jayk7XG5cblx0ICAgIGlmICh0eXBlID09PSAnaGVscGVyJykge1xuXHQgICAgICB0aGlzLmhlbHBlclNleHByKGJsb2NrLCBwcm9ncmFtLCBpbnZlcnNlKTtcblx0ICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NpbXBsZScpIHtcblx0ICAgICAgdGhpcy5zaW1wbGVTZXhwcihibG9jayk7XG5cblx0ICAgICAgLy8gbm93IHRoYXQgdGhlIHNpbXBsZSBtdXN0YWNoZSBpcyByZXNvbHZlZCwgd2UgbmVlZCB0b1xuXHQgICAgICAvLyBldmFsdWF0ZSBpdCBieSBleGVjdXRpbmcgYGJsb2NrSGVscGVyTWlzc2luZ2Bcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXHQgICAgICB0aGlzLm9wY29kZSgnZW1wdHlIYXNoJyk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdibG9ja1ZhbHVlJywgYmxvY2sucGF0aC5vcmlnaW5hbCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmFtYmlndW91c1NleHByKGJsb2NrLCBwcm9ncmFtLCBpbnZlcnNlKTtcblxuXHQgICAgICAvLyBub3cgdGhhdCB0aGUgc2ltcGxlIG11c3RhY2hlIGlzIHJlc29sdmVkLCB3ZSBuZWVkIHRvXG5cdCAgICAgIC8vIGV2YWx1YXRlIGl0IGJ5IGV4ZWN1dGluZyBgYmxvY2tIZWxwZXJNaXNzaW5nYFxuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgaW52ZXJzZSk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdlbXB0eUhhc2gnKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FtYmlndW91c0Jsb2NrVmFsdWUnKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuXHQgIH0sXG5cblx0ICBEZWNvcmF0b3JCbG9jazogZnVuY3Rpb24gRGVjb3JhdG9yQmxvY2soZGVjb3JhdG9yKSB7XG5cdCAgICB2YXIgcHJvZ3JhbSA9IGRlY29yYXRvci5wcm9ncmFtICYmIHRoaXMuY29tcGlsZVByb2dyYW0oZGVjb3JhdG9yLnByb2dyYW0pO1xuXHQgICAgdmFyIHBhcmFtcyA9IHRoaXMuc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMoZGVjb3JhdG9yLCBwcm9ncmFtLCB1bmRlZmluZWQpLFxuXHQgICAgICAgIHBhdGggPSBkZWNvcmF0b3IucGF0aDtcblxuXHQgICAgdGhpcy51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblx0ICAgIHRoaXMub3Bjb2RlKCdyZWdpc3RlckRlY29yYXRvcicsIHBhcmFtcy5sZW5ndGgsIHBhdGgub3JpZ2luYWwpO1xuXHQgIH0sXG5cblx0ICBQYXJ0aWFsU3RhdGVtZW50OiBmdW5jdGlvbiBQYXJ0aWFsU3RhdGVtZW50KHBhcnRpYWwpIHtcblx0ICAgIHRoaXMudXNlUGFydGlhbCA9IHRydWU7XG5cblx0ICAgIHZhciBwcm9ncmFtID0gcGFydGlhbC5wcm9ncmFtO1xuXHQgICAgaWYgKHByb2dyYW0pIHtcblx0ICAgICAgcHJvZ3JhbSA9IHRoaXMuY29tcGlsZVByb2dyYW0ocGFydGlhbC5wcm9ncmFtKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIHBhcmFtcyA9IHBhcnRpYWwucGFyYW1zO1xuXHQgICAgaWYgKHBhcmFtcy5sZW5ndGggPiAxKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbnN1cHBvcnRlZCBudW1iZXIgb2YgcGFydGlhbCBhcmd1bWVudHM6ICcgKyBwYXJhbXMubGVuZ3RoLCBwYXJ0aWFsKTtcblx0ICAgIH0gZWxzZSBpZiAoIXBhcmFtcy5sZW5ndGgpIHtcblx0ICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHBsaWNpdFBhcnRpYWxDb250ZXh0KSB7XG5cdCAgICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgJ3VuZGVmaW5lZCcpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHBhcmFtcy5wdXNoKHsgdHlwZTogJ1BhdGhFeHByZXNzaW9uJywgcGFydHM6IFtdLCBkZXB0aDogMCB9KTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB2YXIgcGFydGlhbE5hbWUgPSBwYXJ0aWFsLm5hbWUub3JpZ2luYWwsXG5cdCAgICAgICAgaXNEeW5hbWljID0gcGFydGlhbC5uYW1lLnR5cGUgPT09ICdTdWJFeHByZXNzaW9uJztcblx0ICAgIGlmIChpc0R5bmFtaWMpIHtcblx0ICAgICAgdGhpcy5hY2NlcHQocGFydGlhbC5uYW1lKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5zZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhwYXJ0aWFsLCBwcm9ncmFtLCB1bmRlZmluZWQsIHRydWUpO1xuXG5cdCAgICB2YXIgaW5kZW50ID0gcGFydGlhbC5pbmRlbnQgfHwgJyc7XG5cdCAgICBpZiAodGhpcy5vcHRpb25zLnByZXZlbnRJbmRlbnQgJiYgaW5kZW50KSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhcHBlbmRDb250ZW50JywgaW5kZW50KTtcblx0ICAgICAgaW5kZW50ID0gJyc7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdpbnZva2VQYXJ0aWFsJywgaXNEeW5hbWljLCBwYXJ0aWFsTmFtZSwgaW5kZW50KTtcblx0ICAgIHRoaXMub3Bjb2RlKCdhcHBlbmQnKTtcblx0ICB9LFxuXHQgIFBhcnRpYWxCbG9ja1N0YXRlbWVudDogZnVuY3Rpb24gUGFydGlhbEJsb2NrU3RhdGVtZW50KHBhcnRpYWxCbG9jaykge1xuXHQgICAgdGhpcy5QYXJ0aWFsU3RhdGVtZW50KHBhcnRpYWxCbG9jayk7XG5cdCAgfSxcblxuXHQgIE11c3RhY2hlU3RhdGVtZW50OiBmdW5jdGlvbiBNdXN0YWNoZVN0YXRlbWVudChtdXN0YWNoZSkge1xuXHQgICAgdGhpcy5TdWJFeHByZXNzaW9uKG11c3RhY2hlKTtcblxuXHQgICAgaWYgKG11c3RhY2hlLmVzY2FwZWQgJiYgIXRoaXMub3B0aW9ucy5ub0VzY2FwZSkge1xuXHQgICAgICB0aGlzLm9wY29kZSgnYXBwZW5kRXNjYXBlZCcpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgRGVjb3JhdG9yOiBmdW5jdGlvbiBEZWNvcmF0b3IoZGVjb3JhdG9yKSB7XG5cdCAgICB0aGlzLkRlY29yYXRvckJsb2NrKGRlY29yYXRvcik7XG5cdCAgfSxcblxuXHQgIENvbnRlbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbnRlbnRTdGF0ZW1lbnQoY29udGVudCkge1xuXHQgICAgaWYgKGNvbnRlbnQudmFsdWUpIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZENvbnRlbnQnLCBjb250ZW50LnZhbHVlKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgQ29tbWVudFN0YXRlbWVudDogZnVuY3Rpb24gQ29tbWVudFN0YXRlbWVudCgpIHt9LFxuXG5cdCAgU3ViRXhwcmVzc2lvbjogZnVuY3Rpb24gU3ViRXhwcmVzc2lvbihzZXhwcikge1xuXHQgICAgdHJhbnNmb3JtTGl0ZXJhbFRvUGF0aChzZXhwcik7XG5cdCAgICB2YXIgdHlwZSA9IHRoaXMuY2xhc3NpZnlTZXhwcihzZXhwcik7XG5cblx0ICAgIGlmICh0eXBlID09PSAnc2ltcGxlJykge1xuXHQgICAgICB0aGlzLnNpbXBsZVNleHByKHNleHByKTtcblx0ICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2hlbHBlcicpIHtcblx0ICAgICAgdGhpcy5oZWxwZXJTZXhwcihzZXhwcik7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmFtYmlndW91c1NleHByKHNleHByKTtcblx0ICAgIH1cblx0ICB9LFxuXHQgIGFtYmlndW91c1NleHByOiBmdW5jdGlvbiBhbWJpZ3VvdXNTZXhwcihzZXhwciwgcHJvZ3JhbSwgaW52ZXJzZSkge1xuXHQgICAgdmFyIHBhdGggPSBzZXhwci5wYXRoLFxuXHQgICAgICAgIG5hbWUgPSBwYXRoLnBhcnRzWzBdLFxuXHQgICAgICAgIGlzQmxvY2sgPSBwcm9ncmFtICE9IG51bGwgfHwgaW52ZXJzZSAhPSBudWxsO1xuXG5cdCAgICB0aGlzLm9wY29kZSgnZ2V0Q29udGV4dCcsIHBhdGguZGVwdGgpO1xuXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXG5cdCAgICBwYXRoLnN0cmljdCA9IHRydWU7XG5cdCAgICB0aGlzLmFjY2VwdChwYXRoKTtcblxuXHQgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUFtYmlndW91cycsIG5hbWUsIGlzQmxvY2spO1xuXHQgIH0sXG5cblx0ICBzaW1wbGVTZXhwcjogZnVuY3Rpb24gc2ltcGxlU2V4cHIoc2V4cHIpIHtcblx0ICAgIHZhciBwYXRoID0gc2V4cHIucGF0aDtcblx0ICAgIHBhdGguc3RyaWN0ID0gdHJ1ZTtcblx0ICAgIHRoaXMuYWNjZXB0KHBhdGgpO1xuXHQgICAgdGhpcy5vcGNvZGUoJ3Jlc29sdmVQb3NzaWJsZUxhbWJkYScpO1xuXHQgIH0sXG5cblx0ICBoZWxwZXJTZXhwcjogZnVuY3Rpb24gaGVscGVyU2V4cHIoc2V4cHIsIHByb2dyYW0sIGludmVyc2UpIHtcblx0ICAgIHZhciBwYXJhbXMgPSB0aGlzLnNldHVwRnVsbE11c3RhY2hlUGFyYW1zKHNleHByLCBwcm9ncmFtLCBpbnZlcnNlKSxcblx0ICAgICAgICBwYXRoID0gc2V4cHIucGF0aCxcblx0ICAgICAgICBuYW1lID0gcGF0aC5wYXJ0c1swXTtcblxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNbbmFtZV0pIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUtub3duSGVscGVyJywgcGFyYW1zLmxlbmd0aCwgbmFtZSk7XG5cdCAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNPbmx5KSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdZb3Ugc3BlY2lmaWVkIGtub3duSGVscGVyc09ubHksIGJ1dCB1c2VkIHRoZSB1bmtub3duIGhlbHBlciAnICsgbmFtZSwgc2V4cHIpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcGF0aC5zdHJpY3QgPSB0cnVlO1xuXHQgICAgICBwYXRoLmZhbHN5ID0gdHJ1ZTtcblxuXHQgICAgICB0aGlzLmFjY2VwdChwYXRoKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUhlbHBlcicsIHBhcmFtcy5sZW5ndGgsIHBhdGgub3JpZ2luYWwsIF9hc3QyWydkZWZhdWx0J10uaGVscGVycy5zaW1wbGVJZChwYXRoKSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIFBhdGhFeHByZXNzaW9uOiBmdW5jdGlvbiBQYXRoRXhwcmVzc2lvbihwYXRoKSB7XG5cdCAgICB0aGlzLmFkZERlcHRoKHBhdGguZGVwdGgpO1xuXHQgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCBwYXRoLmRlcHRoKTtcblxuXHQgICAgdmFyIG5hbWUgPSBwYXRoLnBhcnRzWzBdLFxuXHQgICAgICAgIHNjb3BlZCA9IF9hc3QyWydkZWZhdWx0J10uaGVscGVycy5zY29wZWRJZChwYXRoKSxcblx0ICAgICAgICBibG9ja1BhcmFtSWQgPSAhcGF0aC5kZXB0aCAmJiAhc2NvcGVkICYmIHRoaXMuYmxvY2tQYXJhbUluZGV4KG5hbWUpO1xuXG5cdCAgICBpZiAoYmxvY2tQYXJhbUlkKSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdsb29rdXBCbG9ja1BhcmFtJywgYmxvY2tQYXJhbUlkLCBwYXRoLnBhcnRzKTtcblx0ICAgIH0gZWxzZSBpZiAoIW5hbWUpIHtcblx0ICAgICAgLy8gQ29udGV4dCByZWZlcmVuY2UsIGkuZS4gYHt7Zm9vIC59fWAgb3IgYHt7Zm9vIC4ufX1gXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoQ29udGV4dCcpO1xuXHQgICAgfSBlbHNlIGlmIChwYXRoLmRhdGEpIHtcblx0ICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSB0cnVlO1xuXHQgICAgICB0aGlzLm9wY29kZSgnbG9va3VwRGF0YScsIHBhdGguZGVwdGgsIHBhdGgucGFydHMsIHBhdGguc3RyaWN0KTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdsb29rdXBPbkNvbnRleHQnLCBwYXRoLnBhcnRzLCBwYXRoLmZhbHN5LCBwYXRoLnN0cmljdCwgc2NvcGVkKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgU3RyaW5nTGl0ZXJhbDogZnVuY3Rpb24gU3RyaW5nTGl0ZXJhbChzdHJpbmcpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoU3RyaW5nJywgc3RyaW5nLnZhbHVlKTtcblx0ICB9LFxuXG5cdCAgTnVtYmVyTGl0ZXJhbDogZnVuY3Rpb24gTnVtYmVyTGl0ZXJhbChudW1iZXIpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsIG51bWJlci52YWx1ZSk7XG5cdCAgfSxcblxuXHQgIEJvb2xlYW5MaXRlcmFsOiBmdW5jdGlvbiBCb29sZWFuTGl0ZXJhbChib29sKSB7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCBib29sLnZhbHVlKTtcblx0ICB9LFxuXG5cdCAgVW5kZWZpbmVkTGl0ZXJhbDogZnVuY3Rpb24gVW5kZWZpbmVkTGl0ZXJhbCgpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsICd1bmRlZmluZWQnKTtcblx0ICB9LFxuXG5cdCAgTnVsbExpdGVyYWw6IGZ1bmN0aW9uIE51bGxMaXRlcmFsKCkge1xuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgJ251bGwnKTtcblx0ICB9LFxuXG5cdCAgSGFzaDogZnVuY3Rpb24gSGFzaChoYXNoKSB7XG5cdCAgICB2YXIgcGFpcnMgPSBoYXNoLnBhaXJzLFxuXHQgICAgICAgIGkgPSAwLFxuXHQgICAgICAgIGwgPSBwYWlycy5sZW5ndGg7XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoSGFzaCcpO1xuXG5cdCAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuXHQgICAgICB0aGlzLnB1c2hQYXJhbShwYWlyc1tpXS52YWx1ZSk7XG5cdCAgICB9XG5cdCAgICB3aGlsZSAoaS0tKSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhc3NpZ25Ub0hhc2gnLCBwYWlyc1tpXS5rZXkpO1xuXHQgICAgfVxuXHQgICAgdGhpcy5vcGNvZGUoJ3BvcEhhc2gnKTtcblx0ICB9LFxuXG5cdCAgLy8gSEVMUEVSU1xuXHQgIG9wY29kZTogZnVuY3Rpb24gb3Bjb2RlKG5hbWUpIHtcblx0ICAgIHRoaXMub3Bjb2Rlcy5wdXNoKHsgb3Bjb2RlOiBuYW1lLCBhcmdzOiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGxvYzogdGhpcy5zb3VyY2VOb2RlWzBdLmxvYyB9KTtcblx0ICB9LFxuXG5cdCAgYWRkRGVwdGg6IGZ1bmN0aW9uIGFkZERlcHRoKGRlcHRoKSB7XG5cdCAgICBpZiAoIWRlcHRoKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgdGhpcy51c2VEZXB0aHMgPSB0cnVlO1xuXHQgIH0sXG5cblx0ICBjbGFzc2lmeVNleHByOiBmdW5jdGlvbiBjbGFzc2lmeVNleHByKHNleHByKSB7XG5cdCAgICB2YXIgaXNTaW1wbGUgPSBfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuc2ltcGxlSWQoc2V4cHIucGF0aCk7XG5cblx0ICAgIHZhciBpc0Jsb2NrUGFyYW0gPSBpc1NpbXBsZSAmJiAhIXRoaXMuYmxvY2tQYXJhbUluZGV4KHNleHByLnBhdGgucGFydHNbMF0pO1xuXG5cdCAgICAvLyBhIG11c3RhY2hlIGlzIGFuIGVsaWdpYmxlIGhlbHBlciBpZjpcblx0ICAgIC8vICogaXRzIGlkIGlzIHNpbXBsZSAoYSBzaW5nbGUgcGFydCwgbm90IGB0aGlzYCBvciBgLi5gKVxuXHQgICAgdmFyIGlzSGVscGVyID0gIWlzQmxvY2tQYXJhbSAmJiBfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuaGVscGVyRXhwcmVzc2lvbihzZXhwcik7XG5cblx0ICAgIC8vIGlmIGEgbXVzdGFjaGUgaXMgYW4gZWxpZ2libGUgaGVscGVyIGJ1dCBub3QgYSBkZWZpbml0ZVxuXHQgICAgLy8gaGVscGVyLCBpdCBpcyBhbWJpZ3VvdXMsIGFuZCB3aWxsIGJlIHJlc29sdmVkIGluIGEgbGF0ZXJcblx0ICAgIC8vIHBhc3Mgb3IgYXQgcnVudGltZS5cblx0ICAgIHZhciBpc0VsaWdpYmxlID0gIWlzQmxvY2tQYXJhbSAmJiAoaXNIZWxwZXIgfHwgaXNTaW1wbGUpO1xuXG5cdCAgICAvLyBpZiBhbWJpZ3VvdXMsIHdlIGNhbiBwb3NzaWJseSByZXNvbHZlIHRoZSBhbWJpZ3VpdHkgbm93XG5cdCAgICAvLyBBbiBlbGlnaWJsZSBoZWxwZXIgaXMgb25lIHRoYXQgZG9lcyBub3QgaGF2ZSBhIGNvbXBsZXggcGF0aCwgaS5lLiBgdGhpcy5mb29gLCBgLi4vZm9vYCBldGMuXG5cdCAgICBpZiAoaXNFbGlnaWJsZSAmJiAhaXNIZWxwZXIpIHtcblx0ICAgICAgdmFyIF9uYW1lMiA9IHNleHByLnBhdGgucGFydHNbMF0sXG5cdCAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG5cdCAgICAgIGlmIChvcHRpb25zLmtub3duSGVscGVyc1tfbmFtZTJdKSB7XG5cdCAgICAgICAgaXNIZWxwZXIgPSB0cnVlO1xuXHQgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMua25vd25IZWxwZXJzT25seSkge1xuXHQgICAgICAgIGlzRWxpZ2libGUgPSBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAoaXNIZWxwZXIpIHtcblx0ICAgICAgcmV0dXJuICdoZWxwZXInO1xuXHQgICAgfSBlbHNlIGlmIChpc0VsaWdpYmxlKSB7XG5cdCAgICAgIHJldHVybiAnYW1iaWd1b3VzJztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiAnc2ltcGxlJztcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcHVzaFBhcmFtczogZnVuY3Rpb24gcHVzaFBhcmFtcyhwYXJhbXMpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsID0gcGFyYW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICB0aGlzLnB1c2hQYXJhbShwYXJhbXNbaV0pO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBwdXNoUGFyYW06IGZ1bmN0aW9uIHB1c2hQYXJhbSh2YWwpIHtcblx0ICAgIHZhciB2YWx1ZSA9IHZhbC52YWx1ZSAhPSBudWxsID8gdmFsLnZhbHVlIDogdmFsLm9yaWdpbmFsIHx8ICcnO1xuXG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgaWYgKHZhbHVlLnJlcGxhY2UpIHtcblx0ICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14oXFwuP1xcLlxcLykqL2csICcnKS5yZXBsYWNlKC9cXC8vZywgJy4nKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGlmICh2YWwuZGVwdGgpIHtcblx0ICAgICAgICB0aGlzLmFkZERlcHRoKHZhbC5kZXB0aCk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCB2YWwuZGVwdGggfHwgMCk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoU3RyaW5nUGFyYW0nLCB2YWx1ZSwgdmFsLnR5cGUpO1xuXG5cdCAgICAgIGlmICh2YWwudHlwZSA9PT0gJ1N1YkV4cHJlc3Npb24nKSB7XG5cdCAgICAgICAgLy8gU3ViRXhwcmVzc2lvbnMgZ2V0IGV2YWx1YXRlZCBhbmQgcGFzc2VkIGluXG5cdCAgICAgICAgLy8gaW4gc3RyaW5nIHBhcmFtcyBtb2RlLlxuXHQgICAgICAgIHRoaXMuYWNjZXB0KHZhbCk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgICAgdmFyIGJsb2NrUGFyYW1JbmRleCA9IHVuZGVmaW5lZDtcblx0ICAgICAgICBpZiAodmFsLnBhcnRzICYmICFfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuc2NvcGVkSWQodmFsKSAmJiAhdmFsLmRlcHRoKSB7XG5cdCAgICAgICAgICBibG9ja1BhcmFtSW5kZXggPSB0aGlzLmJsb2NrUGFyYW1JbmRleCh2YWwucGFydHNbMF0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoYmxvY2tQYXJhbUluZGV4KSB7XG5cdCAgICAgICAgICB2YXIgYmxvY2tQYXJhbUNoaWxkID0gdmFsLnBhcnRzLnNsaWNlKDEpLmpvaW4oJy4nKTtcblx0ICAgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoSWQnLCAnQmxvY2tQYXJhbScsIGJsb2NrUGFyYW1JbmRleCwgYmxvY2tQYXJhbUNoaWxkKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgdmFsdWUgPSB2YWwub3JpZ2luYWwgfHwgdmFsdWU7XG5cdCAgICAgICAgICBpZiAodmFsdWUucmVwbGFjZSkge1xuXHQgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL150aGlzKD86XFwufCQpLywgJycpLnJlcGxhY2UoL15cXC5cXC8vLCAnJykucmVwbGFjZSgvXlxcLiQvLCAnJyk7XG5cdCAgICAgICAgICB9XG5cblx0ICAgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoSWQnLCB2YWwudHlwZSwgdmFsdWUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICB0aGlzLmFjY2VwdCh2YWwpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBzZXR1cEZ1bGxNdXN0YWNoZVBhcmFtczogZnVuY3Rpb24gc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMoc2V4cHIsIHByb2dyYW0sIGludmVyc2UsIG9taXRFbXB0eSkge1xuXHQgICAgdmFyIHBhcmFtcyA9IHNleHByLnBhcmFtcztcblx0ICAgIHRoaXMucHVzaFBhcmFtcyhwYXJhbXMpO1xuXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXG5cdCAgICBpZiAoc2V4cHIuaGFzaCkge1xuXHQgICAgICB0aGlzLmFjY2VwdChzZXhwci5oYXNoKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdlbXB0eUhhc2gnLCBvbWl0RW1wdHkpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcGFyYW1zO1xuXHQgIH0sXG5cblx0ICBibG9ja1BhcmFtSW5kZXg6IGZ1bmN0aW9uIGJsb2NrUGFyYW1JbmRleChuYW1lKSB7XG5cdCAgICBmb3IgKHZhciBkZXB0aCA9IDAsIGxlbiA9IHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy5sZW5ndGg7IGRlcHRoIDwgbGVuOyBkZXB0aCsrKSB7XG5cdCAgICAgIHZhciBibG9ja1BhcmFtcyA9IHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtc1tkZXB0aF0sXG5cdCAgICAgICAgICBwYXJhbSA9IGJsb2NrUGFyYW1zICYmIF91dGlscy5pbmRleE9mKGJsb2NrUGFyYW1zLCBuYW1lKTtcblx0ICAgICAgaWYgKGJsb2NrUGFyYW1zICYmIHBhcmFtID49IDApIHtcblx0ICAgICAgICByZXR1cm4gW2RlcHRoLCBwYXJhbV07XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cdH07XG5cblx0ZnVuY3Rpb24gcHJlY29tcGlsZShpbnB1dCwgb3B0aW9ucywgZW52KSB7XG5cdCAgaWYgKGlucHV0ID09IG51bGwgfHwgdHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyAmJiBpbnB1dC50eXBlICE9PSAnUHJvZ3JhbScpIHtcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdZb3UgbXVzdCBwYXNzIGEgc3RyaW5nIG9yIEhhbmRsZWJhcnMgQVNUIHRvIEhhbmRsZWJhcnMucHJlY29tcGlsZS4gWW91IHBhc3NlZCAnICsgaW5wdXQpO1xuXHQgIH1cblxuXHQgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQgIGlmICghKCdkYXRhJyBpbiBvcHRpb25zKSkge1xuXHQgICAgb3B0aW9ucy5kYXRhID0gdHJ1ZTtcblx0ICB9XG5cdCAgaWYgKG9wdGlvbnMuY29tcGF0KSB7XG5cdCAgICBvcHRpb25zLnVzZURlcHRocyA9IHRydWU7XG5cdCAgfVxuXG5cdCAgdmFyIGFzdCA9IGVudi5wYXJzZShpbnB1dCwgb3B0aW9ucyksXG5cdCAgICAgIGVudmlyb25tZW50ID0gbmV3IGVudi5Db21waWxlcigpLmNvbXBpbGUoYXN0LCBvcHRpb25zKTtcblx0ICByZXR1cm4gbmV3IGVudi5KYXZhU2NyaXB0Q29tcGlsZXIoKS5jb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNvbXBpbGUoaW5wdXQsIG9wdGlvbnMsIGVudikge1xuXHQgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIG9wdGlvbnMgPSB7fTtcblxuXHQgIGlmIChpbnB1dCA9PSBudWxsIHx8IHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgJiYgaW5wdXQudHlwZSAhPT0gJ1Byb2dyYW0nKSB7XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnWW91IG11c3QgcGFzcyBhIHN0cmluZyBvciBIYW5kbGViYXJzIEFTVCB0byBIYW5kbGViYXJzLmNvbXBpbGUuIFlvdSBwYXNzZWQgJyArIGlucHV0KTtcblx0ICB9XG5cblx0ICBvcHRpb25zID0gX3V0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucyk7XG5cdCAgaWYgKCEoJ2RhdGEnIGluIG9wdGlvbnMpKSB7XG5cdCAgICBvcHRpb25zLmRhdGEgPSB0cnVlO1xuXHQgIH1cblx0ICBpZiAob3B0aW9ucy5jb21wYXQpIHtcblx0ICAgIG9wdGlvbnMudXNlRGVwdGhzID0gdHJ1ZTtcblx0ICB9XG5cblx0ICB2YXIgY29tcGlsZWQgPSB1bmRlZmluZWQ7XG5cblx0ICBmdW5jdGlvbiBjb21waWxlSW5wdXQoKSB7XG5cdCAgICB2YXIgYXN0ID0gZW52LnBhcnNlKGlucHV0LCBvcHRpb25zKSxcblx0ICAgICAgICBlbnZpcm9ubWVudCA9IG5ldyBlbnYuQ29tcGlsZXIoKS5jb21waWxlKGFzdCwgb3B0aW9ucyksXG5cdCAgICAgICAgdGVtcGxhdGVTcGVjID0gbmV3IGVudi5KYXZhU2NyaXB0Q29tcGlsZXIoKS5jb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zLCB1bmRlZmluZWQsIHRydWUpO1xuXHQgICAgcmV0dXJuIGVudi50ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMpO1xuXHQgIH1cblxuXHQgIC8vIFRlbXBsYXRlIGlzIG9ubHkgY29tcGlsZWQgb24gZmlyc3QgdXNlIGFuZCBjYWNoZWQgYWZ0ZXIgdGhhdCBwb2ludC5cblx0ICBmdW5jdGlvbiByZXQoY29udGV4dCwgZXhlY09wdGlvbnMpIHtcblx0ICAgIGlmICghY29tcGlsZWQpIHtcblx0ICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjb21waWxlZC5jYWxsKHRoaXMsIGNvbnRleHQsIGV4ZWNPcHRpb25zKTtcblx0ICB9XG5cdCAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uIChzZXR1cE9wdGlvbnMpIHtcblx0ICAgIGlmICghY29tcGlsZWQpIHtcblx0ICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjb21waWxlZC5fc2V0dXAoc2V0dXBPcHRpb25zKTtcblx0ICB9O1xuXHQgIHJldC5fY2hpbGQgPSBmdW5jdGlvbiAoaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgICAgaWYgKCFjb21waWxlZCkge1xuXHQgICAgICBjb21waWxlZCA9IGNvbXBpbGVJbnB1dCgpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNvbXBpbGVkLl9jaGlsZChpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICB9O1xuXHQgIHJldHVybiByZXQ7XG5cdH1cblxuXHRmdW5jdGlvbiBhcmdFcXVhbHMoYSwgYikge1xuXHQgIGlmIChhID09PSBiKSB7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cblx0ICBpZiAoX3V0aWxzLmlzQXJyYXkoYSkgJiYgX3V0aWxzLmlzQXJyYXkoYikgJiYgYS5sZW5ndGggPT09IGIubGVuZ3RoKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgaWYgKCFhcmdFcXVhbHMoYVtpXSwgYltpXSkpIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIHRyYW5zZm9ybUxpdGVyYWxUb1BhdGgoc2V4cHIpIHtcblx0ICBpZiAoIXNleHByLnBhdGgucGFydHMpIHtcblx0ICAgIHZhciBsaXRlcmFsID0gc2V4cHIucGF0aDtcblx0ICAgIC8vIENhc3RpbmcgdG8gc3RyaW5nIGhlcmUgdG8gbWFrZSBmYWxzZSBhbmQgMCBsaXRlcmFsIHZhbHVlcyBwbGF5IG5pY2VseSB3aXRoIHRoZSByZXN0XG5cdCAgICAvLyBvZiB0aGUgc3lzdGVtLlxuXHQgICAgc2V4cHIucGF0aCA9IHtcblx0ICAgICAgdHlwZTogJ1BhdGhFeHByZXNzaW9uJyxcblx0ICAgICAgZGF0YTogZmFsc2UsXG5cdCAgICAgIGRlcHRoOiAwLFxuXHQgICAgICBwYXJ0czogW2xpdGVyYWwub3JpZ2luYWwgKyAnJ10sXG5cdCAgICAgIG9yaWdpbmFsOiBsaXRlcmFsLm9yaWdpbmFsICsgJycsXG5cdCAgICAgIGxvYzogbGl0ZXJhbC5sb2Ncblx0ICAgIH07XG5cdCAgfVxuXHR9XG5cbi8qKiovIH0pLFxuLyogNDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2Jhc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfY29kZUdlbiA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpO1xuXG5cdHZhciBfY29kZUdlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2RlR2VuKTtcblxuXHRmdW5jdGlvbiBMaXRlcmFsKHZhbHVlKSB7XG5cdCAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gSmF2YVNjcmlwdENvbXBpbGVyKCkge31cblxuXHRKYXZhU2NyaXB0Q29tcGlsZXIucHJvdG90eXBlID0ge1xuXHQgIC8vIFBVQkxJQyBBUEk6IFlvdSBjYW4gb3ZlcnJpZGUgdGhlc2UgbWV0aG9kcyBpbiBhIHN1YmNsYXNzIHRvIHByb3ZpZGVcblx0ICAvLyBhbHRlcm5hdGl2ZSBjb21waWxlZCBmb3JtcyBmb3IgbmFtZSBsb29rdXAgYW5kIGJ1ZmZlcmluZyBzZW1hbnRpY3Ncblx0ICBuYW1lTG9va3VwOiBmdW5jdGlvbiBuYW1lTG9va3VwKHBhcmVudCwgbmFtZSAvKiAsIHR5cGUqLykge1xuXHQgICAgaWYgKEphdmFTY3JpcHRDb21waWxlci5pc1ZhbGlkSmF2YVNjcmlwdFZhcmlhYmxlTmFtZShuYW1lKSkge1xuXHQgICAgICByZXR1cm4gW3BhcmVudCwgJy4nLCBuYW1lXTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBbcGFyZW50LCAnWycsIEpTT04uc3RyaW5naWZ5KG5hbWUpLCAnXSddO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgZGVwdGhlZExvb2t1cDogZnVuY3Rpb24gZGVwdGhlZExvb2t1cChuYW1lKSB7XG5cdCAgICByZXR1cm4gW3RoaXMuYWxpYXNhYmxlKCdjb250YWluZXIubG9va3VwJyksICcoZGVwdGhzLCBcIicsIG5hbWUsICdcIiknXTtcblx0ICB9LFxuXG5cdCAgY29tcGlsZXJJbmZvOiBmdW5jdGlvbiBjb21waWxlckluZm8oKSB7XG5cdCAgICB2YXIgcmV2aXNpb24gPSBfYmFzZS5DT01QSUxFUl9SRVZJU0lPTixcblx0ICAgICAgICB2ZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbcmV2aXNpb25dO1xuXHQgICAgcmV0dXJuIFtyZXZpc2lvbiwgdmVyc2lvbnNdO1xuXHQgIH0sXG5cblx0ICBhcHBlbmRUb0J1ZmZlcjogZnVuY3Rpb24gYXBwZW5kVG9CdWZmZXIoc291cmNlLCBsb2NhdGlvbiwgZXhwbGljaXQpIHtcblx0ICAgIC8vIEZvcmNlIGEgc291cmNlIGFzIHRoaXMgc2ltcGxpZmllcyB0aGUgbWVyZ2UgbG9naWMuXG5cdCAgICBpZiAoIV91dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcblx0ICAgICAgc291cmNlID0gW3NvdXJjZV07XG5cdCAgICB9XG5cdCAgICBzb3VyY2UgPSB0aGlzLnNvdXJjZS53cmFwKHNvdXJjZSwgbG9jYXRpb24pO1xuXG5cdCAgICBpZiAodGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSkge1xuXHQgICAgICByZXR1cm4gWydyZXR1cm4gJywgc291cmNlLCAnOyddO1xuXHQgICAgfSBlbHNlIGlmIChleHBsaWNpdCkge1xuXHQgICAgICAvLyBUaGlzIGlzIGEgY2FzZSB3aGVyZSB0aGUgYnVmZmVyIG9wZXJhdGlvbiBvY2N1cnMgYXMgYSBjaGlsZCBvZiBhbm90aGVyXG5cdCAgICAgIC8vIGNvbnN0cnVjdCwgZ2VuZXJhbGx5IGJyYWNlcy4gV2UgaGF2ZSB0byBleHBsaWNpdGx5IG91dHB1dCB0aGVzZSBidWZmZXJcblx0ICAgICAgLy8gb3BlcmF0aW9ucyB0byBlbnN1cmUgdGhhdCB0aGUgZW1pdHRlZCBjb2RlIGdvZXMgaW4gdGhlIGNvcnJlY3QgbG9jYXRpb24uXG5cdCAgICAgIHJldHVybiBbJ2J1ZmZlciArPSAnLCBzb3VyY2UsICc7J107XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBzb3VyY2UuYXBwZW5kVG9CdWZmZXIgPSB0cnVlO1xuXHQgICAgICByZXR1cm4gc291cmNlO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBpbml0aWFsaXplQnVmZmVyOiBmdW5jdGlvbiBpbml0aWFsaXplQnVmZmVyKCkge1xuXHQgICAgcmV0dXJuIHRoaXMucXVvdGVkU3RyaW5nKCcnKTtcblx0ICB9LFxuXHQgIC8vIEVORCBQVUJMSUMgQVBJXG5cblx0ICBjb21waWxlOiBmdW5jdGlvbiBjb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zLCBjb250ZXh0LCBhc09iamVjdCkge1xuXHQgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHQgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0ICAgIHRoaXMuc3RyaW5nUGFyYW1zID0gdGhpcy5vcHRpb25zLnN0cmluZ1BhcmFtcztcblx0ICAgIHRoaXMudHJhY2tJZHMgPSB0aGlzLm9wdGlvbnMudHJhY2tJZHM7XG5cdCAgICB0aGlzLnByZWNvbXBpbGUgPSAhYXNPYmplY3Q7XG5cblx0ICAgIHRoaXMubmFtZSA9IHRoaXMuZW52aXJvbm1lbnQubmFtZTtcblx0ICAgIHRoaXMuaXNDaGlsZCA9ICEhY29udGV4dDtcblx0ICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwge1xuXHQgICAgICBkZWNvcmF0b3JzOiBbXSxcblx0ICAgICAgcHJvZ3JhbXM6IFtdLFxuXHQgICAgICBlbnZpcm9ubWVudHM6IFtdXG5cdCAgICB9O1xuXG5cdCAgICB0aGlzLnByZWFtYmxlKCk7XG5cblx0ICAgIHRoaXMuc3RhY2tTbG90ID0gMDtcblx0ICAgIHRoaXMuc3RhY2tWYXJzID0gW107XG5cdCAgICB0aGlzLmFsaWFzZXMgPSB7fTtcblx0ICAgIHRoaXMucmVnaXN0ZXJzID0geyBsaXN0OiBbXSB9O1xuXHQgICAgdGhpcy5oYXNoZXMgPSBbXTtcblx0ICAgIHRoaXMuY29tcGlsZVN0YWNrID0gW107XG5cdCAgICB0aGlzLmlubGluZVN0YWNrID0gW107XG5cdCAgICB0aGlzLmJsb2NrUGFyYW1zID0gW107XG5cblx0ICAgIHRoaXMuY29tcGlsZUNoaWxkcmVuKGVudmlyb25tZW50LCBvcHRpb25zKTtcblxuXHQgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCBlbnZpcm9ubWVudC51c2VEZXB0aHMgfHwgZW52aXJvbm1lbnQudXNlRGVjb3JhdG9ycyB8fCB0aGlzLm9wdGlvbnMuY29tcGF0O1xuXHQgICAgdGhpcy51c2VCbG9ja1BhcmFtcyA9IHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgZW52aXJvbm1lbnQudXNlQmxvY2tQYXJhbXM7XG5cblx0ICAgIHZhciBvcGNvZGVzID0gZW52aXJvbm1lbnQub3Bjb2Rlcyxcblx0ICAgICAgICBvcGNvZGUgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgZmlyc3RMb2MgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgaSA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBsID0gdW5kZWZpbmVkO1xuXG5cdCAgICBmb3IgKGkgPSAwLCBsID0gb3Bjb2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgb3Bjb2RlID0gb3Bjb2Rlc1tpXTtcblxuXHQgICAgICB0aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb24gPSBvcGNvZGUubG9jO1xuXHQgICAgICBmaXJzdExvYyA9IGZpcnN0TG9jIHx8IG9wY29kZS5sb2M7XG5cdCAgICAgIHRoaXNbb3Bjb2RlLm9wY29kZV0uYXBwbHkodGhpcywgb3Bjb2RlLmFyZ3MpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBGbHVzaCBhbnkgdHJhaWxpbmcgY29udGVudCB0aGF0IG1pZ2h0IGJlIHBlbmRpbmcuXG5cdCAgICB0aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb24gPSBmaXJzdExvYztcblx0ICAgIHRoaXMucHVzaFNvdXJjZSgnJyk7XG5cblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgICBpZiAodGhpcy5zdGFja1Nsb3QgfHwgdGhpcy5pbmxpbmVTdGFjay5sZW5ndGggfHwgdGhpcy5jb21waWxlU3RhY2subGVuZ3RoKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdDb21waWxlIGNvbXBsZXRlZCB3aXRoIGNvbnRlbnQgbGVmdCBvbiBzdGFjaycpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoIXRoaXMuZGVjb3JhdG9ycy5pc0VtcHR5KCkpIHtcblx0ICAgICAgdGhpcy51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblxuXHQgICAgICB0aGlzLmRlY29yYXRvcnMucHJlcGVuZCgndmFyIGRlY29yYXRvcnMgPSBjb250YWluZXIuZGVjb3JhdG9ycztcXG4nKTtcblx0ICAgICAgdGhpcy5kZWNvcmF0b3JzLnB1c2goJ3JldHVybiBmbjsnKTtcblxuXHQgICAgICBpZiAoYXNPYmplY3QpIHtcblx0ICAgICAgICB0aGlzLmRlY29yYXRvcnMgPSBGdW5jdGlvbi5hcHBseSh0aGlzLCBbJ2ZuJywgJ3Byb3BzJywgJ2NvbnRhaW5lcicsICdkZXB0aDAnLCAnZGF0YScsICdibG9ja1BhcmFtcycsICdkZXB0aHMnLCB0aGlzLmRlY29yYXRvcnMubWVyZ2UoKV0pO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuZGVjb3JhdG9ycy5wcmVwZW5kKCdmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGgwLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XFxuJyk7XG5cdCAgICAgICAgdGhpcy5kZWNvcmF0b3JzLnB1c2goJ31cXG4nKTtcblx0ICAgICAgICB0aGlzLmRlY29yYXRvcnMgPSB0aGlzLmRlY29yYXRvcnMubWVyZ2UoKTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5kZWNvcmF0b3JzID0gdW5kZWZpbmVkO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgZm4gPSB0aGlzLmNyZWF0ZUZ1bmN0aW9uQ29udGV4dChhc09iamVjdCk7XG5cdCAgICBpZiAoIXRoaXMuaXNDaGlsZCkge1xuXHQgICAgICB2YXIgcmV0ID0ge1xuXHQgICAgICAgIGNvbXBpbGVyOiB0aGlzLmNvbXBpbGVySW5mbygpLFxuXHQgICAgICAgIG1haW46IGZuXG5cdCAgICAgIH07XG5cblx0ICAgICAgaWYgKHRoaXMuZGVjb3JhdG9ycykge1xuXHQgICAgICAgIHJldC5tYWluX2QgPSB0aGlzLmRlY29yYXRvcnM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG5cdCAgICAgICAgcmV0LnVzZURlY29yYXRvcnMgPSB0cnVlO1xuXHQgICAgICB9XG5cblx0ICAgICAgdmFyIF9jb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXHQgICAgICB2YXIgcHJvZ3JhbXMgPSBfY29udGV4dC5wcm9ncmFtcztcblx0ICAgICAgdmFyIGRlY29yYXRvcnMgPSBfY29udGV4dC5kZWNvcmF0b3JzO1xuXG5cdCAgICAgIGZvciAoaSA9IDAsIGwgPSBwcm9ncmFtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgICBpZiAocHJvZ3JhbXNbaV0pIHtcblx0ICAgICAgICAgIHJldFtpXSA9IHByb2dyYW1zW2ldO1xuXHQgICAgICAgICAgaWYgKGRlY29yYXRvcnNbaV0pIHtcblx0ICAgICAgICAgICAgcmV0W2kgKyAnX2QnXSA9IGRlY29yYXRvcnNbaV07XG5cdCAgICAgICAgICAgIHJldC51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAodGhpcy5lbnZpcm9ubWVudC51c2VQYXJ0aWFsKSB7XG5cdCAgICAgICAgcmV0LnVzZVBhcnRpYWwgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGF0YSkge1xuXHQgICAgICAgIHJldC51c2VEYXRhID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy51c2VEZXB0aHMpIHtcblx0ICAgICAgICByZXQudXNlRGVwdGhzID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy51c2VCbG9ja1BhcmFtcykge1xuXHQgICAgICAgIHJldC51c2VCbG9ja1BhcmFtcyA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXQpIHtcblx0ICAgICAgICByZXQuY29tcGF0ID0gdHJ1ZTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGlmICghYXNPYmplY3QpIHtcblx0ICAgICAgICByZXQuY29tcGlsZXIgPSBKU09OLnN0cmluZ2lmeShyZXQuY29tcGlsZXIpO1xuXG5cdCAgICAgICAgdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uID0geyBzdGFydDogeyBsaW5lOiAxLCBjb2x1bW46IDAgfSB9O1xuXHQgICAgICAgIHJldCA9IHRoaXMub2JqZWN0TGl0ZXJhbChyZXQpO1xuXG5cdCAgICAgICAgaWYgKG9wdGlvbnMuc3JjTmFtZSkge1xuXHQgICAgICAgICAgcmV0ID0gcmV0LnRvU3RyaW5nV2l0aFNvdXJjZU1hcCh7IGZpbGU6IG9wdGlvbnMuZGVzdE5hbWUgfSk7XG5cdCAgICAgICAgICByZXQubWFwID0gcmV0Lm1hcCAmJiByZXQubWFwLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHJldCA9IHJldC50b1N0cmluZygpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICByZXQuY29tcGlsZXJPcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBmbjtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcHJlYW1ibGU6IGZ1bmN0aW9uIHByZWFtYmxlKCkge1xuXHQgICAgLy8gdHJhY2sgdGhlIGxhc3QgY29udGV4dCBwdXNoZWQgaW50byBwbGFjZSB0byBhbGxvdyBza2lwcGluZyB0aGVcblx0ICAgIC8vIGdldENvbnRleHQgb3Bjb2RlIHdoZW4gaXQgd291bGQgYmUgYSBub29wXG5cdCAgICB0aGlzLmxhc3RDb250ZXh0ID0gMDtcblx0ICAgIHRoaXMuc291cmNlID0gbmV3IF9jb2RlR2VuMlsnZGVmYXVsdCddKHRoaXMub3B0aW9ucy5zcmNOYW1lKTtcblx0ICAgIHRoaXMuZGVjb3JhdG9ycyA9IG5ldyBfY29kZUdlbjJbJ2RlZmF1bHQnXSh0aGlzLm9wdGlvbnMuc3JjTmFtZSk7XG5cdCAgfSxcblxuXHQgIGNyZWF0ZUZ1bmN0aW9uQ29udGV4dDogZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25Db250ZXh0KGFzT2JqZWN0KSB7XG5cdCAgICB2YXIgdmFyRGVjbGFyYXRpb25zID0gJyc7XG5cblx0ICAgIHZhciBsb2NhbHMgPSB0aGlzLnN0YWNrVmFycy5jb25jYXQodGhpcy5yZWdpc3RlcnMubGlzdCk7XG5cdCAgICBpZiAobG9jYWxzLmxlbmd0aCA+IDApIHtcblx0ICAgICAgdmFyRGVjbGFyYXRpb25zICs9ICcsICcgKyBsb2NhbHMuam9pbignLCAnKTtcblx0ICAgIH1cblxuXHQgICAgLy8gR2VuZXJhdGUgbWluaW1pemVyIGFsaWFzIG1hcHBpbmdzXG5cdCAgICAvL1xuXHQgICAgLy8gV2hlbiB1c2luZyB0cnVlIFNvdXJjZU5vZGVzLCB0aGlzIHdpbGwgdXBkYXRlIGFsbCByZWZlcmVuY2VzIHRvIHRoZSBnaXZlbiBhbGlhc1xuXHQgICAgLy8gYXMgdGhlIHNvdXJjZSBub2RlcyBhcmUgcmV1c2VkIGluIHNpdHUuIEZvciB0aGUgbm9uLXNvdXJjZSBub2RlIGNvbXBpbGF0aW9uIG1vZGUsXG5cdCAgICAvLyBhbGlhc2VzIHdpbGwgbm90IGJlIHVzZWQsIGJ1dCB0aGlzIGNhc2UgaXMgYWxyZWFkeSBiZWluZyBydW4gb24gdGhlIGNsaWVudCBhbmRcblx0ICAgIC8vIHdlIGFyZW4ndCBjb25jZXJuIGFib3V0IG1pbmltaXppbmcgdGhlIHRlbXBsYXRlIHNpemUuXG5cdCAgICB2YXIgYWxpYXNDb3VudCA9IDA7XG5cdCAgICBmb3IgKHZhciBhbGlhcyBpbiB0aGlzLmFsaWFzZXMpIHtcblx0ICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBndWFyZC1mb3ItaW5cblx0ICAgICAgdmFyIG5vZGUgPSB0aGlzLmFsaWFzZXNbYWxpYXNdO1xuXG5cdCAgICAgIGlmICh0aGlzLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoYWxpYXMpICYmIG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5yZWZlcmVuY2VDb3VudCA+IDEpIHtcblx0ICAgICAgICB2YXJEZWNsYXJhdGlvbnMgKz0gJywgYWxpYXMnICsgKythbGlhc0NvdW50ICsgJz0nICsgYWxpYXM7XG5cdCAgICAgICAgbm9kZS5jaGlsZHJlblswXSA9ICdhbGlhcycgKyBhbGlhc0NvdW50O1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHZhciBwYXJhbXMgPSBbJ2NvbnRhaW5lcicsICdkZXB0aDAnLCAnaGVscGVycycsICdwYXJ0aWFscycsICdkYXRhJ107XG5cblx0ICAgIGlmICh0aGlzLnVzZUJsb2NrUGFyYW1zIHx8IHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHBhcmFtcy5wdXNoKCdibG9ja1BhcmFtcycpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHBhcmFtcy5wdXNoKCdkZXB0aHMnKTtcblx0ICAgIH1cblxuXHQgICAgLy8gUGVyZm9ybSBhIHNlY29uZCBwYXNzIG92ZXIgdGhlIG91dHB1dCB0byBtZXJnZSBjb250ZW50IHdoZW4gcG9zc2libGVcblx0ICAgIHZhciBzb3VyY2UgPSB0aGlzLm1lcmdlU291cmNlKHZhckRlY2xhcmF0aW9ucyk7XG5cblx0ICAgIGlmIChhc09iamVjdCkge1xuXHQgICAgICBwYXJhbXMucHVzaChzb3VyY2UpO1xuXG5cdCAgICAgIHJldHVybiBGdW5jdGlvbi5hcHBseSh0aGlzLCBwYXJhbXMpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuc291cmNlLndyYXAoWydmdW5jdGlvbignLCBwYXJhbXMuam9pbignLCcpLCAnKSB7XFxuICAnLCBzb3VyY2UsICd9J10pO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgbWVyZ2VTb3VyY2U6IGZ1bmN0aW9uIG1lcmdlU291cmNlKHZhckRlY2xhcmF0aW9ucykge1xuXHQgICAgdmFyIGlzU2ltcGxlID0gdGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSxcblx0ICAgICAgICBhcHBlbmRPbmx5ID0gIXRoaXMuZm9yY2VCdWZmZXIsXG5cdCAgICAgICAgYXBwZW5kRmlyc3QgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgc291cmNlU2VlbiA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBidWZmZXJTdGFydCA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBidWZmZXJFbmQgPSB1bmRlZmluZWQ7XG5cdCAgICB0aGlzLnNvdXJjZS5lYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG5cdCAgICAgIGlmIChsaW5lLmFwcGVuZFRvQnVmZmVyKSB7XG5cdCAgICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XG5cdCAgICAgICAgICBsaW5lLnByZXBlbmQoJyAgKyAnKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgYnVmZmVyU3RhcnQgPSBsaW5lO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBidWZmZXJFbmQgPSBsaW5lO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGlmIChidWZmZXJTdGFydCkge1xuXHQgICAgICAgICAgaWYgKCFzb3VyY2VTZWVuKSB7XG5cdCAgICAgICAgICAgIGFwcGVuZEZpcnN0ID0gdHJ1ZTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIGJ1ZmZlclN0YXJ0LnByZXBlbmQoJ2J1ZmZlciArPSAnKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIGJ1ZmZlckVuZC5hZGQoJzsnKTtcblx0ICAgICAgICAgIGJ1ZmZlclN0YXJ0ID0gYnVmZmVyRW5kID0gdW5kZWZpbmVkO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHNvdXJjZVNlZW4gPSB0cnVlO1xuXHQgICAgICAgIGlmICghaXNTaW1wbGUpIHtcblx0ICAgICAgICAgIGFwcGVuZE9ubHkgPSBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICBpZiAoYXBwZW5kT25seSkge1xuXHQgICAgICBpZiAoYnVmZmVyU3RhcnQpIHtcblx0ICAgICAgICBidWZmZXJTdGFydC5wcmVwZW5kKCdyZXR1cm4gJyk7XG5cdCAgICAgICAgYnVmZmVyRW5kLmFkZCgnOycpO1xuXHQgICAgICB9IGVsc2UgaWYgKCFzb3VyY2VTZWVuKSB7XG5cdCAgICAgICAgdGhpcy5zb3VyY2UucHVzaCgncmV0dXJuIFwiXCI7Jyk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHZhckRlY2xhcmF0aW9ucyArPSAnLCBidWZmZXIgPSAnICsgKGFwcGVuZEZpcnN0ID8gJycgOiB0aGlzLmluaXRpYWxpemVCdWZmZXIoKSk7XG5cblx0ICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XG5cdCAgICAgICAgYnVmZmVyU3RhcnQucHJlcGVuZCgncmV0dXJuIGJ1ZmZlciArICcpO1xuXHQgICAgICAgIGJ1ZmZlckVuZC5hZGQoJzsnKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLnNvdXJjZS5wdXNoKCdyZXR1cm4gYnVmZmVyOycpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGlmICh2YXJEZWNsYXJhdGlvbnMpIHtcblx0ICAgICAgdGhpcy5zb3VyY2UucHJlcGVuZCgndmFyICcgKyB2YXJEZWNsYXJhdGlvbnMuc3Vic3RyaW5nKDIpICsgKGFwcGVuZEZpcnN0ID8gJycgOiAnO1xcbicpKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHRoaXMuc291cmNlLm1lcmdlKCk7XG5cdCAgfSxcblxuXHQgIC8vIFtibG9ja1ZhbHVlXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgdmFsdWVcblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJldHVybiB2YWx1ZSBvZiBibG9ja0hlbHBlck1pc3Npbmdcblx0ICAvL1xuXHQgIC8vIFRoZSBwdXJwb3NlIG9mIHRoaXMgb3Bjb2RlIGlzIHRvIHRha2UgYSBibG9jayBvZiB0aGUgZm9ybVxuXHQgIC8vIGB7eyN0aGlzLmZvb319Li4ue3svdGhpcy5mb299fWAsIHJlc29sdmUgdGhlIHZhbHVlIG9mIGBmb29gLCBhbmRcblx0ICAvLyByZXBsYWNlIGl0IG9uIHRoZSBzdGFjayB3aXRoIHRoZSByZXN1bHQgb2YgcHJvcGVybHlcblx0ICAvLyBpbnZva2luZyBibG9ja0hlbHBlck1pc3NpbmcuXG5cdCAgYmxvY2tWYWx1ZTogZnVuY3Rpb24gYmxvY2tWYWx1ZShuYW1lKSB7XG5cdCAgICB2YXIgYmxvY2tIZWxwZXJNaXNzaW5nID0gdGhpcy5hbGlhc2FibGUoJ2hlbHBlcnMuYmxvY2tIZWxwZXJNaXNzaW5nJyksXG5cdCAgICAgICAgcGFyYW1zID0gW3RoaXMuY29udGV4dE5hbWUoMCldO1xuXHQgICAgdGhpcy5zZXR1cEhlbHBlckFyZ3MobmFtZSwgMCwgcGFyYW1zKTtcblxuXHQgICAgdmFyIGJsb2NrTmFtZSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIHBhcmFtcy5zcGxpY2UoMSwgMCwgYmxvY2tOYW1lKTtcblxuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChibG9ja0hlbHBlck1pc3NpbmcsICdjYWxsJywgcGFyYW1zKSk7XG5cdCAgfSxcblxuXHQgIC8vIFthbWJpZ3VvdXNCbG9ja1ZhbHVlXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgdmFsdWVcblx0ICAvLyBDb21waWxlciB2YWx1ZSwgYmVmb3JlOiBsYXN0SGVscGVyPXZhbHVlIG9mIGxhc3QgZm91bmQgaGVscGVyLCBpZiBhbnlcblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXIsIGlmIG5vIGxhc3RIZWxwZXI6IHNhbWUgYXMgW2Jsb2NrVmFsdWVdXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyLCBpZiBsYXN0SGVscGVyOiB2YWx1ZVxuXHQgIGFtYmlndW91c0Jsb2NrVmFsdWU6IGZ1bmN0aW9uIGFtYmlndW91c0Jsb2NrVmFsdWUoKSB7XG5cdCAgICAvLyBXZSdyZSBiZWluZyBhIGJpdCBjaGVla3kgYW5kIHJldXNpbmcgdGhlIG9wdGlvbnMgdmFsdWUgZnJvbSB0aGUgcHJpb3IgZXhlY1xuXHQgICAgdmFyIGJsb2NrSGVscGVyTWlzc2luZyA9IHRoaXMuYWxpYXNhYmxlKCdoZWxwZXJzLmJsb2NrSGVscGVyTWlzc2luZycpLFxuXHQgICAgICAgIHBhcmFtcyA9IFt0aGlzLmNvbnRleHROYW1lKDApXTtcblx0ICAgIHRoaXMuc2V0dXBIZWxwZXJBcmdzKCcnLCAwLCBwYXJhbXMsIHRydWUpO1xuXG5cdCAgICB0aGlzLmZsdXNoSW5saW5lKCk7XG5cblx0ICAgIHZhciBjdXJyZW50ID0gdGhpcy50b3BTdGFjaygpO1xuXHQgICAgcGFyYW1zLnNwbGljZSgxLCAwLCBjdXJyZW50KTtcblxuXHQgICAgdGhpcy5wdXNoU291cmNlKFsnaWYgKCEnLCB0aGlzLmxhc3RIZWxwZXIsICcpIHsgJywgY3VycmVudCwgJyA9ICcsIHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChibG9ja0hlbHBlck1pc3NpbmcsICdjYWxsJywgcGFyYW1zKSwgJ30nXSk7XG5cdCAgfSxcblxuXHQgIC8vIFthcHBlbmRDb250ZW50XVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cblx0ICAvL1xuXHQgIC8vIEFwcGVuZHMgdGhlIHN0cmluZyB2YWx1ZSBvZiBgY29udGVudGAgdG8gdGhlIGN1cnJlbnQgYnVmZmVyXG5cdCAgYXBwZW5kQ29udGVudDogZnVuY3Rpb24gYXBwZW5kQ29udGVudChjb250ZW50KSB7XG5cdCAgICBpZiAodGhpcy5wZW5kaW5nQ29udGVudCkge1xuXHQgICAgICBjb250ZW50ID0gdGhpcy5wZW5kaW5nQ29udGVudCArIGNvbnRlbnQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLnBlbmRpbmdMb2NhdGlvbiA9IHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbjtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5wZW5kaW5nQ29udGVudCA9IGNvbnRlbnQ7XG5cdCAgfSxcblxuXHQgIC8vIFthcHBlbmRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cblx0ICAvL1xuXHQgIC8vIENvZXJjZXMgYHZhbHVlYCB0byBhIFN0cmluZyBhbmQgYXBwZW5kcyBpdCB0byB0aGUgY3VycmVudCBidWZmZXIuXG5cdCAgLy9cblx0ICAvLyBJZiBgdmFsdWVgIGlzIHRydXRoeSwgb3IgMCwgaXQgaXMgY29lcmNlZCBpbnRvIGEgc3RyaW5nIGFuZCBhcHBlbmRlZFxuXHQgIC8vIE90aGVyd2lzZSwgdGhlIGVtcHR5IHN0cmluZyBpcyBhcHBlbmRlZFxuXHQgIGFwcGVuZDogZnVuY3Rpb24gYXBwZW5kKCkge1xuXHQgICAgaWYgKHRoaXMuaXNJbmxpbmUoKSkge1xuXHQgICAgICB0aGlzLnJlcGxhY2VTdGFjayhmdW5jdGlvbiAoY3VycmVudCkge1xuXHQgICAgICAgIHJldHVybiBbJyAhPSBudWxsID8gJywgY3VycmVudCwgJyA6IFwiXCInXTtcblx0ICAgICAgfSk7XG5cblx0ICAgICAgdGhpcy5wdXNoU291cmNlKHRoaXMuYXBwZW5kVG9CdWZmZXIodGhpcy5wb3BTdGFjaygpKSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB2YXIgbG9jYWwgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIHRoaXMucHVzaFNvdXJjZShbJ2lmICgnLCBsb2NhbCwgJyAhPSBudWxsKSB7ICcsIHRoaXMuYXBwZW5kVG9CdWZmZXIobG9jYWwsIHVuZGVmaW5lZCwgdHJ1ZSksICcgfSddKTtcblx0ICAgICAgaWYgKHRoaXMuZW52aXJvbm1lbnQuaXNTaW1wbGUpIHtcblx0ICAgICAgICB0aGlzLnB1c2hTb3VyY2UoWydlbHNlIHsgJywgdGhpcy5hcHBlbmRUb0J1ZmZlcihcIicnXCIsIHVuZGVmaW5lZCwgdHJ1ZSksICcgfSddKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvLyBbYXBwZW5kRXNjYXBlZF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IHZhbHVlLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuXHQgIC8vXG5cdCAgLy8gRXNjYXBlIGB2YWx1ZWAgYW5kIGFwcGVuZCBpdCB0byB0aGUgYnVmZmVyXG5cdCAgYXBwZW5kRXNjYXBlZDogZnVuY3Rpb24gYXBwZW5kRXNjYXBlZCgpIHtcblx0ICAgIHRoaXMucHVzaFNvdXJjZSh0aGlzLmFwcGVuZFRvQnVmZmVyKFt0aGlzLmFsaWFzYWJsZSgnY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24nKSwgJygnLCB0aGlzLnBvcFN0YWNrKCksICcpJ10pKTtcblx0ICB9LFxuXG5cdCAgLy8gW2dldENvbnRleHRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuXHQgIC8vIENvbXBpbGVyIHZhbHVlLCBhZnRlcjogbGFzdENvbnRleHQ9ZGVwdGhcblx0ICAvL1xuXHQgIC8vIFNldCB0aGUgdmFsdWUgb2YgdGhlIGBsYXN0Q29udGV4dGAgY29tcGlsZXIgdmFsdWUgdG8gdGhlIGRlcHRoXG5cdCAgZ2V0Q29udGV4dDogZnVuY3Rpb24gZ2V0Q29udGV4dChkZXB0aCkge1xuXHQgICAgdGhpcy5sYXN0Q29udGV4dCA9IGRlcHRoO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaENvbnRleHRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGN1cnJlbnRDb250ZXh0LCAuLi5cblx0ICAvL1xuXHQgIC8vIFB1c2hlcyB0aGUgdmFsdWUgb2YgdGhlIGN1cnJlbnQgY29udGV4dCBvbnRvIHRoZSBzdGFjay5cblx0ICBwdXNoQ29udGV4dDogZnVuY3Rpb24gcHVzaENvbnRleHQoKSB7XG5cdCAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwodGhpcy5jb250ZXh0TmFtZSh0aGlzLmxhc3RDb250ZXh0KSk7XG5cdCAgfSxcblxuXHQgIC8vIFtsb29rdXBPbkNvbnRleHRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGN1cnJlbnRDb250ZXh0W25hbWVdLCAuLi5cblx0ICAvL1xuXHQgIC8vIExvb2tzIHVwIHRoZSB2YWx1ZSBvZiBgbmFtZWAgb24gdGhlIGN1cnJlbnQgY29udGV4dCBhbmQgcHVzaGVzXG5cdCAgLy8gaXQgb250byB0aGUgc3RhY2suXG5cdCAgbG9va3VwT25Db250ZXh0OiBmdW5jdGlvbiBsb29rdXBPbkNvbnRleHQocGFydHMsIGZhbHN5LCBzdHJpY3QsIHNjb3BlZCkge1xuXHQgICAgdmFyIGkgPSAwO1xuXG5cdCAgICBpZiAoIXNjb3BlZCAmJiB0aGlzLm9wdGlvbnMuY29tcGF0ICYmICF0aGlzLmxhc3RDb250ZXh0KSB7XG5cdCAgICAgIC8vIFRoZSBkZXB0aGVkIHF1ZXJ5IGlzIGV4cGVjdGVkIHRvIGhhbmRsZSB0aGUgdW5kZWZpbmVkIGxvZ2ljIGZvciB0aGUgcm9vdCBsZXZlbCB0aGF0XG5cdCAgICAgIC8vIGlzIGltcGxlbWVudGVkIGJlbG93LCBzbyB3ZSBldmFsdWF0ZSB0aGF0IGRpcmVjdGx5IGluIGNvbXBhdCBtb2RlXG5cdCAgICAgIHRoaXMucHVzaCh0aGlzLmRlcHRoZWRMb29rdXAocGFydHNbaSsrXSkpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5wdXNoQ29udGV4dCgpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnJlc29sdmVQYXRoKCdjb250ZXh0JywgcGFydHMsIGksIGZhbHN5LCBzdHJpY3QpO1xuXHQgIH0sXG5cblx0ICAvLyBbbG9va3VwQmxvY2tQYXJhbV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogYmxvY2tQYXJhbVtuYW1lXSwgLi4uXG5cdCAgLy9cblx0ICAvLyBMb29rcyB1cCB0aGUgdmFsdWUgb2YgYHBhcnRzYCBvbiB0aGUgZ2l2ZW4gYmxvY2sgcGFyYW0gYW5kIHB1c2hlc1xuXHQgIC8vIGl0IG9udG8gdGhlIHN0YWNrLlxuXHQgIGxvb2t1cEJsb2NrUGFyYW06IGZ1bmN0aW9uIGxvb2t1cEJsb2NrUGFyYW0oYmxvY2tQYXJhbUlkLCBwYXJ0cykge1xuXHQgICAgdGhpcy51c2VCbG9ja1BhcmFtcyA9IHRydWU7XG5cblx0ICAgIHRoaXMucHVzaChbJ2Jsb2NrUGFyYW1zWycsIGJsb2NrUGFyYW1JZFswXSwgJ11bJywgYmxvY2tQYXJhbUlkWzFdLCAnXSddKTtcblx0ICAgIHRoaXMucmVzb2x2ZVBhdGgoJ2NvbnRleHQnLCBwYXJ0cywgMSk7XG5cdCAgfSxcblxuXHQgIC8vIFtsb29rdXBEYXRhXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBkYXRhLCAuLi5cblx0ICAvL1xuXHQgIC8vIFB1c2ggdGhlIGRhdGEgbG9va3VwIG9wZXJhdG9yXG5cdCAgbG9va3VwRGF0YTogZnVuY3Rpb24gbG9va3VwRGF0YShkZXB0aCwgcGFydHMsIHN0cmljdCkge1xuXHQgICAgaWYgKCFkZXB0aCkge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ2RhdGEnKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgnY29udGFpbmVyLmRhdGEoZGF0YSwgJyArIGRlcHRoICsgJyknKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5yZXNvbHZlUGF0aCgnZGF0YScsIHBhcnRzLCAwLCB0cnVlLCBzdHJpY3QpO1xuXHQgIH0sXG5cblx0ICByZXNvbHZlUGF0aDogZnVuY3Rpb24gcmVzb2x2ZVBhdGgodHlwZSwgcGFydHMsIGksIGZhbHN5LCBzdHJpY3QpIHtcblx0ICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cblx0ICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cblx0ICAgIGlmICh0aGlzLm9wdGlvbnMuc3RyaWN0IHx8IHRoaXMub3B0aW9ucy5hc3N1bWVPYmplY3RzKSB7XG5cdCAgICAgIHRoaXMucHVzaChzdHJpY3RMb29rdXAodGhpcy5vcHRpb25zLnN0cmljdCAmJiBzdHJpY3QsIHRoaXMsIHBhcnRzLCB0eXBlKSk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgdmFyIGxlbiA9IHBhcnRzLmxlbmd0aDtcblx0ICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG5cdCAgICAgIHRoaXMucmVwbGFjZVN0YWNrKGZ1bmN0aW9uIChjdXJyZW50KSB7XG5cdCAgICAgICAgdmFyIGxvb2t1cCA9IF90aGlzLm5hbWVMb29rdXAoY3VycmVudCwgcGFydHNbaV0sIHR5cGUpO1xuXHQgICAgICAgIC8vIFdlIHdhbnQgdG8gZW5zdXJlIHRoYXQgemVybyBhbmQgZmFsc2UgYXJlIGhhbmRsZWQgcHJvcGVybHkgaWYgdGhlIGNvbnRleHQgKGZhbHN5IGZsYWcpXG5cdCAgICAgICAgLy8gbmVlZHMgdG8gaGF2ZSB0aGUgc3BlY2lhbCBoYW5kbGluZyBmb3IgdGhlc2UgdmFsdWVzLlxuXHQgICAgICAgIGlmICghZmFsc3kpIHtcblx0ICAgICAgICAgIHJldHVybiBbJyAhPSBudWxsID8gJywgbG9va3VwLCAnIDogJywgY3VycmVudF07XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW4gdXNlIGdlbmVyaWMgZmFsc3kgaGFuZGxpbmdcblx0ICAgICAgICAgIHJldHVybiBbJyAmJiAnLCBsb29rdXBdO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tbG9vcC1mdW5jICovXG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIFtyZXNvbHZlUG9zc2libGVMYW1iZGFdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXNvbHZlZCB2YWx1ZSwgLi4uXG5cdCAgLy9cblx0ICAvLyBJZiB0aGUgYHZhbHVlYCBpcyBhIGxhbWJkYSwgcmVwbGFjZSBpdCBvbiB0aGUgc3RhY2sgYnlcblx0ICAvLyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBsYW1iZGFcblx0ICByZXNvbHZlUG9zc2libGVMYW1iZGE6IGZ1bmN0aW9uIHJlc29sdmVQb3NzaWJsZUxhbWJkYSgpIHtcblx0ICAgIHRoaXMucHVzaChbdGhpcy5hbGlhc2FibGUoJ2NvbnRhaW5lci5sYW1iZGEnKSwgJygnLCB0aGlzLnBvcFN0YWNrKCksICcsICcsIHRoaXMuY29udGV4dE5hbWUoMCksICcpJ10pO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaFN0cmluZ1BhcmFtXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBzdHJpbmcsIGN1cnJlbnRDb250ZXh0LCAuLi5cblx0ICAvL1xuXHQgIC8vIFRoaXMgb3Bjb2RlIGlzIGRlc2lnbmVkIGZvciB1c2UgaW4gc3RyaW5nIG1vZGUsIHdoaWNoXG5cdCAgLy8gcHJvdmlkZXMgdGhlIHN0cmluZyB2YWx1ZSBvZiBhIHBhcmFtZXRlciBhbG9uZyB3aXRoIGl0c1xuXHQgIC8vIGRlcHRoIHJhdGhlciB0aGFuIHJlc29sdmluZyBpdCBpbW1lZGlhdGVseS5cblx0ICBwdXNoU3RyaW5nUGFyYW06IGZ1bmN0aW9uIHB1c2hTdHJpbmdQYXJhbShzdHJpbmcsIHR5cGUpIHtcblx0ICAgIHRoaXMucHVzaENvbnRleHQoKTtcblx0ICAgIHRoaXMucHVzaFN0cmluZyh0eXBlKTtcblxuXHQgICAgLy8gSWYgaXQncyBhIHN1YmV4cHJlc3Npb24sIHRoZSBzdHJpbmcgcmVzdWx0XG5cdCAgICAvLyB3aWxsIGJlIHB1c2hlZCBhZnRlciB0aGlzIG9wY29kZS5cblx0ICAgIGlmICh0eXBlICE9PSAnU3ViRXhwcmVzc2lvbicpIHtcblx0ICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgdGhpcy5wdXNoU3RyaW5nKHN0cmluZyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHN0cmluZyk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgZW1wdHlIYXNoOiBmdW5jdGlvbiBlbXB0eUhhc2gob21pdEVtcHR5KSB7XG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICB0aGlzLnB1c2goJ3t9Jyk7IC8vIGhhc2hJZHNcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICB0aGlzLnB1c2goJ3t9Jyk7IC8vIGhhc2hDb250ZXh0c1xuXHQgICAgICB0aGlzLnB1c2goJ3t9Jyk7IC8vIGhhc2hUeXBlc1xuXHQgICAgfVxuXHQgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKG9taXRFbXB0eSA/ICd1bmRlZmluZWQnIDogJ3t9Jyk7XG5cdCAgfSxcblx0ICBwdXNoSGFzaDogZnVuY3Rpb24gcHVzaEhhc2goKSB7XG5cdCAgICBpZiAodGhpcy5oYXNoKSB7XG5cdCAgICAgIHRoaXMuaGFzaGVzLnB1c2godGhpcy5oYXNoKTtcblx0ICAgIH1cblx0ICAgIHRoaXMuaGFzaCA9IHsgdmFsdWVzOiBbXSwgdHlwZXM6IFtdLCBjb250ZXh0czogW10sIGlkczogW10gfTtcblx0ICB9LFxuXHQgIHBvcEhhc2g6IGZ1bmN0aW9uIHBvcEhhc2goKSB7XG5cdCAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcblx0ICAgIHRoaXMuaGFzaCA9IHRoaXMuaGFzaGVzLnBvcCgpO1xuXG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICB0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGhhc2guaWRzKSk7XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgdGhpcy5wdXNoKHRoaXMub2JqZWN0TGl0ZXJhbChoYXNoLmNvbnRleHRzKSk7XG5cdCAgICAgIHRoaXMucHVzaCh0aGlzLm9iamVjdExpdGVyYWwoaGFzaC50eXBlcykpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGhhc2gudmFsdWVzKSk7XG5cdCAgfSxcblxuXHQgIC8vIFtwdXNoU3RyaW5nXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBxdW90ZWRTdHJpbmcoc3RyaW5nKSwgLi4uXG5cdCAgLy9cblx0ICAvLyBQdXNoIGEgcXVvdGVkIHZlcnNpb24gb2YgYHN0cmluZ2Agb250byB0aGUgc3RhY2tcblx0ICBwdXNoU3RyaW5nOiBmdW5jdGlvbiBwdXNoU3RyaW5nKHN0cmluZykge1xuXHQgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHRoaXMucXVvdGVkU3RyaW5nKHN0cmluZykpO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaExpdGVyYWxdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHZhbHVlLCAuLi5cblx0ICAvL1xuXHQgIC8vIFB1c2hlcyBhIHZhbHVlIG9udG8gdGhlIHN0YWNrLiBUaGlzIG9wZXJhdGlvbiBwcmV2ZW50c1xuXHQgIC8vIHRoZSBjb21waWxlciBmcm9tIGNyZWF0aW5nIGEgdGVtcG9yYXJ5IHZhcmlhYmxlIHRvIGhvbGRcblx0ICAvLyBpdC5cblx0ICBwdXNoTGl0ZXJhbDogZnVuY3Rpb24gcHVzaExpdGVyYWwodmFsdWUpIHtcblx0ICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCh2YWx1ZSk7XG5cdCAgfSxcblxuXHQgIC8vIFtwdXNoUHJvZ3JhbV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcHJvZ3JhbShndWlkKSwgLi4uXG5cdCAgLy9cblx0ICAvLyBQdXNoIGEgcHJvZ3JhbSBleHByZXNzaW9uIG9udG8gdGhlIHN0YWNrLiBUaGlzIHRha2VzXG5cdCAgLy8gYSBjb21waWxlLXRpbWUgZ3VpZCBhbmQgY29udmVydHMgaXQgaW50byBhIHJ1bnRpbWUtYWNjZXNzaWJsZVxuXHQgIC8vIGV4cHJlc3Npb24uXG5cdCAgcHVzaFByb2dyYW06IGZ1bmN0aW9uIHB1c2hQcm9ncmFtKGd1aWQpIHtcblx0ICAgIGlmIChndWlkICE9IG51bGwpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHRoaXMucHJvZ3JhbUV4cHJlc3Npb24oZ3VpZCkpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKG51bGwpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvLyBbcmVnaXN0ZXJEZWNvcmF0b3JdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXG5cdCAgLy9cblx0ICAvLyBQb3BzIG9mZiB0aGUgZGVjb3JhdG9yJ3MgcGFyYW1ldGVycywgaW52b2tlcyB0aGUgZGVjb3JhdG9yLFxuXHQgIC8vIGFuZCBpbnNlcnRzIHRoZSBkZWNvcmF0b3IgaW50byB0aGUgZGVjb3JhdG9ycyBsaXN0LlxuXHQgIHJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbiByZWdpc3RlckRlY29yYXRvcihwYXJhbVNpemUsIG5hbWUpIHtcblx0ICAgIHZhciBmb3VuZERlY29yYXRvciA9IHRoaXMubmFtZUxvb2t1cCgnZGVjb3JhdG9ycycsIG5hbWUsICdkZWNvcmF0b3InKSxcblx0ICAgICAgICBvcHRpb25zID0gdGhpcy5zZXR1cEhlbHBlckFyZ3MobmFtZSwgcGFyYW1TaXplKTtcblxuXHQgICAgdGhpcy5kZWNvcmF0b3JzLnB1c2goWydmbiA9ICcsIHRoaXMuZGVjb3JhdG9ycy5mdW5jdGlvbkNhbGwoZm91bmREZWNvcmF0b3IsICcnLCBbJ2ZuJywgJ3Byb3BzJywgJ2NvbnRhaW5lcicsIG9wdGlvbnNdKSwgJyB8fCBmbjsnXSk7XG5cdCAgfSxcblxuXHQgIC8vIFtpbnZva2VIZWxwZXJdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBpbnZlcnNlLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcmVzdWx0IG9mIGhlbHBlciBpbnZvY2F0aW9uXG5cdCAgLy9cblx0ICAvLyBQb3BzIG9mZiB0aGUgaGVscGVyJ3MgcGFyYW1ldGVycywgaW52b2tlcyB0aGUgaGVscGVyLFxuXHQgIC8vIGFuZCBwdXNoZXMgdGhlIGhlbHBlcidzIHJldHVybiB2YWx1ZSBvbnRvIHRoZSBzdGFjay5cblx0ICAvL1xuXHQgIC8vIElmIHRoZSBoZWxwZXIgaXMgbm90IGZvdW5kLCBgaGVscGVyTWlzc2luZ2AgaXMgY2FsbGVkLlxuXHQgIGludm9rZUhlbHBlcjogZnVuY3Rpb24gaW52b2tlSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSwgaXNTaW1wbGUpIHtcblx0ICAgIHZhciBub25IZWxwZXIgPSB0aGlzLnBvcFN0YWNrKCksXG5cdCAgICAgICAgaGVscGVyID0gdGhpcy5zZXR1cEhlbHBlcihwYXJhbVNpemUsIG5hbWUpLFxuXHQgICAgICAgIHNpbXBsZSA9IGlzU2ltcGxlID8gW2hlbHBlci5uYW1lLCAnIHx8ICddIDogJyc7XG5cblx0ICAgIHZhciBsb29rdXAgPSBbJygnXS5jb25jYXQoc2ltcGxlLCBub25IZWxwZXIpO1xuXHQgICAgaWYgKCF0aGlzLm9wdGlvbnMuc3RyaWN0KSB7XG5cdCAgICAgIGxvb2t1cC5wdXNoKCcgfHwgJywgdGhpcy5hbGlhc2FibGUoJ2hlbHBlcnMuaGVscGVyTWlzc2luZycpKTtcblx0ICAgIH1cblx0ICAgIGxvb2t1cC5wdXNoKCcpJyk7XG5cblx0ICAgIHRoaXMucHVzaCh0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwobG9va3VwLCAnY2FsbCcsIGhlbHBlci5jYWxsUGFyYW1zKSk7XG5cdCAgfSxcblxuXHQgIC8vIFtpbnZva2VLbm93bkhlbHBlcl1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIGludmVyc2UsIHByb2dyYW0sIHBhcmFtcy4uLiwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXN1bHQgb2YgaGVscGVyIGludm9jYXRpb25cblx0ICAvL1xuXHQgIC8vIFRoaXMgb3BlcmF0aW9uIGlzIHVzZWQgd2hlbiB0aGUgaGVscGVyIGlzIGtub3duIHRvIGV4aXN0LFxuXHQgIC8vIHNvIGEgYGhlbHBlck1pc3NpbmdgIGZhbGxiYWNrIGlzIG5vdCByZXF1aXJlZC5cblx0ICBpbnZva2VLbm93bkhlbHBlcjogZnVuY3Rpb24gaW52b2tlS25vd25IZWxwZXIocGFyYW1TaXplLCBuYW1lKSB7XG5cdCAgICB2YXIgaGVscGVyID0gdGhpcy5zZXR1cEhlbHBlcihwYXJhbVNpemUsIG5hbWUpO1xuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChoZWxwZXIubmFtZSwgJ2NhbGwnLCBoZWxwZXIuY2FsbFBhcmFtcykpO1xuXHQgIH0sXG5cblx0ICAvLyBbaW52b2tlQW1iaWd1b3VzXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJlc3VsdCBvZiBkaXNhbWJpZ3VhdGlvblxuXHQgIC8vXG5cdCAgLy8gVGhpcyBvcGVyYXRpb24gaXMgdXNlZCB3aGVuIGFuIGV4cHJlc3Npb24gbGlrZSBge3tmb299fWBcblx0ICAvLyBpcyBwcm92aWRlZCwgYnV0IHdlIGRvbid0IGtub3cgYXQgY29tcGlsZS10aW1lIHdoZXRoZXIgaXRcblx0ICAvLyBpcyBhIGhlbHBlciBvciBhIHBhdGguXG5cdCAgLy9cblx0ICAvLyBUaGlzIG9wZXJhdGlvbiBlbWl0cyBtb3JlIGNvZGUgdGhhbiB0aGUgb3RoZXIgb3B0aW9ucyxcblx0ICAvLyBhbmQgY2FuIGJlIGF2b2lkZWQgYnkgcGFzc2luZyB0aGUgYGtub3duSGVscGVyc2AgYW5kXG5cdCAgLy8gYGtub3duSGVscGVyc09ubHlgIGZsYWdzIGF0IGNvbXBpbGUtdGltZS5cblx0ICBpbnZva2VBbWJpZ3VvdXM6IGZ1bmN0aW9uIGludm9rZUFtYmlndW91cyhuYW1lLCBoZWxwZXJDYWxsKSB7XG5cdCAgICB0aGlzLnVzZVJlZ2lzdGVyKCdoZWxwZXInKTtcblxuXHQgICAgdmFyIG5vbkhlbHBlciA9IHRoaXMucG9wU3RhY2soKTtcblxuXHQgICAgdGhpcy5lbXB0eUhhc2goKTtcblx0ICAgIHZhciBoZWxwZXIgPSB0aGlzLnNldHVwSGVscGVyKDAsIG5hbWUsIGhlbHBlckNhbGwpO1xuXG5cdCAgICB2YXIgaGVscGVyTmFtZSA9IHRoaXMubGFzdEhlbHBlciA9IHRoaXMubmFtZUxvb2t1cCgnaGVscGVycycsIG5hbWUsICdoZWxwZXInKTtcblxuXHQgICAgdmFyIGxvb2t1cCA9IFsnKCcsICcoaGVscGVyID0gJywgaGVscGVyTmFtZSwgJyB8fCAnLCBub25IZWxwZXIsICcpJ107XG5cdCAgICBpZiAoIXRoaXMub3B0aW9ucy5zdHJpY3QpIHtcblx0ICAgICAgbG9va3VwWzBdID0gJyhoZWxwZXIgPSAnO1xuXHQgICAgICBsb29rdXAucHVzaCgnICE9IG51bGwgPyBoZWxwZXIgOiAnLCB0aGlzLmFsaWFzYWJsZSgnaGVscGVycy5oZWxwZXJNaXNzaW5nJykpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnB1c2goWycoJywgbG9va3VwLCBoZWxwZXIucGFyYW1zSW5pdCA/IFsnKSwoJywgaGVscGVyLnBhcmFtc0luaXRdIDogW10sICcpLCcsICcodHlwZW9mIGhlbHBlciA9PT0gJywgdGhpcy5hbGlhc2FibGUoJ1wiZnVuY3Rpb25cIicpLCAnID8gJywgdGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKCdoZWxwZXInLCAnY2FsbCcsIGhlbHBlci5jYWxsUGFyYW1zKSwgJyA6IGhlbHBlcikpJ10pO1xuXHQgIH0sXG5cblx0ICAvLyBbaW52b2tlUGFydGlhbF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGNvbnRleHQsIC4uLlxuXHQgIC8vIE9uIHN0YWNrIGFmdGVyOiByZXN1bHQgb2YgcGFydGlhbCBpbnZvY2F0aW9uXG5cdCAgLy9cblx0ICAvLyBUaGlzIG9wZXJhdGlvbiBwb3BzIG9mZiBhIGNvbnRleHQsIGludm9rZXMgYSBwYXJ0aWFsIHdpdGggdGhhdCBjb250ZXh0LFxuXHQgIC8vIGFuZCBwdXNoZXMgdGhlIHJlc3VsdCBvZiB0aGUgaW52b2NhdGlvbiBiYWNrLlxuXHQgIGludm9rZVBhcnRpYWw6IGZ1bmN0aW9uIGludm9rZVBhcnRpYWwoaXNEeW5hbWljLCBuYW1lLCBpbmRlbnQpIHtcblx0ICAgIHZhciBwYXJhbXMgPSBbXSxcblx0ICAgICAgICBvcHRpb25zID0gdGhpcy5zZXR1cFBhcmFtcyhuYW1lLCAxLCBwYXJhbXMpO1xuXG5cdCAgICBpZiAoaXNEeW5hbWljKSB7XG5cdCAgICAgIG5hbWUgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIGRlbGV0ZSBvcHRpb25zLm5hbWU7XG5cdCAgICB9XG5cblx0ICAgIGlmIChpbmRlbnQpIHtcblx0ICAgICAgb3B0aW9ucy5pbmRlbnQgPSBKU09OLnN0cmluZ2lmeShpbmRlbnQpO1xuXHQgICAgfVxuXHQgICAgb3B0aW9ucy5oZWxwZXJzID0gJ2hlbHBlcnMnO1xuXHQgICAgb3B0aW9ucy5wYXJ0aWFscyA9ICdwYXJ0aWFscyc7XG5cdCAgICBvcHRpb25zLmRlY29yYXRvcnMgPSAnY29udGFpbmVyLmRlY29yYXRvcnMnO1xuXG5cdCAgICBpZiAoIWlzRHluYW1pYykge1xuXHQgICAgICBwYXJhbXMudW5zaGlmdCh0aGlzLm5hbWVMb29rdXAoJ3BhcnRpYWxzJywgbmFtZSwgJ3BhcnRpYWwnKSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBwYXJhbXMudW5zaGlmdChuYW1lKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXQpIHtcblx0ICAgICAgb3B0aW9ucy5kZXB0aHMgPSAnZGVwdGhzJztcblx0ICAgIH1cblx0ICAgIG9wdGlvbnMgPSB0aGlzLm9iamVjdExpdGVyYWwob3B0aW9ucyk7XG5cdCAgICBwYXJhbXMucHVzaChvcHRpb25zKTtcblxuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbCgnY29udGFpbmVyLmludm9rZVBhcnRpYWwnLCAnJywgcGFyYW1zKSk7XG5cdCAgfSxcblxuXHQgIC8vIFthc3NpZ25Ub0hhc2hdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uLCBoYXNoLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLiwgaGFzaCwgLi4uXG5cdCAgLy9cblx0ICAvLyBQb3BzIGEgdmFsdWUgb2ZmIHRoZSBzdGFjayBhbmQgYXNzaWducyBpdCB0byB0aGUgY3VycmVudCBoYXNoXG5cdCAgYXNzaWduVG9IYXNoOiBmdW5jdGlvbiBhc3NpZ25Ub0hhc2goa2V5KSB7XG5cdCAgICB2YXIgdmFsdWUgPSB0aGlzLnBvcFN0YWNrKCksXG5cdCAgICAgICAgY29udGV4dCA9IHVuZGVmaW5lZCxcblx0ICAgICAgICB0eXBlID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGlkID0gdW5kZWZpbmVkO1xuXG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICBpZCA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICB0eXBlID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICBjb250ZXh0ID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcblx0ICAgIGlmIChjb250ZXh0KSB7XG5cdCAgICAgIGhhc2guY29udGV4dHNba2V5XSA9IGNvbnRleHQ7XG5cdCAgICB9XG5cdCAgICBpZiAodHlwZSkge1xuXHQgICAgICBoYXNoLnR5cGVzW2tleV0gPSB0eXBlO1xuXHQgICAgfVxuXHQgICAgaWYgKGlkKSB7XG5cdCAgICAgIGhhc2guaWRzW2tleV0gPSBpZDtcblx0ICAgIH1cblx0ICAgIGhhc2gudmFsdWVzW2tleV0gPSB2YWx1ZTtcblx0ICB9LFxuXG5cdCAgcHVzaElkOiBmdW5jdGlvbiBwdXNoSWQodHlwZSwgbmFtZSwgY2hpbGQpIHtcblx0ICAgIGlmICh0eXBlID09PSAnQmxvY2tQYXJhbScpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCdibG9ja1BhcmFtc1snICsgbmFtZVswXSArICddLnBhdGhbJyArIG5hbWVbMV0gKyAnXScgKyAoY2hpbGQgPyAnICsgJyArIEpTT04uc3RyaW5naWZ5KCcuJyArIGNoaWxkKSA6ICcnKSk7XG5cdCAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQYXRoRXhwcmVzc2lvbicpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RyaW5nKG5hbWUpO1xuXHQgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU3ViRXhwcmVzc2lvbicpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCd0cnVlJyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ251bGwnKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gSEVMUEVSU1xuXG5cdCAgY29tcGlsZXI6IEphdmFTY3JpcHRDb21waWxlcixcblxuXHQgIGNvbXBpbGVDaGlsZHJlbjogZnVuY3Rpb24gY29tcGlsZUNoaWxkcmVuKGVudmlyb25tZW50LCBvcHRpb25zKSB7XG5cdCAgICB2YXIgY2hpbGRyZW4gPSBlbnZpcm9ubWVudC5jaGlsZHJlbixcblx0ICAgICAgICBjaGlsZCA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBjb21waWxlciA9IHVuZGVmaW5lZDtcblxuXHQgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcblx0ICAgICAgY29tcGlsZXIgPSBuZXcgdGhpcy5jb21waWxlcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblxuXHQgICAgICB2YXIgZXhpc3RpbmcgPSB0aGlzLm1hdGNoRXhpc3RpbmdQcm9ncmFtKGNoaWxkKTtcblxuXHQgICAgICBpZiAoZXhpc3RpbmcgPT0gbnVsbCkge1xuXHQgICAgICAgIHRoaXMuY29udGV4dC5wcm9ncmFtcy5wdXNoKCcnKTsgLy8gUGxhY2Vob2xkZXIgdG8gcHJldmVudCBuYW1lIGNvbmZsaWN0cyBmb3IgbmVzdGVkIGNoaWxkcmVuXG5cdCAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jb250ZXh0LnByb2dyYW1zLmxlbmd0aDtcblx0ICAgICAgICBjaGlsZC5pbmRleCA9IGluZGV4O1xuXHQgICAgICAgIGNoaWxkLm5hbWUgPSAncHJvZ3JhbScgKyBpbmRleDtcblx0ICAgICAgICB0aGlzLmNvbnRleHQucHJvZ3JhbXNbaW5kZXhdID0gY29tcGlsZXIuY29tcGlsZShjaGlsZCwgb3B0aW9ucywgdGhpcy5jb250ZXh0LCAhdGhpcy5wcmVjb21waWxlKTtcblx0ICAgICAgICB0aGlzLmNvbnRleHQuZGVjb3JhdG9yc1tpbmRleF0gPSBjb21waWxlci5kZWNvcmF0b3JzO1xuXHQgICAgICAgIHRoaXMuY29udGV4dC5lbnZpcm9ubWVudHNbaW5kZXhdID0gY2hpbGQ7XG5cblx0ICAgICAgICB0aGlzLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzIHx8IGNvbXBpbGVyLnVzZURlcHRocztcblx0ICAgICAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdGhpcy51c2VCbG9ja1BhcmFtcyB8fCBjb21waWxlci51c2VCbG9ja1BhcmFtcztcblx0ICAgICAgICBjaGlsZC51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocztcblx0ICAgICAgICBjaGlsZC51c2VCbG9ja1BhcmFtcyA9IHRoaXMudXNlQmxvY2tQYXJhbXM7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgY2hpbGQuaW5kZXggPSBleGlzdGluZy5pbmRleDtcblx0ICAgICAgICBjaGlsZC5uYW1lID0gJ3Byb2dyYW0nICsgZXhpc3RpbmcuaW5kZXg7XG5cblx0ICAgICAgICB0aGlzLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzIHx8IGV4aXN0aW5nLnVzZURlcHRocztcblx0ICAgICAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdGhpcy51c2VCbG9ja1BhcmFtcyB8fCBleGlzdGluZy51c2VCbG9ja1BhcmFtcztcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cdCAgbWF0Y2hFeGlzdGluZ1Byb2dyYW06IGZ1bmN0aW9uIG1hdGNoRXhpc3RpbmdQcm9ncmFtKGNoaWxkKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5jb250ZXh0LmVudmlyb25tZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICB2YXIgZW52aXJvbm1lbnQgPSB0aGlzLmNvbnRleHQuZW52aXJvbm1lbnRzW2ldO1xuXHQgICAgICBpZiAoZW52aXJvbm1lbnQgJiYgZW52aXJvbm1lbnQuZXF1YWxzKGNoaWxkKSkge1xuXHQgICAgICAgIHJldHVybiBlbnZpcm9ubWVudDtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBwcm9ncmFtRXhwcmVzc2lvbjogZnVuY3Rpb24gcHJvZ3JhbUV4cHJlc3Npb24oZ3VpZCkge1xuXHQgICAgdmFyIGNoaWxkID0gdGhpcy5lbnZpcm9ubWVudC5jaGlsZHJlbltndWlkXSxcblx0ICAgICAgICBwcm9ncmFtUGFyYW1zID0gW2NoaWxkLmluZGV4LCAnZGF0YScsIGNoaWxkLmJsb2NrUGFyYW1zXTtcblxuXHQgICAgaWYgKHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgdGhpcy51c2VEZXB0aHMpIHtcblx0ICAgICAgcHJvZ3JhbVBhcmFtcy5wdXNoKCdibG9ja1BhcmFtcycpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHByb2dyYW1QYXJhbXMucHVzaCgnZGVwdGhzJyk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiAnY29udGFpbmVyLnByb2dyYW0oJyArIHByb2dyYW1QYXJhbXMuam9pbignLCAnKSArICcpJztcblx0ICB9LFxuXG5cdCAgdXNlUmVnaXN0ZXI6IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyKG5hbWUpIHtcblx0ICAgIGlmICghdGhpcy5yZWdpc3RlcnNbbmFtZV0pIHtcblx0ICAgICAgdGhpcy5yZWdpc3RlcnNbbmFtZV0gPSB0cnVlO1xuXHQgICAgICB0aGlzLnJlZ2lzdGVycy5saXN0LnB1c2gobmFtZSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHB1c2g6IGZ1bmN0aW9uIHB1c2goZXhwcikge1xuXHQgICAgaWYgKCEoZXhwciBpbnN0YW5jZW9mIExpdGVyYWwpKSB7XG5cdCAgICAgIGV4cHIgPSB0aGlzLnNvdXJjZS53cmFwKGV4cHIpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLmlubGluZVN0YWNrLnB1c2goZXhwcik7XG5cdCAgICByZXR1cm4gZXhwcjtcblx0ICB9LFxuXG5cdCAgcHVzaFN0YWNrTGl0ZXJhbDogZnVuY3Rpb24gcHVzaFN0YWNrTGl0ZXJhbChpdGVtKSB7XG5cdCAgICB0aGlzLnB1c2gobmV3IExpdGVyYWwoaXRlbSkpO1xuXHQgIH0sXG5cblx0ICBwdXNoU291cmNlOiBmdW5jdGlvbiBwdXNoU291cmNlKHNvdXJjZSkge1xuXHQgICAgaWYgKHRoaXMucGVuZGluZ0NvbnRlbnQpIHtcblx0ICAgICAgdGhpcy5zb3VyY2UucHVzaCh0aGlzLmFwcGVuZFRvQnVmZmVyKHRoaXMuc291cmNlLnF1b3RlZFN0cmluZyh0aGlzLnBlbmRpbmdDb250ZW50KSwgdGhpcy5wZW5kaW5nTG9jYXRpb24pKTtcblx0ICAgICAgdGhpcy5wZW5kaW5nQ29udGVudCA9IHVuZGVmaW5lZDtcblx0ICAgIH1cblxuXHQgICAgaWYgKHNvdXJjZSkge1xuXHQgICAgICB0aGlzLnNvdXJjZS5wdXNoKHNvdXJjZSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHJlcGxhY2VTdGFjazogZnVuY3Rpb24gcmVwbGFjZVN0YWNrKGNhbGxiYWNrKSB7XG5cdCAgICB2YXIgcHJlZml4ID0gWycoJ10sXG5cdCAgICAgICAgc3RhY2sgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgY3JlYXRlZFN0YWNrID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIHVzZWRMaXRlcmFsID0gdW5kZWZpbmVkO1xuXG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgICAgaWYgKCF0aGlzLmlzSW5saW5lKCkpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ3JlcGxhY2VTdGFjayBvbiBub24taW5saW5lJyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIFdlIHdhbnQgdG8gbWVyZ2UgdGhlIGlubGluZSBzdGF0ZW1lbnQgaW50byB0aGUgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHZpYSAnLCdcblx0ICAgIHZhciB0b3AgPSB0aGlzLnBvcFN0YWNrKHRydWUpO1xuXG5cdCAgICBpZiAodG9wIGluc3RhbmNlb2YgTGl0ZXJhbCkge1xuXHQgICAgICAvLyBMaXRlcmFscyBkbyBub3QgbmVlZCB0byBiZSBpbmxpbmVkXG5cdCAgICAgIHN0YWNrID0gW3RvcC52YWx1ZV07XG5cdCAgICAgIHByZWZpeCA9IFsnKCcsIHN0YWNrXTtcblx0ICAgICAgdXNlZExpdGVyYWwgPSB0cnVlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgLy8gR2V0IG9yIGNyZWF0ZSB0aGUgY3VycmVudCBzdGFjayBuYW1lIGZvciB1c2UgYnkgdGhlIGlubGluZVxuXHQgICAgICBjcmVhdGVkU3RhY2sgPSB0cnVlO1xuXHQgICAgICB2YXIgX25hbWUgPSB0aGlzLmluY3JTdGFjaygpO1xuXG5cdCAgICAgIHByZWZpeCA9IFsnKCgnLCB0aGlzLnB1c2goX25hbWUpLCAnID0gJywgdG9wLCAnKSddO1xuXHQgICAgICBzdGFjayA9IHRoaXMudG9wU3RhY2soKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGl0ZW0gPSBjYWxsYmFjay5jYWxsKHRoaXMsIHN0YWNrKTtcblxuXHQgICAgaWYgKCF1c2VkTGl0ZXJhbCkge1xuXHQgICAgICB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICB9XG5cdCAgICBpZiAoY3JlYXRlZFN0YWNrKSB7XG5cdCAgICAgIHRoaXMuc3RhY2tTbG90LS07XG5cdCAgICB9XG5cdCAgICB0aGlzLnB1c2gocHJlZml4LmNvbmNhdChpdGVtLCAnKScpKTtcblx0ICB9LFxuXG5cdCAgaW5jclN0YWNrOiBmdW5jdGlvbiBpbmNyU3RhY2soKSB7XG5cdCAgICB0aGlzLnN0YWNrU2xvdCsrO1xuXHQgICAgaWYgKHRoaXMuc3RhY2tTbG90ID4gdGhpcy5zdGFja1ZhcnMubGVuZ3RoKSB7XG5cdCAgICAgIHRoaXMuc3RhY2tWYXJzLnB1c2goJ3N0YWNrJyArIHRoaXMuc3RhY2tTbG90KTtcblx0ICAgIH1cblx0ICAgIHJldHVybiB0aGlzLnRvcFN0YWNrTmFtZSgpO1xuXHQgIH0sXG5cdCAgdG9wU3RhY2tOYW1lOiBmdW5jdGlvbiB0b3BTdGFja05hbWUoKSB7XG5cdCAgICByZXR1cm4gJ3N0YWNrJyArIHRoaXMuc3RhY2tTbG90O1xuXHQgIH0sXG5cdCAgZmx1c2hJbmxpbmU6IGZ1bmN0aW9uIGZsdXNoSW5saW5lKCkge1xuXHQgICAgdmFyIGlubGluZVN0YWNrID0gdGhpcy5pbmxpbmVTdGFjaztcblx0ICAgIHRoaXMuaW5saW5lU3RhY2sgPSBbXTtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpbmxpbmVTdGFjay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICB2YXIgZW50cnkgPSBpbmxpbmVTdGFja1tpXTtcblx0ICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cdCAgICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIExpdGVyYWwpIHtcblx0ICAgICAgICB0aGlzLmNvbXBpbGVTdGFjay5wdXNoKGVudHJ5KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB2YXIgc3RhY2sgPSB0aGlzLmluY3JTdGFjaygpO1xuXHQgICAgICAgIHRoaXMucHVzaFNvdXJjZShbc3RhY2ssICcgPSAnLCBlbnRyeSwgJzsnXSk7XG5cdCAgICAgICAgdGhpcy5jb21waWxlU3RhY2sucHVzaChzdGFjayk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXHQgIGlzSW5saW5lOiBmdW5jdGlvbiBpc0lubGluZSgpIHtcblx0ICAgIHJldHVybiB0aGlzLmlubGluZVN0YWNrLmxlbmd0aDtcblx0ICB9LFxuXG5cdCAgcG9wU3RhY2s6IGZ1bmN0aW9uIHBvcFN0YWNrKHdyYXBwZWQpIHtcblx0ICAgIHZhciBpbmxpbmUgPSB0aGlzLmlzSW5saW5lKCksXG5cdCAgICAgICAgaXRlbSA9IChpbmxpbmUgPyB0aGlzLmlubGluZVN0YWNrIDogdGhpcy5jb21waWxlU3RhY2spLnBvcCgpO1xuXG5cdCAgICBpZiAoIXdyYXBwZWQgJiYgaXRlbSBpbnN0YW5jZW9mIExpdGVyYWwpIHtcblx0ICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpZiAoIWlubGluZSkge1xuXHQgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgICAgICAgaWYgKCF0aGlzLnN0YWNrU2xvdCkge1xuXHQgICAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0ludmFsaWQgc3RhY2sgcG9wJyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRoaXMuc3RhY2tTbG90LS07XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGl0ZW07XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHRvcFN0YWNrOiBmdW5jdGlvbiB0b3BTdGFjaygpIHtcblx0ICAgIHZhciBzdGFjayA9IHRoaXMuaXNJbmxpbmUoKSA/IHRoaXMuaW5saW5lU3RhY2sgOiB0aGlzLmNvbXBpbGVTdGFjayxcblx0ICAgICAgICBpdGVtID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXHQgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBMaXRlcmFsKSB7XG5cdCAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIGl0ZW07XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIGNvbnRleHROYW1lOiBmdW5jdGlvbiBjb250ZXh0TmFtZShjb250ZXh0KSB7XG5cdCAgICBpZiAodGhpcy51c2VEZXB0aHMgJiYgY29udGV4dCkge1xuXHQgICAgICByZXR1cm4gJ2RlcHRoc1snICsgY29udGV4dCArICddJztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiAnZGVwdGgnICsgY29udGV4dDtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcXVvdGVkU3RyaW5nOiBmdW5jdGlvbiBxdW90ZWRTdHJpbmcoc3RyKSB7XG5cdCAgICByZXR1cm4gdGhpcy5zb3VyY2UucXVvdGVkU3RyaW5nKHN0cik7XG5cdCAgfSxcblxuXHQgIG9iamVjdExpdGVyYWw6IGZ1bmN0aW9uIG9iamVjdExpdGVyYWwob2JqKSB7XG5cdCAgICByZXR1cm4gdGhpcy5zb3VyY2Uub2JqZWN0TGl0ZXJhbChvYmopO1xuXHQgIH0sXG5cblx0ICBhbGlhc2FibGU6IGZ1bmN0aW9uIGFsaWFzYWJsZShuYW1lKSB7XG5cdCAgICB2YXIgcmV0ID0gdGhpcy5hbGlhc2VzW25hbWVdO1xuXHQgICAgaWYgKHJldCkge1xuXHQgICAgICByZXQucmVmZXJlbmNlQ291bnQrKztcblx0ICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH1cblxuXHQgICAgcmV0ID0gdGhpcy5hbGlhc2VzW25hbWVdID0gdGhpcy5zb3VyY2Uud3JhcChuYW1lKTtcblx0ICAgIHJldC5hbGlhc2FibGUgPSB0cnVlO1xuXHQgICAgcmV0LnJlZmVyZW5jZUNvdW50ID0gMTtcblxuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9LFxuXG5cdCAgc2V0dXBIZWxwZXI6IGZ1bmN0aW9uIHNldHVwSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSwgYmxvY2tIZWxwZXIpIHtcblx0ICAgIHZhciBwYXJhbXMgPSBbXSxcblx0ICAgICAgICBwYXJhbXNJbml0ID0gdGhpcy5zZXR1cEhlbHBlckFyZ3MobmFtZSwgcGFyYW1TaXplLCBwYXJhbXMsIGJsb2NrSGVscGVyKTtcblx0ICAgIHZhciBmb3VuZEhlbHBlciA9IHRoaXMubmFtZUxvb2t1cCgnaGVscGVycycsIG5hbWUsICdoZWxwZXInKSxcblx0ICAgICAgICBjYWxsQ29udGV4dCA9IHRoaXMuYWxpYXNhYmxlKHRoaXMuY29udGV4dE5hbWUoMCkgKyAnICE9IG51bGwgPyAnICsgdGhpcy5jb250ZXh0TmFtZSgwKSArICcgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KScpO1xuXG5cdCAgICByZXR1cm4ge1xuXHQgICAgICBwYXJhbXM6IHBhcmFtcyxcblx0ICAgICAgcGFyYW1zSW5pdDogcGFyYW1zSW5pdCxcblx0ICAgICAgbmFtZTogZm91bmRIZWxwZXIsXG5cdCAgICAgIGNhbGxQYXJhbXM6IFtjYWxsQ29udGV4dF0uY29uY2F0KHBhcmFtcylcblx0ICAgIH07XG5cdCAgfSxcblxuXHQgIHNldHVwUGFyYW1zOiBmdW5jdGlvbiBzZXR1cFBhcmFtcyhoZWxwZXIsIHBhcmFtU2l6ZSwgcGFyYW1zKSB7XG5cdCAgICB2YXIgb3B0aW9ucyA9IHt9LFxuXHQgICAgICAgIGNvbnRleHRzID0gW10sXG5cdCAgICAgICAgdHlwZXMgPSBbXSxcblx0ICAgICAgICBpZHMgPSBbXSxcblx0ICAgICAgICBvYmplY3RBcmdzID0gIXBhcmFtcyxcblx0ICAgICAgICBwYXJhbSA9IHVuZGVmaW5lZDtcblxuXHQgICAgaWYgKG9iamVjdEFyZ3MpIHtcblx0ICAgICAgcGFyYW1zID0gW107XG5cdCAgICB9XG5cblx0ICAgIG9wdGlvbnMubmFtZSA9IHRoaXMucXVvdGVkU3RyaW5nKGhlbHBlcik7XG5cdCAgICBvcHRpb25zLmhhc2ggPSB0aGlzLnBvcFN0YWNrKCk7XG5cblx0ICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgIG9wdGlvbnMuaGFzaElkcyA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICBvcHRpb25zLmhhc2hUeXBlcyA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgb3B0aW9ucy5oYXNoQ29udGV4dHMgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBpbnZlcnNlID0gdGhpcy5wb3BTdGFjaygpLFxuXHQgICAgICAgIHByb2dyYW0gPSB0aGlzLnBvcFN0YWNrKCk7XG5cblx0ICAgIC8vIEF2b2lkIHNldHRpbmcgZm4gYW5kIGludmVyc2UgaWYgbmVpdGhlciBhcmUgc2V0LiBUaGlzIGFsbG93c1xuXHQgICAgLy8gaGVscGVycyB0byBkbyBhIGNoZWNrIGZvciBgaWYgKG9wdGlvbnMuZm4pYFxuXHQgICAgaWYgKHByb2dyYW0gfHwgaW52ZXJzZSkge1xuXHQgICAgICBvcHRpb25zLmZuID0gcHJvZ3JhbSB8fCAnY29udGFpbmVyLm5vb3AnO1xuXHQgICAgICBvcHRpb25zLmludmVyc2UgPSBpbnZlcnNlIHx8ICdjb250YWluZXIubm9vcCc7XG5cdCAgICB9XG5cblx0ICAgIC8vIFRoZSBwYXJhbWV0ZXJzIGdvIG9uIHRvIHRoZSBzdGFjayBpbiBvcmRlciAobWFraW5nIHN1cmUgdGhhdCB0aGV5IGFyZSBldmFsdWF0ZWQgaW4gb3JkZXIpXG5cdCAgICAvLyBzbyB3ZSBuZWVkIHRvIHBvcCB0aGVtIG9mZiB0aGUgc3RhY2sgaW4gcmV2ZXJzZSBvcmRlclxuXHQgICAgdmFyIGkgPSBwYXJhbVNpemU7XG5cdCAgICB3aGlsZSAoaS0tKSB7XG5cdCAgICAgIHBhcmFtID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICBwYXJhbXNbaV0gPSBwYXJhbTtcblxuXHQgICAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICAgIGlkc1tpXSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgICB0eXBlc1tpXSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgICBjb250ZXh0c1tpXSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAob2JqZWN0QXJncykge1xuXHQgICAgICBvcHRpb25zLmFyZ3MgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KHBhcmFtcyk7XG5cdCAgICB9XG5cblx0ICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgIG9wdGlvbnMuaWRzID0gdGhpcy5zb3VyY2UuZ2VuZXJhdGVBcnJheShpZHMpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgIG9wdGlvbnMudHlwZXMgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KHR5cGVzKTtcblx0ICAgICAgb3B0aW9ucy5jb250ZXh0cyA9IHRoaXMuc291cmNlLmdlbmVyYXRlQXJyYXkoY29udGV4dHMpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAodGhpcy5vcHRpb25zLmRhdGEpIHtcblx0ICAgICAgb3B0aW9ucy5kYXRhID0gJ2RhdGEnO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMudXNlQmxvY2tQYXJhbXMpIHtcblx0ICAgICAgb3B0aW9ucy5ibG9ja1BhcmFtcyA9ICdibG9ja1BhcmFtcyc7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gb3B0aW9ucztcblx0ICB9LFxuXG5cdCAgc2V0dXBIZWxwZXJBcmdzOiBmdW5jdGlvbiBzZXR1cEhlbHBlckFyZ3MoaGVscGVyLCBwYXJhbVNpemUsIHBhcmFtcywgdXNlUmVnaXN0ZXIpIHtcblx0ICAgIHZhciBvcHRpb25zID0gdGhpcy5zZXR1cFBhcmFtcyhoZWxwZXIsIHBhcmFtU2l6ZSwgcGFyYW1zKTtcblx0ICAgIG9wdGlvbnMgPSB0aGlzLm9iamVjdExpdGVyYWwob3B0aW9ucyk7XG5cdCAgICBpZiAodXNlUmVnaXN0ZXIpIHtcblx0ICAgICAgdGhpcy51c2VSZWdpc3Rlcignb3B0aW9ucycpO1xuXHQgICAgICBwYXJhbXMucHVzaCgnb3B0aW9ucycpO1xuXHQgICAgICByZXR1cm4gWydvcHRpb25zPScsIG9wdGlvbnNdO1xuXHQgICAgfSBlbHNlIGlmIChwYXJhbXMpIHtcblx0ICAgICAgcGFyYW1zLnB1c2gob3B0aW9ucyk7XG5cdCAgICAgIHJldHVybiAnJztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBvcHRpb25zO1xuXHQgICAgfVxuXHQgIH1cblx0fTtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgIHZhciByZXNlcnZlZFdvcmRzID0gKCdicmVhayBlbHNlIG5ldyB2YXInICsgJyBjYXNlIGZpbmFsbHkgcmV0dXJuIHZvaWQnICsgJyBjYXRjaCBmb3Igc3dpdGNoIHdoaWxlJyArICcgY29udGludWUgZnVuY3Rpb24gdGhpcyB3aXRoJyArICcgZGVmYXVsdCBpZiB0aHJvdycgKyAnIGRlbGV0ZSBpbiB0cnknICsgJyBkbyBpbnN0YW5jZW9mIHR5cGVvZicgKyAnIGFic3RyYWN0IGVudW0gaW50IHNob3J0JyArICcgYm9vbGVhbiBleHBvcnQgaW50ZXJmYWNlIHN0YXRpYycgKyAnIGJ5dGUgZXh0ZW5kcyBsb25nIHN1cGVyJyArICcgY2hhciBmaW5hbCBuYXRpdmUgc3luY2hyb25pemVkJyArICcgY2xhc3MgZmxvYXQgcGFja2FnZSB0aHJvd3MnICsgJyBjb25zdCBnb3RvIHByaXZhdGUgdHJhbnNpZW50JyArICcgZGVidWdnZXIgaW1wbGVtZW50cyBwcm90ZWN0ZWQgdm9sYXRpbGUnICsgJyBkb3VibGUgaW1wb3J0IHB1YmxpYyBsZXQgeWllbGQgYXdhaXQnICsgJyBudWxsIHRydWUgZmFsc2UnKS5zcGxpdCgnICcpO1xuXG5cdCAgdmFyIGNvbXBpbGVyV29yZHMgPSBKYXZhU2NyaXB0Q29tcGlsZXIuUkVTRVJWRURfV09SRFMgPSB7fTtcblxuXHQgIGZvciAodmFyIGkgPSAwLCBsID0gcmVzZXJ2ZWRXb3Jkcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgIGNvbXBpbGVyV29yZHNbcmVzZXJ2ZWRXb3Jkc1tpXV0gPSB0cnVlO1xuXHQgIH1cblx0fSkoKTtcblxuXHRKYXZhU2NyaXB0Q29tcGlsZXIuaXNWYWxpZEphdmFTY3JpcHRWYXJpYWJsZU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuXHQgIHJldHVybiAhSmF2YVNjcmlwdENvbXBpbGVyLlJFU0VSVkVEX1dPUkRTW25hbWVdICYmIC9eW2EtekEtWl8kXVswLTlhLXpBLVpfJF0qJC8udGVzdChuYW1lKTtcblx0fTtcblxuXHRmdW5jdGlvbiBzdHJpY3RMb29rdXAocmVxdWlyZVRlcm1pbmFsLCBjb21waWxlciwgcGFydHMsIHR5cGUpIHtcblx0ICB2YXIgc3RhY2sgPSBjb21waWxlci5wb3BTdGFjaygpLFxuXHQgICAgICBpID0gMCxcblx0ICAgICAgbGVuID0gcGFydHMubGVuZ3RoO1xuXHQgIGlmIChyZXF1aXJlVGVybWluYWwpIHtcblx0ICAgIGxlbi0tO1xuXHQgIH1cblxuXHQgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgIHN0YWNrID0gY29tcGlsZXIubmFtZUxvb2t1cChzdGFjaywgcGFydHNbaV0sIHR5cGUpO1xuXHQgIH1cblxuXHQgIGlmIChyZXF1aXJlVGVybWluYWwpIHtcblx0ICAgIHJldHVybiBbY29tcGlsZXIuYWxpYXNhYmxlKCdjb250YWluZXIuc3RyaWN0JyksICcoJywgc3RhY2ssICcsICcsIGNvbXBpbGVyLnF1b3RlZFN0cmluZyhwYXJ0c1tpXSksICcpJ107XG5cdCAgfSBlbHNlIHtcblx0ICAgIHJldHVybiBzdGFjaztcblx0ICB9XG5cdH1cblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBKYXZhU2NyaXB0Q29tcGlsZXI7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDQzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogZ2xvYmFsIGRlZmluZSAqL1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgU291cmNlTm9kZSA9IHVuZGVmaW5lZDtcblxuXHR0cnkge1xuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgaWYgKGZhbHNlKSB7XG5cdCAgICAvLyBXZSBkb24ndCBzdXBwb3J0IHRoaXMgaW4gQU1EIGVudmlyb25tZW50cy4gRm9yIHRoZXNlIGVudmlyb25tZW50cywgd2UgYXN1c21lIHRoYXRcblx0ICAgIC8vIHRoZXkgYXJlIHJ1bm5pbmcgb24gdGhlIGJyb3dzZXIgYW5kIHRodXMgaGF2ZSBubyBuZWVkIGZvciB0aGUgc291cmNlLW1hcCBsaWJyYXJ5LlxuXHQgICAgdmFyIFNvdXJjZU1hcCA9IHJlcXVpcmUoJ3NvdXJjZS1tYXAnKTtcblx0ICAgIFNvdXJjZU5vZGUgPSBTb3VyY2VNYXAuU291cmNlTm9kZTtcblx0ICB9XG5cdH0gY2F0Y2ggKGVycikge31cblx0LyogTk9QICovXG5cblx0LyogaXN0YW5idWwgaWdub3JlIGlmOiB0ZXN0ZWQgYnV0IG5vdCBjb3ZlcmVkIGluIGlzdGFuYnVsIGR1ZSB0byBkaXN0IGJ1aWxkICAqL1xuXHRpZiAoIVNvdXJjZU5vZGUpIHtcblx0ICBTb3VyY2VOb2RlID0gZnVuY3Rpb24gKGxpbmUsIGNvbHVtbiwgc3JjRmlsZSwgY2h1bmtzKSB7XG5cdCAgICB0aGlzLnNyYyA9ICcnO1xuXHQgICAgaWYgKGNodW5rcykge1xuXHQgICAgICB0aGlzLmFkZChjaHVua3MpO1xuXHQgICAgfVxuXHQgIH07XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICBTb3VyY2VOb2RlLnByb3RvdHlwZSA9IHtcblx0ICAgIGFkZDogZnVuY3Rpb24gYWRkKGNodW5rcykge1xuXHQgICAgICBpZiAoX3V0aWxzLmlzQXJyYXkoY2h1bmtzKSkge1xuXHQgICAgICAgIGNodW5rcyA9IGNodW5rcy5qb2luKCcnKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnNyYyArPSBjaHVua3M7XG5cdCAgICB9LFxuXHQgICAgcHJlcGVuZDogZnVuY3Rpb24gcHJlcGVuZChjaHVua3MpIHtcblx0ICAgICAgaWYgKF91dGlscy5pc0FycmF5KGNodW5rcykpIHtcblx0ICAgICAgICBjaHVua3MgPSBjaHVua3Muam9pbignJyk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5zcmMgPSBjaHVua3MgKyB0aGlzLnNyYztcblx0ICAgIH0sXG5cdCAgICB0b1N0cmluZ1dpdGhTb3VyY2VNYXA6IGZ1bmN0aW9uIHRvU3RyaW5nV2l0aFNvdXJjZU1hcCgpIHtcblx0ICAgICAgcmV0dXJuIHsgY29kZTogdGhpcy50b1N0cmluZygpIH07XG5cdCAgICB9LFxuXHQgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHQgICAgICByZXR1cm4gdGhpcy5zcmM7XG5cdCAgICB9XG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNhc3RDaHVuayhjaHVuaywgY29kZUdlbiwgbG9jKSB7XG5cdCAgaWYgKF91dGlscy5pc0FycmF5KGNodW5rKSkge1xuXHQgICAgdmFyIHJldCA9IFtdO1xuXG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2h1bmsubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgcmV0LnB1c2goY29kZUdlbi53cmFwKGNodW5rW2ldLCBsb2MpKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSBlbHNlIGlmICh0eXBlb2YgY2h1bmsgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgY2h1bmsgPT09ICdudW1iZXInKSB7XG5cdCAgICAvLyBIYW5kbGUgcHJpbWl0aXZlcyB0aGF0IHRoZSBTb3VyY2VOb2RlIHdpbGwgdGhyb3cgdXAgb25cblx0ICAgIHJldHVybiBjaHVuayArICcnO1xuXHQgIH1cblx0ICByZXR1cm4gY2h1bms7XG5cdH1cblxuXHRmdW5jdGlvbiBDb2RlR2VuKHNyY0ZpbGUpIHtcblx0ICB0aGlzLnNyY0ZpbGUgPSBzcmNGaWxlO1xuXHQgIHRoaXMuc291cmNlID0gW107XG5cdH1cblxuXHRDb2RlR2VuLnByb3RvdHlwZSA9IHtcblx0ICBpc0VtcHR5OiBmdW5jdGlvbiBpc0VtcHR5KCkge1xuXHQgICAgcmV0dXJuICF0aGlzLnNvdXJjZS5sZW5ndGg7XG5cdCAgfSxcblx0ICBwcmVwZW5kOiBmdW5jdGlvbiBwcmVwZW5kKHNvdXJjZSwgbG9jKSB7XG5cdCAgICB0aGlzLnNvdXJjZS51bnNoaWZ0KHRoaXMud3JhcChzb3VyY2UsIGxvYykpO1xuXHQgIH0sXG5cdCAgcHVzaDogZnVuY3Rpb24gcHVzaChzb3VyY2UsIGxvYykge1xuXHQgICAgdGhpcy5zb3VyY2UucHVzaCh0aGlzLndyYXAoc291cmNlLCBsb2MpKTtcblx0ICB9LFxuXG5cdCAgbWVyZ2U6IGZ1bmN0aW9uIG1lcmdlKCkge1xuXHQgICAgdmFyIHNvdXJjZSA9IHRoaXMuZW1wdHkoKTtcblx0ICAgIHRoaXMuZWFjaChmdW5jdGlvbiAobGluZSkge1xuXHQgICAgICBzb3VyY2UuYWRkKFsnICAnLCBsaW5lLCAnXFxuJ10pO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gc291cmNlO1xuXHQgIH0sXG5cblx0ICBlYWNoOiBmdW5jdGlvbiBlYWNoKGl0ZXIpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLnNvdXJjZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICBpdGVyKHRoaXMuc291cmNlW2ldKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgZW1wdHk6IGZ1bmN0aW9uIGVtcHR5KCkge1xuXHQgICAgdmFyIGxvYyA9IHRoaXMuY3VycmVudExvY2F0aW9uIHx8IHsgc3RhcnQ6IHt9IH07XG5cdCAgICByZXR1cm4gbmV3IFNvdXJjZU5vZGUobG9jLnN0YXJ0LmxpbmUsIGxvYy5zdGFydC5jb2x1bW4sIHRoaXMuc3JjRmlsZSk7XG5cdCAgfSxcblx0ICB3cmFwOiBmdW5jdGlvbiB3cmFwKGNodW5rKSB7XG5cdCAgICB2YXIgbG9jID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jdXJyZW50TG9jYXRpb24gfHwgeyBzdGFydDoge30gfSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgaWYgKGNodW5rIGluc3RhbmNlb2YgU291cmNlTm9kZSkge1xuXHQgICAgICByZXR1cm4gY2h1bms7XG5cdCAgICB9XG5cblx0ICAgIGNodW5rID0gY2FzdENodW5rKGNodW5rLCB0aGlzLCBsb2MpO1xuXG5cdCAgICByZXR1cm4gbmV3IFNvdXJjZU5vZGUobG9jLnN0YXJ0LmxpbmUsIGxvYy5zdGFydC5jb2x1bW4sIHRoaXMuc3JjRmlsZSwgY2h1bmspO1xuXHQgIH0sXG5cblx0ICBmdW5jdGlvbkNhbGw6IGZ1bmN0aW9uIGZ1bmN0aW9uQ2FsbChmbiwgdHlwZSwgcGFyYW1zKSB7XG5cdCAgICBwYXJhbXMgPSB0aGlzLmdlbmVyYXRlTGlzdChwYXJhbXMpO1xuXHQgICAgcmV0dXJuIHRoaXMud3JhcChbZm4sIHR5cGUgPyAnLicgKyB0eXBlICsgJygnIDogJygnLCBwYXJhbXMsICcpJ10pO1xuXHQgIH0sXG5cblx0ICBxdW90ZWRTdHJpbmc6IGZ1bmN0aW9uIHF1b3RlZFN0cmluZyhzdHIpIHtcblx0ICAgIHJldHVybiAnXCInICsgKHN0ciArICcnKS5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykucmVwbGFjZSgvXFxyL2csICdcXFxccicpLnJlcGxhY2UoL1xcdTIwMjgvZywgJ1xcXFx1MjAyOCcpIC8vIFBlciBFY21hLTI2MiA3LjMgKyA3LjguNFxuXHQgICAgLnJlcGxhY2UoL1xcdTIwMjkvZywgJ1xcXFx1MjAyOScpICsgJ1wiJztcblx0ICB9LFxuXG5cdCAgb2JqZWN0TGl0ZXJhbDogZnVuY3Rpb24gb2JqZWN0TGl0ZXJhbChvYmopIHtcblx0ICAgIHZhciBwYWlycyA9IFtdO1xuXG5cdCAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG5cdCAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHQgICAgICAgIHZhciB2YWx1ZSA9IGNhc3RDaHVuayhvYmpba2V5XSwgdGhpcyk7XG5cdCAgICAgICAgaWYgKHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgICAgcGFpcnMucHVzaChbdGhpcy5xdW90ZWRTdHJpbmcoa2V5KSwgJzonLCB2YWx1ZV0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB2YXIgcmV0ID0gdGhpcy5nZW5lcmF0ZUxpc3QocGFpcnMpO1xuXHQgICAgcmV0LnByZXBlbmQoJ3snKTtcblx0ICAgIHJldC5hZGQoJ30nKTtcblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSxcblxuXHQgIGdlbmVyYXRlTGlzdDogZnVuY3Rpb24gZ2VuZXJhdGVMaXN0KGVudHJpZXMpIHtcblx0ICAgIHZhciByZXQgPSB0aGlzLmVtcHR5KCk7XG5cblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbnRyaWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGlmIChpKSB7XG5cdCAgICAgICAgcmV0LmFkZCgnLCcpO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0LmFkZChjYXN0Q2h1bmsoZW50cmllc1tpXSwgdGhpcykpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0sXG5cblx0ICBnZW5lcmF0ZUFycmF5OiBmdW5jdGlvbiBnZW5lcmF0ZUFycmF5KGVudHJpZXMpIHtcblx0ICAgIHZhciByZXQgPSB0aGlzLmdlbmVyYXRlTGlzdChlbnRyaWVzKTtcblx0ICAgIHJldC5wcmVwZW5kKCdbJyk7XG5cdCAgICByZXQuYWRkKCddJyk7XG5cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfVxuXHR9O1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvZGVHZW47XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvaGFuZGxlYmFycy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJleHBvcnQgY2xhc3MgUm91dGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJvdXRlcyA9IFtdO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMuY2hlY2tSb3V0ZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRSb3V0ZShoYXNoLCBmdW5jKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXNbaGFzaF0gPSBmdW5jO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrUm91dGUoKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JSb3V0ZUlkZW50aWZpZXIgPSAnKic7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEhhc2ggPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZWRSb3V0ZSA9IHRoaXMucm91dGVzW2N1cnJlbnRIYXNoXSA/IHRoaXMucm91dGVzW2N1cnJlbnRIYXNoXSA6IHRoaXMucm91dGVzW2Vycm9yUm91dGVJZGVudGlmaWVyXTtcclxuICAgICAgICBtYXRjaGVkUm91dGUoKTtcclxuICAgIH1cclxuICAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvUm91dGVyLmpzIiwiaW1wb3J0IEhvbWVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvSG9tZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgRXJyb3JDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvRXJyb3JDb250cm9sbGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb250cm9sbGVycyA9IHtcclxuICAgIEhvbWVDb250cm9sbGVyLFxyXG4gICAgRXJyb3JDb250cm9sbGVyXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udHJvbGxlcnMuanMiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi4vY29yZS9Db250cm9sbGVyJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJy4uL2NvcmUvVmlldyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgdGVzdCgpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1RvYmknLFxyXG4gICAgICAgICAgICBib2R5OiAnaHVodSdcclxuICAgICAgICB9XHJcbiAgICAgICAgVmlldy5yZW5kZXIoJ2luZGV4JywgZGF0YSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udHJvbGxlcnMvSG9tZUNvbnRyb2xsZXIuanMiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi4vY29yZS9Db250cm9sbGVyJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJy4uL2NvcmUvVmlldyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIHRlc3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQYWdlIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250cm9sbGVycy9FcnJvckNvbnRyb2xsZXIuanMiXSwic291cmNlUm9vdCI6IiJ9