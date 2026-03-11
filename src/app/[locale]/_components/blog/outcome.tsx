"use client"

import { Text } from "@components/text/text";
import styles from "./outcome.module.scss";
import blog_styles from "./blog.module.scss";
import Mosaic from "@components/mosaic/mosaic";
import { catClass } from "@lib/utils";
import { Blog } from "./blog";

interface IOutcome {
	items: string[];
}


export default function Outcome({ items }: IOutcome) {
	return (
		<Blog.Section>

			<Blog.Headline>
				<Blog.Heading role="H3">Outcomes & Learning</Blog.Heading>
			</Blog.Headline>

			<ul className={styles.outcome}>
				{items.map((item, i) => <li key={item + i} className={styles.item}>
					<div className="relative">
						<Mosaic row={3} column={3} className={styles.mosaic} animation="BLINK" />
						<Text.Body className={catClass([blog_styles.number, styles.number])}>{i + 1}</Text.Body>
					</div>
					<Text.Body>{item}</Text.Body>
				</li>)}
			</ul>

		</Blog.Section>);
}
