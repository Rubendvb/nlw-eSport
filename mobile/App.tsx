import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World! React Native</Text>

      <Button title="Send 1" />
      <Button title="Send 2" />
      <Button title="Send 3" />
      <Button title="Hello world!" />
      <StatusBar style="auto" backgroundColor="#FFFF" />
    </View>
  );
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.button}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 24,
  },

  button: {
    color: "#fff",
    fontSize: 24,
    backgroundColor: "blue",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
});
