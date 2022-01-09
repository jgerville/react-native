import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StackParamList } from '../App';

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
      <Text>{paletteName}</Text>
    </TouchableOpacity>
  );
};

export default ColorLink;
