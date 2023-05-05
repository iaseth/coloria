const coloria = require("../dist");



test("sanitizeCodeName", () => {
	const { sanitizeCodeName } = coloria;

	expect(sanitizeCodeName("Foo")).toStrictEqual("foo");
	expect(sanitizeCodeName(" FOO  ")).toStrictEqual("foo");
	expect(sanitizeCodeName("Foo$")).toStrictEqual("foo");
	expect(sanitizeCodeName("Fo o45")).toStrictEqual("foo");
});
