import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  colorName?: string;
  colorHex: string;
};

const ColorBoxNoText = ({ colorHex }: Props) => {
  return <View style={[styles.box, { backgroundColor: colorHex }]} />;
};

const styles = StyleSheet.create({
  box: {
    height: 30,
    width: 30,
    margin: 5,
  },
});

export default ColorBoxNoText;
