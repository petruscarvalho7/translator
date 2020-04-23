import {
  TRANSLATE,
  TRANSLATED,
  DESTINY_LANGUAGE,
  SOURCE_LANGUAGE,
  HISTORIC_LIST,
} from '../types';

const INITIAL_STATE = {
  translateText: '',
  translatedText: '',
  destinyLanguage: 'pt-PT',
  sourceLanguage: 'en-US',
  historicList: [],
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
    case DESTINY_LANGUAGE:
      return {
        ...state,
        destinyLanguage: action.payload,
      };
    case SOURCE_LANGUAGE:
      return {
        ...state,
        sourceLanguage: action.payload,
      };
    case HISTORIC_LIST:
      return {
        ...state,
        historicList: action.payload,
      };
    default:
      return state;
  }
};
