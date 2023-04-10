import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import {colors} from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigatior';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
