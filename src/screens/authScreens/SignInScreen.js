import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import Header from '../../components/Header';
import {colors, parameters, title} from '../../global/styles';
import {Icon, Button} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export default function SignInScreen() {
  const [textInput2Forcused, setTextInput2Forcused] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="Tài khoản của tôi" type="arrow-left" />
      <View>
        <Text style={title}>Đăng nhập</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={styles.text1}>
          Vui lòng nhập email và mật khẩu đã đăng ký
        </Text>
        <Text style={styles.text1}>với tài khoản của bạn</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View style={styles.TextInput2}>
          <Animatable.View>
            <Icon
              name="person"
              iconStyle={{color: colors.grey3}}
              type="material"
            />
          </Animatable.View>
          <TextInput
            style={{width: '90%'}}
            placeholder="Email"
            ref={textInput2}
            onFocus={() => {
              setTextInput2Forcused(false);
            }}
            onBlur={() => {
              setTextInput2Forcused(true);
            }}
          />
        </View>
        <View style={styles.TextInput2}>
          <Animatable.View>
            <Icon
              name="lock"
              iconStyle={{color: colors.grey3}}
              type="material"
            />
          </Animatable.View>
          <TextInput
            style={{width: '80%'}}
            placeholder="Mật khẩu"
            ref={textInput2}
            onFocus={() => {
              setTextInput2Forcused(false);
            }}
            onBlur={() => {
              setTextInput2Forcused(true);
            }}
          />
          <Animatable.View>
            <Icon
              name="visibility-off"
              iconStyle={{color: colors.grey3}}
              type="material"
              style={{marginRight: 10}}
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{margin: 20}}>
        <Button
          title="ĐĂNG NHẬP"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
});
