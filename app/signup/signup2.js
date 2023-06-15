import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { icons, COLORS } from '../../constants';
import styles from './signup.style';
import SafeAreaWrap from '../SafeAreaWrap'

const Signup2 = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaWrap>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={icons.mapie} style={styles.image} />
          <View style={styles.containerText}>
            <Text style={styles.textColor}>What is your daily study target?</Text>
          </View>
        </View>
        <View style={styles.border}></View>
        <View style={styles.learningbox}>
          <TouchableOpacity
            style={[
              styles.optionContainer2,
              selectedOption === 'level1' && { borderColor: COLORS.primary },
            ]}
            onPress={() => handleOptionPress('level1')}
          >
           
            <Text style={styles.textColor3}>5 mins / day</Text>
            <Text style={styles.textColor4}>Relax</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.optionContainer2,
              selectedOption === 'level2' && { borderColor: COLORS.primary },
            ]}
            onPress={() => handleOptionPress('level2')}
          >
            
            <Text style={styles.textColor3}>10 mins / day</Text>
            <Text style={styles.textColor4}>Normal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionContainer2,
              selectedOption === 'level3' && { borderColor: COLORS.primary },
            ]}
            onPress={() => handleOptionPress('level3')}
          >
            
            <Text style={styles.textColor3}>15 mins / day</Text>
            <Text style={styles.textColor4}>Serious</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionContainer2,
              selectedOption === 'level4' && { borderColor: COLORS.primary },
            ]}
            onPress={() => handleOptionPress('level4')}
          >
           
            <Text style={styles.textColor3}>20 mins / day</Text>
            <Text style={styles.textColor4}>Great</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionContainer2,
              selectedOption === 'level5' && { borderColor: COLORS.primary },
            ]}
            onPress={() => handleOptionPress('level5')}
          >
            
            <Text style={styles.textColor3}>30 mins / day</Text>
            <Text style={styles.textColor4}>Awesome</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.borderMax}></View>
        <TouchableOpacity style={styles.button} onPress={() => router.push('./signup3')}>
          <Text style={styles.buttonText1}>Continue</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaWrap>
  );
};

export default Signup2;
