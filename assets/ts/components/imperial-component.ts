import { ImperialBMI } from "../models/imperial-bmi.js";
import { ImperialConvertor } from "../utility/ImperialConvertor.js";

export class ImperialComponent {
    private feet: HTMLInputElement;
    private inches: HTMLInputElement;
    private stone: HTMLInputElement;
    private pounds: HTMLInputElement;
    private bmi: ImperialBMI;

    public constructor() {
        this.feet = <HTMLInputElement>document.getElementById("feat");
        this.inches = <HTMLInputElement>document.getElementById("inches");
        this.stone = <HTMLInputElement>document.getElementById("stone");
        this.pounds = <HTMLInputElement>document.getElementById("pounds");

        this.configure();
        this.bmi = new ImperialBMI(0,0);
    }

    private configure() {
        this.feet.addEventListener("change", () => {
            let parsedFeet = parseFloat(this.feet.value);
            if (isNaN(parsedFeet)) 
                return;

            this.inches.value = ImperialConvertor.convertFeetToInchesInHeight(parsedFeet).toString();
            this.calculate();
        });

        this.inches.addEventListener("change", () => {
            let parsedInches = parseFloat(this.inches.value);
            if (isNaN(parsedInches)) 
                return;

            this.feet.value = ImperialConvertor.convertInchesToFeetInHeight(parsedInches).toString();
            this.calculate();
        });

        this.stone.addEventListener("change", () => {
            let parsedStone = parseFloat(this.stone.value);
            if (isNaN(parsedStone)) 
                return;

            this.pounds.value = ImperialConvertor.convertStoneToPoundsInWeight(parsedStone).toString();
            this.calculate();
        });

        this.pounds.addEventListener("change", () => {
            let parsedPounds = parseFloat(this.pounds.value);
            if (isNaN(parsedPounds)) 
                return;

            this.stone.value = ImperialConvertor.convertPoundsToStoneInWeight(parsedPounds).toString();
            this.calculate();
        });
    }

    private calculate() {
        if (this.feet.value === "" || this.inches.value === "" || this.pounds.value === "" || this.stone.value === "")
            return;

        this.bmi.Weight = parseFloat(this.pounds.value);
        this.bmi.Height = parseFloat(this.inches.value);

        document.querySelector(".header__result-answer-heading")!.textContent = this.bmi.calculateBMI().toFixed(2);
        document.querySelector(".header__result-info")!.classList.remove("d-none");
        document.querySelector(".header__result-welcome")!.classList.add("d-none");
        document.querySelector(".header__result-description-info")!.innerHTML = this.bmi.Description;
    }
}