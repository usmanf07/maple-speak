import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
  containerText: {
    marginTop: 100,
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
    color: COLORS.primary,
    marginBottom: 10,
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    height: 200,
  },
  textColor: {
    color: COLORS.white,
    fontFamily: FONT.medium,
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
    marginTop: 50,
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
