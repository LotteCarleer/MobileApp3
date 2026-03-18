import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductCard from "../components/ProductCard.js";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Producten</Text>

      <ProductCard
        title={"Solar Bliss - ketting"}
        description={"Gouden ketting met zomerse bedels"}
        price={"€12,00"}
        image={require("../Images/collier-acier-inoxydable-dore-pendentif-soleil-charms-_1.webp")}
        onPress={() =>
          navigation.navigate("Details", {
            title: "Solar Bliss - ketting",
            description: "Gouden ketting met zomerse bedels",
            price: "€12,00",
            image: require("../Images/collier-acier-inoxydable-dore-pendentif-soleil-charms-_1.webp"),
          })
        }
      />

      <ProductCard 
       title={"Solar Bliss - ketting"}
       description={"Gouden ketting met zomerse bedels"}
       price={"€12,00"}
       image={require("../Images/collier-acier-inoxydable-dore-pendentif-soleil-charms-_1.webp")}
       onPress={() =>
         navigation.navigate("Details", {
           title: "Solar Bliss - ketting",
           description: "Gouden ketting met zomerse bedels",
           price: "€12,00",
           image: require("../Images/collier-acier-inoxydable-dore-pendentif-soleil-charms-_1.webp"),
         })
       }
      />
      <ProductCard 
       title={"Solar Bliss - ketting"}
       description={"Gouden ketting met zomerse bedels"}
       price={"12,00"}
       image={require("../Images/collier-acier-inoxydable-dore-pendentif-soleil-charms-_1.webp")}
       onPress={() =>
         navigation.navigate("Details", {
           title: "Solar Bliss - ketting",
           description: "Gouden ketting met zomerse bedels",
           price: "12,00",
           image: require("../Images/collier-acier-inoxydable-dore-pendentif-soleil-charms-_1.webp"),
         })
       }
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    backgroundColor: "#f4edda",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HomeScreen;