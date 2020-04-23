import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';

class ModalLoading extends Component {
  render() {
    return (
      <View>
        <Modal isVisible={this.props.visible}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator />
          </View>
        </Modal>
      </View>
    );
  }
}

export default ModalLoading;
