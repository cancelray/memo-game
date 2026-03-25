import browserImg from '../assets/browser.png';

const Card = (props) => {
	const { id, cardImage, cardShow, cardClick } = props;

	return (
		<div
			className={`card ${cardShow ? 'green' : 'red'}`}
			id={id}
			onClick={cardClick}
		>
			{cardShow ? (
				<img src={cardImage} alt="front" />
			) : (
				<img src={browserImg} alt="back" />
			)}
		</div>
	);
};

export default Card;
