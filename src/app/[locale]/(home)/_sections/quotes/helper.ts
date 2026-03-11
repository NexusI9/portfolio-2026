import { Dictionary } from "@/i18n/Context";

export const mapQuoteFromDico = ({ quote, author, position, location }: Dictionary["home"]["quotes"][0], thumbnail: string) => ({
	children: quote,
	name: author,
	position: position,
	location: location,
	thumbnail,
});
