
const isAlpha = function (ch: string) {
	return typeof ch === "string" && ch.length === 1 && /[a-z]/.test(ch);
}

export function sanitizeCodeName (name: string) : string {
	const chars = [...name.toLowerCase()];
	const goodChars = chars.filter(ch => isAlpha(ch));
	const codeName = goodChars.join("");
	return codeName;
}
