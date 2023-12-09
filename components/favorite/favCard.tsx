import {
  View,
  Text,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { theme } from "../../utilis/theme";
import { cartItem } from "../../types";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { deleteFav } from "../../utilis/redux/Slices/favSlice";
export default function FavCard({
  item,
  index,
}: {
  item: cartItem;
  index: number;
}) {
  const dispatch = useDispatch();
  const { width, height } = useWindowDimensions();
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
      <View>
        <Image
          source={item.image}
          alt=""
          style={{ width: width * 0.3, height: 50 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ height: 50 }}>
        <Text
          style={{
            marginBottom: 5,
            fontSize: 16,
            fontWeight: "600",
            color: "#000",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            color: theme.lightColors.subText,
          }}
        >
          {item.desc}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "flex-end",
          height: 50,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600" }}>
          ${item.singlePrice}
        </Text>
        <Pressable
          onPress={() => {
            dispatch(
              deleteFav({
                index: index,
              })
            );
          }}
        >
          <AntDesign
            name="delete"
            size={20}
            color={theme.lightColors.delete}
            style={{ marginTop: 20 }}
          />
        </Pressable>
      </View>
    </View>
  );
}
