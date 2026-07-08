import { browserArr } from './browserArr';
import { gameArr } from './gameArr';
import { techArr } from './techArr';

import browserImg from '../assets/browserIMG/browser.png';
import gameIMG from '../assets/gameIMG/game.png';
import techIMG from '../assets/techIMG/tech.png';

import type { CardType } from '../types/Card.type';

export const randomCardsArr = (variant: string): CardType[] => {
	switch (variant) {
		case 'browser':
			return [...browserArr].sort(() => Math.random() - 0.5);
		case 'tech':
			return [...techArr].sort(() => Math.random() - 0.5);
		case 'game':
			return [...gameArr].sort(() => Math.random() - 0.5);
		default:
			return [...browserArr].sort(() => Math.random() - 0.5);
	}
};

export const cardBack = (variant: string) => {
	switch (variant) {
		case 'browser':
			return browserImg;
		case 'tech':
			return techIMG;
		case 'game':
			return gameIMG;
		default:
			return browserImg;
	}
};
