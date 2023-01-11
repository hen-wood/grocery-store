// Add to cart
const ADD_TO_CART = "cart/ADD_TO_CART";

export const actionAddToCart = id => {
	return {
		type: ADD_TO_CART,
		id
	};
};

// Remove from cart
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART";

export const actionRemoveFromCart = id => {
	return {
		type: REMOVE_FROM_CART,
		id
	};
};
export default function cartReducer(state = {}, action) {
	switch (action.type) {
		case ADD_TO_CART:
			const newAddState = { ...state };
			const addId = action.id;
			const addItem = { id: addId, count: 1 };
			newAddState[addId] = addItem;
			return newAddState;
		case REMOVE_FROM_CART:
			const newRemoveState = { ...state };
			const removeId = action.id;
			delete newRemoveState[removeId];
			return newRemoveState;
		default:
			return state;
	}
}
