import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 200,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 100,
  },
  languageContainer: {
    marginTop: 20,
    width: "80%",
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.medium,
    borderColor: COLORS.primary,
    borderWidth: 1,
    padding: SIZES.small,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  languageContainer1: {
    marginTop: 20,
    width: "100%",
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
  padding: {
    padding: 20,
  },
  containerText: {
    marginTop: 10,
    width: "50%",
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
  textColor3: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    paddingLeft: 10
  },
  
  
  textColor2: {
    marginTop: 30,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },

  contentbox1: {
    width: "100%",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentbox2: {
    width: "90%",
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText1: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
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

  changeButton: {
    
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  changeButtonText: {
    color: COLORS.primary,
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
  },
  buttonsContainer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.borderGray,
    paddingTop: 20,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 220,
  },
});

export default styles;
