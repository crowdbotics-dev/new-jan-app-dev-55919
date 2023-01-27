import { CheckBox } from "react-native-elements";
import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled12 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><FlatList style={styles.MdhSRCrF} renderItem={() => <View style={styles.avrYYcWd}></View>} ItemSeparatorComponent={() => <View style={styles.teyeqpwc} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList><CheckBox style={styles.SOJZzYjw} title="Testing World " checked="Testing World testing "></CheckBox></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  MdhSRCrF: {
    position: "absolute",
    width: 100,
    height: 150
  },
  avrYYcWd: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  teyeqpwc: {
    backgroundColor: "#000000",
    height: 1
  },
  SOJZzYjw: {
    width: 183,
    height: 69,
    top: 11,
    left: 7,
    position: "absolute"
  }
});
export default Untitled12;