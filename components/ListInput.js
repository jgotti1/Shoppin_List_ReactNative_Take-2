import { View, TextInput, Modal, ImageBackground } from "react-native";
import { Button } from "react-native-elements";
import styles from "../styles.js";

function ListInput({ itemInputHandler, submitItem, item, modalVisible, startAddItem }) {

  return (
    
    <Modal visible={modalVisible} animationType="slideInUp" >
      <ImageBackground
        source={require('../assets/shopping.jpg')}
        style={styles.modal}>
        
      <View style={styles.inputModal}>
      <TextInput style={styles.heading}>Add Your Items</TextInput>
          <TextInput style={styles.textInput} placeholder="Your Items!" value={item} onChangeText={itemInputHandler} />
          <View style={styles.buttonModalContainer}>
            <Button buttonStyle={styles.button1a} onPress={submitItem} title="Add Item" />
            <Button buttonStyle={styles.button1b} onPress={startAddItem} title="Cancel" />
          </View>
      </View>
        </ImageBackground>
    </Modal>
    
  );
}

export default ListInput;
