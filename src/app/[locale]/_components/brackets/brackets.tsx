"use client"
import { ComponentPropsWithoutRef } from "react";
import styles from "./brackets.module.scss";
import { catClass } from "@lib/utils";

export default function Brackets(props: ComponentPropsWithoutRef<"span">) {

	return (
		<span {...props} className={catClass([styles.brackets, props.className])}>
			<span className={styles.bracket} data-side="LEFT"></span>
			<span className={styles.bracket} data-side="RIGHT"></span>
		</span>
	);
}
