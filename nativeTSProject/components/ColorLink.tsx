import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackParamList } from '../App';
import ColorPreview from './ColorPreview';

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
      <Text style={styles.text}>{paletteName}</Text>
      <ColorPreview colors={colors} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ColorLink;
