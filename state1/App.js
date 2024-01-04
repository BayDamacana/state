import React, { useState } from "react";
import { StyleSheet, View, Button, Text, SafeAreaView } from "react-native";

const App = () => {
  const [name, setName] = useState("Yasin");
  const [age, setAge] = useState(21);
  const [isVisible, setIsVisible] = useState(true);
  
  return (
  <SafeAreaView style={styles.container}>
    <Button
      title={isVisible ? "Gizle" : "Göster"}
      onPress={() => setIsVisible(!isVisible)}
    />

    {isVisible && (
      <>
        <Text>İsim: {name}</Text>
        <Text>Yaş: {age}</Text>
        <Button title="İsmi Değiştir" onPress={() => setName("Yasin")} />
        <Button title="Yaşı Değiştir" onPress={() => setAge("21")} />
      </>
    )}
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;