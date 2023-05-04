const coloria = require("../dist");

const { fromHex, fromRgb, getNeutral } = coloria;

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
