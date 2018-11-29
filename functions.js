function rgbToHex(r, g, b) {
    // convert all the number to hex digits
    const red = numberToHex(r);
    const green = numberToHex(g);
    const blue = numberToHex(b);

    // combine everything together
    const hexValue = red + green + blue;

    return "#" + hexValue;
}

function numberToHex(c) {
    // convert the number into a string
    const hex = c.toString(16);

    // make sure that the hex digit is always 2 in length
    return hex.length === 1 ? "0" + hex : hex;
}

function hexToRgb(hex) {
    // regex for hex codes
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    // if we have a result we're gonna parse it
    // and return it as object
    if (result) {
        return {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        };
    }

    // if there is no result we're gonna return false
    return false;
}

module.exports = {
    rgbToHex: rgbToHex,
    hexToRgb: hexToRgb,
};
