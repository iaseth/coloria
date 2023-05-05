const coloria = require("../dist");

const { fromHex, fromRgb, getNeutral, htmlcolors } = coloria;

test("fromHex", () => {
	expect(fromHex("#000").hex).toStrictEqual("#000000");
	expect(fromHex("#777").hex).toStrictEqual("#777777");
	expect(fromHex("#fff").hex).toStrictEqual("#ffffff");

	expect(fromHex("#000000").hex).toStrictEqual("#000000");
	expect(fromHex("#777777").hex).toStrictEqual("#777777");
	expect(fromHex("#ffffff").hex).toStrictEqual("#ffffff");
});

test("fromRgb", () => {
	expect(fromRgb([0, 0, 0]).hex).toStrictEqual("#000000");
	expect(fromRgb([128, 128, 128]).hex).toStrictEqual("#808080");
	expect(fromRgb([255, 255, 255]).hex).toStrictEqual("#ffffff");
});

test("getNeutral", () => {
	expect(getNeutral(0).hex).toStrictEqual("#000000");
	expect(getNeutral(128).hex).toStrictEqual("#808080");
	expect(getNeutral(255).hex).toStrictEqual("#ffffff");
});

const { Black, White, Red } = htmlcolors;
test("getColorsInBetween", () => {
	expect(Black.getColorsInBetween(Red).length).toBe(5);
	expect(Black.getColorsInBetween(Red, 3).length).toBe(3);
	expect(Black.getColorsInBetween(Red, 7).length).toBe(7);
});

test("getShades", () => {
	expect(Black.getShades().length).toBe(5);
	expect(Black.getShades(4).length).toBe(4);
	expect(Black.getShades(9).length).toBe(9);
});

test("getPalette", () => {
	expect(Black.getPalette().length).toBe(11);
	expect(Black.getPalette(4).length).toBe(9);
	expect(Black.getPalette(9).length).toBe(19);
});

test("getStandardPalette", () => {
	expect(Black.getStandardPalette().length).toBe(11);
	expect(Black.getStandardPalette(4).length).toBe(11);
	expect(Black.getStandardPalette(9).length).toBe(11);
});
