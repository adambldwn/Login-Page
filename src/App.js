import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'


const App = () => {
  
  return(
    <View style={styles.container}>
      <View>
        <Image source={require('../img/image.png')} style={{width: 100, height: 100, marginBottom: 75, marginTop: 100}} />
      </View>

      <View>
        <TextInput keyboardType='e-mail' placeholder='E-posta giriniz' style={styles.input} />
        <TextInput keyboardType='password' placeholder='Şifre giriniz' style={styles.input} />
      </View>
    
      <View>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.text}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
  
    </View>
    
  )
}

export default App;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#80CBC4',
    flex: 1,
    alignItems: 'center'
  },
  input: {
    
    borderRadius:5,
    width: 350,
    backgroundColor: 'white',
    margin: 15
  },
  button1: {
    borderRadius: 5,
    backgroundColor: '#546E7A',
    width: 225,
    marginTop: 10,
    padding: 10,
    alignItems: 'center'
  },
  button2: {
    borderRadius: 5,
    backgroundColor: '#546E7A',
    width: 225,
    marginTop: 5,
    padding: 10,
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
})

