import { COUNT_FORMATS } from "../constants/app";

const formatCount = (value: number) => {
    const format = COUNT_FORMATS.find((format) => value < format.limit);
    if (format) {
        const formattedValue = (1000 * value) / format.limit;
        const roundedFormattedValue = Math.round(formattedValue * 100) / 100; // keep one decimal number, only if needed
        return roundedFormattedValue + format.letter;
    } else {
        return value;
    }
};

export { formatCount };
