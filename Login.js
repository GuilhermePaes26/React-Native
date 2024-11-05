import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import TextTitle from './components/Title';
import Decorator from './components/decorator';
import visibleOff from './assets/visibility_off_24dp_434343_FILL0_wght400_GRAD0_opsz24.png'; 
import visibleOn from './assets/visibility_24dp_434343_FILL0_wght400_GRAD0_opsz24.png'; 

export default function Login({ navigation }) {

  // USUARIO: paesguigo@gmail.com
  // SENHA: SEnha1234*
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const validaLogin = async (email, password) => { 
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/;

    if (regexEmail.test(email) && regexSenha.test(password)) {
      navigation.navigate('Home'); 
    } else {
      Alert.alert('Dados inválidos', 'Por favor, verifique seu email e senha.');
      setEmail('')
      setSenha('')
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Decorator />
      <TextTitle titleContent="Login" />
      <View style={styles.form}>
        <Text style={styles.bold}>Email</Text>
        <TextInput
          style={[styles.input, { borderColor: focusedIndex === 0 ? '#FFBB12' : '#D2CEC5' }]}
          value={email}
          onChangeText={setEmail} 
          onFocus={() => setFocusedIndex(0)}
          onBlur={() => setFocusedIndex(null)}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />

        <View style={styles.inputWithIcon}>
          <Text style={styles.bold}>Senha</Text>
          <TextInput
            style={[styles.input, { borderColor: focusedIndex === 1 ? '#FFBB12' : '#D2CEC5' }]}
            value={senha}
            onChangeText={setSenha}
            onFocus={() => setFocusedIndex(1)}
            onBlur={() => setFocusedIndex(null)}
            secureTextEntry={!isPasswordVisible}
            placeholder="Digite sua senha"
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Image
              source={isPasswordVisible ? visibleOn : visibleOff}
              style={styles.icon2}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => validaLogin(email, senha)}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: "100%",
    height: "100%",
    backgroundColor: '#F9F8F6',
  },
  form: {
    width: '90%',
    height: "40%",
    backgroundColor: "#FFFFFF",
    padding: 12,
    shadowColor: '#464247',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 48,
    marginBottom: 10,
    borderWidth: 2,
    paddingHorizontal: 10,
    backgroundColor: "#F9F8F6",
  },
  button: {
    backgroundColor: '#FFBB12',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#764701',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
    color: '#FFBB12',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  inputWithIcon: {
    position: 'relative',
    marginBottom: '3%',
  },
  icon2: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -45 }],
    width: 24,
    height: 24,
  },
});
