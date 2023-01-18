import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled9 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.EqkoYukA} source={require("./dragon 6.jpg")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.ELrhSagJ} source={require("./Png.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.KdelRmSM} source={require("./jpeg pic.jpg")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  EqkoYukA: {
    width: 107,
    height: 62
  },
  ELrhSagJ: {
    width: 107,
    height: 62
  },
  KdelRmSM: {
    width: 107,
    height: 62
  }
});
export default Untitled9;