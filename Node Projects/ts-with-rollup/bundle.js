(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

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

    function init() {
        document.getElementById("buttonFirst").addEventListener("click", function () {
            alert("This is in init() in method.tsx");
            var tc = new TestClass("Hello World");
            tc.test();
        });
    }

    init();

})));
