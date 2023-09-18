const rbMeasurementUnits = document.querySelectorAll(".header__measurement-radio");

for (let i = 0; i < rbMeasurementUnits.length; i++) {
    let element = rbMeasurementUnits[i] as HTMLInputElement;
    element.addEventListener('change', function() {
        let metricsElement = <HTMLDivElement>document.querySelector('.header__measurement--metrics')!;
        let imperialElement = <HTMLDivElement>document.querySelector('.header__measurement--imperial')!;
        if (element.value === 'metrics') {
            metricsElement.style.display = 'flex';
            imperialElement.style.display = 'none';
        } else {
            metricsElement.style.display = 'none';
            imperialElement.style.display = 'flex';
        }
    });
}

abstract class BMI {
    protected _weight: number = 0;     // kg
    protected _height: number = 0;  

    public constructor(weight: number, height: number) {
        this._weight = weight;
        this._height = height;
    }

    public abstract calculateBMI(): number;
}

class MetricsBMI extends BMI {
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


class ImperialBMI extends BMI {
    public constructor(weight: number, height: number) {
        super(weight, height);
        this.Weight = weight;
        this.Height = height;
    }

    /**
     * as per the imperial calculation of bmi
     * weight is to be in pounds and due to the fact of receiving 
     * weight in stone. converting to pounds only
     */
    public set Weight(weight: number) {
        this._weight = weight * 14;
    }

    /**
     * as per the imperial calculation of bmi
     * height is to be in inches and due the receiving value in 
     * ft. Convert the value to inches only
     */
    public set Height(height: number) {
        this._height = height * 12;
    }

    public override calculateBMI(): number { 
        return ( this._weight / Math.pow(this._height, 2) ) * 703; 
    }
}