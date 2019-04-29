import {TEXTCHANGE, TEXTCOUNT} from '../actions';

const initialState = {count: 0, textValue: 'initial value'};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEXTCHANGE:
      return {textValue: action.textValue};
    case TEXTCOUNT:
      return {count: action.textLength};
    default:
      return state;
  }
};
