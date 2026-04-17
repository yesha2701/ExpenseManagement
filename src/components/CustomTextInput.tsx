import {
  Image,
  ImageProps,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './CustomTextInputStyle';
import React, { memo } from 'react';

interface CustomTextInputProps {
  placeholder: string;
  label?: string;
  source?: ImageProps;
  secureTextEntry?: boolean;
  rightIcon?: ImageProps;
  placeholderTextColor: string;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = memo(
  ({
    placeholder,
    label,
    source,
    rightIcon,
    secureTextEntry,
    placeholderTextColor,
  }) => {
    return (
      <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View>{source && <Image source={source} />}</View>
        <View style={styles.textInputView}>
          <TextInput
            placeholder={placeholder}
            style={styles.textInput}
            placeholderTextColor={placeholderTextColor}
          />
          {(secureTextEntry || rightIcon) && (
            <TouchableOpacity>
              {secureTextEntry && <Image source={rightIcon} />}
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  },
);
