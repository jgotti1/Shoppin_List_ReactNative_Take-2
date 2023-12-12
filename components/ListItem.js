import {useState} from "react"
import { View, Text, Pressable} from "react-native";
import styles from "../styles";
import { Checkbox } from "native-base";

function ListItem({ handleDeleteItem, data, setAllItems, allItems, saveItems}) {

 const [isChecked, setIsChecked] = useState(data.isChecked);

//   const handleIsChecked = () => {
//   setIsChecked(!isChecked)
// }
 
  // is check work to local storage

const handleIsChecked = () => {
    setAllItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.key === data.key ? { ...item, isChecked: !item.isChecked } : item
      );
      saveItems(updatedItems);
      setIsChecked((prevChecked) => !prevChecked); // Toggle the isChecked state

      return updatedItems;
    });
  };



  
  
  return (
   
 
    <View style={styles.item}>
      {/* <Pressable style={({ pressed }) => pressed && styles.pressItem} onPress={handleDeleteItem.bind(this, data.key)}> */}
        <View style={styles.itemRow}>
        <Checkbox size="md" accessibilityLabel="checked off list" isChecked={isChecked} onChange={handleIsChecked}>
          <Text style={!isChecked ? styles.itemText : styles.itemTextChecked}>{data.text}</Text>
        </Checkbox>
          <View style={styles.deleteContainer}>
          <Pressable onPress={handleDeleteItem.bind(this, data.key)}>
            <View style={styles.deleteTextContainer}>
            <Text style={styles.deleteItem}>x</Text>
            </View>
          </Pressable>
          </View>
        </View> 
      {/* </Pressable> */}
    </View>

   
    
  );
}

export default ListItem;
