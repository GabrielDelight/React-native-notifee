import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import notifee from "@notifee/react-native";

const App = () => {
  async function onTriggerHandler() {
    await notifee.displayNotification({
      id: "1",
      title: `New message in chat`,
      body: "You received a new message from Mike.",
    });

    await notifee.displayNotification({
      id: "2",
      title: `App update`,
      body: "Please update your app from the App Store as it is outdated.",
    });
  }

  return (
    <View style={styles.body}>
      <TouchableOpacity style={styles.button} onPress={onTriggerHandler}>
        <Text style={styles.btn_text}>Display</Text>
      </TouchableOpacity> 
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ddd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    width: 200,
    backgroundColor: "hotpink",
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
  },
  btn_text: {
    fontSize: 20,
    color: "white",
  },
});
