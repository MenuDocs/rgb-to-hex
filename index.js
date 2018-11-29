const { rgbToHex, hexToRgb } = require("./functions");

const rgb = [137, 230, 197];

console.log(`rgb(${rgb.join(", ")})`);

const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);

console.log(`hex: ${hex}`);

const fromHex = hexToRgb(hex);

console.log(fromHex);
