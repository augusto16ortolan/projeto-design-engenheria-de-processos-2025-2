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
    <View>
      <Image />
      <Text>Login</Text>
      <TextInput />
      <TextInput />
      <TouchableOpacity>
        <Text>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Logar</Text>
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
  },
  texto: {
    fontSize: 30,
  },
});
