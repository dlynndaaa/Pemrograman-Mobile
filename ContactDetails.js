import React from 'react';
import { View, Text, Image, StyleSheet, Linking, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ContactDetail({ route, navigation }) {
  const { contact } = route.params;

  // Fungsi untuk menavigasi ke URL LinkedIn
  const handleLinkedInPress = () => {
    Linking.openURL(`https://www.linkedin.com/in/${contact.linkedin}`);
  };

  // Fungsi untuk menavigasi ke halaman Instagram
  const handleInstagramPress = () => {
    Linking.openURL(`https://www.instagram.com/${contact.instagram}`);
  };

  // Fungsi untuk menavigasi ke aplikasi email
  const handleEmailPress = () => {
    Linking.openURL(`mailto:${contact.email}`);
  };

  // Fungsi untuk menelepon nomor telepon
  const handlePhonePress = () => {
    Linking.openURL(`tel:${contact.phone}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={contact.image} style={styles.img} />
        <Text style={styles.title}>{contact.name}</Text>
        <TouchableOpacity style={styles.phoneContainer} onPress={handlePhonePress}>
          <Text style={styles.phone}>{contact.phone}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Icon name="calendar" size={24} color="#3498db" style={styles.icon} />
          <Text style={[styles.detail, { textAlign: 'center' }]}>Birthdate: {contact.birthdate}</Text>
        </View>
        <View style={styles.detailRow}>
          <Icon name="map-marker" size={24} color="#3498db" style={styles.icon} />
          <Text style={[styles.detail, { textAlign: 'center' }]}>Address: {contact.address}</Text>
        </View>
        <View style={styles.iconRow}>
          <Icon name="envelope" size={24} color="#3498db" style={styles.icon} />
          <Text style={[styles.link, { textAlign: 'center' }]} onPress={handleEmailPress}>
            {contact.email}
          </Text>
        </View>
        <View style={styles.iconRow}>
          <Icon name="instagram" size={24} color="#E1306C" style={styles.icon} />
          <Text style={[styles.link, { textAlign: 'center' }]} onPress={handleInstagramPress}>
            @{contact.instagram}
          </Text>
        </View>
        <View style={styles.iconRow}>
          <Icon name="linkedin" size={24} color="#0077B5" style={styles.icon} />
          <Text style={[styles.link, { textAlign: 'center' }]} onPress={handleLinkedInPress}>
            {contact.linkedin}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Back"
          onPress={() => navigation.goBack()}
          color="#3498db"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    fontSize: 18,
    color: '#3498db',
    marginLeft: 5,
    textAlign: 'center',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  detailsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginLeft: 5,
    textAlign: 'center',
  },
});
