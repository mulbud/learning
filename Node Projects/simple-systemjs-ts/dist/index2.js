System.register(["./method"], function (exports_1, context_1) {
    "use strict";
    var method_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (method_1_1) {
                method_1 = method_1_1;
            }
        ],
        execute: function () {
            method_1.init();
        }
    };
});
