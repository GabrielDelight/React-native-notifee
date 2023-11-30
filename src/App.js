import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import notifee from '@notifee/react-native';

const App = () => {
  useEffect(() => {
    notifee.setBadgeCount(100).then(() => console.log('Badge count set!'));
  }, []);

  async function onTriggerHandler() {}

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
