import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

//iphone x
const metrics = {
  ratioX: width / 375,
  ratioY: height / 812,
};

export const ratioX = valor => valor * metrics.ratioX;
export const ratioY = valor => valor * metrics.ratioY;

export default metrics;
