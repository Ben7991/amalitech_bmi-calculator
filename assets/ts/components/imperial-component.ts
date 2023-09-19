import { ImperialBMI } from "../models/imperial-bmi.js";

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
        if (this.feat.value === "" || this.inches.value === "" || this.pounds.value === "" || this.stone.value === "")
            return;

        let height = parseFloat(this.feat.value) + parseFloat("0." + this.inches.value);
        let weight = parseFloat(this.stone.value) + parseFloat("0." + this.pounds.value);
        
        let bmi = new ImperialBMI(weight, height);
        document.querySelector(".header__result-answer-heading")!.textContent = bmi.calculateBMI().toFixed(2);
        document.querySelector(".header__result-info")!.classList.remove("d-none");
        document.querySelector(".header__result-welcome")!.classList.add("d-none");
        document.querySelector(".header__result-description-info")!.innerHTML = bmi.Description;
    }
}