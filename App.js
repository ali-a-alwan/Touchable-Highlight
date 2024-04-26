import React, { useRef } from 'react';
import { Animated, View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const AnimatedTouchableHighlightExample = () => {
  const bounceAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(bounceAnim, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(bounceAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#DDDDDD"
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        <Animated.View
          style={[styles.buttonWrapper, { transform: [{ scale: bounceAnim }] }]}>
          <Text style={styles.text}>Press Me</Text>
        </Animated.View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonWrapper: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default AnimatedTouchableHighlightExample;
