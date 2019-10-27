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
