import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const LevelCard = ({ level, levelName, isCompleted }) => {
  const getRandomColor = () => {
    const colors = [
      '#F44336', // Red
      '#E91E63', // Pink
      '#9C27B0', // Purple
      '#673AB7', // Deep Purple
      '#3F51B5', // Indigo
      '#2196F3', // Blue
      '#03A9F4', // Light Blue
      '#00BCD4', // Cyan
      '#009688', // Teal
      '#4CAF50', // Green
      '#8BC34A', // Light Green
      '#CDDC39', // Lime
      '#FFC107', // Amber
      '#FF9800', // Orange
      '#FF5722', // Deep Orange
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const backgroundColor = getRandomColor();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {isCompleted && (
        <Text style={styles.checkIcon}>
          <MaterialIcons name="check" size={24} color="green" />
        </Text>
      )}
      <Text style={styles.levelText}>{level}</Text>
      <Text style={styles.levelName}>{levelName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: 150,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  levelText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  levelName: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  checkIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    shadowColor: '#222',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default LevelCard;
