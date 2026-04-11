import { cardBack } from '../../../initial/indexInitial';

import styles from './Card.module.css';

const Card = (props) => {
	const { id, cardImage, cardShow, cardClick, gameVariant } = props;

	return (
		<div
			className={`${styles.card} ${cardShow ? styles.green : styles.red}`}
			id={id}
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
