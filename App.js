import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from './components/Kontak';
import ContactDetail from './components/ContactDetails';

const Stack = createStackNavigator();

const contacts = [
  {
    image: require("./assets/delin.png"),
    name: "Delinda Mega Putri",
    phone: "+6285524520937",
    birthdate: "15-01-2004",
    address: "Sukabumi, Indonesia",
    email: "delindamegaputri123@gmail.com",
    instagram: "dlynndaaa_",
    linkedin: "dlnmgp",
  },
  {
    image: require("./assets/naya.png"),
    name: "Tanaya Salsabila A.",
    phone: "+6285795024030",
    birthdate: "16-01-2004",
    address: "Sukabumi, Indonesia",
    email: "tanayasalsabila12@gmail.com",
    instagram: "tanayaslsbl",
    linkedin: "tanayasalsabila",
  },
  {
    image: require("./assets/eneng.png"),
    name: "Eneng Rahayu",
    phone: "+6285559186829",
    birthdate: "02-02-2005",
    address: "Sukabumi, Indonesia",
    email: "rahayueneng6@gmail.com",
    instagram: "rahynnn_",
    linkedin: "enengrahayu",
  },
  {
    image: require("./assets/rani.png"),
    name: "Rani Febriani",
    phone: "+6285846664256",
    birthdate: "27-02-2004",
    address: "Sukabumi, Indonesia",
    email: "ranifebriani2724@gmail.com",
    instagram: "raniifbrrnii",
    linkedin: "rani-febriani-2ab7a0301",
  },
  {
    image: require("./assets/yasa.jpg"),
    name: "Ilyasa Nur",
    phone: "+6287785597468",
    birthdate: "31-05-2004",
    address: "Sukabumi, Indonesia",
    email: "ilyazanurz@gmail.com",
    instagram: "yasakentang",
    linkedin: "ilyasanur",
  },
  {
    image: require("./assets/ghani.jpg"),
    name: "Ghani Edytia O.",
    phone: "+6281211356469",
    birthdate: "28-10-2004",
    address: "Sukabumi, Indonesia",
    email: "oktavianghani@gmail.com",
    instagram: "varneiaz",
    linkedin: "ghaniedytia",
  },
  {
    image: require("./assets/gerie.jpg"),
    name: "Gerie Panca Sukma",
    phone: "+6285772478809",
    birthdate: "26-04-2004",
    address: "Sukabumi, Indonesia",
    email: "geriepancasukma@gmail.com",
    instagram: "sukma_gerie",
    linkedin: "gerie-sukma-897626281",
  },
  {
    image: require("./assets/arya.jpg"),
    name: "M. Arya Krismawan",
    phone: "+6282249398828",
    birthdate: "15-09-2002",
    address: "Sukabumi, Indonesia",
    email: "krisarya8@gmail.com",
    instagram: "_aryakrismawan",
    linkedin: "aryakrismawan",
  }
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Contacts</Text>
      </View>
      {contacts.map((contact, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate('ContactDetail', { contact })}>
          <Contact {...contact} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ContactDetail" component={ContactDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    marginBottom: 10,
  },
  headerText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});