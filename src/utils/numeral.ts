export default function toComma(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}