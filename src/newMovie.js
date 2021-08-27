import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Link} from 'react-router-dom';

const NewMovie = () => {
  let title = localStorage.getItem('Title');
  let img = localStorage.getItem('image');

  return (
    <View style={styles.box}>
      <Image style={styles.image} source={{uri: img}} />
      <Text style={styles.letters}>{title}</Text>

      <View style={styles.button}>
        <Link to={`/addedMovie`} style={{textDecoration: 'none'}}>
          <Text style={styles.block}> Details</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    fontWeight: 'bold',
  },

  box: {
    width: 200,
    backgroundColor: 'gold',
    borderRadius: 10,
    margin: 5,
    padding: 4,
  },

  letters: {
    fontSize: 17,
    fontWeight: 'bold',
    textShadowColor: 'blue',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3da8ff',
    textAlign: 'center',
    borderRadius: 5,
    position: 'relative',
    margin: 5,
  },
  image: {
    height: 150,
    borderRadius: 10,
    margin: 5,
    position: 'relative',
  },
});

export default NewMovie;
