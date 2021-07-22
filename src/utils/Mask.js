class Masks {
    ThousandMask(value) {
        value = value.replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1.')
        return value;
    }
}
export default new Masks();