import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { login } from "../repository/UsuarioRepository";
import { useLinkTo } from '@react-navigation/native';

export default function Login() {

  const linkTo = useLinkTo();

  // ----------------------
  //Formulário de login
  const [formLogin, setFormLogin] = useState({
    email: "professor@fiap.com",
    senha: "Fiap2024+",
  });
  
  //Mensagem de erro caso de algum problema no formulário
  const [error, setError] = useState("");

  // ----------------------

  async function handlerLogin(){
    //capturando os valores dos inputs
    const { email, senha } = formLogin;

    try {
      //realizando a chamada para o back-end
      let resposta = await login(email, senha);

      Alert.alert('Login realizado', `Bem-vindo: ${resposta?.data?.nome || 'Usuário'}`);
      
      linkTo('/Home');

    } catch (error : any) {
    
      //Adicionando a mensagem de erro na tela de login
      setError(`Ocorre um erro: ${error?.message}`);

    }

  }

   // Função para lidar com mudanças nos campos de formulário
   const handleInputChange = (name: string, value: string) => {
    setFormLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //-------------

  return (
    <View style={styles.container}>
        <View>

            {/* Titulo da tela atual para comunicao ao usuario */}
            <Text style={styles.title}>LOGIN</Text>

            {/* Mensagem de erro caso o login não de certo */}
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            {/* Email Input */}
            <View style={styles.inputGroup}>

              {/* Titulo do campo  */}
              <Text style={styles.label}>E-mail</Text>

              {/* Campo de texto do email para login */}
              <TextInput
                style={styles.input}
                placeholder="Ex.: seuemail@fiap.com"
                value={formLogin.email}
                onChangeText={(text) => handleInputChange("email", text)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                style={styles.input}
                value={formLogin.senha}
                onChangeText={(text) => handleInputChange("senha", text)}
                secureTextEntry
              />
            </View>

            {/* Login Button */}
            <TouchableOpacity style={styles.button} onPress={handlerLogin}>
              <Text style={styles.buttonText} >Entrar</Text>
            </TouchableOpacity>
          </View>

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