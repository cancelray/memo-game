export interface CardProps {
	id: number;
	cardImage: string;
	cardShow: boolean;
	cardClick: (event: React.MouseEvent<HTMLDivElement>) => void;
	gameVariant: string;
}
