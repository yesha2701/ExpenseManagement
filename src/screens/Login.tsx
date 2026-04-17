import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { images } from '../../assets/images';
import { styles } from './LoginStyle';
import { Text } from 'react-native-gesture-handler';
import { CustomTextinput } from '../components/CustomTextInput';
import { icons } from '../../assets/icons/icons';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image source={images.logo} style={styles.logoImage} />
        <Text style={styles.logoText}>Expense Management</Text>
      </View>
      <View>
        <CustomTextinput placeholder="Enter Username" source={icons.profile} />
        <CustomTextinput
          placeholder="Enter Password"
          source={icons.lock}
          secureTextEntry={true}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

// import React, {
//   forwardRef,
//   useImperativeHandle,
//   useRef,
//   useState,
// } from "react";
// import { View, Text, TextInput, TouchableOpacity, TextStyle, StyleProp } from "react-native";
// import Svg, { Path } from "react-native-svg";
// import {
//   CustomTextInputProps,
//   CustomTextInputRef,
// } from "./CustomTextInputType";
// import { useCustomTextInputStyles } from "./CustomTextInputStyle";

// const EyeIcon: React.FC<{ visible: boolean; color: string }> = ({
//   visible,
//   color,
// }) => {
//   if (visible) {
//     return (
//       <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//         <Path
//           d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
//           stroke={color}
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <Path
//           d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
//           stroke={color}
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </Svg>
//     );
//   } else {
//     return (
//       <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//         <Path
//           d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
//           stroke={color}
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <Path
//           d="M1 1l22 22"
//           stroke={color}
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </Svg>
//     );
//   }
// };

// const CustomTextInput = forwardRef<CustomTextInputRef, CustomTextInputProps>(
//   (
//     {
//       label,
//       placeholder,
//       value,
//       onChangeText,
//       rightIcon,
//       containerStyle,
//       onRightIconPress,
//       showCharacterCount = false,
//       secureTextEntry = false,
//       keyboardType = "default",
//       autoCapitalize = "sentences",
//       autoCorrect = true,
//       editable = true,
//       multiline = false,
//       numberOfLines = 1,
//       maxLength,
//       onFocus,
//       onBlur,
//       onSubmitEditing,
//       returnKeyType = "done",
//       error,
//       testID,
//       inputContainerStyle,
//       textInputStyle,
//       ...props
//     },
//     ref
//   ) => {
//     const [isFocused, setIsFocused] = useState(false);
//     const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//     const textInputRef = useRef<TextInput>(null);
//     const styles = useCustomTextInputStyles();

//     useImperativeHandle(ref, () => ({
//       focus: () => textInputRef.current?.focus(),
//       blur: () => textInputRef.current?.blur(),
//       clear: () => {
//         onChangeText("");
//         textInputRef.current?.clear();
//       },
//     }));

//     const handleFocus = () => {
//       setIsFocused(true);
//       onFocus?.();
//     };

//     const handleBlur = () => {
//       setIsFocused(false);
//       onBlur?.();
//     };

//     const togglePasswordVisibility = () => {
//       setIsPasswordVisible(!isPasswordVisible);
//     };

//     const getInputStyle = (): StyleProp<TextStyle> => {
//       const baseStyles: StyleProp<TextStyle>[] = [styles.textInput];

//       if (isFocused) {
//         baseStyles.push(styles.textInputFocused);
//       }
//       if (secureTextEntry || rightIcon) {
//         baseStyles.push(styles.textInputWithIcon);
//       }

//       return baseStyles;
//     };

//     const getPlaceholderTextColor = () => {
//       return styles.placeholder.color;
//     };

//     const getIconColor = () => {
//       return styles.placeholder.color;
//     };

//     return (
//       <View style={[styles.container, containerStyle]}>
//         {label && <Text style={styles.label}>{label}</Text>}
//         <View style={[styles.inputContainer, inputContainerStyle]}>
//           <TextInput
//             ref={textInputRef}
//             style={[getInputStyle(), textInputStyle]}
//             placeholder={placeholder}
//             placeholderTextColor={getPlaceholderTextColor()}
//             value={value}
//             onChangeText={onChangeText}
//             secureTextEntry={secureTextEntry && !isPasswordVisible}
//             keyboardType={keyboardType}
//             autoCapitalize={autoCapitalize}
//             autoCorrect={autoCorrect}
//             editable={editable}
//             multiline={multiline}
//             numberOfLines={numberOfLines}
//             maxLength={maxLength}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//             onSubmitEditing={onSubmitEditing}
//             returnKeyType={returnKeyType}
//             testID={testID}
//             {...props}
//           />
//           {/* Right icon (e.g., eye for password or custom icon) */}
//           {(secureTextEntry || rightIcon) && (
//             <TouchableOpacity
//               style={styles.iconContainer}
//               onPress={
//                 secureTextEntry ? togglePasswordVisibility : onRightIconPress
//               }
//               activeOpacity={0.7}
//             >
//               {secureTextEntry ? (
//                 <EyeIcon visible={isPasswordVisible} color={getIconColor()} />
//               ) : (
//                 rightIcon
//               )}
//             </TouchableOpacity>
//           )}
//         </View>
//         {showCharacterCount && typeof maxLength === "number" && (
//           <Text style={styles.characterCountText}>
//             {(value || "").length}/{maxLength}
//           </Text>
//         )}
//         {error && <Text style={styles.errorText}>{error}</Text>}
//       </View>
//     );
//   }
// );

// CustomTextInput.displayName = "CustomTextInput";

// export default CustomTextInput;
