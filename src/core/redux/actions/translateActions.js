import {
  TRANSLATE,
  TRANSLATED,
  DESTINY_LANGUAGE,
  SOURCE_LANGUAGE,
  HISTORIC_LIST,
} from '../types';
import {translatorText} from '../../services/TranslateService';
import {setTranslated, getData} from '../../services/HistoricTranslatedService';

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

export const setTranslatedValues = translated => ({
  type: TRANSLATED,
  payload: translated,
});

export const getHistoricTranslated = () => async (dispatch, getState) => {
  const historicTranslateds = await getData();
  dispatch({
    type: HISTORIC_LIST,
    payload: historicTranslateds,
  });
};

export const translate = () => async (dispatch, getState) => {
  const translateText = getState().translateReducer.translateText;
  const language = getState().translateReducer.destinyLanguage;

  const translated = await translatorText(translateText, language);
  await setTranslated(translateText, translated, language);
  dispatch({
    type: TRANSLATED,
    payload: translated,
  });
};
