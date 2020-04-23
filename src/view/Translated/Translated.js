import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {HeaderBar} from '../../components/Translator';

class Translated extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <HeaderBar
          title={'Translated'}
          popAction={() => this.props.navigation.navigate('Translator')}
        />
        <Text> {this.props.translatedText} </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  translatedText: state.translateReducer.translatedText,
});

export default connect(
  mapStateToProps,
  {},
)(Translated);
