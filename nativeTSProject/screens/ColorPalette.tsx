import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { StackParamList } from '../App';
import ColorBox from '../components/colorBox';

type Props = {
  route: RouteProp<StackParamList, 'ColorPalette'>;
};

const ColorPalette = ({ route }: Props) => {
  return (
    <>
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

export default ColorPalette;
