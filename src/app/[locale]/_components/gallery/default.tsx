"use client"

import { Gallery } from "./gallery";


interface IDefault {
	images: string[];
}

/**
   Generate a Simple Gallery Row
 */
export default function Default({ images }: IDefault) {

	return (
		<Gallery.Wrapper>
			<Gallery.Row>
				{images.map(src => <Gallery.Image key={src} src={src} />)}
			</Gallery.Row>
		</Gallery.Wrapper>
	);

}
