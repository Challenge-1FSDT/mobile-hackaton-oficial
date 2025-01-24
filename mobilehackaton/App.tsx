/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CabecalhoPublico from './componentes/cabecalho-publico/CabecalhoPublico';


export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <CabecalhoPublico></CabecalhoPublico>
      <View style={styles.box}>
        <Text style={styles.text}>Bem-vindo ao React Native!</Text>
      </View>
    </SafeAreaView>
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