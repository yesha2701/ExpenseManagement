import { TouchableOpacity, View } from 'react-native';
import { styles } from './CustomBottomTabStyle';
import React from 'react';

interface CustomBottomTab {
  child: string;
  onPress: () => void;
}
export const CustomBottomTab: React.FC<CustomBottomTab> = ({
  child,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.text}>{child}</View>
    </TouchableOpacity>
  );
};
