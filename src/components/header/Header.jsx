import { useContext } from 'react';

import { GameContext } from '../../context/context';

import Button from '../UI/Button';

const Header = () => {
	const { gameVariants, changeGameVariatn } = useContext(GameContext);

	return (
		<header className='header'>
			<div className='switch-game-variant'>
				<p>Game variants:</p>
				{gameVariants.map((variant, i) => (
					<Button
						key={i}
						onClick={() => changeGameVariatn(variant)}
					>
						{variant}
					</Button>
				))}
			</div>
		</header>
	);
};

export default Header;
