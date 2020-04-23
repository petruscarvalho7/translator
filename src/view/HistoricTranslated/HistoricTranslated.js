import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './HistoricTranslatedStyles';
import {HeaderBar} from '../../components/Translator';

class HistoricTranslated extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <HeaderBar
          title={'Historic Translated'}
          popAction={() => this.props.navigation.navigate('Translator')}
        />
        <Text> HistoricTranslated </Text>
      </View>
    );
  }
}

export default HistoricTranslated;
