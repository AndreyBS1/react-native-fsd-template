import { StyleSheet, Text, View } from "react-native";

export function App() {
  return (
    <View style={styles.container}>
      <Text>React Native FSD Template</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
