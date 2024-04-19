import { View, Text, StyleSheet, Image } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/logo_azul_simpligestor2.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Tela Inicial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    marginTop: 24,
    width: 200,
    height: 200,
  },
});