/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CabecalhoPublico from './componentes/cabecalho-publico/CabecalhoPublico';


export default function App() {

  const [userType, setUserType] = useState<"user" | "admin">("user");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleLogin = async () => {
    console.log({ userType, email, password });

    try {
      //await login(email, password);
      //const teste = AsyncStorage.getItem("token");

      //console.log('Resposta de Login: '+teste);

      //await AsyncStorage.setItem('user', JSON.stringify(await getUserInfo()));

      //let userData = await AsyncStorage.getItem('user');

      console.log('--------------------------------------------------');
      console.log('----------');
      console.log('teste do local');
      //console.log(userData);
      console.log('----------');

      navigation.navigate('Second')
      //router.push('/logado/Aulas');

    } catch (error) {
      if (error instanceof Error) {
        console.log('----------');
        console.log('-->Erro<--');
        console.log(error.message)
        console.log('----------');

        setError(error.message);
      } else {
        console.log('----------');
        console.log('-->Erro<--');
        console.log(error)
        console.log('----------');
        setError("An unknown error occurred");
      }
    }


  };



  return (
    <View style={styles.base}>
        <CabecalhoPublico></CabecalhoPublico>
        <View style={styles.container}>
              <View>
                  <Text style={styles.title}>LOGIN</Text>

                  {error ? <Text style={styles.errorText}>{error}</Text> : null}

                  {/* Email Input */}
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Login</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="your@email.com"
                      value={email}
                      onChangeText={(text) => setEmail(text)}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* Password Input */}
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="********"
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                      secureTextEntry
                    />
                  </View>

                  {/* Login Button */}
                  <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                  </TouchableOpacity>
                </View>
          </View>
        </View>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o container ocupar toda a tela
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    backgroundColor: '#f5f5f5', // Cor de fundo
  },
  box: {
    padding: 20,
    backgroundColor: '#4caf50', // Verde
    borderRadius: 10, // Bordas arredondadas
  },
  text: {
    fontSize: 20,
    color: '#fff', // Texto branco
  },
});
*/

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#E9D8FD", // Purple-200
    justifyContent: "space-between",  // Para distribuir os itens ao longo da tela
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#6B46C1", // Purple-800
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#6B46C1", // Purple-800
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    backgroundColor: "#FAF5FF", // Purple-100
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D6BCFA", // Purple-300
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#4C51BF", // Purple-600
  },
  button: {
    backgroundColor: "#6B46C1", // Purple-800
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20, // Adiciona um pouco de espaço entre o botão e o conteúdo abaixo
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  radioOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#FAF5FF", // Purple-100
    borderWidth: 1,
    borderColor: "#D6BCFA", // Purple-300
  },
  radioSelected: {
    backgroundColor: "#6B46C1", // Purple-800
    borderColor: "#4C51BF", // Purple-600
  },
  radioText: {
    color: "#6B46C1", // Purple-800
    fontWeight: "bold",
  }
});
