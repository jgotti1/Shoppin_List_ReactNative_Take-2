import React, {useState, useEffect} from 'react'
import { View } from "react-native"
import { Button } from "react-native-elements";
import styles from "../styles.js";
import * as SMS from 'expo-sms';



function SmsSend({ allItems }) {
  const [itemsSMS, setItemsSMS] = useState('')

    useEffect(() => {
    if (itemsSMS !== '') {
      sendList();
    }
  }, [itemsSMS]);

  const handleSend =  () => {
    const numberedItems = allItems.map((item, index) => `${index + 1}. ${item.text}`);
    const textString = numberedItems.join('\n');
    setItemsSMS(textString) 
  }
 
  
      const sendList = async () => {
  
        try {
          const { result } = await SMS.sendSMSAsync(['9739513866'], itemsSMS);
          console.log(itemsSMS)
          if (result === SMS.SentStatus.SENT) {
            console.log('SMS sent successfully');
          } else {
            console.log('Failed to send SMS');
          }
        } catch (error) {
         
          console.error('Error sending SMS:', error);
        }
      } 
      return <Button buttonStyle={styles.buttonSMS} onPress={handleSend} title="Text My List" />;
    };

  
  
export default SmsSend


 