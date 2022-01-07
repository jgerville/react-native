import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { ColorBox } from './components/colorBox';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Here are some boxes of different colors
        </Text>
      </View>
      <View style={[styles.colorContainer, styles.cyan]}>
        <Text style={styles.whiteText}>Cyan #2aa198</Text>
      </View>
      <View style={[styles.colorContainer, styles.blue]}>
        <Text style={styles.whiteText}>Blue #2aa198</Text>
      </View>
      <View style={[styles.colorContainer, styles.magenta]}>
        <Text style={styles.whiteText}>Magenta #2aa198</Text>
      </View>
      <ColorBox colorName="magenta" colorHex="#2aa198" />
      <View style={[styles.colorContainer, styles.orange]}>
        <Text style={styles.whiteText}>Orange #2aa198</Text>
      </View>
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
  colorContainer: {
    marginHorizontal: 30,
    marginVertical: 5,
    paddingVertical: 10,
    borderRadius: 3,
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  whiteText: {
    color: 'white',
    fontWeight: 'bold',
  },
  pink: { backgroundColor: 'pink' },
  cyan: { backgroundColor: '#2aa198' },
  blue: { backgroundColor: '#268bd2' },
  magenta: { backgroundColor: '#d33682' },
  orange: { backgroundColor: '#cb4b16' },
});

export default App;
