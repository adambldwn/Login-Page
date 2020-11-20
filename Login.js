import React from 'react';
import { SafeAreaView, View, Text, Image, Dimensions, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';

import { Input, Button } from './components';

const Login = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#b2dfdb' }}>
      <KeyboardAvoidingView style={{flex:1}}>
        <ScrollView style={{flex:1}}>

          <View style={{ flex: 1 }}>
            <Image
              source={require("./assets/image.png")}
              style={styles.logoStyle}
            />

            <Input holder="E-posta adresinizi giriniz" />
            <Input holder="Şifrenizi giriniz" />

            <Button text="Giriş Yap" />

          </View>
          
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login;

const styles = StyleSheet.create({
  logoStyle: {
    resizeMode: 'contain',
    height: Dimensions.get('window').height * 0.4,
    width: Dimensions.get('window').width * 0.6,
    alignSelf: 'center'
  }
})