import { BMI } from "./bmi.js";

export class MetricsBMI extends BMI {
    public constructor(weight: number, height: number) {
        super(weight, height);
        this.Height = height;   // override the height value to meters
    }

    /**
     * receiving height in cm and converting to meters
     * due to the formula for calculating in meters
     */
    public set Height(height: number) {   
        this._height = height / 100;
    }

    public override calculateBMI(): number {
        return this._weight / Math.pow(this._height, 2);
    }

    public override get Description(): string {
        let calculatedBMI = this.calculateBMI();

        if (calculatedBMI >= 30)
            return `Your BMI suggests you're an obese. Your ideal weight is between <strong class='header__result-info-value'>${(this._weight - 16.7).toFixed(2)}kg - ${(this._weight + 5.2).toFixed(2)}kg</strong>`;
        else if (calculatedBMI >= 25)
            return `Your BMI suggests you're overweight. Your ideal weight is between <strong class='header__result-info-value'>${(this._weight - 16.7).toFixed(2)}kg - ${(this._weight + 5.2).toFixed(2)}kg</strong>`;
        else if (calculatedBMI >= 18.5)
            return `Your BMI suggests you have a healthy weight. Your ideal weight is between <strong class='header__result-info-value'>${(this._weight - 16.7).toFixed(2)}kg - ${(this._weight + 5.2).toFixed(2)}kg</strong>`;
        
        return `Your BMI suggests you're underweight. Your ideal weight is between <strong class='header__result-info-value'>${(this._weight - 4.7).toFixed(2)}kg - ${(this._weight + 5.2).toFixed(2)}kg</strong>`;
    }
}