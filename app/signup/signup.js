import {React, useState} from 'react'
import { View, Text, TextInput,TouchableOpacity, ScrollView,  SafeAreaView, Image } from 'react-native'
import {Stack, useRouter} from 'expo-router';
import {icons, COLORS} from '../../constants'
import styles from './signup.style'

const Signup = () => {
  const router = useRouter();
  const [languageList, setlanguageList] = useState(['English', 'French', 'Spanish', 'German', 'Arabic']);
  const languageIcons = [icons.uk, icons.fr, icons.es, icons.de, icons.ar];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.background}}>
        <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.background},
                headerShadowVisible: false,
            }}
        />
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={icons.mapie} style={styles.image} />
        <View style={styles.containerText}>
        <Text style={styles.textColor}>What language do you want to use for MapleSpeak?</Text>
        </View>
      </View>
      <View style={styles.contentbox1}>
      <Text style={styles.textColor}>Your Native Language</Text>
      <TouchableOpacity style={styles.languageContainer}>
            
         <Text style={styles.textColor3}>
         <Image source={icons.uk} />
          English
         </Text>
         <Text style={styles.changeButtonText}>Change</Text>
       
      </TouchableOpacity>
      </View>

      <View style={styles.contentbox2}>
      <Text style={styles.textColor}>Which Language would you like to learn?</Text>
      <ScrollView style={styles.padding}>
       
        {languageList.map((item, index) => (
          <TouchableOpacity style={styles.languageContainer1} key={index}>
            <Image source={languageIcons[index]} style={styles.icon} />
            <Text style={styles.textColor3}>{item}</Text>
            <Image source={icons.check} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      </View>
      
        <TouchableOpacity style={styles.button} onPress={() => router.push('../login/login')}>
          <Text style={styles.buttonText1}>Continue</Text>
        </TouchableOpacity>
      
    </View>
    </SafeAreaView>
  )
}

export default Signup