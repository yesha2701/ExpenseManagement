import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import AddExpense from '../screens/AddExpense';
import Details from '../screens/Details';
// import { Image } from 'react-native';
// import { icons } from '../../assets/icons';
// import { CustomBottomTab } from '../components/CustomBottomTab';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="AddExpense"
        component={AddExpense}
        // options={{
        //   tabBarIcon:()=>{
        //     return(
        //       <Image
        //       source={icons.plus}
        //       resizeMode='contain'
        //       />
        //     )
        //   },
        //   tabBarButton:(props)=>{
        //     <CustomBottomTab {...props}/>
        //   }
        // }}
      />
      <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
