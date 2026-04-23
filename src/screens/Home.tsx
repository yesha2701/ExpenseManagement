/* eslint-disable react/no-unstable-nested-components */
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './HomeStyle';
import { CustomHeader } from '../components/CustomHeader';
import { strings } from '../utilities/strings';
import { icons } from '../../assets/icons';
import { iconMap } from '../../assets/icons/arrayOfIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteItem, Todo } from '../redux/slice/ItemSlice';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigationTypes';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

const Home = () => {
  const dataList = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch();

  const navigation =
    useNavigation<BottomTabNavigationProp<RootStackParamList>>();

  const onUpdate = (item: Todo) => {
    navigation.navigate('AddExpense', { item, isEdit: true });
  };

  const Item = ({ item }: { item: Todo }) => {
    return (
      <View style={styles.flatListView}>
        <View style={styles.leftFlatListView}>
          <View style={styles.iconView}>
            <Image
              source={iconMap[item.title as keyof typeof iconMap]}
              style={styles.icon}
            />
          </View>
          <View style={styles.textView}>
            <Text style={styles.nameText}>{item.title}</Text>
            <Text style={styles.dateText}>{item.dateSelect}</Text>
          </View>
        </View>
        <View style={styles.amountView}>
          <Text style={styles.nameText}>{item.amount}</Text>
          <TouchableOpacity onPress={() => onUpdate(item)}>
            <Image source={icons.edit} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(deleteItem(item.id))}>
            <Image source={icons.delete} />
          </TouchableOpacity>
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
          data={dataList}
          renderItem={({ item }) => <Item item={item} />}
          ListEmptyComponent={<Text>{strings.empty}</Text>}
        />
      </View>
    </View>
  );
};
export default Home;
