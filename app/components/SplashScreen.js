import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

import styles from './styles';

const { width } = Dimensions.get('window')

class SplashScreen extends Component {
  constructor(props) {
    super(props)

    this.goToSelectState = this.goToSelectState.bind(this);
  }

  goToSelectState() {
    this.props.navigation.replace('selectState');
  }

  getWidth() {

    if (width <= 380) {
      return {
        imageWidth: '80%',
        imageHeight: '60%'
      }
    }

    if (width <= 400) {
      return {
        imageWidth: '80%',
        imageHeight: '70%'
      }
    }

    if (width <= 800) {
      return {
        imageWidth: '70%',
        imageHeight: '70%'
      }
    }

    if (width <= 1000) {
      return {
        imageWidth: '60%',
        imageHeight: '70%'
      }
    }

    return {
      imageWidth: '40%',
      imageHeight: '80%',
    }
  }

  render() {
    const { imageWidth }  = this.getWidth();

    return (
      <View style={styles.container}>
        <Image
          source={require('../../images/logo.png')}
          style={{ flex: 1, width: '100%', height: null, resizeMode: 'contain' }}
        />
        <TouchableOpacity onPress={this.goToSelectState} style={[styles.button, { width: imageWidth }]}>
          <Text style={styles.buttonText}>View Dashboard</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SplashScreen;
