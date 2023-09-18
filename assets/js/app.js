"use strict";
const rbMeasurementUnits = document.querySelectorAll(".header__measurement-radio");
for (let i = 0; i < rbMeasurementUnits.length; i++) {
    let element = rbMeasurementUnits[i];
    element.addEventListener('change', function () {
        let metricsElement = document.querySelector('.header__measurement--metrics');
        let imperialElement = document.querySelector('.header__measurement--imperial');
        if (element.value === 'metrics') {
            metricsElement.style.display = 'flex';
            imperialElement.style.display = 'none';
        }
        else {
            metricsElement.style.display = 'none';
            imperialElement.style.display = 'flex';
        }
    });
}
class BMI {
    constructor(weight, height) {
        this._weight = 0; // kg
        this._height = 0;
        this._weight = weight;
        this._height = height;
    }
}
class MetricsBMI extends BMI {
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
class ImperialBMI extends BMI {
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
