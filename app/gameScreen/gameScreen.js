import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import { COLORS, FONT, SIZES } from "../../constants";
import LoadingScreen from '../loadingScreen/loadingScreen';
import SafeAreaDash from '../SafeAreaDash';
import Footer from '../footer/footer';
import { Audio } from 'expo-av';

const GameScreen = () => {
  const params = useLocalSearchParams();
  const levelID = params.levelId;
  const [loading, setLoading] = useState(true);
  const [levelDetails, setLevelDetails] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceLevel, setVoiceLevel] = useState(0);
  const [recording, setRecording] = React.useState();
  const [message, setMessage] = React.useState("");
  const [userRecording, setUserRecording] = React.useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchLevelDetails();
    }, 1000); // 5 seconds timeout

    return () => {
      clearTimeout(timeoutId); // Clear the timeout if the component unmounts before the timeout expires
    };
  }, []);

  
  const fetchLevelDetails = async () => {
    try {
      const response = await axios.get(`http://${COLORS.ip}:8000/levels/getdetails/${levelID}`);
      console.log('Level Details:', response.data);
      setLevelDetails(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading level details:', error);
    }
  };

   async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
  
    await recording.stopAndUnloadAsync();

  
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    let newUserRecording = {};
    newUserRecording.sound = sound;
    newUserRecording.duration = getDurationFormatted(status.durationMillis);
    newUserRecording.file = recording.getURI();
   
   setUserRecording(newUserRecording);
  }
  
  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLine() {
    if (userRecording.length !== 0 && !isRecording) {
      return (
        <View style={styles.row}>
          <Text style={styles.recordPlayText}>Your Attempt - {userRecording.duration}</Text>
          <Button style={styles.button} onPress={() => userRecording.sound.replayAsync()} title="Play"></Button>
        </View>
      );
    }
    return null;
  }
  


  const handleRecordButtonPress = () => {
    if (isRecording) {
      stopRecording();
      setIsRecording(false);
      // Reset voice level to 0
      setVoiceLevel(0);
    } else {
      // Start recording logic
      startRecording();
      setIsRecording(true);
    }
  };

  return (
    <SafeAreaDash>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.questionText}>Pronounce the Following Sentence</Text>
            </View>
            <View style={styles.border} />
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{levelDetails.questions[0]}</Text>
              </View>
            <View style={styles.contentContainer}>
              
              <View style={styles.recordingLevels}>
                <View style={[styles.voiceLevelBar, { height: voiceLevel }]} />
              </View>
              <TouchableOpacity
                style={[styles.recordButton, isRecording && styles.recordingButton]}
                onPress={handleRecordButtonPress}
              >
                
      <StatusBar style="auto" />
                <Text style={styles.recordButtonText}>{isRecording ? 'Stop' : 'Record'}</Text>
              </TouchableOpacity>
              {getRecordingLine()}
            </View>
          </View>
          <Footer />
        </>
      )}
    </SafeAreaDash>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.gray,
  },
  header: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    width: '90%',
    borderRadius: SIZES.medium,
    borderColor: COLORS.borderGray,
    borderWidth: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionContainer: {
    alignItems: 'center',
  },
  questionText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    marginTop: 20,
    color: COLORS.white,
  },
  recordingLevels: {
    width: '100%',
    height: 20,
    backgroundColor: COLORS.lightGray,
    marginTop: 20,
  },
  voiceLevelBar: {
    backgroundColor: COLORS.primary,
  },
 
  recordButton: {
    width: 120,
    height: 40,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  recordingButton: {
    backgroundColor: COLORS.error,
  },
  recordButtonText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.gray,
  },
  recordPlayText: {
    marginTop: 20,
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.white,
  },
});

export default GameScreen;
