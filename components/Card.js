import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    // with  the two spreads what you are doing is making a new object and passing it the previous properties but also adding any new one you pass as style props
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    // this is used for making shadows in android - ELEVATION
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  }
});

export default Card;
