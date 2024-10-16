import { colors } from "@/styles/colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.white }}>Search Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: colors.white,
  },
});
