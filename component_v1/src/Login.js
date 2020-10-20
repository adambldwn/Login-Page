import React from 'react';
import { SafeAreaView, View, Text, Image, Dimensions, ScrollView } from 'react-native';

import { Input, MyButton } from './components'

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#b2dfdb' }}>
           

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('./assets/cart.png')}
                        style={{
                            width: Dimensions.get('window').width * 0.25,
                            height: Dimensions.get('window').height * 0.2,
                            resizeMode: 'contain'
                        }}
                    />
                    <Input holder='lütfen mail adresinizi giriniz' />
                    <Input holder='lütfen şifrenizi giriniz' />

                    <MyButton mytitle='Giriş Yap' />
                </View>

           
        </SafeAreaView>
    )
}

export default App;
