import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5
  },
 
  // version and copyright styles 
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:12,
  },

  versionText: {
    fontSize: 10,
   color: '#323232',
  },

  copyright: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  linkText: {
    fontSize: 9,
    color: '#323232',
    marginLeft: 5,
  },

// End section ***************

  inputContainer: {
    backgroundColor:"#c0cfdb",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 1,
    marginTop: 7,
    borderWidth: 1,
    borderColor: "#f3f3f3",
    borderRadius: 20,
    padding: 10,
    maxHeight: 100,
   
  },
  inputModal: {
    flex: 1,
    // flexDirection: "col",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6bb1da",
    margin: 11,
    maxHeight: 200,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 12,
   

  
  },
  textInput: {
    height: 60,
    margin: 15,
    backgroundColor: "none",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    padding: 5,
    width: "90%",
    backgroundColor: "#ffffff",
   
  },
  itemsContainer: {
    marginTop: 3,
   flex: 5,
  },
  item: {
    margin: 3,
    borderRadius: 9,
    backgroundColor: "#437394",
    borderWidth: .8,
    borderColor: "white",
    opacity: .9,
    shadowOffset: { width: 0, height: 6 },
      shadowColor: "black",
      shadowRadius: 5,
      shadowOpacity: 0.2,
  },
  
  itemText: {
    padding: 12,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  itemTextChecked: {
    color: "#a8a5a5",
    fontWeight: "normal",
    padding: 12,
    fontSize:18,
    textDecorationLine: "line-through",
    textDecorationColor: "black",

  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
},

  deleteContainer: {
    flex: 1,
    alignItems: "flex-end",
  },

  deleteItem: {
    fontWeight: "bold",
    color: "red",
    fontSize: 20,
    marginRight: 18,
  },



  button: {
    borderRadius: 10,
    width: 120,
    backgroundColor: "#6e6c6c"
  },
  button1a: {
    borderRadius: 13,
    marginRight: 13,
    borderWidth: 1,
    borderColor: "white",
  },
  button1b: {
    borderRadius: 13,
    marginLeft: 15,
    backgroundColor: "#5e5c5c",
    borderWidth: 1,
    borderColor: "white",
  },
  buttonerase: {
    backgroundColor:"#f03a3a",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#fafafa",
  },
    buttonSMS: {
    borderRadius: 13,
    borderWidth: 1,
      borderColor: "#fafafa",
    marginBottom: 5,
   
  },
  button2: {
    borderRadius: 10,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  pressItem: {
    opacity: .9,
    backgroundColor: "red"

  },
   modal: {
    flex: 1,
     resizeMode: 'cover',
     justifyContent: "center",
    
  },
   
  buttonModalContainer: {
    flex: 1,
    flexDirection: "row",
  
    

   }
});

export default styles;
