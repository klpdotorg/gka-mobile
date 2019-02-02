import React from 'react';
import { WebView } from 'react-native';

import { Loading } from '../common';

const Dashboard = (props) => {
  const uri = props.navigation.getParam('url', 'https://klp.org.in/gka/');

  return (
    <WebView
      source={{ uri }}
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

export default Dashboard;
