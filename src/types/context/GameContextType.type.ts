export interface GameContextType {
	cardClick: (event: React.MouseEvent<HTMLDivElement>) => void;
	formatTime: (time: number) => string;
	gameStart: boolean;
	startNewGame: (gameVariant: string) => void;
	userName: string;
	addUserName: (event: React.SubmitEvent<HTMLFormElement>) => void;
	userNameValue: string;
	userNameInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	deleteName: () => void;
	gameVariants: string[];
	changeGameVariant: (variant: string) => void;
}
