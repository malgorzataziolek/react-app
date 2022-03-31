import { createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
import listsReducer from './listsRedux';
import columnsReducer from './columnRedux';
import cardsReducer from './cardRedux';
import searchStringReducer from './searchRedux';
import { combineReducers } from 'redux';
//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
	cards.filter(
		card => card.columnId === columnId && strContains(card.title, searchString)
	);

export const getAllColumns = state => {
	return state.columns;
};



export const getColumnsByList = (state, listId) => {
	return state.columns.filter(column => column.listId === listId);
};


export const getFavoriteCards = ({ cards }) =>
	cards.filter(card => card.isFavorite === true);






const subreducers = {
	lists: listsReducer,
	columns: columnsReducer,
	cards: cardsReducer,
	searchString: searchStringReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
