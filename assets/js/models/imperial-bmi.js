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
     * height is to be in inches and due the receiving value in
     * ft. Convert the value to inches only
     */
    set Height(height) {
        this._height = height * 12;
    }
    calculateBMI() {
        return (this._weight / Math.pow(this._height, 2)) * 703;
    }
}
