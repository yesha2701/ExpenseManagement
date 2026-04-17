import {
  Image,
  ImageProps,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './CustomTextinputStyle';
import React, { memo } from 'react';

interface CustomTextinputProps {
  placeholder: string;
  label?: string;
  source?: ImageProps;
  secureTextEntry?: boolean;
  rightIcon?: ImageProps;
}

export const CustomTextinput: React.FC<CustomTextinputProps> = memo(
  ({ placeholder, label, source, rightIcon, secureTextEntry }) => {
    return (
      <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View>{source && <Image source={source} />}</View>
        <View style={styles.textInputView}>
          <TextInput placeholder={placeholder} style={styles.textInput} />
          {(secureTextEntry || rightIcon) && (
            <TouchableOpacity>
              {secureTextEntry && <Image source={source} />}
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  },
);
