import { RadioGroup } from "react-native-radio-buttons-group";
import { CheckBox } from "react-native-elements";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><CheckBox style={styles.QwjFLHkN} title="Checkbox Title"></CheckBox><CheckBox style={styles.XXqjnLDF} title="Checkbox Title"></CheckBox><RadioGroup style={styles.QbGYHdYz} radioButtons={[{
        id: "1",
        label: "Option 1",
        value: "option1"
      }, {
        id: "2",
        label: "Option 2",
        value: "option2"
      }]} layout="row"></RadioGroup></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#d42626"
  },
  QwjFLHkN: {
    width: 183,
    height: 69
  },
  XXqjnLDF: {
    width: 183,
    height: 69
  },
  QbGYHdYz: {
    width: 120,
    height: 70,
    top: 8,
    left: 5,
    transform: "rotate(8deg)"
  }
});
export default Untitled5;