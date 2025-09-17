import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import CadastroProduto from "./pages/CadastroProduto";
import Routes from "./routes/routes";
export default function App() {
  return <Routes />;
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f4f7",
  },
});
