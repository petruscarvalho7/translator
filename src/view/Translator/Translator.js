import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  updateTranslateText,
  updateDestinyLanguage,
  updateSourceLanguage,
  translate,
} from '../../core/redux/actions/translateActions';
import {View, TextInput, Keyboard} from 'react-native';
import Voice from '@react-native-community/voice';
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
      loading: false,
      end: '',
      started: '',
      results: [],
    };
    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
  }

  componentWillUnmount() {
    //destroy the process after switching the screen
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStartHandler = e => {
    //Invoked when .start() is called without error
    this.setState({
      started: '√',
    });
  };

  onSpeechEndHandler = e => {
    //Invoked when SpeechRecognizer stops recognition
    console.log('onSpeechEndHandler: ', e);
    this.setState({
      end: '√',
    });
  };

  onSpeechResultsHandler = e => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResultsHandler: ', e);
    this.setState({
      results: e.value,
    });
    this.props.updateTranslateText(e.value[0]);
  };

  actionListen = async () => {
    this.setState({textInputEnabled: !this.state.textInputEnabled});
    //on speech
    if (this.state.textInputEnabled) {
      try {
        await Voice.start(this.props.sourceLanguage);
      } catch (e) {
        console.error(e);
      }
    }
    //off speech
    else {
      try {
        await Voice.destroy();
      } catch (e) {
        console.error(e);
      }
    }
  };

  toTranslate = async () => {
    this.setState({loading: true});
    Keyboard.dismiss();
    await this.props.translate();
    this.setState({loading: false});
    this.props.updateTranslateText('');
    this.props.navigation.navigate('Translated');
  };

  render() {
    return (
      <View style={styles.mainView}>
        <ModalLoading visible={this.state.loading} />
        <HeaderSelectLanguage
          sourceSelected={this.props.sourceLanguage}
          sourceSelect={value => this.props.updateSourceLanguage(value)}
          targetSelected={this.props.destinyLanguage}
          targetSelect={value => this.props.updateDestinyLanguage(value)}
        />
        <View style={styles.writeView}>
          <SpeakBar
            targetSelect={this.props.destinyLanguage}
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
  destinyLanguage: state.translateReducer.destinyLanguage,
  sourceLanguage: state.translateReducer.sourceLanguage,
});

export default connect(
  mapStateToProps,
  {
    updateTranslateText,
    updateDestinyLanguage,
    updateSourceLanguage,
    translate,
  },
)(Translator);
