


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
