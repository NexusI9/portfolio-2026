"use client"

import { Text } from "../text/text";

interface IParagraph {
	children?: string | string[] | React.ReactNode;
}


export default function Paragraph({ children }: IParagraph) {

	if (typeof children === "string")
		return (<Text.Body>{children}</Text.Body>);
	else if (Array.isArray(children))
		return (<Text.Body className="flex flex-col gap-(--size-space-medium)">{children.map(item => <span key={item}>{item}</span>)}</Text.Body>);
}

