import { StyleSheet, Text, View, Modal, Button } from "react-native";
import React, { useState } from "react";

const Modal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        onPress={() => {
          console.log("\n\t Button pressed");
          setModalVisible(true);
        }}
        color="midnightblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="fade"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal</Text>
          <Button title="Close" color="midnightblue" />
        </View>
      </Modal>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({});
