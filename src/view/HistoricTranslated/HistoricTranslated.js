import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {setTranslatedValues} from '../../core/redux/actions/translateActions';
import styles from './HistoricTranslatedStyles';
import {HeaderBar, ListItem} from '../../components/Translator';
import {connect} from 'react-redux';

class HistoricTranslated extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toTranslateItem = async item => {
    this.setState({loading: true});
    await this.props.setTranslatedValues(item.textTranslated);
    this.setState({loading: false});
    this.props.navigation.navigate('Translated', {
      pop: 'HistoricTranslated',
    });
  };

  renderItem(item) {
    return (
      <TouchableOpacity onPress={() => this.toTranslateItem(item)}>
        <ListItem
          textToTranslate={item.normalText}
          language={item.destinyLanguage}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        <HeaderBar
          title={'Historic'}
          popAction={() => this.props.navigation.navigate('Translator')}
        />
        <FlatList
          data={this.props.historicList}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  historicList: state.translateReducer.historicList,
});

export default connect(
  mapStateToProps,
  {
    setTranslatedValues,
  },
)(HistoricTranslated);
