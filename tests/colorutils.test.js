const coloria = require("../dist");



test("rgbToHex", () => {
	const { rgbToHex } = coloria;

	expect(rgbToHex([0, 0, 0])).toBe("#000000");
	expect(rgbToHex([255, 255, 255])).toBe("#ffffff");
	expect(rgbToHex([128, 128, 128])).toBe("#808080");
});

test("hexToRgb", () => {
	const { hexToRgb } = coloria;

	expect(hexToRgb("#000000")).toStrictEqual([0, 0, 0]);
	expect(hexToRgb("#ffffff")).toStrictEqual([255, 255, 255]);
	expect(hexToRgb("#808080")).toStrictEqual([128, 128, 128]);

	expect(hexToRgb("#000")).toStrictEqual([0, 0, 0]);
	expect(hexToRgb("#fff")).toStrictEqual([255, 255, 255]);
	expect(hexToRgb("#777")).toStrictEqual([119, 119, 119]);

	expect(hexToRgb("#f00")).toStrictEqual([255, 0, 0]);
	expect(hexToRgb("#0f0")).toStrictEqual([0, 255, 0]);
	expect(hexToRgb("#00f")).toStrictEqual([0, 0, 255]);
});


test("rgbToHsl", () => {
	const { rgbToHsl } = coloria;

	expect(rgbToHsl([0, 0, 0])).toStrictEqual([0, 0, 0]);
	expect(rgbToHsl([255, 0, 0])).toStrictEqual([0, 100, 50]);
	expect(rgbToHsl([0, 255, 0])).toStrictEqual([120, 100, 50]);
	expect(rgbToHsl([0, 0, 255])).toStrictEqual([240, 100, 50]);
});

test("hslToRgb", () => {
	const { hslToRgb } = coloria;

	expect(hslToRgb([0, 0, 0])).toStrictEqual([0, 0, 0]);
	expect(hslToRgb([0, 100, 50])).toStrictEqual([255, 0, 0]);
	expect(hslToRgb([120, 100, 50])).toStrictEqual([0, 255, 0]);
	expect(hslToRgb([240, 100, 50])).toStrictEqual([0, 0, 255]);
});


test("hslToHsv", () => {
	const { hslToHsv } = coloria;

	expect(hslToHsv([0, 100, 50])).toStrictEqual([0, 100, 100]);
	expect(hslToHsv([156, 100, 50])).toStrictEqual([156, 100, 100]);
});

test("hsvToHsl", () => {
	const { hsvToHsl } = coloria;

	expect(hsvToHsl([0, 100, 100])).toStrictEqual([0, 100, 50]);
	expect(hsvToHsl([156, 100, 100])).toStrictEqual([156, 100, 50]);
});
