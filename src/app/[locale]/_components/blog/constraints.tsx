"use client"

import ConstraintCard from "../constraint-card/constraint-card";
import { Blog } from "./blog";
import styles from "./constraints.module.scss";

interface IConstraints {
	items: string[];
}


export default function Constraints({ items }: IConstraints) {

	return (
		<Blog.Section>
			<Blog.Headline>
				<Blog.Heading role="H3">Constraints</Blog.Heading>
			</Blog.Headline>
			<ul className={styles["constraint-cards"]}>
				{items.map((item, i) => <ConstraintCard key={item + i} label={item} number={i + 1} />)}
			</ul>
		</Blog.Section>);
}
