import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import notifee from '@notifee/react-native';

const App = () => {

  async function onTriggerHandler() {
    notifee.displayNotification({
      title: 'Penguin bird was uploaded.',
      body: "You've been successful in posting your Penguin bird picture online.",
      ios: {
        attachments: [
          {
            url: 'https://d3bg7r0nxumtp2.cloudfront.net/3d8ff55e27d71d6e47d6f4608eb4b4fa8f52fd22.jpg',
          },
     
        ],
      },
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
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    width: 200,
    backgroundColor: 'hotpink',
    padding: 20,
    alignItems: 'center',
    borderRadius: 20,
  },
  btn_text: {
    fontSize: 20,
    color: 'white',
  },
});
