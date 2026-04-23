import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './CustomHeaderStyle';
import { icons } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigationTypes';
import { StackNavigationProp } from '@react-navigation/stack';

interface CustomHeaderProps {
  label: string;
}

export const CustomHeader: React.FC<CustomHeaderProps> = memo(({ label }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const onNavigation = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.headerView}>
      <TouchableOpacity onPress={onNavigation} style={styles.arrowView}>
        <Image source={icons.chevron_left} style={styles.arrowImg} />
      </TouchableOpacity>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.emptyView} />
    </View>
  );
});
