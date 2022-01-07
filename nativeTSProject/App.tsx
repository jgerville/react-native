import React, { FC } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/colorBox';
// import { ColorBox } from './components/colorBox';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Here are some boxes of different colors
        </Text>
      </View>
      <ColorBox colorName="cyan" colorHex="#2aa198" />
      <ColorBox colorName="blue" colorHex="#268bd2" />
      <ColorBox colorName="magenta" colorHex="#d33682" />
      <ColorBox colorName="orange" colorHex="#cb4b16" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    marginHorizontal: 30,
    marginTop: 30,
    marginBottom: 5,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  whiteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
