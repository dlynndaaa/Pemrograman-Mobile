import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Contact from './components/Kontak';
import ContactDetail from './components/ContactDetails';

const Stack = createStackNavigator();

const contacts = [
  {
    gambar: { uri: "https://media.licdn.com/dms/image/D5603AQGuvPYG0DgRDA/profile-displayphoto-shrink_400_400/0/1719197647167?e=1724889600&v=beta&t=9S08O8sX9WUegnfv477Mg7BWISQj5Rjr1cTHIKXG4ZM" },
    judul: "Delinda Mega Putri",
    telpon: "085524520937",
    email: "delinda@example.com",
    instagram: "@delindamegaputri",
    linkedin: "linkedin.com/in/delindamegaputri",
    address: "Jakarta, Indonesia",
    birthdate: "01-01-1990",
  },
  {
    gambar: require("./assets/naya.png"),
    judul: "Tanaya Salsabila A.",
    telpon: "085795024030",
    email: "tanaya@example.com",
    instagram: "@tanayasalsabila",
    linkedin: "linkedin.com/in/tanayasalsabila",
    address: "Bandung, Indonesia",
    birthdate: "02-02-1992",
  },
  // Add other contacts similarly
];

function HomeScreen() {
  return (
    <View>
      {contacts.map((contact, index) => (
        <Contact key={index} {...contact} />
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