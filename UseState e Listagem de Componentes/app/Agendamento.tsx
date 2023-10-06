import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import { useState } from 'react';

export default function App() {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ cpf, setCpf ] = useState('')
  const [ data, setData ] = useState('')
  const [ endereco, setEndereco ] = useState('')
  const [ valor, setValor ] = useState('')

  function handleUserAdd(){
      console.log(
          "Nome Completo: " + name + "\nEmail Completo: " + email +
          "\nCPF: " + cpf + "\nData de Nascimento: " + data +
          "\nEndereço: " + endereco + "\nValor da consulta: " + valor
      )

      Alert.alert(
        "Nome Completo: " + name + "\nEmail Completo: " + email +
        "\nCPF: " + cpf + "\nData de Nascimento: " + data +
        "\nEndereço: " + endereco + "\nValor da consulta: " + valor
      )
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Preencha os Dados</Text>

        <TextInput 
            style={styles.input}
            placeholder="Nome Completo"

            value={ name }
            onChangeText={ setName }
        />

        <TextInput 
            style={styles.input}
            placeholder="CPF"

            value={ cpf }
            onChangeText={ setCpf }
        />
                <TextInput 
            style={styles.input}
            placeholder="Data de Nascimento"

            value={ data }
            onChangeText={ setData }
        />
                <TextInput 
            style={styles.input}
            placeholder="Endereço"

            value={ endereco }
            onChangeText={ setEndereco }
        />
                <TextInput 
            style={styles.input}
            placeholder="Valor da Consulta"

            value={ valor }
            onChangeText={ setValor }
        />

        <TouchableOpacity style={styles.btn} onPress={ handleUserAdd }>
            <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>
        
 <Link href="/Lista" style={styles.buttonText}>Vá para a lista de pacientes agendados</Link>

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
  title:{
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold'
  },
  btn:{
    backgroundColor: '#5190F5',
    fontSize: 14,
    width: '60%',
    borderRadius: 6,
    margin: 10,
    marginBottom: 20,
    padding: 15,
    alignItems: 'center'
  },
  btnText:{
      color: '#fff',
      fontFamily: 'Arial',
      fontWeight: '600'
  },
  input: {
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 6,
    fontWeight: '400',
    width: '60%',
    margin: 10,
    padding: 10
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

  titulo1:{
    fontSize: 14,
    textAlign: 'center',
    color: '#563126',
  },

  text:{
    fontSize: 32,
    fontWeight: 'bold',
    color: '#563126',
  },

  image:{
    width: 400,
    height: 400,
  }
});
