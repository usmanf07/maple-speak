import React from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import {useRouter} from 'expo-router';
import {icons} from '../../constants'
import styles from './loadingScreen.style'
import SafeAreaWrap from '../SafeAreaWrap';

const loadingScreen = ({levelName, levelNo}) => {
  const router = useRouter();
  
  return (
    <SafeAreaWrap>
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.textColor}>Loading Level...</Text>
      </View>
      <View>
        <Image source={icons.mapie} style={styles.image} />
      </View>
      <View>
        <Text style={styles.headerText}>{levelName}</Text>
      </View>
      <Text style={styles.textColor}>{levelNo}</Text>
      <ActivityIndicator size="large" color="grey" />
    </View>
    </SafeAreaWrap>
  )
}

export default loadingScreen