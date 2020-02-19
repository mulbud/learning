export class TestClass {
    public constructor(private text: string) {
        alert(this.text);
    }

    public test() {
        alert("This is in test method - " + this.text);
    }
}