type cardId = `${string}-${string}-${string}-${string}-${string}`;

export interface CardType {
	value: string;
	image: string;
	id: cardId;
}
