"use strict";
class ImperialConvertor {
    static convertFeetToInchesInHeight(feet) {
        return feet * 12;
    }
    static convertInchesToFeetInHeight(inches) {
        return inches / 12;
    }
    static convertStoneToPoundsInWeight(stone) {
        return stone * 14;
    }
    static convertPoundsToStoneInWeight(pounds) {
        return pounds / 14;
    }
}
