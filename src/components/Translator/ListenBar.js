import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../assets/theme';

class ListenBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onListen: false,
    };
  }

  toListen = () => {
    this.props.actionListen();
    this.setState({onListen: !this.state.onListen});
  };

  render() {
    return (
      <View style={styles.listenWordsView}>
        <TouchableOpacity
          onPress={() => this.toListen()}
          style={styles.listenBtn}>
          <Icon
            name={!this.state.onListen ? 'microphone-slash' : 'microphone'}
            size={25}
            color={
              !this.state.onListen ? theme.colors.black : theme.colors.statusBar
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.toHistoricTranslated()}
          style={styles.closeBtn}>
          <Icon name="history" size={25} color={theme.colors.black} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.toTranslate()}
          style={styles.closeBtn}>
          <Icon name="play" size={25} color={theme.colors.systemSuccess} />
        </TouchableOpacity>
      </View>
    );
  }
}

export {ListenBar};
