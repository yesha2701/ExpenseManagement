import React, { memo } from 'react';
import { ImageProps, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './CustomButtonStyle';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../Themes/Colors';

interface CustomButton {
  label?: string;
  source?: ImageProps;
  onPress: () => void;
}

export const CustomButton: React.FC<CustomButton> = memo(
  ({ label, onPress }) => {
    return (
      <View style={styles.buttonView}>
        <LinearGradient
          colors={[colors.cyan, colors.primary]}
          style={styles.linear}
          start={{ x: 0.8, y: 0 }}
          end={{ x: 0.78, y: 0.9 }}
        >
          <TouchableOpacity style={styles.button} onPress={onPress}>
            {label && <Text style={styles.text}>{label}</Text>}
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  },
);
