import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Translated from './view/Translated/Translated';
import Translator from './view/Translator/Translator';

const Navigation = createSwitchNavigator({
  Translator: {
    screen: Translator,
  },
  Translated: {
    screen: Translated,
  },
});

export default createAppContainer(Navigation);
