import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.welcomeText}>Bem-vindo!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%",
    backgroundColor: '#F9F8F6',
  },
  form: {
    width: '90%',
    height: "40%",
    backgroundColor: "#FFFFFF",
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center', 
    shadowColor: '#464247',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFBB12', }
});