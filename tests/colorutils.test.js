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
