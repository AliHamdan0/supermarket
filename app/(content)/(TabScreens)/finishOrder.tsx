import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { generalStyles } from "../../../utilis/generalStyle";
import { ScrollView } from "react-native-gesture-handler";
import { theme } from "../../../utilis/theme";

export default function FinishOrder() {
  const congratsImg = require("../../../assets/images/shop/congrats.png");
  const { width, height } = useWindowDimensions();
  const Router = useRouter();
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "space-between",
      }}
      style={[generalStyles.container]}
    >
      <View>
        <View
          style={{
            justifyContent: "center",
            paddingTop: height * 0.1,
          }}
        >
          <Image
            source={congratsImg}
            style={{ width: width * 0.8, margin: "auto" }}
            resizeMode="contain"
          />
        </View>
        <View style={{ marginTop: 60 }}>
          <Text
            style={{ fontSize: 22, fontWeight: "600", textAlign: "center" }}
          >
            Your order has been accepted
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: theme.lightColors.subText,
              textAlign: "center",
              marginTop: 30,
            }}
          >
            Your order has been placed and is on it's way to being processed
          </Text>
        </View>
      </View>
      <View style={{ paddingVertical: 30 }}>
        <Pressable style={{}} onPress={() => Router.push("/")}>
          <Text
            style={{
              borderWidth: 1,
              borderColor: theme.lightColors.primary,
              padding: 15,
              alignItems: "center",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "600",
              borderRadius: 16,
              color: theme.lightColors.primary,
            }}
          >
            Back To Home
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
