import { ComponentPropsWithoutRef } from "react";
import { IComponentRole } from "../../_types/component";
import styles from "./tag.module.scss";
import { catClass } from "../../_lib/utils";

interface ITag extends ComponentPropsWithoutRef<"div"> {
	role: IComponentRole,
}

export default function Tag({ role, children, className }: ITag) {
	return <div className={catClass([styles.tag, className])} data-role={role}>{children}</div>
}
