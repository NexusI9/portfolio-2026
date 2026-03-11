"use client"

import { Text } from "@components/text/text";
import styles from "./attribute-row.module.scss";

interface IAttributeRow {
	header: string;
	value?: string;
	children?: React.ReactNode;
}

export default function AttributeRow({ header, value, children }: IAttributeRow) {

	return (
		<li className={styles["attribute-row"]}>
			<Text.LabelLarge className="text-(--color-text-subtle-on-light)">{header}</Text.LabelLarge>
			<div className="flex flex-row gap-x-(--size-space-extra-large-3) gap-y-(--size-space-extra-large) flex-wrap">
				{value && <Text.Subtitle1>{value}</Text.Subtitle1>}
				{children}
			</div>
		</li>)
}
