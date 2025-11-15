import React from 'react';
import { Image, StyleSheet, Text, View, Linking, TouchableOpacity, Alert } from 'react-native';

// L'URL de votre "autre projet" (remplacez ceci par l'URL réelle)
const URL_AUTRE_PROJET = 'https://www.monsite-ou-projet2.com'; 

// Fonction asynchrone pour gérer l'ouverture du lien
const handleOpenURL = async () => {
  const supported = await Linking.canOpenURL("exp://192.168.11.182:8082");

  if (supported) {
    // Ouvre le lien dans le navigateur par défaut de l'appareil
    await Linking.openURL("exp://192.168.11.182:8082");
  } else {
    Alert.alert(`Erreur`, `Impossible d'ouvrir l'URL: ${"exp://192.168.11.182:8082"}`);
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/logo.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.schoolName}>Student Card App </Text>
          <Text style={styles.schoolName}>EMSI CENTRE</Text>
        </View>
      </View>
      
      {/* --- Section d'information existante --- */}
      <View style={styles.info}>
        <Text style={styles.label}>Nom : <Text style={styles.value}>TENSAOUI</Text></Text>
        <Text style={styles.label}>Prénom : <Text style={styles.value}>ALI</Text></Text>
        <Text style={styles.label}>Année universitaire : <Text style={styles.value}>2025 / 2026</Text></Text>
      </View>
      
      {/* --- NOUVEAU LIEN AJOUTÉ --- */}
      <TouchableOpacity 
        style={styles.linkButton} 
        onPress={handleOpenURL}
      >
        <Text style={styles.linkText}>Visiter l'Autre Projet 🔗</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
    padding: 20, // Ajout de padding pour l'esthétique
  },
  // ... Styles existants (header, logo, schoolName, info, label, value) ...
  
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',  
  },
  logo: {
    width: 150,
    height: 200,
  },
  schoolName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#067004d9',
    marginTop: 0,
    marginLeft: 10,
    letterSpacing: 1,
  },
  info: {
    gap: 6,
    marginTop: 20, // Ajout d'espace après le header
    marginBottom: 30, // Ajout d'espace avant le bouton
    alignSelf: 'flex-start', // Alignement à gauche pour les infos
    marginLeft: '10%',
  },
  label: {
    fontSize: 16,
    color: '#72806bff',
    fontWeight: '500',
  },
  value: {
    fontSize: 17,
    color: '#4b6ddaff',
    fontWeight: 'bold',
  },
  
  // --- NOUVEAUX STYLES POUR LE LIEN ---
  linkButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4b6ddaff', // Couleur de la valeur
    borderRadius: 5,
  },
  linkText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});