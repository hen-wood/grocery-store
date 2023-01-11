import { useDispatch } from "react-redux";
import { actionAddToCart } from "../../store/cartReducer";

function ProduceDetails({ produce }) {
	const cartItem = {};
	const dispatch = useDispatch();
	const handleAddClick = () => {
		dispatch(actionAddToCart(produce.id));
	};

	return (
		<li className="produce-details">
			<span>{produce.name}</span>
			<span>
				<button className={"like-button" + (produce.liked ? " selected" : "")}>
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
