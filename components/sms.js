


//  useEffect(() => {
//     const sendSMS = async () => {
//       const isAvailable = await SMS.isAvailableAsync();
//       if (isAvailable) {
//         console.log("SMS is available");
//         try {
//           const { result } = await SMS.sendSMSAsync(['9739513866'], 'Hello');
//           if (result === SMS.SentStatus.SENT) {
//             console.log('SMS sent successfully');
//           } else {
//             console.log('Failed to send SMS');
//           }
//         } catch (error) {
//           console.error('Error sending SMS:', error);
//         }
//       } else {
//         console.log("SMS is not available");
//       }
//     };

//     sendSMS(); // Call the sendSMS function when the component mounts
//   }, []);


import React, { useState, useEffect } from 'react';
import { Button, Alert } from 'react-native';
import * as SMS from 'expo-sms';

const SmsSend = ({ allItems }) => {
  const [itemsSMS, setItemsSMS] = useState('');
  

  useEffect(() => {
    if (itemsSMS !== '') {
      sendList();
    }
  }, [itemsSMS]);

  const handleSend = () => {
    Alert.prompt(
      'Enter Phone Number',
      'Please enter a 9-digit numeric phone number that will be used to send your shopping list to:',
      (phoneNumber) => {
        if (/^\d{9}$/.test(phoneNumber)) {
          const numberedItems = allItems.map((item, index) => `${index + 1}. ${item.text}`);
          const textString =  `My Shopping List:\n${numberedItems.join('\n')}`
          setItemsSMS(textString);
          sendList(phoneNumber);
        } else {
          Alert.alert('Invalid Phone Number', 'Please enter a valid 9-digit numeric phone number.');
        }
      }
    );
  };

  const sendList = async (phoneNumber) => {
    try {
      const { result } = await SMS.sendSMSAsync([phoneNumber], itemsSMS);
      console.log(itemsSMS);
      if (result === SMS.SentStatus.SENT) {
        console.log('SMS sent successfully');
      } else {
        console.log('Failed to send SMS');
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  return (
    <Button buttonStyle={styles.buttonSMS} onPress={handleSend} title="Text My List" />
  );
};

export default SmsSend;