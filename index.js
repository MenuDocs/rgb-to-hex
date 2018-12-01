const { rgbToHex, hexToRgb } = require("./functions");

const rgb = [46, 211, 194];

console.log(`rgb(${rgb.join(", ")})`);

const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);

console.log(`hex: ${hex}`);

const fromHex = hexToRgb(hex);

console.log(fromHex);
