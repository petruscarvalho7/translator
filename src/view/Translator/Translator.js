import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  updateTranslateText,
  updateLanguageDestiny,
  translate,
} from '../../core/redux/actions/translateActions';
import {View, TextInput, Keyboard} from 'react-native';
import styles from './TranslatorStyles';
import {
  HeaderSelectLanguage,
  SpeakBar,
  ListenBar,
} from '../../components/Translator';
import ModalLoading from '../../components/util/ModalLoading';

class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputEnabled: true,
      sourceSelect: 'ENGLISH',
      targetSelect: 'PORTUGUESE',
      loading: false,
    };
  }

  actionListen = () => {
    this.setState({textInputEnabled: !this.state.textInputEnabled});
  };

  toTranslate = async () => {
    this.setState({loading: true});
    Keyboard.dismiss();
    await this.props.translate();
    this.setState({loading: false});
    this.props.navigation.navigate('Translated');
  };

  render() {
    return (
      <View style={styles.mainView}>
        <ModalLoading visible={this.state.loading} />
        <HeaderSelectLanguage
          sourceSelected={this.state.sourceSelect}
          sourceSelect={value => this.setState({sourceSelect: value})}
          targetSelected={this.props.languageDestiny}
          targetSelect={value => this.props.updateLanguageDestiny(value)}
        />
        <View style={styles.writeView}>
          <SpeakBar
            targetSelect={this.state.targetSelect}
            actionSpeak={() => false}
            actionClose={() => this.props.updateTranslateText('')}
          />
          <View>
            <TextInput
              multiline
              style={styles.textInput}
              onChangeText={text => this.props.updateTranslateText(text)}
              value={this.props.translateText}
              placeholder="Translate"
              editable={this.state.textInputEnabled}
              returnKeyType={'done'}
              onSubmitEditing={() => this.toTranslate()}
            />
          </View>
          <ListenBar
            actionListen={() => this.actionListen()}
            toTranslate={() => this.toTranslate()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  translateText: state.translateReducer.translateText,
  languageDestiny: state.translateReducer.languageDestiny,
});

export default connect(
  mapStateToProps,
  {
    updateTranslateText,
    updateLanguageDestiny,
    translate,
  },
)(Translator);
