import { IProjectDescriptor } from "@/app/[locale]/_types/project";
import ProjectCard from "./_components/project-card";
import { ComponentPropsWithoutRef } from "react";
import { projectPath } from "@/app/[locale]/project/_lib/helper";

export const mapFromDescriptor: (desc: IProjectDescriptor, locale: string) => ComponentPropsWithoutRef<typeof ProjectCard> = (desc, locale) => ({
	headline: desc.name,
	subtitle: desc.description,
	alt: desc.alt,
	href: projectPath(desc.pageName, locale),
	thumbnail: desc.thumbnail,
});
