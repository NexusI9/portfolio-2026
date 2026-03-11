/**
	Concat and Sanitize class name
 */
export function catClass(values: Array<String | undefined>) {
	return values.filter(n => n && n.length).join(" ");
}


export function randomInt(mn: number, mx: number) { // min and max included
	return Math.floor(Math.random() * (mx - mn + 1) + mn);
}


