import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Card = ({ heading, description, id }) => {
  return (
    <View style={[styles.card, { top: 100 * id }]}>
      <Text>{heading}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{ translateX: -150 }],
    width: 300,
    height: 120,
    borderColor: 'yellow',
    borderWidth: 2,
    backgroundColor: 'black',
  },
});

export default Card;
