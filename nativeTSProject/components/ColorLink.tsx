import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type StackParamList = {
  Home: undefined;
  ColorPalette: {
    paletteName: string;
    colors: {
      colorName: string;
      hexCode: string;
    }[];
  };
};

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
  paletteName: string;
  colors: {
    colorName: string;
    hexCode: string;
  }[];
};

const ColorLink = ({ navigation, paletteName, colors }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ColorPalette', {
          paletteName,
          colors,
        });
      }}>
      <Text>Colors</Text>
    </TouchableOpacity>
  );
};

export default ColorLink;
