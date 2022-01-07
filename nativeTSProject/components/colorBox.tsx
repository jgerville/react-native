import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ColorBoxProps = {
  colorName: string;
  colorHex: string;
};

const ColorBox = ({ colorName, colorHex }: ColorBoxProps) => {
  return (
    <View style={[styles.colorContainer, { backgroundColor: colorHex }]}>
      <Text style={styles.whiteText}>
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
