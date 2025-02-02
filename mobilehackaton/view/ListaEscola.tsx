import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CardEscola from "../componentes/card-escola/CardEscola";
import { listarEscola } from "../repository/EscolaRepository";

export default function ListaEscola() {
  const [escolas, setEscolas] = useState([]); // Estado para armazenar as escolas
  const [loading, setLoading] = useState(true); // Estado para indicar se está carregando

  // Função para chamar listarEscola e atualizar o estado
  const fetchEscolas = async () => {
    try {
      const response = await listarEscola(); // Chama a função que retorna as escolas
      setEscolas(response); // Atualiza o estado com as escolas
    } catch (error) {
      console.error("Erro ao listar escolas:", error); // Handle erro
    } finally {
      setLoading(false); // Define loading como false após a requisição
    }
  };

  useEffect(() => {
    fetchEscolas(); // Chama a função quando o componente for montado
  }, []);

  // Caso as escolas ainda estejam sendo carregadas
  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carregando escolas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Escolas com matricula</Text>
      <ScrollView style={styles.cardCentralizados}>
        {escolas.map((escola) => (
          <CardEscola key={escola.id} {...escola} />
        ))}
      </ScrollView>
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
    //justifyContent: 'center', // Centraliza o card verticalmente dentro do seu contêiner
    //alignItems: 'center', // Centraliza o card horizontalmente
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