import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../assets/theme';
import {ratioX} from '../../assets/metrics';

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={[styles.headerView, {justifyContent: 'center'}]}>
        <TouchableOpacity onPress={() => this.props.popAction()}>
          <Icon
            style={{left: ratioX(-120)}}
            name="arrow-left"
            size={30}
            color={theme.colors.neutralLight}
          />
        </TouchableOpacity>
        <Text>{this.props.title}</Text>
        <Icon name="info-circle" size={30} color="transparent" />
      </View>
    );
  }
}

export {HeaderBar};
