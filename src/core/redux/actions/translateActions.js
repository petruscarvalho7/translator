import {TRANSLATE, TRANSLATED, LANGUAGE} from '../types';
import {translatorText} from '../../services/TranslateService';

export const updateTranslateText = input => ({
  type: TRANSLATE,
  payload: input,
});

export const updateLanguageDestiny = input => ({
  type: LANGUAGE,
  payload: input,
});

export const translate = () => async (dispatch, getState) => {
  const translateText = getState().translateReducer.translateText;
  const language = getState().translateReducer.languageDestiny;

  const translated = await translatorText(translateText, language);
  console.log(translated);
  dispatch({
    type: TRANSLATED,
    payload: translated,
  });
};
