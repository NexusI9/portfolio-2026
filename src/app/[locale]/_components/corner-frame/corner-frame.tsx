import { ComponentPropsWithoutRef } from "react";
import Corner from "./corner"
import { catClass } from "@lib/utils";


export default function CornerFrame({ className }: ComponentPropsWithoutRef<"div">) {

	return (<div className={catClass(["flex flex-col justify-between items-center", className])}>
		<div className="flex justify-between items-center w-full">
			<Corner side="TOP_LEFT" />
			<Corner side="TOP_RIGHT" />
		</div>

		<div className="flex justify-between items-center w-full">
			<Corner side="BOTTOM_LEFT" />
			<Corner side="BOTTOM_RIGHT" />
		</div>
	</div>);

}
