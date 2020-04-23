import {TRANSLATE, TRANSLATED, LANGUAGE} from '../types';

const INITIAL_STATE = {
  translateText: '',
  translatedText: '',
  languageDestiny: 'PORTUGUESE',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRANSLATE:
      return {
        ...state,
        translateText: action.payload,
      };
    case TRANSLATED:
      return {
        ...state,
        translatedText: action.payload,
      };
    case LANGUAGE:
      return {
        ...state,
        languageDestiny: action.payload,
      };
    default:
      return state;
  }
};
