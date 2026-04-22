import React, { useEffect, useRef, useState } from 'react';
import {
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
import { strings } from '../utilities/Strings';
import { CustomButton } from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import Moment from 'moment';

const AddExpense = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [dateSelect, setDateSelect] = useState('');
  const [errors, setErrors] = useState({ field: '', message: '' });

  const idRef = useRef<TextInput>(null);
  const titleRef = useRef<TextInput>(null);
  const amountRef = useRef<TextInput>(null);

  useEffect(() => {
    idRef.current?.focus();
  }, []);

  // const clearInput = () => {
  //   setId('');
  //   setTitle('');
  //   setAmount('');
  // };

  const handleChange = (field: 'id' | 'title' | 'amount', value: string) => {
    if (field === 'id') setId(value);
    if (field === 'title') setTitle(value);
    if (field === 'amount') setAmount(value);
    if (errors.field === field) {
      setErrors({ field: '', message: '' });
    }
  };

  const onValidate = () => {
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
    }
  };

  const onHandleSubmit = async () => {
    onValidate();

    // const multiParam = {
    //   id:id,
    //   title:title,
    //   amount:amount,
    //   date:dateSelect
    // }

    try {
    } catch (e) {
      console.log('Error :>> ', e);
    }
  };

  // const handleOnSubmit = async () => {
  //   const multiParam = {
  //     id: id,
  //     title: title,
  //     priority: priority,
  //     status: status,
  //     category: category,
  //     durationSeconds: durationSeconds,
  //     remainingSeconds: remainingSeconds,
  //     createdAt: IsoFormattedDate,
  //   };

  //   try {
  //     const existingDataString = await AsyncStorage.getItem("userData");
  //     let existingData = existingDataString
  //       ? JSON.parse(existingDataString)
  //       : [];

  //     if (isEdit === true) {
  //       const updateTitle = existingData.map((item) => {
  //         if (item.id === onEditData.id) {
  //           return { ...item, title };
  //         }
  //         return item;
  //       });
  //       await AsyncStorage.setItem("userData", JSON.stringify(updateTitle));
  //       setNewData(updateTitle);
  //     } else {
  //       if (Array.isArray(existingData)) {
  //         if (existingData.map((x) => x.id).includes(multiParam.id)) {
  //           Alert.alert("Id already existed");
  //         } else {
  //           existingData.push(multiParam);
  //         }
  //       } else {
  //         console.error("Existing data is not an array. Cannot push new data.");
  //         return;
  //       }
  //       await AsyncStorage.setItem("userData", JSON.stringify(existingData));
  //       setNewData(existingData);
  //     }
  //     console.log("Data successfully saved and updated");
  //     setId("");
  //     setTitle("");
  //     setPriority("");
  //     setStatus("");
  //     setCategory("");
  //     setDuration("");
  //     setRemaining("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const onDateChange = (date: Date) => {
    const formatDate = Moment(date)?.format('DD MMMM YYYY');
    setDateSelect(formatDate);
  };
  console.log('Date---------------------- :>> ', dateSelect);

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
            <View style={styles.formView}>
              <Text style={styles.text}>{strings.id}</Text>
              <CustomTextInput
                placeholder="Enter Your ID"
                textInputStyle={styles.textInputStyle}
                ref={idRef}
                onSubmitEditing={() => titleRef.current?.focus()}
                returnKeyType="next"
                value={id}
                onChangeText={val => handleChange('id', val)}
              />
              {errors.field === 'id' && (
                <Text style={styles.errorText}>{errors.message}</Text>
              )}
              <Text style={styles.text}>{strings.title}</Text>
              <CustomTextInput
                placeholder="Enter Your Expense Title"
                textInputStyle={styles.textInputStyle}
                ref={titleRef}
                onSubmitEditing={() => amountRef.current?.focus()}
                returnKeyType="next"
                value={title}
                onChangeText={val => handleChange('title', val)}
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
