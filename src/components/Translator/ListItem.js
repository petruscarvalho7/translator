import React, {Component} from 'react';
import {View, Text,Divider} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import theme from '../../assets/theme';
import {ratioX} from '../../assets/metrics';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          width: ratioX(375),
          height: ratioX(100),
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: ratioX(10),
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}>
        <View style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
          <Text style={{fontWeight: 'bold'}}>{this.props.textToTranslate}</Text>
          <Text>
            translate to:{' '}
            <Text style={{fontWeight: 'bold'}}>{this.props.language}</Text>
          </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'flex-end'}}>
          <Icon name="arrow-right" size={30} color={theme.colors.black} />
        </View>
      </View>
    );
  }
}

export {ListItem};
