import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([
    { name: 'Daniel de Maria Prio', date: '2023-10-09', time: '11:15', price: 'R$100' },
    { name: 'João Carlos da Silva', date: '2023-10-10', time: '16:00', price: 'R$200' },
    { name: 'Ana Maria Pereira', date: '2023-10-11', time: '09:30', price: 'R$120' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pacientes Agendados</Text>
      {data.map(item => (
        <View key={item.name} style={styles.itemList}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text>Data da Consulta: {item.date}</Text>
          <Text>Horário da Consulta: {item.time}</Text>
          <Text>Valor: {item.price}</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Link href="/" style={styles.buttonText}>
        Voltar para a Home
      </Link>
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
  itemList: {
    backgroundColor: "#ffe",
    borderRadius: 5,
    width: '60%',
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  editButton: {
    backgroundColor: '#5190F5',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
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
});
