function rgbToHex(r, g, b) {

    const red = numberToHex(r);
    const green = numberToHex(g);
    const blue = numberToHex(b);

    const hexValue = red + green + blue;

    return `#${hexValue}`;
}

function numberToHex(c) {
    const hex = c.toString(16);

    return hex.length === 1 ? `0${hex}` : hex;
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (result) {
        return {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        };
    }

    return false;
}

module.exports = {
    rgbToHex: rgbToHex,
    hexToRgb: hexToRgb,
};
