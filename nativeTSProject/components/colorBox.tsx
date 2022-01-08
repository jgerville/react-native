import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ColorBoxProps = {
  colorName: string;
  colorHex: string;
};

const ColorBox = ({ colorName, colorHex }: ColorBoxProps) => {
  // source for color function: https://kadikraman.github.io/react-native-v2/lists-exercise-solution
  const textColor = {
    color:
      parseInt(colorHex.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.colorContainer, { backgroundColor: colorHex }]}>
      <Text style={textColor}>
        {colorName} {colorHex}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  colorContainer: {
    marginHorizontal: 30,
    marginVertical: 5,
    paddingVertical: 10,
    borderRadius: 3,
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorBox;
