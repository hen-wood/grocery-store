import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionAddToCart, actionChangeCount } from "../../store/cartReducer";
import { actionChangeLikeStatus } from "../../store/produceReducer";

function ProduceDetails({ produce }) {
	const cartItem = useSelector(state => state.cart)[produce.id] || false;
	const dispatch = useDispatch();

	const handleAddClick = () => {
		if (!cartItem) {
			dispatch(actionAddToCart(produce.id));
		} else {
			dispatch(actionChangeCount(produce.id, 1));
		}
	};

	const handleLikeClick = () => {
		dispatch(actionChangeLikeStatus(produce.id));
	};

	return (
		<li className="produce-details">
			<span>{produce.name}</span>
			<span>
				<button
					className={"like-button" + (produce.liked ? " selected" : "")}
					onClick={handleLikeClick}
				>
					<i className={"fas fa-heart"} />
				</button>
				<button
					className={"plus-button" + (cartItem ? " selected" : "")}
					onClick={handleAddClick}
				>
					<i className="fas fa-plus" />
				</button>
			</span>
		</li>
	);
}

export default ProduceDetails;
