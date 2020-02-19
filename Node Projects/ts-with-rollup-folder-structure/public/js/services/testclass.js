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
export { TestClass };
