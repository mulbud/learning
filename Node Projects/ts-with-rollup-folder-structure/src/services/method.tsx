import { TestClass } from "./testclass";

export function init() {
    document.getElementById("buttonFirst")!.addEventListener("click", function() {
        alert("This is in init() in method.tsx");

        const tc = new TestClass("Hello World");
        tc.test();
    });
}
