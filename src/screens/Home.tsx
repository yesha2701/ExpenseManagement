/* eslint-disable react/no-unstable-nested-components */
import { FlatList, Image, Text, View } from 'react-native';
import { styles } from './HomeStyle';
import { CustomHeader } from '../components/CustomHeader';
import { strings } from '../utilities/Strings';
import { icons } from '../../assets/icons';
import { iconMap } from '../../assets/icons/arrayOfIcon';

interface data {
  id: string;
  name: string;
  date: string;
  amount: string;
}

const Data: data[] = [
  { id: '1', name: 'food', date: '20 feb 2024', amount: '200' },
  { id: '2', name: 'bill', date: '20 feb 2024', amount: '200' },
  { id: '3', name: 'bike', date: '20 feb 2024', amount: '200' },
  { id: '4', name: 'movie', date: '20 feb 2024', amount: '200' },
  { id: '5', name: 'rent', date: '20 feb 2024', amount: '200' },
  { id: '6', name: 'shopping', date: '20 feb 2024', amount: '200' },
  { id: '7', name: 'food', date: '20 feb 2024', amount: '200' },
];

interface ItemProp {
  item: data;
}
const Home = () => {
  const Item = ({ item }: ItemProp) => {
    return (
      <View style={styles.flatlistView}>
        <View style={styles.leftFlatlistView}>
          <View style={styles.iconView}>
            <Image
              source={iconMap[item.name as keyof typeof iconMap]}
              style={styles.icon}
            />
          </View>
          <View style={styles.textView}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
        </View>
        <View style={styles.amountView}>
          <Text style={styles.nameText}>{item.amount}</Text>
          <Image source={icons.edit} />
          <Image source={icons.delete} />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <CustomHeader label="Entries" />
      <View style={styles.listView}>
        <Text style={styles.entries}>{strings.entries}</Text>
        <FlatList
          data={Data}
          renderItem={({ item }) => <Item item={item} />}
          ListEmptyComponent={<Text>{strings.empty}</Text>}
        />
      </View>
    </View>
  );
};
export default Home;
