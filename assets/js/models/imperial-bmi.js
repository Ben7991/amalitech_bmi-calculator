import { BMI } from "./bmi.js";
export class ImperialBMI extends BMI {
    constructor(weight, height) {
        super(weight, height);
        this.Weight = weight;
        this.Height = height;
    }
    /**
     * as per the imperial calculation of bmi
     * weight is to be in pounds and due to the fact of receiving
     * weight in stone. converting to pounds only
     */
    set Weight(weight) {
        this._weight = weight * 14;
    }
    /**
     * as per the imperial calculation of bmi
     * height is to be in inches and due to the receiving value in
     * ft. Convert the value to inches only
     */
    set Height(height) {
        this._height = height * 12;
    }
    calculateBMI() {
        return (this._weight / Math.pow(this._height, 2)) * 703;
    }
    get Description() {
        let calculatedBMI = this.calculateBMI();
        let convertedWeight = this._weight / 2.20462; // convert the calculated weight in pounds back to kg
        if (calculatedBMI >= 30)
            return `Your BMI suggests you're an obese. Your ideal weight is between <strong class='header__result-info-value'>${(convertedWeight - 16.7).toFixed(2)}kg - ${(convertedWeight + 5.2).toFixed(2)}kg</strong>`;
        else if (calculatedBMI >= 25)
            return `Your BMI suggests you're overweight. Your ideal weight is between <strong class='header__result-info-value'>${(convertedWeight - 16.7).toFixed(2)}kg - ${(convertedWeight + 5.2).toFixed(2)}kg</strong>`;
        else if (calculatedBMI >= 18.5)
            return `Your BMI suggests you have a healthy weight. Your ideal weight is between <strong class='header__result-info-value'>${(convertedWeight - 16.7).toFixed(2)}kg - ${(convertedWeight + 5.2).toFixed(2)}kg</strong>`;
        return `Your BMI suggests you're underweight. Your ideal weight is between <strong class='header__result-info-value'>${(convertedWeight - 4.7).toFixed(2)}kg - ${(convertedWeight + 5.2).toFixed(2)}kg</strong>`;
    }
}
