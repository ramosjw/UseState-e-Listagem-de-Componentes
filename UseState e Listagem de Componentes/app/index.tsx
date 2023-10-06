import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require('../assets/dente.png')}></Image>
    <Text style={styles.text}>Bem-vindo a Clinica de Odontologia</Text>

    <Text style={styles.titulo1}>Aqui você pode agendar suas consultas e ver a rotina de pacientes!</Text>

    <Link href="/Agendamento" style={styles.buttonText}>Agende suas consultas</Link>
    <Link href="/Lista" style={styles.buttonText}>Lista de Rotina</Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6FAFE',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  buttonText: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5190F5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    shadowColor: '#5190F5',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  text:{
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },

  titulo1:{
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
  },

  image:{
    width: 400,
    height: 400,
  }
});
