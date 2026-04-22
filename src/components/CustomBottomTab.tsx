import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './CustomBottomTabStyle';
import React from 'react';
import { icons } from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../Themes/Colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/NavigationTypes';

export const CustomBottomTab = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const onAdd = () => {
    navigation.navigate('AddExpense');
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onAdd}>
      <LinearGradient
        colors={[colors.cyan, colors.primary]}
        style={styles.linear}
        start={{ x: 0.8, y: 0 }}
        end={{ x: 0.78, y: 0.9 }}
      >
        <View style={styles.plusView}>
          <Image source={icons.plus} style={styles.plus} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
