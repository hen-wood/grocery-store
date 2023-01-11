import { useState, useEffect } from "react";
import { actionRemoveFromCart } from "../../store/cartReducer";
import { useDispatch } from "react-redux";

function CartItem({ item }) {
	const dispatch = useDispatch();
	const [count, setCount] = useState(item.count);

	useEffect(() => {
		setCount(item.count);
	}, [item.count]);

	const handleRemoveClick = () => {
		dispatch(actionRemoveFromCart(item.id));
	};

	return (
		<li className="cart-item">
			<div className="cart-item-header">{item.name}</div>
			<div className="cart-item-menu">
				<input type="number" value={count} />
				<button className="cart-item-button">+</button>
				<button className="cart-item-button">-</button>
				<button className="cart-item-button" onClick={handleRemoveClick}>
					Remove
				</button>
			</div>
		</li>
	);
}

export default CartItem;
