import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { styles } from './AddExpenseStyle';
import { CustomHeader } from '../components/CustomHeader';
import CalendarPicker from 'react-native-calendar-picker';
import { colors } from '../Themes/Colors';
import { strings } from '../utilities/strings';
import { CustomButton } from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import Moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, Todo, updateItem } from '../redux/slice/ItemSlice';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigationTypes';
import { RootState } from '../redux/store';
import { Dropdown } from 'react-native-element-dropdown';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

const AddExpense = () => {
  const navigation =
    useNavigation<BottomTabNavigationProp<RootStackParamList>>();
  const onNavigation = () => {
    navigation.navigate('Home');
  };

  const titleOptions = [
    { label: 'Food', value: 'Food' },
    { label: 'Bike', value: 'Bike' },
    { label: 'Movie', value: 'Movie' },
    { label: 'Rent', value: 'Rent' },
    { label: 'Bill', value: 'Bill' },
    { label: 'Shopping', value: 'Shopping' },
  ];

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [dateSelect, setDateSelect] = useState('');
  const [errors, setErrors] = useState({ field: '', message: '' });

  const idRef = useRef<TextInput>(null);
  const amountRef = useRef<TextInput>(null);

  const dataList = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch();

  const route = useRoute();
  const data = route.params as { isEdit: boolean; item: Todo };
  const editItem = data?.item;
  const isEdit = data?.isEdit;

  useEffect(() => {
    idRef.current?.focus();
    if (isEdit === true) {
      setId(editItem.id);
      setTitle(editItem.title);
      setAmount(editItem.amount);
      setDateSelect(editItem.dateSelect);
    } else {
      setId('');
      setTitle('');
      setAmount('');
      setDateSelect('');
    }
  }, [isEdit, editItem]);

  const clearInput = () => {
    setId('');
    setTitle('');
    setAmount('');
  };

  const handleChange = (field: 'id' | 'title' | 'amount', value: string) => {
    if (field === 'id') setId(value);
    if (field === 'title') setTitle(value);
    if (field === 'amount') setAmount(value);
    if (errors.field === field) {
      setErrors({ field: '', message: '' });
    }
  };

  const onHandleSubmit = () => {
    let formError = { field: '', message: '' };

    if (id.trim() === '') {
      formError.field = 'id';
      formError.message = 'Id is Required';
      setErrors(formError);
      return;
    } else if (title.trim() === '') {
      formError.field = 'title';
      formError.message = 'Title is Required';
      setErrors(formError);
      return;
    } else if (amount.trim() === '') {
      formError.field = 'amount';
      formError.message = 'amount is Required';
      setErrors(formError);
      return;
    } else if (dateSelect.trim() === '') {
      formError.field = 'dateSelect';
      formError.message = 'date is Required';
      setErrors(formError);
      return;
    }

    if (isEdit === true) {
      dispatch(updateItem({ id, title, amount, dateSelect }));
    } else {
      if (dataList.map(x => x.id).includes(id)) {
        Alert.alert('Id already existed Please enter new id');
        idRef.current?.focus();
      } else {
        dispatch(addItem({ id, title, amount, dateSelect }));
      }
    }

    clearInput();
    onNavigation();
  };

  const onDateChange = (date: Date) => {
    const formatDate = Moment(date)?.format('DD MMMM YYYY');
    setDateSelect(formatDate);
    setErrors({ field: '', message: '' });
  };

  return (
    <View style={styles.container}>
      <CustomHeader label="Add Expense" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView>
          <View style={styles.mainView}>
            <View style={styles.calenderView}>
              <CalendarPicker
                selectedDayColor={colors.primary}
                selectedDayTextColor={colors.white}
                previousTitleStyle={styles.prevStyle}
                nextTitleStyle={styles.nextStyle}
                monthTitleStyle={styles.TitleStyle}
                yearTitleStyle={styles.TitleStyle}
                width={380}
                onDateChange={onDateChange}
              />
            </View>
            {errors.field === 'dateSelect' && (
              <Text style={styles.errorText}>{errors.message}</Text>
            )}
            <View style={styles.formView}>
              <Text style={styles.text}>{strings.id}</Text>
              <CustomTextInput
                placeholder="Enter Your ID"
                textInputStyle={styles.textInputStyle}
                returnKeyType="next"
                editable={isEdit ? false : true}
                value={id}
                onChangeText={val => handleChange('id', val)}
              />
              {errors.field === 'id' && (
                <Text style={styles.errorText}>{errors.message}</Text>
              )}
              <Text style={styles.text}>{strings.title}</Text>
              <Dropdown
                data={titleOptions}
                labelField="label"
                valueField="value"
                placeholder="Select Title"
                value={title}
                onConfirmSelectItem={() => amountRef.current?.focus()}
                onChange={item => {
                  setTitle(item.value);
                  setErrors({ field: '', message: '' });
                }}
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
              />
              {errors.field === 'title' && (
                <Text style={styles.errorText}>{errors.message}</Text>
              )}
              <Text style={styles.text}>{strings.amount}</Text>
              <CustomTextInput
                placeholder="Enter Your Amount"
                textInputStyle={styles.textInputStyle}
                placeholderTextColor={colors.lightGrey}
                ref={amountRef}
                onSubmitEditing={() => onHandleSubmit()}
                returnKeyType="send"
                value={amount}
                onChangeText={val => handleChange('amount', val)}
              />
              {errors.field === 'amount' && (
                <Text style={styles.errorText}>{errors.message}</Text>
              )}
              <CustomButton
                label="ADD EXPENSE"
                onPress={() => onHandleSubmit()}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddExpense;
