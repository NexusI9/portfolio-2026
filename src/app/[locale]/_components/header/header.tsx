"use client"

import { Text } from "@components/text/text";
import Logo from "@assets/icons/solid/nek-logo.svg"
import Link from "next/link";
import styles from "./header.module.scss"
import { Button } from "@components/button/button";
import Combobox from "@components/combobox/combobox";
import { useDictionary } from "@/i18n/Context";
import { useParams, usePathname, useRouter } from "next/navigation";

export default function Header() {

	const comboboxOptions = [{ value: "en", label: "EN" }, { value: "zh-TW", label: "繁體" }];
	const dico = useDictionary();
	const params = useParams();
	const { locale } = params;
	const router = useRouter();
	const pathname = usePathname();

	const currentOption = comboboxOptions.find(option => option.value === locale) ?? comboboxOptions[0];

	const handleChange = (selected: { value: string; label: string }) => {
		if (!pathname) return; // router might not be hydrated yet
		const segments = pathname.split('/').filter(Boolean);
		segments[0] = selected.value; // replace locale
		router.push('/' + segments.join('/'));
	};

	return (<header className={`${styles.header} flex flex-row justify-between items-center`} role="menubar">
		  <Link href={`/${locale}`} className={`${styles.signature} flex flex-row gap-(--size-space-medium) items-center`}>
			<Logo />
			<div>
				<Text.LabelMedium>{dico.common.header.name}</Text.LabelMedium>
				<Text.Caption>{dico.common.header.subtitle}</Text.Caption>
			</div>
		</Link>


		<div className="flex flex-row gap-(--size-space-extra-large-3) items-center">
			<div className="flex flex-row gap-(--size-space-extra-large-3) items-center">
				<Button size="MEDIUM" role="PRIMARY" style="GHOST">
					{dico.common.header.resume}
				</Button>
				<Button size="MEDIUM" role="PRIMARY" style="GHOST" href="mailto:nassim.elkhantour@gmail.com">
					{dico.common.header.contact}
				</Button>
			</div>
			<Combobox
				options={comboboxOptions}
				placeholder={currentOption.label}
				onChange={handleChange}
			/>
		</div>


	</header>);


};
