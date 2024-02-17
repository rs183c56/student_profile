import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const studentNames = [
  'Abad, Greg Jan M.',
  'Agan, Nizel',
  'Alsonado, Brieanne Joyce',
  'Bacalso, Flient Gerard A.',
  'Bejec, Kench Ralfhael',
  'Bendijo, Rica Joy M.',
  'Bucol , Roxanne Joy K  ',
  'Cabarrubias, Nevin Harold D.',
  'Cadavos, Kyla G',
  'Castulo, Kirk Isiah B.',
  'Daganato, Patrick Eman U',
  'Escabusa, Gwyneth R ',
  'Famas, Danz Bjerfstin E. ',
  'Felicitas, Joshua D.  ',
  'Leyva, Alsonfred E.  ',
  'Manuel, Humphrey',
  'Yasay,Angelo'

  
];

const SidebarMenu = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeText}>X List of Students</Text>
      </TouchableOpacity>
      {studentNames.map((name, index) => (
        <Text key={index} style={styles.studentList}>{`${index + 1}. ${name}`}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9dddc',
    padding: 20,
    paddingTop: 40,
  },
  closeButton: {
    marginBottom: 20,
  },
  closeText: {
    fontSize: 18,
    color: 'blue',
    
  },
  studentList: {
    fontSize: 20,
    marginBottom: 15,
  },
});

export default SidebarMenu;
