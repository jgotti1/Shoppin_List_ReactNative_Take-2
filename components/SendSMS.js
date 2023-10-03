import React, {useState, useEffect} from 'react'
import { View, Alert } from "react-native"
import { Button } from "react-native-elements";
import styles from "../styles.js";
import * as SMS from 'expo-sms';



function SmsSend({ allItems }) {
  const [itemsSMS, setItemsSMS] = useState('')
  const [textNumber, setTextNumber] = useState()
  const [sendSMS, setSendSMS] = useState(false);

    useEffect(() => {
    if (itemsSMS !== '') {
      sendList(textNumber);
      setSendSMS(false);
    }
  }, [sendSMS]);

    const handleSend = () => {
    Alert.prompt(
      'Enter Phone Number',
      '\n Please enter a 10-digit numeric phone number and hit "ok" \n \nexample: 5551234567',
      (phoneNumber) => {
        if (/^\d{10}$/.test(phoneNumber)) {
          setTextNumber(phoneNumber)
          const numberedItems = allItems.map((item, index) => `${index + 1}. ${item.text}`);
          const textString =  `My Shopping List:\n-----------------\n${numberedItems.join('\n')}`
          setItemsSMS(textString);
          setSendSMS(true);
         
        } else {
          Alert.alert('Invalid Phone Number', 'Please enter a valid 9-digit numeric phone number.');
        }
      }
    );
  };
 
  
      const sendList = async (textNumber) => {
  
        try {
          // const { result } = await SMS.sendSMSAsync([textNumber], itemsSMS);
          console.log(itemsSMS)
          console.log(textNumber)
          // if (result === SMS.SentStatus.SENT) {
          //   console.log('SMS sent successfully');
          // } else {
          //   console.log('Failed to send SMS');
          // }
        } catch (error) {
         
          console.error('Error sending SMS:', error);
        }
      } 
      return <Button buttonStyle={styles.buttonSMS} onPress={handleSend} title="Text My List" />;
    };

  
  
export default SmsSend


 