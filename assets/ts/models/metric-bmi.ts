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
}