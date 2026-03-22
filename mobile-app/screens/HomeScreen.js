import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProductCard from "../components/ProductCard.js";
import BlogCard from "../components/BlogCard.js";

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

      <Text style={styles.title}>Blogs</Text>

      <BlogCard 
      title={"Hoe juwelen stylen?"}
      description={"Juwelen versterken je outfit en persoonlijke stijl. Met de juiste combinaties en balans creëer je eenvoudig een passende look voor elke gelegenheid."}
      image={require("../Images/fa4890d6d6d9f5b2d2cac9a6386b17e1.jpg")}
      onPress={()=>
        navigation.navigate("BlogDetail", {
          title: "Hoe juwelen stylen?",
          image: require("../Images/fa4890d6d6d9f5b2d2cac9a6386b17e1.jpg"),
          content: "Juwelen maken je outfit compleet en geven meteen een persoonlijke touch aan je look. Of je nu kiest voor subtiele accenten of opvallende statement pieces, de juiste styling zorgt voor balans en uitstraling.1. Less is more (maar niet altijd)Voor een dagelijkse outfit werken fijne kettingen, kleine oorbellen of minimalistische ringen perfect. Combineer meerdere delicate juwelen voor een moderne layered look zonder dat het te druk wordt.2. Juwelen afstemmen op je outfit Bij drukke prints kies je best eenvoudige juwelen. Een basic outfit krijgt juist extra karakter met opvallende accessoires. Gouden tinten passen mooi bij warme kleuren, terwijl zilver vaak sterker uitkomt bij koele tinten.",
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
