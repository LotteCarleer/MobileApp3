import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ProductCard from "../components/ProductCard.js";

const  ProductDetail = ({ route }) => {
  const {title, description, price, image } = route.params;

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () =>{ 
    if (quantity > 1){
      setQuantity(quantity - 1);
    }

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={image} style={styles.image}/>
      <Text>{description}</Text>
      <Text>{price}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantityText}>{quantity}</Text>

        <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalPrice}> Totaal: €{price * quantity}</Text>



      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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

export default ProductDetail;