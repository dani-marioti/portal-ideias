import { StyleSheet } from "react-native";

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    padding: 6,
    backgroundColor: "#40e0d0",
    alignSelf: "center",
    borderRadius: 5,
    width: 100,
    height: 30,
    position: 'absolute',
    left: 300
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    color: "#FFFFFF"
  },
  button2: {
    padding: 6,
    backgroundColor: "#40e0d0",
    alignSelf: "center",
    borderRadius: 5,
    width: 100,
    height: 30,
    position: 'absolute',
    left: 300
  }

});
export { homeStyle };