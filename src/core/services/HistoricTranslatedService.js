import AsyncStorage from '@react-native-community/async-storage';
import {HISTORIC_LIST} from './Constants';

export const setTranslated = async (text, translated, language) => {
  try {
    let item = {
      id: Math.random(),
      normalText: text,
      textTranslated: translated,
      destinyLanguage: language,
    };
    let translatedList = (await AsyncStorage.getItem(HISTORIC_LIST)) || '[]';
    translatedList = JSON.parse(translatedList);
    translatedList.push(item);
    await AsyncStorage.setItem(HISTORIC_LIST, JSON.stringify(translatedList));
  } catch (error) {
    console.log(error);
  }
};

export const getData = async () => {
  try {
    let translatedList = (await AsyncStorage.getItem(HISTORIC_LIST)) || '[]';
    translatedList = JSON.parse(translatedList);
    return translatedList;
  } catch (error) {
    console.log(error);
  }
};
