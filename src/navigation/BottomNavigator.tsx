// /* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import AddExpense from '../screens/AddExpense';
import Details from '../screens/Details';
import { CustomBottomTab } from '../components/CustomBottomTab';
import { Image, View } from 'react-native';
import { icons } from '../../assets/icons';
import { styles } from '../components/CustomBottomTabStyle';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.icon}>
                <Image source={focused ? icons.activeHome : icons.home_grey} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="AddExpense"
        component={AddExpense}
        options={{
          tabBarButton: () => {
            return <CustomBottomTab />;
          },
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.icon}>
                <Image source={focused ? icons.activeTask : icons.task} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
