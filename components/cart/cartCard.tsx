import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { theme } from "../../utilis/theme";
import { cartItem } from "../../types";
import { useDispatch } from "react-redux";
import { changeQtn, deleteItem } from "../../utilis/redux/Slices/cartSlice";
import { addMessage } from "@ouroboros/react-native-snackbar";

export default function CartCard({
  item,
  index,
}: {
  item: cartItem;
  index: number;
}) {
  const { width, height } = useWindowDimensions();
  const dispatch = useDispatch();
  const [qtn, setQtn] = useState(item.quantity);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: width * 0.05,
        paddingVertical: 2,
        flex: 1,
      }}
    >
      <View>
        <Image
          source={item.image}
          alt=""
          style={{
            width: width * 0.25,
            height: 60,
            objectFit: "contain",
          }}
        />
      </View>
      <View>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <View style={[styles.qtnContainer, { marginTop: 15 }]}>
            <Pressable
              onPress={() => {
                if (qtn > 1) {
                  setQtn(qtn - 1);
                  dispatch(changeQtn({ index: index, newQtn: qtn - 1 }));
                }
              }}
            >
              <AntDesign
                name="minus"
                size={24}
                color={theme.lightColors?.subText}
                style={styles.qtn}
              />
            </Pressable>
            <Text>{qtn}</Text>
            <Pressable
              onPress={() => {
                setQtn(qtn + 1);
                dispatch(changeQtn({ index: index, newQtn: qtn + 1 }));
              }}
            >
              <AntDesign
                name="plus"
                size={24}
                color={theme.lightColors?.primary}
                style={styles.qtn}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>${item.price}</Text>
        <Pressable
          onPress={() => {
            dispatch(
              deleteItem({
                index: index,
              })
            );
            // addMessage("Deleted successfully");
          }}
        >
          <AntDesign
            name="delete"
            size={20}
            color={theme.lightColors.delete}
            style={{ marginTop: 45 }}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    letterSpacing: 0.1,
    fontWeight: "600",
    marginBottom: 4,
  },
  desc: {
    fontSize: 12,
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
  qtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  qtn: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.lightColors?.grey0,
    justifyContent: "center",
    alignItems: "center",
  },
});
