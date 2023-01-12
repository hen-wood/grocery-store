import { useState, useEffect } from "react";
import {
	actionChangeCount,
	actionRemoveFromCart
} from "../../store/cartReducer";
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

	const handlePlusClick = () => {
		dispatch(actionChangeCount(item.id, 1));
	};

	const handleMinusClick = () => {
		if (item.count > 1) {
			dispatch(actionChangeCount(item.id, -1));
		} else {
			dispatch(actionRemoveFromCart(item.id));
		}
	};

	const handleNumberChange = e => {
		const newCount = e.target.value;
		if (newCount < 1) {
			dispatch(actionRemoveFromCart(item.id));
		} else {
			dispatch(actionChangeCount(item.id, newCount - item.count));
		}
	};

	return (
		<li className="cart-item">
			<div className="cart-item-header">{item.name}</div>
			<div className="cart-item-menu">
				<input
					type="number"
					value={count}
					onChange={e => setCount(e.target.value)}
					onBlur={handleNumberChange}
				/>
				<button className="cart-item-button" onClick={handlePlusClick}>
					+
				</button>
				<button className="cart-item-button" onClick={handleMinusClick}>
					-
				</button>
				<button className="cart-item-button" onClick={handleRemoveClick}>
					Remove
				</button>
			</div>
		</li>
	);
}

export default CartItem;
