import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';

import { RootStackParamList } from '../types/NavigationTypes';
// import AddExpense from '../screens/AddExpense';
// import Home from '../screens/Home';
import BottomNavigator from './BottomNavigator';

const Stack = createStackNavigator<RootStackParamList>();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
