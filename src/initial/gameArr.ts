import acImg from '../assets/gameIMG/ac.png';
import doomImg from '../assets/gameIMG/doom.png';
import erImg from '../assets/gameIMG/er.png';
import mkImg from '../assets/gameIMG/mk.png';
import scImg from '../assets/gameIMG/sc.png';
import tesImg from '../assets/gameIMG/tes.png';

export const gameArr = [
	{ value: 'A', image: acImg, id: crypto.randomUUID() },
	{ value: 'A', image: acImg, id: crypto.randomUUID() },
	{ value: 'B', image: doomImg, id: crypto.randomUUID() },
	{ value: 'B', image: doomImg, id: crypto.randomUUID() },
	{ value: 'C', image: erImg, id: crypto.randomUUID() },
	{ value: 'C', image: erImg, id: crypto.randomUUID() },
	{ value: 'D', image: mkImg, id: crypto.randomUUID() },
	{ value: 'D', image: mkImg, id: crypto.randomUUID() },
	{ value: 'E', image: scImg, id: crypto.randomUUID() },
	{ value: 'E', image: scImg, id: crypto.randomUUID() },
	{ value: 'F', image: tesImg, id: crypto.randomUUID() },
	{ value: 'F', image: tesImg, id: crypto.randomUUID() },
];
