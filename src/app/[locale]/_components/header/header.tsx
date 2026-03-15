"use client"

import { useDictionary } from "@/i18n/Context";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { TABLET_WIDTH } from "../../_lib/constants";
import DesktopHeader from "./desktop";
import MobileHeader from "./mobile";

export default function Header() {

	const [device, setDevice] = useState<"PC" | "TB">("PC");

	useEffect(() => {

		const checkDevice = () => {
			setDevice(window.innerWidth > TABLET_WIDTH ? "PC" : "TB");
		};

		checkDevice();
		window.addEventListener("resize", checkDevice);

		return window.removeEventListener("resize", checkDevice);
	}, []);

	return (<>
		{device == "PC" ? <DesktopHeader /> : <MobileHeader />}
	</>);

};
