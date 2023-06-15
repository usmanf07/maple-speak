import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  contentContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerText: {
    marginTop: 10,
    width: "70%",
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.medium,
    borderColor: COLORS.borderGray,
    borderWidth: 1,
    padding: SIZES.small,
    marginVertical: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  headerText: {
    fontFamily: FONT.bold,
    fontSize: 40,
    color: COLORS.white,
    marginTop: 10,
    marginBottom: 10,
  },

  textColor: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  textColor2: {
    marginTop: 30,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  textColor7: {
    marginTop: 30,
    marginBottom: 30,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  errorText: {
    color: COLORS.error,
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    textAlign: "center",
  },
  inputs:{
    width: "80%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontFamily: FONT.medium,
    color: COLORS.white,
  },
  inputContainer: {
    width: "80%",
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.medium,
    borderColor: COLORS.borderGray,
    borderWidth: 1,
    padding: SIZES.small,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    
  },
  buttonsContainer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.borderGray,
    paddingTop: 20,
    paddingBottom: 20, // Add paddingBottom to create space between the buttons and the bottom of the screen
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute", // Add position: "absolute" to position the container relative to the screen
    bottom: 0, // Position the container at the bottom of the screen
  },
  button: {
    width: "80%",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    borderColor: COLORS.primary,
    borderWidth: 1,
    padding: SIZES.small,
    marginVertical: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  buttonText1: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  buttonText2: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
  },
  button2: {
    width: "80%",
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.medium,
    borderColor: COLORS.borderGray,
    borderWidth: 1,
    padding: SIZES.small,
    marginVertical: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
 
});

export default styles;
