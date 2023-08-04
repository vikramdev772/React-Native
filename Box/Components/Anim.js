import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

class Anim extends Component {
  constructor(props) {
    super(props);

    this.state = {
      earthRotation: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    Animated.loop(
      Animated.timing(this.state.earthRotation, {
        toValue: 1,
        duration: 6000, // Time for one complete rotation (6 seconds in this example)
        useNativeDriver: true,
      })
    ).start();
  }

  render() {
    const { earthRotation } = this.state;

    const earthStyle = {
      transform: [
        {
          rotate: earthRotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    };

    return (
      <View style={styles.container}>
        <View style={styles.sun} />
        <Animated.View style={[styles.earthOrbit, earthStyle]}>
          <View style={styles.earth} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sun: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderRadius: 50,
  },
  earthOrbit: {
    position: 'absolute',
    top: 100,
    left: 100,
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  earth: {
    width: 40,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 20,
  },
});

export default Anim;
