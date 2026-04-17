import React from 'react';
import { Image, View } from 'react-native';
import { images } from '../../assets/images';
import { styles } from './LoginStyle';
import { Text } from 'react-native-gesture-handler';
import { CustomTextInput } from '../components/CustomTextInput';
import { icons } from '../../assets/icons';
import { colors } from '../Themes/Colors';
import { CustomButton } from '../components/CustomButton';
import { strings } from '../utilities/Strings';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/NavigationTypes';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const onNavigate = () => {
    navigation.replace('BottomNavigator');
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image source={images.logo} style={styles.logoImage} />
        <Text style={styles.logoText}>{strings.logoName}</Text>
      </View>
      <View>
        <CustomTextInput
          placeholder="Enter Username"
          source={icons.profile}
          placeholderTextColor={colors.lightGrey}
        />
        <CustomTextInput
          placeholder="Enter Password"
          source={icons.lock}
          secureTextEntry={true}
          placeholderTextColor={colors.lightGrey}
          rightIcon={icons.eye_hidden}
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
    </View>
  );
};

export default Login;
