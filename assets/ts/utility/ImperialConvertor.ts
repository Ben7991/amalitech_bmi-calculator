abstract class ImperialConvertor {
    public static convertFeetToInchesInHeight(feet: number): number {
        return feet * 12;
    }

    public static convertInchesToFeetInHeight(inches: number): number {
        return inches / 12;
    }

    public static convertStoneToPoundsInWeight(stone: number): number {
        return stone * 14;
    }

    public static convertPoundsToStoneInWeight(pounds: number): number {
        return pounds / 14;
    }
}