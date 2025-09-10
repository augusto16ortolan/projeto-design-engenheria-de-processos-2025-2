import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";

const NovoComponente = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Gremio nao tem mundial</Text>
      {/*<Image
        height={200}
        width={200}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBMItl2DhZRnEY4HmswMCwcMeZLyS6f2eYg&s",
        }}
      />*/}
      <StatusBar style="auto" />
      <Button title="Clique aqui" color={"green"} />
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          width: "60%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            color: "#fff",
          }}
        >
          Clique aqui 2
        </Text>
      </TouchableOpacity>
    </View>
  );
};

function App() {
  return (
    <View style={styles.container}>
      <Image height={119} width={142} source={require("./logo.png")} />
      <Text style={styles.textoLogin}>Login</Text>
      <TextInput placeholder="Email" style={styles.caixaTexto} />
      <TextInput
        secureTextEntry={true}
        placeholder="Senha"
        style={styles.caixaTexto}
      />
      <TouchableOpacity>
        <Text>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoLogar}>
        <Text style={styles.textoLogar}>Logar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 35,
  },
  texto: {
    fontSize: 30,
  },
  textoLogin: {
    color: "#1F41BB",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 58,
    marginTop: 50,
  },
  caixaTexto: {
    width: "100%",
    height: 64,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#1F41BB",
    backgroundColor: "#F1F4FF",
    padding: 20,
    justifyContent: "center",
    fontSize: 16,
    color: "#626262",
    marginBottom: 30,
  },
  botaoLogar: {
    width: "100%",
    padding: 20,
    backgroundColor: "#1F41BB",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textoLogar: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    // Sombras iOS
    shadowColor: "#CBD6FF",
    shadowOffset: {
      width: 0,
      height: 10, // mesmo do box-shadow
    },
    shadowOpacity: 1, // ajuste da transparência
    shadowRadius: 20, // espalhamento

    // Sombras Android
    elevation: 20, // quanto maior, mais sombra
  },
});
