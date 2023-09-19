export class ImperialComponent {
    constructor() {
        this.feat = document.getElementById("feat");
        this.inches = document.getElementById("inches");
        this.stone = document.getElementById("stone");
        this.pounds = document.getElementById("pounds");
        this.configure();
    }
    configure() {
        this.feat.addEventListener("change", () => {
            this.calculate();
        });
        this.inches.addEventListener("change", () => {
            this.calculate();
        });
        this.stone.addEventListener("change", () => {
            this.calculate();
        });
        this.pounds.addEventListener("change", () => {
            this.calculate();
        });
    }
    calculate() {
        console.log("your task");
    }
}
