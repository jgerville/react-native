import React from 'react';
import { FlatList } from 'react-native';
import ColorBoxNoText from './ColorBoxNoText';

type Props = {
  colors: {
    colorName: string;
    hexCode: string;
  }[];
};

const ColorPreview = ({ colors }: Props) => {
  return (
    <FlatList
      data={colors.slice(0, 5)}
      keyExtractor={item => item.hexCode}
      renderItem={({ item }) => <ColorBoxNoText colorHex={item.hexCode} />}
      horizontal
    />
  );
};

export default ColorPreview;
