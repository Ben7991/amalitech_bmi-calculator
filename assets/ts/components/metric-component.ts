import { MetricsBMI } from "../models/metric-bmi.js";

export class MetricsComponent {
    private height: HTMLInputElement;
    private weight: HTMLInputElement;

    public constructor() {
        this.height = <HTMLInputElement>document.getElementById("height");
        this.weight = <HTMLInputElement>document.getElementById("weight");
        this.configure();
    }

    private configure() {
        this.height.addEventListener("change", () => {
            this.calculate();
        });

        this.weight.addEventListener("change", () => {
            this.calculate();
        });
    }

    private calculate() {
        if (this.height.value === "" || this.weight.value === "")
            return;

        let weightValue = parseFloat(this.weight.value);
        let heightValue = parseFloat(this.height.value);
        let bmi = new MetricsBMI(weightValue, heightValue);
        document.querySelector(".header__result-answer-heading")!.textContent = bmi.calculateBMI().toFixed(2).toString();
        document.querySelector(".header__result-info")!.classList.remove("d-none");
        document.querySelector(".header__result-welcome")!.classList.add("d-none");
        document.querySelector(".header__result-description-info")!.innerHTML = bmi.Description;
    }
}