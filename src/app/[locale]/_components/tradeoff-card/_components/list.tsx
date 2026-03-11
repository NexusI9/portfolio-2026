"use client"

import { Text } from "@components/text/text";
import styles from "./list.module.scss";

interface IList {
	heading: string;
	leadingIcon?: React.ReactNode;
	items: string[];
	style: "SUCCESS" | "DANGER";
};

export default function List({ heading, leadingIcon, items, style }: IList) {

	return (
		<div data-style={style} className={styles.list}>
			<Text.Subtitle2 className="flex flex-row gap-(--size-space-small) items-center">{leadingIcon}{heading}</Text.Subtitle2>
			<ul className="flex flex-col gap-(--size-space-small)">
				{items.map((item, i) =>
					<li key={item + i}>
						<Text.Body>{item}</Text.Body>
					</li>)}
			</ul>
		</div>);
}
