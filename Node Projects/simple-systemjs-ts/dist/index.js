System.register(["./method.js"], function (exports_1, context_1) {
    "use strict";
    var method_js_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (method_js_1_1) {
                method_js_1 = method_js_1_1;
            }
        ],
        execute: function () {
            method_js_1.init();
        }
    };
});
