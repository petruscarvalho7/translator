import React, {Component} from 'react';
import {View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../assets/theme';

class HeaderSelectLanguage extends Component {
  render() {
    return (
      <View style={styles.headerView}>
        <View style={styles.centerView}>
          <RNPickerSelect
            onValueChange={value => this.props.sourceSelect(value)}
            items={[
              {label: 'English', value: 'ENGLISH'},
              {label: 'Portuguese', value: 'PORTUGUESE'},
            ]}
            value={this.props.sourceSelected}
            placeholder={{label: 'Select Language', value: ''}}
          />
        </View>
        <Icon name="retweet" size={30} color={theme.colors.neutralLight} />
        <View style={styles.centerView}>
          <RNPickerSelect
            onValueChange={value => this.props.targetSelect(value)}
            items={[
              {label: 'English', value: 'ENGLISH'},
              {label: 'Portuguese', value: 'PORTUGUESE'},
            ]}
            value={this.props.targetSelected}
            placeholder={{label: 'Select Language', value: ''}}
          />
        </View>
      </View>
    );
  }
}

export {HeaderSelectLanguage};
