import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
export default function App() {
return (
<View style={styles.container}>
  <View style={styles.header}><Image
source={require('./assets/logo.jpeg')}
style={styles.logo}
resizeMode="contain"
/>
<View>
<Text style={styles.schoolName}>Student Card App </Text>
<Text style={styles.schoolName} >EMSI CENTRE</Text>
</View>

</View>
<View style={styles.info}>
<Text style={styles.label}>Nom : <Text style={styles.value}>TENSAOUI</Text></Text>
<Text style={styles.label}>Prénom : <Text style={styles.value}>ALI</Text></Text>
<Text style={styles.label}>Année universitaire : <Text style={styles.value}>2025 /
2026</Text></Text>
</View>
</View>


);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#f6f7fb',

},
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
marginTop: 0, // espace entre image et texte
marginLeft:10,

letterSpacing: 1,

},
info: {

gap: 6,
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
});