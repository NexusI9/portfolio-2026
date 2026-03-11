"use client"

import { ReactNode } from "react";
import { Button } from "@components/button/button";
import { useSlider } from "./context";
import ChevronLeft from "@assets/icons/outline/chevron-left.svg";
import ChevronRight from "@assets/icons/outline/chevron-right.svg";


type ButtonProps = {
	children?: ReactNode
	className?: string;
};

export function ButtonLeft({ className }: ButtonProps) {
	const { scrollLeft } = useSlider();
	return (
		<Button
			role="PRIMARY"
			style="OUTLINE"
			size="LARGE"
			type="ICON"
			onClick={scrollLeft}
			className={className}>
			<ChevronLeft />
		</Button>
	);
}

export function ButtonRight({ className }: ButtonProps) {
	const { scrollRight } = useSlider();
	return (
		<Button
			role="PRIMARY"
			style="OUTLINE"
			size="LARGE"
			type="ICON"
			onClick={scrollRight}
			className={className}>
			<ChevronRight />
		</Button>
	);
}

