import {StyleSheet} from 'react-native';
import theme from '../../assets/theme';
import {ratioX} from '../../assets/metrics';

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: theme.colors.primary,
    width: ratioX(375),
    height: ratioX(60),
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  centerView: {
    alignItems: 'center',
  },
  writeView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: ratioX(340),
    height: ratioX(200),
    borderWidth: 0.1,
    borderRadius: ratioX(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginTop: ratioX(20),
    overflow: 'hidden',
  },
  listenBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: ratioX(40),
    flexDirection: 'row',
  },
  closeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  listenWordsView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: ratioX(340),
    height: ratioX(40),
    flexDirection: 'row',
    paddingHorizontal: ratioX(10),
  },
  textInput: {
    height: ratioX(80),
    borderColor: 'gray',
    borderWidth: 1,
    width: ratioX(320),
    borderRadius: ratioX(4),
    paddingLeft: ratioX(5),
  },
});

export default styles;
