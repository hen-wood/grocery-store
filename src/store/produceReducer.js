import produceData from "../mockData/produce.json";

// Populate state with produce data
const POPULATE = "produce/POPULATE";
export const actionPopulateProduce = () => {
	return {
		type: POPULATE,
		produce: produceData
	};
};

export default function produceReducer(state = {}, action) {
	switch (action.type) {
		case POPULATE:
			const newState = {};
			action.produce.forEach(item => (newState[item.id] = item));
			return newState;
		default:
			return state;
	}
}
