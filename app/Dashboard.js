import React, { Component } from 'react';
import { WebView, View } from 'react-native';

import Loading from './Loading';

class Dashboard extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://klp.org.in/gka/' }}
        style={{ flex: 1 }}
        javaScriptEnabled
        domStorageEnabled={true}
        mixedContentMode="always"
        renderLoading={() => {
          return <Loading />
        }}
        startInLoadingState={true}
      />
    );
  }
}

export default Dashboard;
