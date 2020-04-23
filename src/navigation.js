import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Translated from './view/Translated/Translated';
import Translator from './view/Translator/Translator';
import HistoricTranslated from './view/HistoricTranslated/HistoricTranslated';

const Navigation = createSwitchNavigator({
  Translator: {
    screen: Translator,
  },
  Translated: {
    screen: Translated,
  },
  HistoricTranslated: {
    screen: HistoricTranslated,
  },
});

export default createAppContainer(Navigation);
