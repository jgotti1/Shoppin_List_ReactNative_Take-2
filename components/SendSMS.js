import React, {useState} from 'react'
import { View } from "react-native"
import { Button } from "react-native-elements";
import styles from "../styles.js";
// import * as SMS from 'expo-sms';



function SmsSend({ allItems }) {
  const [itemsSMS, setItemsSMS] = useState('')

  const handleSend = async () => {
    const numberedItems = allItems.map((item, index) => `${index + 1}. ${item.text}`);
    const textString = numberedItems.join('\n');
    setItemsSMS(textString)




    
  }
  console.log(itemsSMS)
  
  return <Button buttonStyle={styles.buttonSMS} onPress={handleSend} title="Text My List" />;
  
}

export default SmsSend
