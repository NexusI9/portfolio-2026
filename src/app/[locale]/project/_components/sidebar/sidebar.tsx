"use client"

import { Text } from "@components/text/text";
import styles from "./sidebar.module.scss"
import { Button } from "@components/button/button";
import { useDictionary } from "@/i18n/Context";

interface ITableContentItem {
	label: string;
	anchor: string;
	children: ITableContentItem[];
}


interface IProject {
	label: string;
	path: string;
	active: boolean;
}

interface ISidebar {
	tableContent: Array<ITableContentItem>;
	projects: Array<IProject>;
}

export default function Sidebar({ tableContent, projects }: ISidebar) {

	const dico = useDictionary();

	return (<aside className={styles.sidebar}>

		<div>
			<Text.H6>{dico.projects.common.sidebar.table_content}</Text.H6>
		</div>

		<div className="flex flex-col gap-(--size-space-large)">
			<Text.H6>{dico.projects.common.sidebar.all_projects}</Text.H6>
			<ul className="flex flex-col gap-(--size-space-large)">

				{projects.map(project =>
					<li key={project.label}>
						<Button
							href={project.path}
							size="MEDIUM"
							style="GHOST"
							role={project.active ? "DISABLED" : "PRIMARY"}
						>
							{project.label}
						</Button></li>)}

			</ul>
		</div>
	</aside>);


}
