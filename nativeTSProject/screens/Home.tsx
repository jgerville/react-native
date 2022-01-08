import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type StackParamList = {
  Home: undefined;
  ColorPalette: undefined;
};

type Props = StackScreenProps<StackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette');
        }}>
        <Text>Home page here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
