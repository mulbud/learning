(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./method"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var method_1 = require("./method");
    method_1.init();
});

},{"./method":2}],2:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./testclass"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var testclass_1 = require("./testclass");
    function init() {
        document.getElementById("buttonFirst").addEventListener("click", function () {
            alert("This is in init() in method.tsx");
            var tc = new testclass_1.TestClass("Hello World");
            tc.test();
        });
    }
    exports.init = init;
});

},{"./testclass":3}],3:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var TestClass = /** @class */ (function () {
        function TestClass(text) {
            this.text = text;
            alert(this.text);
        }
        TestClass.prototype.test = function () {
            alert("This is in test method - " + this.text);
        };
        return TestClass;
    }());
    exports.TestClass = TestClass;
});

},{}]},{},[1]);
