import { BMI } from "./bmi.js";
export class MetricsBMI extends BMI {
    constructor(weight, height) {
        super(weight, height);
        this.Height = height; // override the height value to meters
    }
    /**
     * receiving height in cm and converting to meters
     * due to the formula for calculating in meters
     */
    set Height(height) {
        this._height = height / 100;
    }
    calculateBMI() {
        return this._weight / Math.pow(this._height, 2);
    }
}
