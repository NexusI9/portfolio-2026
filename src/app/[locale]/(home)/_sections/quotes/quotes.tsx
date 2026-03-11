"use client"

import Container from "@components/container/container";
import styles from "./quotes.module.scss"
import { Text } from "@components/text/text";
import Mosaic from "@components/mosaic/mosaic";
import QuoteCard from "./_components/quote-card";
import { Fragment } from "react";
import DecoFrame from "@components/deco-frame/deco-frame";
import { useDictionary } from "@/i18n/Context";
import { mapQuoteFromDico } from "./helper";

export default function Quotes() {

	const dico = useDictionary();

	const QUOTES_THUMBNAIL: Array<string> = [
		"/assets/avatars/louhann.png",
		"/assets/avatars/pa.png",
		"/assets/avatars/matteo.png",
		"/assets/avatars/alex.png",
		"/assets/avatars/nader.png"
	];


	return (<Container id="quotes" className={styles.quotes}>

		<hgroup className="w-fit m-auto relative">
			<span className={styles.frames}>
				<DecoFrame size="126px" />
				<DecoFrame size="86px" />
			</span>
			<Mosaic row={6} column={6} animation="BLINK" className={styles.mosaic} />
			<Text.Display className="text-center relative">
				{dico.home.headlines.quotes.map((txt, i) => <Fragment key={`quotehead${i}`}>{txt}{i == 0 && <br />}</Fragment>)}
			</Text.Display>
		</hgroup>


		<div className={styles["quotes-wrapper"]}>
			<div className={styles["quotes-grid"]}>
				{
					QUOTES_THUMBNAIL.map((thumbnail, i) =>
						<QuoteCard key={`quote${i}`} {...mapQuoteFromDico(dico.home.quotes[i], thumbnail)} className="relative" />)
				}
			</div>
		</div>



	</Container>);

}
