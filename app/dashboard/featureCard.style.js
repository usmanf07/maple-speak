import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Add a semi-transparent overlay
  },
  featureName: {
    color: 'white',
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    marginBottom: 8,
  },
  description: {
    color: 'white',
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    marginBottom: 8,
  },
  progress: {
    position: 'absolute',
    top: 8,
    right: 8,
    color: 'white',
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
  },
});

export default styles;
