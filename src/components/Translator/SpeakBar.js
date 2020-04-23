import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../assets/theme';

class SpeakBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onSpeak: false,
    };
  }

  toSpeak = () => {
    if (this.props.targetSelect) {
      this.props.actionSpeak();
      this.setState({onSpeak: !this.state.onSpeak});
      return;
    }
    Alert.alert('Problem', 'U need select targe language');
  };

  render() {
    return (
      <View style={styles.listenWordsView}>
        <TouchableOpacity
          onPress={() => this.toSpeak()}
          style={styles.listenBtn}>
          <Icon
            name={this.state.onSpeak ? 'volume-up' : 'volume-up'}
            size={25}
            color={
              !this.state.onSpeak ? theme.colors.black : theme.colors.statusBar
            }
          />
          <Text
            style={{
              marginLeft: 10,
              color: !this.state.onSpeak
                ? theme.colors.black
                : theme.colors.statusBar,
            }}>
            {this.props.targetSelect}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.actionClose()}
          style={styles.closeBtn}>
          <Icon name="close" size={25} color={theme.colors.black} />
        </TouchableOpacity>
      </View>
    );
  }
}

export {SpeakBar};
