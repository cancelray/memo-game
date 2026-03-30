import braveImg from '../assets/brave.png';
import chromeImg from '../assets/chrome.png';
import edgeImg from '../assets/edge.png';
import firefoxImg from '../assets/firefox.png';
import operaImg from '../assets/opera.png';
import safariImg from '../assets/safari.png';

const cardsArr = [
	{ value: 'A', image: braveImg, id: crypto.randomUUID() },
	{ value: 'A', image: braveImg, id: crypto.randomUUID() },
	{ value: 'B', image: chromeImg, id: crypto.randomUUID() },
	{ value: 'B', image: chromeImg, id: crypto.randomUUID() },
	{ value: 'C', image: edgeImg, id: crypto.randomUUID() },
	{ value: 'C', image: edgeImg, id: crypto.randomUUID() },
	{ value: 'D', image: firefoxImg, id: crypto.randomUUID() },
	{ value: 'D', image: firefoxImg, id: crypto.randomUUID() },
	{ value: 'E', image: operaImg, id: crypto.randomUUID() },
	{ value: 'E', image: operaImg, id: crypto.randomUUID() },
	{ value: 'F', image: safariImg, id: crypto.randomUUID() },
	{ value: 'F', image: safariImg, id: crypto.randomUUID() },
];

export const randomCardsArr = () => cardsArr.sort(() => Math.random() - 0.5);
