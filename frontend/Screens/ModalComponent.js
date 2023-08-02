import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  ScrollView,
  Image, TouchableOpacity
} from "react-native";
import React, { useState } from "react";

const ModalComponent = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  
  const [backgroundImage, setBackgroundImage] = useState(require('../assets/programmer.png'));

  const selectImage = () => {
    
    setBackgroundImage(require('../assets/layers.png'));

  };

  const changeImage=()=>{
    setBackgroundImage(require('../assets/programmer.png'));
  }
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        onPress={() => {
          console.log("\n\t Button pressed");
          setModalVisible(true);
        }}
        color="skyblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="fade"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "black", padding: 60 }}>
          <Text
            style={{ color: "rgb(20, 245, 35)", fontSize: 18, fontWeight: 900 }}
          >
            Machine Learning Modal
          </Text>
          <Button
            title="Close"
            color="skyblue"
            onPress={() => setModalVisible(false)}
          />
          <ScrollView>
            <Text
              style={{
                color: "rgb(20, 245, 35)",
                fontSize: 14,
                fontWeight: 900,
              }}
            >
              Machine learning is a subfield of artificial intelligence (AI)
              that focuses on developing algorithms and models that enable
              computers to learn from and make predictions or decisions based on
              data. In other words, it's a way of teaching computers to improve
              their performance on a specific task over time by learning from
              examples rather than being explicitly programmed. The core idea
              behind machine learning is to build mathematical models that can
              automatically adjust their parameters based on input data, so they
              can make accurate predictions or decisions. This is achieved
              through various techniques and algorithms that allow the model to
              recognize patterns, relationships, and trends in the data. There
              are several types of machine learning: Supervised Learning: In
              this approach, the model is trained on a labeled dataset, where
              the input data is paired with the corresponding correct output.
              The goal is for the model to learn the mapping from inputs to
              outputs so that it can make accurate predictions on new, unseen
              data. Unsupervised Learning: Here, the model is given unlabeled
              data and is tasked with finding patterns or structures within the
              data. It's often used for tasks like clustering similar data
              points or reducing the dimensionality of the data. Semi-Supervised
              Learning: This is a combination of supervised and unsupervised
              learning. It involves training a model on a dataset with both
              labeled and unlabeled examples, which can help improve the model's
              performance. Reinforcement Learning: In this paradigm, an agent
              learns to perform actions in an environment to maximize a reward
              signal. The agent learns by interacting with the environment and
              receiving feedback on its actions. Machine learning has a wide
              range of applications, including: Image and speech recognition
              Natural language processing Autonomous vehicles Recommender
              systems Fraud detection Medical diagnosis Financial prediction
              Game playing The field of machine learning continues to advance
              rapidly, with researchers developing new algorithms and techniques
              to tackle increasingly complex and diverse tasks.
            </Text>
          </ScrollView>
        </View>
      </Modal>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"black" }}>
      <Image
        source={backgroundImage}
        style={{ width: 270, height: 270, position: 'absolute' }}
      />
      <TouchableOpacity onPress={selectImage} style={{ padding: 10, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 5,marginTop:300 }}>
        <Text>Change Background</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeImage} style={{ padding: 10, backgroundColor: 'skyblue', borderRadius: 5,marginTop:100 }}>
        <Text>Change Background</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({});
