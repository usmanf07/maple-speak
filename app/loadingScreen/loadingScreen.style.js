import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

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

});

export default styles;
