import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import { YellowBox, Dimensions } from 'react-native';
import Orientation from 'react-native-orientation';

import SplashScreen from './app/SplashScreen';
import Dashbaord from './app/Dashboard';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Routers = StackNavigator({
  splashScreen: {
    screen: SplashScreen,
  },
  dashboard: {
    screen: Dashbaord,
  }
}, {
  initialRouteName: 'splashScreen',
  headerMode: 'none'
});

class App extends Component {
  constructor(props){
    super(props);
  }

  _orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
    Orientation.unlockAllOrientations();
  };

  componentWillMount() {
    var initial = Orientation.getInitialOrientation();

    if (initial === 'PORTRAIT') {
      Orientation.lockToLandscape();
    }
  }

  componentDidMount() {
    Orientation.addOrientationListener(this._orientationDidChange);
    setTimeout(() => {
      Orientation.unlockAllOrientations();
    }, 4000);
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this._orientationDidChange);
  }

  render() {
    return <Routers />;
  }
}

export default App;
