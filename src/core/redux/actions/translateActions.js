import {
  TRANSLATE,
  TRANSLATED,
  DESTINY_LANGUAGE,
  SOURCE_LANGUAGE,
} from '../types';
import {translatorText} from '../../services/TranslateService';

export const updateTranslateText = input => ({
  type: TRANSLATE,
  payload: input,
});

export const updateDestinyLanguage = input => ({
  type: DESTINY_LANGUAGE,
  payload: input,
});

export const updateSourceLanguage = input => ({
  type: SOURCE_LANGUAGE,
  payload: input,
});

export const translate = () => async (dispatch, getState) => {
  const translateText = getState().translateReducer.translateText;
  const language = getState().translateReducer.destinyLanguage;

  const translated = await translatorText(translateText, language);
  console.log(translated);
  dispatch({
    type: TRANSLATED,
    payload: translated,
  });
};
