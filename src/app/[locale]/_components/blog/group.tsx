"use client"

import { ComponentPropsWithoutRef } from "react";
import { catClass } from "../../_lib/utils";
import styles from "./group.module.scss";

interface IGroup extends ComponentPropsWithoutRef<"div"> {
	direction?: "COLUMN" | "ROW";
}

export default function Group({ direction = "COLUMN", children, className }: IGroup) {

	return (<div className={catClass([styles.group, className])} data-direction={direction}>{children}</div>);

}
