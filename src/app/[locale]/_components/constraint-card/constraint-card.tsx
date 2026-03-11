"use client"

import { Text } from "../text/text";
import styles from "./constraint-card.module.scss";
import blog_styles from "../blog/blog.module.scss";
import { catClass } from "@lib/utils";

interface IConstraintCard {
	label: string;
	number?: number;
}


export default function ConstraintCard({ label, number }: IConstraintCard) {

	return (<li className={styles["constraint-card"]}>
		{number && <Text.Body className={catClass([blog_styles.number, styles.number])}>{number}</Text.Body>}
		<Text.Body>{label}</Text.Body>
	</li>);

}
