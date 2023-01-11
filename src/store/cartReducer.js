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

// Change count
const CHANGE_COUNT = "cart/CHANGE_COUNT";

export const actionChangeCount = (id, change) => {
	return {
		type: CHANGE_COUNT,
		id,
		change
	};
};

// Remove all items
const REMOVE_ALL_ITEMS = "cart/REMOVE_ALL_ITEMS";

export const actionRemoveAllItems = () => {
	return {
		type: REMOVE_ALL_ITEMS
	};
};

// Cart Reducer Function
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
		case CHANGE_COUNT:
			const newChangeState = { ...state };
			const changeId = action.id;
			const change = action.change;
			newChangeState[changeId].count += change;
			return newChangeState;
		case REMOVE_ALL_ITEMS:
			return {};
		default:
			return state;
	}
}
