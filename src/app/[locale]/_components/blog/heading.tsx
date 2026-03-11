"use client"

import { Text, TextBase } from "@components/text/text";
import { ComponentPropsWithoutRef, createElement } from "react";
import { slugify } from "./helper";

interface IHeading {
	role?: ComponentPropsWithoutRef<typeof TextBase>["role"];
	children: string;
}

export default function Heading({ role = "H3", children }: IHeading) {

	return (<>{createElement(Text[role], {
		children,
		id: slugify(children)
	})}</>);
}
