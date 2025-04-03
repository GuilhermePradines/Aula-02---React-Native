import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Input, Button, Avatar } from "react-native-elements";

const Login = () => {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="large"
        icon={{ name: "user", type: "font-awesome" }}
        containerStyle={styles.avatar}/>
      <Input label="Email" placeholder="Digite seu email" />
      <Input label="Senha" placeholder="Digite sua senha" secureTextEntry />
      <Button title="Logar" buttonStyle={styles.button} />
      <Button title="Cadastre-se" buttonStyle={styles.button} />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>esqueceu a senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const Cadastro = () => {
  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        Cadastro
      </Text>

      <Input label="Nome" placeholder="Digite seu nome" />

      <Input label="Email"placeholder="Digite seu email"keyboardType="email-address"/>

      <Input label="Senha" placeholder="Digite sua senha" secureTextEntry />

      <Button title="Cadastrar" buttonStyle={styles.button} />
    </View>
  );
};

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        Esqueceu a senha
      </Text>
      <Input label="Email" placeholder="Digite seu email" keyboardType="email-address"/>
      <Button title="Enviar" buttonStyle={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    
  },
  avatar: {
    marginBottom: 20,
    backgroundColor: "#2ECC71",
  },
  button: {
    width: 200,
    marginVertical: 10,
    backgroundColor: "#2ECC71",
  },
  forgotPassword: {
    marginTop: 10,
    color: "black",
    fontWeight: "bold",
  },
});

export default Login;
