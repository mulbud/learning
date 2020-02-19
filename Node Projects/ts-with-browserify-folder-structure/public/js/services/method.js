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
