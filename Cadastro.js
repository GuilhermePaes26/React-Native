import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';
import TextTitle from './components/Title';
import Decorator from './components/decorator';
import iconSeta from './assets/arrow_drop_down_24dp_666666_FILL0_wght400_GRAD0_opsz24.png'; 
import visibleOff from './assets/visibility_off_24dp_434343_FILL0_wght400_GRAD0_opsz24.png'; 
import visibleOn from './assets/visibility_24dp_434343_FILL0_wght400_GRAD0_opsz24.png'; 

// USUARIO: paesguigo@gmail.com
// SENHA: SEnha1234*

export default function Cadastro({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [nome, setNome] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [senha, setSenha] = useState(''); 
  const [numero, setNumero] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 

  const validaLogin = async (email, password) => { 
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/;

    if (regexEmail.test(email) && regexSenha.test(password)) {
      navigation.navigate('Home'); 
    } else {
      Alert.alert('Dados inválidos', 'Por favor, verifique seu email e senha.');
    }
  };

  const buscarDadosCep = async (cepAtualizado) => { 
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepAtualizado}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setRua(data.logradouro);
        setCidade(data.localidade);
      } else {
        alert('CEP não encontrado');
        setRua('');
        setCidade('');
      }
    } catch (error) {
      alert('Erro ao buscar dados do CEP');
    }
  };

  const limparCampos = () => {
    setNome('');
    setEmail('');
    setSenha('');
    setCep('');
    setRua('');
    setCidade('');
    setNumero('');
    setIsChecked(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Decorator />
      <TextTitle titleContent="Inscreva-se" />
      <View style={styles.form}>
        <Text style={styles.bold}>Nome</Text>
        <TextInput 
          style={[styles.input, { borderColor: focusedIndex === 0 ? '#FFBB12' : '#D2CEC5' }]} 
          onFocus={() => setFocusedIndex(0)}
          onBlur={() => setFocusedIndex(null)}
          value={nome}
          onChangeText={setNome} 
        />
        <Text style={styles.bold}>Email</Text>
        <TextInput 
          style={[styles.input, { borderColor: focusedIndex === 1 ? '#FFBB12' : '#D2CEC5' }]} 
          onFocus={() => setFocusedIndex(1)}
          onBlur={() => setFocusedIndex(null)}
          value={email}
          onChangeText={setEmail} 
        />
        <Text style={styles.bold}>Senha</Text>
        <View style={styles.inputWithIcon}>
          <TextInput 
            style={[styles.input, { borderColor: focusedIndex === 2 ? '#FFBB12' : '#D2CEC5' }]} 
            onFocus={() => setFocusedIndex(2)}
            onBlur={() => setFocusedIndex(null)}
            secureTextEntry={!isPasswordVisible} 
            value={senha}
            onChangeText={setSenha} 
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Image 
              source={isPasswordVisible ? visibleOn : visibleOff} 
              style={styles.icon2} 
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <Text style={styles.bold}>CEP</Text>
            <TextInput 
              style={[styles.inputSmall, { borderColor: focusedIndex === 3 ? '#FFBB12' : '#D2CEC5' }]} 
              onFocus={() => setFocusedIndex(3)}
              onBlur={() => setFocusedIndex(null)}
              value={cep}
              onChangeText={(text) => {
                setCep(text);
                if (text.length === 8) {
                  buscarDadosCep(text);
                } 
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.bold}>Número</Text>
            <TextInput 
              style={[styles.inputSmall, { borderColor: focusedIndex === 4 ? '#FFBB12' : '#D2CEC5' }]} 
              onFocus={() => setFocusedIndex(4)}
              onBlur={() => setFocusedIndex(null)}
              value={numero}
              onChangeText={setNumero} 
            />
          </View>
        </View>
        <Text style={styles.bold}>Rua</Text>
        <TextInput 
          style={[styles.input, { borderColor: focusedIndex === 5 ? '#FFBB12' : '#D2CEC5' }]} 
          onFocus={() => setFocusedIndex(5)}
          onBlur={() => setFocusedIndex(null)}
          value={rua}
        />
        <Text style={styles.bold}>Cidade</Text>
        <View style={styles.inputWithIcon}>
          <TextInput 
            style={[styles.input, { borderColor: focusedIndex === 6 ? '#FFBB12' : '#D2CEC5' }]} 
            onFocus={() => setFocusedIndex(6)}
            onBlur={() => setFocusedIndex(null)}
            value={cidade}
            onChangeText={setCidade}
          />
          <Image source={iconSeta} style={styles.icon} />
        </View>
        <TouchableOpacity 
          style={styles.checkboxContainer} 
          onPress={() => setIsChecked(!isChecked)} 
        >
          <View style={[styles.checkbox, isChecked && styles.checkboxChecked]} />
          <Text style={styles.checkboxLabel}>Concordo com os Termos e Condições</Text>
        </TouchableOpacity>
        <View style={styles.btnGroup}>
         <TouchableOpacity 
          style={styles.button} 
          onPress={() => {
            validaLogin(email, senha);
            limparCampos();
          }}
        >
          <Text style={styles.buttonText}>Cadastrar Conta</Text>
        </TouchableOpacity>
         <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Login')} 
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity></View>
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
    height: "85%",
    backgroundColor: "#FFFFFF",
    padding: 12,
    shadowColor: '#464247',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    marginTop: '2%',
    marginBottom: '3%',
    height: 48, 
    width: "100%",
    borderWidth: 2,
    paddingHorizontal: 10,
    backgroundColor: "#F9F8F6"
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
  icon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }], 
    width: 24,
    height: 24,
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',
    height: '12%',
  },
  inputContainer: {
    width: '48%',
  },
  inputSmall: {
    height: 48, 
    width: "100%",
    borderWidth: 2,
    paddingHorizontal: 10,
    marginTop: 4,
    backgroundColor: "#F9F8F6"
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    marginBottom: '5%',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#D2CEC5",
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F8F6', 
  },
  checkboxChecked: {
    backgroundColor: '#FFBB12', 
  },
  checkboxLabel: {
    marginLeft: 8, 
    fontWeight: 'bold', 
    fontSize: 15
  },
  button: {
    backgroundColor: "#FFBB12", 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%'
  },
  buttonText: {
    color: "#764701",
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold'  
  },
  btnGroup : {
     flexDirection: 'row',
     justifyContent: 'space-between',
  }
});