import { Alert } from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../styles.js";

const EraseItems = ({ setAllItems }) => {
  const handleErase = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to erase all list items this can NOT be reversed?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Erase",
        onPress: async () => {
            try {
              await AsyncStorage.removeItem('items');
              setAllItems([]);
            } catch (error) {
              console.error(error);
            }
          },
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  return <Button buttonStyle={styles.buttonerase} onPress={handleErase} title="Erase ALL Items" />;
};

export default EraseItems;
