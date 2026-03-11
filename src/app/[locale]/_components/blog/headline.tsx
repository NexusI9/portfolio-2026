"use client"

import { catClass } from "@lib/utils";

interface IHeadline {
	children?: React.ReactNode;
	className?: string;
}

export default function Headline({ children, className }: IHeadline) {
	return (<hgroup className={catClass(["flex flex-col gap-(--size-space-medium)", className])}>{children}</hgroup>);
}
