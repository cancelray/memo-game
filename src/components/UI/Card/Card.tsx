import { cardBack } from '../../../initial/indexInitial';
import type { CardProps } from '../../../types/props/CardProps.type';

import styles from './Card.module.css';

const Card = (props: CardProps) => {
	const { id, cardImage, cardShow, cardClick, gameVariant } = props;

	return (
		<div
			className={`${styles.card} ${cardShow ? styles.green : styles.red}`}
			id={String(id)}
			onClick={cardClick}
		>
			{cardShow ? (
				<img
					src={cardImage}
					alt='front'
				/>
			) : (
				<img
					src={cardBack(gameVariant)}
					alt='back'
				/>
			)}
		</div>
	);
};

export default Card;
