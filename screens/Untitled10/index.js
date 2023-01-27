import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled10 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flexDirection: "row",
      flex: "1"
    }} style={styles.ZhKeiApB}>Lorem ipsum…</ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  NoeFylzR: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  ZhKeiApB: {
    position: "absolute",
    left: 90,
    top: 136,
    width: 141,
    height: 118
  }
});
export default Untitled10;