export class BMI {
    constructor(weight, height) {
        this._weight = 0; // kg
        this._height = 0;
        this._weight = weight;
        this._height = height;
    }
    get Description() {
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