import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

class ImageChangeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      images: [
        require('../assets/planet-earth.png'),
        require('../assets/start-up.png'),
        require('../assets/planets.png'),
      ],
    };
  }

  changeImage = () => {
    const { currentImageIndex, images } = this.state;
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    this.setState({ currentImageIndex: nextImageIndex });
  };

  render() {
    const { currentImageIndex, images } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.changeImage}>
          <Image source={images[currentImageIndex]} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

export default ImageChangeScreen;
