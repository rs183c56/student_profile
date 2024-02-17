import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Swiper from 'react-native-swiper';
import SidebarMenu from './components/student_list'; 

const profiles = [
  {
    name: 'RICA JOY M. BENDIJO',
    education: 'University of Science and Technology of Southern Philippines (USTP)',
    address: 'Cagayan de Oro City',
    age: '21 years old',
    email: 'bendijo.rica0908@gmail.com',
    github: 'https://github.com/rs183c56',
    contactNumber: '09754273469',
    image: require('./ricx.jpg')
  },
  {
    name: 'HUMPHREY E. MANUEL',
    education: 'University of Science and Technology of Southern Philippines (USTP)',
    address: 'Cagayan de Oro City',
    age: '21 years old',
    email: 'manuel.humphrey@gmail.com',
    github: 'https://github.com/AiceIceCream',
    contactNumber: '09533962061',
    image: require('./stud1.jpg')
  },
  {
    name: 'KENCH RALFHAEL BEJEC',
    education: 'University of Science and Technology of Southern Philippines (USTP)',
    address: 'Cagayan de Oro City',
    age: '21 years old',
    email: 'kenchralfhael.bejec@gmail.com',
    github: 'https://github.com/kenj',
    contactNumber: '09258256466',
    image: require('./stud2.jpg')
  },
];

export default function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.header}>Student Profile</Text>
        </TouchableOpacity>
      </View>

      <Swiper style={styles.wrapper} loop={false}>
        {profiles.map((profile, index) => (
          <View key={index} style={styles.slide}>
            <View style={styles.profileContainer}>
              <Image
                source={profile.image}
                style={styles.photo}
              />
              <Text style={styles.name}>{profile.name}</Text>
              <Text style={styles.details}>BSIT-3R6</Text>
            </View>

            <TouchableOpacity onPress={toggleDetails} style={styles.button}>
              <Text style={styles.buttonText}>{showDetails ? 'Hide Details' : 'Show Details'}</Text>
            </TouchableOpacity>

            {showDetails && (
              <View>
                <Text style={styles.details}><Text style={{ fontWeight: 'bold' }}>Education: </Text>{profile.education}</Text>
                <Text style={styles.details}><Text style={{ fontWeight: 'bold' }}>Address: </Text>{profile.address}</Text>
                <Text style={styles.details}><Text style={{ fontWeight: 'bold' }}>Age: </Text>{profile.age}</Text>
                <Text style={styles.details}><Text style={{ fontWeight: 'bold' }}>Email: </Text>{profile.email}</Text>
                <Text style={styles.details}><Text style={{ fontWeight: 'bold' }}>Github: </Text>{profile.github}</Text>
                <Text style={styles.details}><Text style={{ fontWeight: 'bold' }}>Contact Number: </Text>{profile.contactNumber}</Text>
              </View>
            )}
          </View>
        ))}
      </Swiper>

      <Modal visible={showMenu} animationType="slide">
        <SidebarMenu onClose={toggleMenu} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dddddd",
    flex: 1
  },
  headerContainer: {
    marginBottom: 5,
    marginTop:40,
    marginLeft:10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -30
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    marginTop: -50,
    alignItems: 'center'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 17,
    marginBottom: 5,
    margin: 5,
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#808080',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
