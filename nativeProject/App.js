import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.pink]}>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pink: {
    backgroundColor: 'pink',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});

export default App;
