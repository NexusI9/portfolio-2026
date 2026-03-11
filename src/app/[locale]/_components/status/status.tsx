"use client"

import { useDictionary } from "@/i18n/Context";
import Tag from "../tag/tag";
import ProgressIcon from "@assets/icons/outline/refresh-cw.svg";
import CompleteIcon from "@assets/icons/outline/check.svg";
import { Text } from "../text/text";
import styles from "./status.module.scss";


interface IStatus {
	type: "PROGRESS" | "COMPLETE"
}

export default function Status({ type }: IStatus) {
	const dico = useDictionary();

	const role = type == "PROGRESS" ? "INFORMATION" : "SUCCESS";
	const label = type == "PROGRESS" ? dico.projects.common.status.progress : dico.projects.common.status.complete;

	const icon = type == "PROGRESS" ? <ProgressIcon /> : <CompleteIcon />;

	return (<Tag role={role} className={styles.status}>{icon}<Text.LabelMedium>{label}</Text.LabelMedium></Tag>);
}
