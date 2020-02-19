(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../services/method"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var method_1 = require("../services/method");
    method_1.init();
});
