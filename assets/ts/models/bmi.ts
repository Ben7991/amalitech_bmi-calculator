export abstract class BMI {
    protected _weight: number = 0;     // kg
    protected _height: number = 0;  

    public constructor(weight: number, height: number) {
        this._weight = weight;
        this._height = height;
    }

    public set Weight(weight: number) {
        this._weight = weight;
    }

    public set Height(height: number) {
        this._height = height;
    }

    public abstract calculateBMI(): number;

    public abstract get Description(): string;
}