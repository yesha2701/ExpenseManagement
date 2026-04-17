import React, { memo } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './CustomHeaderStyle';
import { icons } from '../../assets/icons';

interface CustomHeaderProps {
  label: string;
}

export const CustomHeader: React.FC<CustomHeaderProps> = memo(({ label }) => {
  return (
    <View style={styles.headerView}>
      <View style={styles.arrowView}>
        <Image source={icons.chevron_left} style={styles.arrowImg} />
      </View>

      {/* Center title */}
      <Text style={styles.text}>{label}</Text>

      {/* Right placeholder to keep title centered */}
      <View style={styles.emptyView} />
    </View>
  );
});
