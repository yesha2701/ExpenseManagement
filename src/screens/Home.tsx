import { Text, View } from 'react-native';
import { styles } from './HomeStyle';
import { CustomHeader } from '../components/CustomHeader';
import { strings } from '../utilities/Strings';
// import BottomNavigator from '../navigation/BottomNavigator';

const Home = () => {
  return (
    <View style={styles.container}>
      <CustomHeader label="Entries" />
      <View style={styles.listView}>
        <Text style={styles.entries}>{strings.entries}</Text>
      </View>
    </View>
  );
};
export default Home;
