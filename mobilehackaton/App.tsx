/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import CabecalhoPublico from './componentes/cabecalho-publico/CabecalhoPublico';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './view/Login';
import Home from './view/ListaEscola';
import ListaEscola from './view/ListaEscola';
import AlunoInicio from './view/aluno/AlunoInicio';
import RegistroPresenca from './view/aluno/presenca/RegistroPresenca';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
        <NavigationContainer>
          <CabecalhoPublico></CabecalhoPublico>
          <Stack.Navigator >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }} // Oculta o cabeçalho
            />
            <Stack.Screen
              name="ListaEscola"
              component={ListaEscola}
              options={{ headerShown: false }} // Oculta o cabeçalho
            />
            <Stack.Screen
              name="AlunoInicio"
              component={AlunoInicio}
              options={{ headerShown: false }} // Oculta o cabeçalho
            />
            {/*Precisa depois passar isto para um layout separado */}
            <Stack.Screen
              name="RegistroPresenca"
              component={RegistroPresenca}
              options={{ headerShown: false }} // Oculta o cabeçalho
            />
          </Stack.Navigator>
        </NavigationContainer>

  );
}

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