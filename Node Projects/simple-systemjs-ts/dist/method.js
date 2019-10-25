System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function init() {
        document.getElementById("buttonFirst").addEventListener("click", function () {
            alert("Test");
        });
    }
    exports_1("init", init);
    return {
        setters: [],
        execute: function () {
        }
    };
});
