import shortid from 'shortid';

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

const columnsReducer = (statePart = [], action) => {
	switch (action.type) {
		case 'ADD_COLUMN':
			return [...statePart, { ...action.payload, id: shortid() }];
		default:
			return statePart;
	}
};

export default columnsReducer;