import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './featureCard.style';

const FeatureCard = ({ backgroundImage, featureName, description, completedLevels, totalLevels }) => {
  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <View style={styles.contentContainer}>
        
        <Text style={styles.featureName}>{featureName}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.progress}>{`${completedLevels}/${totalLevels}`}</Text>
      </View>
    </View>
  );
};

export default FeatureCard;