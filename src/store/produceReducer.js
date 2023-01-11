import produceData from "../mockData/produce.json";

// Populate state with produce data
const POPULATE = "produce/POPULATE";
export const actionPopulateProduce = () => {
	return {
		type: POPULATE,
		produce: produceData
	};
};

// Change Like Status
const CHANGE_LIKE_STATUS = "cart/CHANGE_LIKE_STATUS";

export const actionChangeLikeStatus = id => {
	return {
		type: CHANGE_LIKE_STATUS,
		id
	};
};

export default function produceReducer(state = {}, action) {
	switch (action.type) {
		case POPULATE:
			const newState = {};
			action.produce.forEach(item => (newState[item.id] = item));
			return newState;
		case CHANGE_LIKE_STATUS:
			const newChangeLikeState = { ...state };
			const changeLikeId = action.id;
			newChangeLikeState[changeLikeId].liked =
				!newChangeLikeState[changeLikeId].liked;
			return newChangeLikeState;
		default:
			return state;
	}
}
