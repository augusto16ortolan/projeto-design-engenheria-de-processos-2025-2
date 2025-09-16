import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import CadastroProduto from "./CadastroProduto";
import ListaProdutos from "./ListaProdutos";

export default function App() {
  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={["top", "bottom", "left", "right"]}
    >
      <CadastroProduto />
      {/* <ListaProdutos /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f4f7",
  },
});
