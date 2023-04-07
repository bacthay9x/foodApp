import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import Header from '../../components/Header';
import {colors, parameters, title} from '../../global/styles';
import {Icon, Button, SocialIcon} from 'react-native-elements';
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

      <View style={{marginTop: 40}}>
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
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Quên mật khẩu?
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 15, marginBottom: 25}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Hoặc</Text>
      </View>
      <View style={{marginHorizontal: 10, marginTop: -10}}>
        <SocialIcon
          title="Đăng Nhập với Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginHorizontal: 10}}>
        <SocialIcon
          title="Đăng Nhập với Google"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginTop: 15, marginLeft: 20}}>
        <Text style={{...styles.text1}}>Tin tức mới!!</Text>
      </View>
      <View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
        <Button
          title="Tạo một tài khoản mới"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
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
  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4AE488',
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: '#4AE488',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
