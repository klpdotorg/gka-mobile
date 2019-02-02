import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from '../components/styles';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="grey" />
    </View>
  )
}

export { Loading };
