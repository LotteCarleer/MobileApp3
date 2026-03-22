import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProductCard from "../components/ProductCard.js";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Producten</Text>

      <ProductCard
        title={"Solar Bliss - ketting"}
        description={"Gouden ketting met zomerse bedels"}
        price={"12.00"}
        image={require("../Images/collier-acier-inoxydable-dore-pendentif-soleil-charms-_1.webp")}
        onPress={() =>
          navigation.navigate("Details", {
            title: "Solar Bliss - ketting",
            description: "Gouden ketting met zomerse bedels",
            price: "12.00",
            image: require("../Images/collier-acier-inoxydable-dore-pendentif-soleil-charms-_1.webp"),
          })
        }
      />

      <ProductCard
        title={"Heart - ring"}
        description={"Gouden rind met diamanten hart"}
        price={"10.00"}
        image={require("../Images/bague-doree-or-18k-coeur-zircon-blanc.webp")}
        onPress={() =>
          navigation.navigate("Details", {
            title: "Heart - ring",
            description: "Gouden rind met diamanten hart",
            price: "10.00",
            image: require("../Images/bague-doree-or-18k-coeur-zircon-blanc.webp"),
          })
        }
      />
      <ProductCard
        title={"Bee - oorbellen"}
        description={"Gouden oorbellen in bijen vorm"}
        price={"15.00"}
        image={require("../Images/bee.webp")}
        onPress={() =>
          navigation.navigate("Details", {
            title: "Bee - oorbellen",
            description: "Gouden ketting met zomerse bedels",
            price: "15.00",
            image: require("../Images/bee.webp"),
          })
        }
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4edda",
  },
  title: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    padding: 20,
    gap: 20,
  },
});

export default HomeScreen;
