import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Contact(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate('ContactDetail', { contact: props })}
    >
      <Image source={props.image} style={styles.img} />
      <View style={styles.teks}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.telp}>{props.phone}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
  },
  teks: { flex: 1 },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  telp: {
    fontSize: 14,
    color: '#3498db',
  },
});
