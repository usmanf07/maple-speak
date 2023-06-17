import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const GameScreen = ({ selectedLevel }) => {
    console.log('GameScreen', selectedLevel);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
    
  const handleAnswer = (selectedAnswer) => {
    // Check if the selected answer is correct
    if (selectedAnswer === selectedLevel.answers[currentQuestionIndex]) {
      // Update the score
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const renderQuestion = () => {
    // if (currentQuestionIndex >= selectedLevel.questions.length) {
    //   // All questions have been answered
    //   return (
    //     <View style={styles.resultContainer}>
    //       <Text style={styles.resultText}>Game Over</Text>
    //       <Text style={styles.resultText}>Score: {score}</Text>
    //     </View>
    //   );
    // }

    // const currentQuestion = selectedLevel.questions[currentQuestionIndex];

    return (
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>GameScreen</Text>
        {/* <Text style={styles.questionText}>{currentQuestion}</Text>
        <View style={styles.answersContainer}>
          {selectedLevel.answers.map((answer, index) => (
            <TouchableOpacity
              key={index}
              style={styles.answerButton}
              onPress={() => handleAnswer(answer)}
            >
              <Text style={styles.answerText}>{answer}</Text>
            </TouchableOpacity>
          ))}
        </View> */}
      </View>
    );
  };

  return <View style={styles.container}>{renderQuestion()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
  },
  questionContainer: {
    
    alignItems: 'center',
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
  },
  answersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  answerText: {
    fontSize: 16,
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default GameScreen;
