import { StyleSheet, ScrollView } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderGray,
    backgroundColor: COLORS.primary,
    paddingBottom: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    display: "flex",
  },
  feature:{
    width: "90%",
  },
  content: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 20,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.borderGray,
    backgroundColor: COLORS.footerGray,
    paddingTop: 20,
    paddingBottom: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    display: "flex",
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    },
    iconFooter: {
        width: 20,
        height: 20,
      
        },
   item: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    display: "flex",
    paddingHorizontal: 10,
    
    },
    footerItem: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        display: "flex",
        paddingHorizontal: 10,
       
        },
  textHeader: {
    color: COLORS.gray,
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  textContent: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  textFooter: {
    color: COLORS.white,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
  },
  textFooterSelect: {
    color: COLORS.primary,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
  },
});

export default styles;