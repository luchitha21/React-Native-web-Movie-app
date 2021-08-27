import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/styles';

const Button = props => {
  return (
    <View style={styles.button}>
      <Text style={styles.block}> {props.name}</Text>
    </View>
  );
};

export default Button;
