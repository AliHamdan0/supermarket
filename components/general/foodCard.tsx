import {
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../utilis/theme";
import { foodCardTypes } from "../../types";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { addItem } from "../../utilis/redux/Slices/cartSlice";
import { addMessage } from "@ouroboros/react-native-snackbar";

export default function FoodCard({ item, dynamicWidth = 0.3 }: foodCardTypes) {
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <View>
      <Pressable
        onPress={() =>
          router.push({
            pathname: `/foodDetail/${item.id}`,
            // @ts-ignore
            params: item,
          })
        }
      >
        <View style={[styles.container, { width: width * dynamicWidth }]}>
          <Image style={styles.image} source={item.image} />
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
          <View style={styles.priceBox}>
            <Text style={styles.price}>{`${item.price}$`}</Text>
            <Pressable
              onPress={() => {
                dispatch(
                  addItem({
                    ...item,
                    singlePrice: Number(item.price),
                    quantity: 1,
                  })
                );
                addMessage("Added to cart successfully");
              }}
            >
              <AntDesign
                name="pluscircle"
                size={26}
                color={theme.lightColors?.primary}
              />
            </Pressable>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 8,
    borderWidth: 3,
    borderRadius: 16,
    borderColor: theme.lightColors?.grey0,
    shadowColor: "gray",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    justifyContent: "center",
  },
  image: {
    marginVertical: 7,
    width: "100%",
    height: 70,
    resizeMode: "contain",
    alignSelf: "center",
  },
  text: {
    fontSize: 11,
    letterSpacing: 0.1,
    fontWeight: "500",
    marginBottom: 1,
  },
  desc: {
    fontSize: 10,
    color: theme.lightColors?.subText,
  },
  priceBox: {
    marginTop: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 0,
  },
  price: {
    fontWeight: "600",
    fontSize: 13,
  },
});
