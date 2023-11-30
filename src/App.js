import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import notifee from "@notifee/react-native";

const App = () => {
  async function onTriggerHandler(){
    await notifee.displayNotification({
      id: "1234",
      title: `New notification`,
      body: "Greetings! How are you faring today?",
    });
  }


  return (
    <View style={styles.body}>
      <TouchableOpacity style={styles.button} onPress={onTriggerHandler} >
        <Text style={styles.btn_text}>Greet!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  body: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 200,
    backgroundColor: "hotpink",
    padding: 20,
    alignItems: "center",
    borderRadius: 20
  },
  btn_text: {
    fontSize: 20,
    color: "white"
  }
})