export class BMI {
    constructor(weight, height) {
        this._weight = 0; // kg
        this._height = 0;
        this._weight = weight;
        this._height = height;
    }
    set Weight(weight) {
        this._weight = weight;
    }
    set Height(height) {
        this._height = height;
    }
}
