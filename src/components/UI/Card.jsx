import { cardBack } from '../../initial/indexInitial';

const Card = (props) => {
	const { id, cardImage, cardShow, cardClick, gameVariant } = props;

	return (
		<div
			className={`card ${cardShow ? 'green' : 'red'}`}
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
