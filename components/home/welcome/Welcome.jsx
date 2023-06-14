import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import {useRouter} from 'expo-router';
import {icons} from '../../../constants'
import styles from './welcome.style'

const Welcome = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.textColor}>Hi there! I'm Mapie!</Text>
      </View>
      <View>
        <Image source={icons.mapie} style={styles.image} />
      </View>
      <View>
        <Text style={styles.headerText}>MapleSpeak</Text>
      </View>
      <Text style={styles.textColor}>A Language Learning Assistant</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('../login/login')}>
          <Text style={styles.buttonText1}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => router.push('../signup/signup')}>
          <Text style={styles.buttonText2}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome