export const updateSearching = payload => ({
	type: 'UPDATE_SEARCHING',
	payload,
});
const searchStringReducer = (statePart = '', action) => {
	switch (action.type) {
		case 'UPDATE_SEARCHSTRING':
			return action.payload;
		default:
			return statePart;
	}
};

export default searchStringReducer;
