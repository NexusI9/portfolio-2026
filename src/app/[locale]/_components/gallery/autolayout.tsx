"use client"

import Image from "./image";
import Row from "./row";
import Wrapper from "./wrapper";

interface IAutoLayout {
	rows: string[][];
}

export default function AutoLayout({ rows }: IAutoLayout) {
	return (
		<Wrapper>
			{rows.map((row, rowIndex) => (
				<Row key={rowIndex}>
					{row.map((src, imgIndex) => (
						<Image key={imgIndex} src={src} />
					))}
				</Row>
			))}
		</Wrapper>
	);
}
