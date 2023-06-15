import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { icons, COLORS } from '../../constants';
import styles from './signup.style';

const Signup1 = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.background },
          headerShadowVisible: false,
        }}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={icons.mapie} style={styles.image} />
          <View style={styles.containerText}>
            <Text style={styles.textColor}>How much English do you know?</Text>
          </View>
        </View>
        <View style={styles.border}></View>
        <View style={styles.learningbox}>
          <TouchableOpacity
            style={[
              styles.optionContainer,
              selectedOption === 'level1' && { borderColor: COLORS.primary },
            ]}
            onPress={() => handleOptionPress('level1')}
          >
            <Image source={icons.level1} />
            <Text style={styles.textColor3}>I just started learning</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.optionContainer,
              selectedOption === 'level2' && { borderColor: COLORS.primary },
            ]}
            onPress={() => handleOptionPress('level2')}
          >
            <Image source={icons.level2} />
            <Text style={styles.textColor3}>I know some words</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionContainer,
              selectedOption === 'level3' && { borderColor: COLORS.primary },
            ]}
            onPress={() => handleOptionPress('level3')}
          >
            <Image source={icons.level3} />
            <Text style={styles.textColor3}>I can have a simple conversation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionContainer,
              selectedOption === 'level4' && { borderColor: COLORS.primary },
            ]}
            onPress={() => handleOptionPress('level4')}
          >
            <Image source={icons.level4} />
            <Text style={styles.textColor3}>I'm at intermediate level or above</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.borderMax}></View>
        <TouchableOpacity style={styles.button} onPress={() => router.push('./signup2')}>
          <Text style={styles.buttonText1}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup1;
