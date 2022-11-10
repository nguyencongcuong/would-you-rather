export class NumberUtil {
    calculatePercentage(num1: number, num2: number) {
        return Math.round(num1 / (num1 + num2) * 100);
    }
}

export const numberUtil = new NumberUtil();
