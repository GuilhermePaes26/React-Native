import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
export default function TextTitle({titleContent}) {
  return (
    <SafeAreaView style={styles.container}>
     <SafeAreaView style= {styles.decorator}></SafeAreaView>
      <SafeAreaView style= {styles.decorator1}></SafeAreaView>
     <SafeAreaView style= {styles.decorator2}></SafeAreaView>
      <SafeAreaView style= {styles.decorator3}></SafeAreaView>
     <Text style={styles.paragraph}>{ titleContent }</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    height: '10%',
    width: "100%", 
    marginTop: '3%',
    marginStart: '10%',
    marginBottom: "2%"
  },
  decorator: {
    backgroundColor: "#FFBB12",
    borderRadius: 2,
    alignContent: 'center',
    width : "5%",
    height : '22%',
    top:'40%',
    left: '-1%'
  },  
  paragraph: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontSize: 30,
    color: "#464237",
    fontWeight: 'bold',
  },
  decorator2 : {
    backgroundColor: "#464237",
    borderRadius: 2,
    alignContent: 'center',
    width : "8%",
    height : '3%',
    top:'45%',
    left: '80%'
  },
  decorator3 : {
    backgroundColor: "#464237",
    borderRadius: 2,
    alignContent: 'center',
    width : "6%",
    height : '3%',
    top:'30%',
    left: '82%'
  },
  decorator1 : {
    backgroundColor: "#464237",
    borderRadius: 2,
    alignContent: 'center',
    width : "8%",
    height : '3%',
    top:'25%',
    left: '80%'
  }
});