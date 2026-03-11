"use client"

import styles from "./mosaic.module.scss";
import { Gallery } from "./gallery";

interface IMosaic {
	images: string[];
}

export default function Mosaic({ images }: IMosaic) {


	return (<div className={styles.mosaic}>
		<Gallery.Image src={images[0]} />
		<Gallery.Image src={images[1]} />
		<Gallery.Image src={images[2]} />
	</div>);
}
