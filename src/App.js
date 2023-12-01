import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import notifee from '@notifee/react-native';

const App = () => {

  async function setCategories() {
    await notifee.setNotificationCategories([
      {
        id: 'action',
        actions: [
          {
            id: 'accept',
            title: 'Accept user',
            input: true,
          },
          {
            id: 'reject',
            title: 'Reject user',
            destructive: true
          },
        ],
      },
    ]);
  }
  setCategories()
  

  async function onTriggerHandler() {
    notifee.displayNotification({
      title: 'New member request',
      body: "Hello Administrator, a new member is interested in participating in the chat discussion.",
      ios: {
        categoryId: 'action',
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
