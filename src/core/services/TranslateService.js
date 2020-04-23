import {
  ProviderTypes,
  TranslatorConfiguration,
  TranslatorFactory,
} from 'react-native-power-translator';

//Translator configs
const API_KEY = 'AIzaSyCmjRppdoUsUO8Ygo-zvoWf1hE5ruuToZg';
TranslatorConfiguration.setConfig(ProviderTypes.Google, API_KEY, 'pt');

export const translatorText = async (text, language) => {
  switch (language) {
    case 'ENGLISH':
      TranslatorConfiguration.setConfig(ProviderTypes.Google, API_KEY, 'en');
      break;
    case 'PORTUGUESE':
      TranslatorConfiguration.setConfig(ProviderTypes.Google, API_KEY, 'pt');
      break;
  }
  const translator = TranslatorFactory.createTranslator();
  return await translator.translate(text).then(translated => translated);
};
