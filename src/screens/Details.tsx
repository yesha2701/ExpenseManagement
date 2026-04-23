import { Text, View } from 'react-native';
import { CustomHeader } from '../components/CustomHeader';

const Details = () => {
  return (
    <View>
      <CustomHeader label="Details" />
      <Text>Welcome to detail page!</Text>
    </View>
  );
};

export default Details;
