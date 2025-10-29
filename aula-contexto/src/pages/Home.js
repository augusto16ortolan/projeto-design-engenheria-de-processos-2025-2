import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTheme } from "../context/ThemeProvider";
import { useCurrency } from "../context/CurrencyProvider";

export default function Home() {
  const { isDarkMode, alterTheme } = useTheme();
  const { selectedCurrency, alterCurrency } = useCurrency();

  const currencies = [
    { label: "Real (BRL)", value: "BRL" },
    { label: "Dólar (USD)", value: "USD" },
    { label: "Euro (EUR)", value: "EUR" },
    { label: "Libra (GBP)", value: "GBP" },
    { label: "Iene (JPY)", value: "JPY" },
    { label: "Peso Argentino (ARS)", value: "ARS" },
  ];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#000" : "#fff" },
      ]}
    >
      <Text style={{ color: !isDarkMode ? "#000" : "#fff", fontSize: 30 }}>
        Home
      </Text>
      <Text style={{ color: !isDarkMode ? "#000" : "#fff", fontSize: 30 }}>
        {isDarkMode ? "Dark mode" : "Light mode"}
      </Text>

      <View style={styles.pickerContainer}>
        <Text
          style={{
            color: !isDarkMode ? "#000" : "#fff",
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          Selecione a moeda:
        </Text>
        <Picker
          selectedValue={selectedCurrency}
          onValueChange={(itemValue) => alterCurrency(itemValue)}
          style={{
            width: 250,
            color: isDarkMode ? "#fff" : "#000",
          }}
          dropdownIconColor={isDarkMode ? "#fff" : "#000"}
        >
          {currencies.map((currency) => (
            <Picker.Item
              key={currency.value}
              label={currency.label}
              value={currency.value}
            />
          ))}
        </Picker>
        <Text
          style={{
            color: !isDarkMode ? "#000" : "#fff",
            fontSize: 16,
            marginTop: 10,
          }}
        >
          Moeda selecionada: {selectedCurrency}
        </Text>
        <Text>
          {selectedCurrency === "USD"
            ? 5.0
            : selectedCurrency === "BRL"
            ? 5.0 * 5.32
            : selectedCurrency === "EUR"
            ? 5.0 * 0.86
            : "Moeda nao localizada"}
        </Text>
      </View>

      <Button title="Alterar tema" onPress={() => alterTheme()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pickerContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
});
