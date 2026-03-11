"use client"

import { ComponentPropsWithoutRef } from "react";
import { catClass } from "@lib/utils";
import styles from "./mosaic.module.scss"

interface IMosaic extends ComponentPropsWithoutRef<"div"> {
	row?: number;
	column?: number;
	animation?: "NONE" | "BLINK";
}

export default function Mosaic({ row = 3, column = 3, animation = "NONE", className }: IMosaic) {

	return (
		<div className={`${catClass([styles.mosaic, className])} flex flex-col gap-(--size-space-medium)`} data-animation={animation}>
			{Array.from({ length: row }).map((_, r) =>
				<div key={`mosaicsquarerow${r}`} className="flex flex-row gap-(--size-space-medium)">
					{Array.from({ length: column }).map((_, c) =>
						<span key={`mosaicsquare${c * r + c}`}></span>
					)}
				</div>)}
		</div>);

}
