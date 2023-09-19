export class ImperialComponent {
    private feat: HTMLInputElement;
    private inches: HTMLInputElement;
    private stone: HTMLInputElement;
    private pounds: HTMLInputElement;

    public constructor() {
        this.feat = <HTMLInputElement>document.getElementById("feat");
        this.inches = <HTMLInputElement>document.getElementById("inches");
        this.stone = <HTMLInputElement>document.getElementById("stone");
        this.pounds = <HTMLInputElement>document.getElementById("pounds");

        this.configure();
    }

    private configure() {
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

    private calculate() {
        console.log("your task");
    }
}