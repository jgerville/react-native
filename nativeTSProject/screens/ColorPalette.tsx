import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { StackParamList } from '../App';
import ColorBox from '../components/colorBox';

type Props = {
  route: RouteProp<StackParamList, 'ColorPalette'>;
};

const ColorPalette = ({ route }: Props) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>{route.params.paletteName}</Text>
      </View>
      <FlatList
        data={route.params.colors}
        keyExtractor={item => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
        )}
      />
    </>
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

export default ColorPalette;
