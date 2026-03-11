"use client"

import { catClass } from "@lib/utils";
import { ComponentPropsWithoutRef } from "react";
import styles from "./deco-frame.module.scss"

interface IDecoFrame extends ComponentPropsWithoutRef<"span"> {
	size: string;
}

export default function DecoFrame({ size, className }: IDecoFrame) {
	return (<span className={catClass([styles["deco-frame"], className])} style={{ width: size }}></span>);

}
