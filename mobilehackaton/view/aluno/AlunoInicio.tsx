import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import RegistroPresenca from "./presenca/RegistroPresenca";
import { useLinkTo } from "@react-navigation/native";

export default function AlunoInicio() {

  const linkTo = useLinkTo();

  //-----------------------

  const [userType, setUserType] = useState<"user" | "admin">("user");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ----------------------


  
  //-------------

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio Aluno</Text>

      <TouchableOpacity style={styles.button} onPress={()=>{linkTo('/RegistroPresenca')}}>
        <Text style={styles.buttonText} >Check-in</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={()=>{linkTo('/Login')}}>
        <Text style={styles.buttonText} >Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#E9D8FD", // Purple-200
    justifyContent: "space-between",  // Para distribuir os itens ao longo da tela
  },
  cardCentralizados: {
    flex: 1, // Garante que o card ocupe o máximo de espaço disponível
    justifyContent: 'center', // Centraliza o card verticalmente dentro do seu contêiner
    alignItems: 'center', // Centraliza o card horizontalmente
    width: '100%', // Garantir que ocupe toda a largura disponível
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