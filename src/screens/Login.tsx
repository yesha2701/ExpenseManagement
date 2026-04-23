import React, { useRef } from 'react';
import { Image, ScrollView, View, Text, TextInput } from 'react-native';
import { images } from '../../assets/images';
import { styles } from './LoginStyle';
import { icons } from '../../assets/icons';
import { colors } from '../Themes/Colors';
import { CustomButton } from '../components/CustomButton';
import { strings } from '../utilities/strings';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigationTypes';
import CustomTextInput from '../components/CustomTextInput';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const onNavigate = () => {
    navigation.replace('BottomNavigator');
  };

  const passwordRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logoView}>
          <Image source={images.logo} style={styles.logoImage} />
          <Text style={styles.logoText}>{strings.logoName}</Text>
        </View>
        <View>
          <CustomTextInput
            placeholder="Enter Username"
            source={icons.profile}
            placeholderTextColor={colors.lightGrey}
            onSubmitEditing={() => {
              passwordRef.current?.focus();
            }}
          />
          <CustomTextInput
            placeholder="Enter Password"
            ref={passwordRef}
            source={icons.lock}
            secureTextEntry={true}
            placeholderTextColor={colors.lightGrey}
          />
        </View>
        <View>
          <CustomButton
            label="LOGIN"
            onPress={() => {
              onNavigate();
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
