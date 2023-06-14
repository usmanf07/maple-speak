import React from 'react'
import { View, Text, TextInput,TouchableOpacity, SafeAreaView, Image } from 'react-native'
import {Stack, useRouter} from 'expo-router';
import {icons, COLORS} from '../../constants'
import styles from './login.style'

const Login = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.background}}>
        <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.background},
                headerShadowVisible: false,
            }}
        />
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Welcome Back!</Text>
      </View>
      <View>
        <Text style={styles.textColor}>Login to your account</Text>
      </View>
      <View style={styles.inputContainer}>
        <Image source={icons.email} style={styles.inputIcon} />
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <Image source={icons.password} style={styles.inputIcon} />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
      </View>
      <View>
        <Text style={styles.textColor2}>Forgot Password?</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('../login/login')}>
          <Text style={styles.buttonText1}>Login & Start Learning!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => router.push('/signup')}>
          <Text style={styles.buttonText2}>Don't Have an Account?</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Login