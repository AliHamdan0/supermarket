import {
  View,
  Text,
  Image,
  SafeAreaView,
  Platform,
  Pressable,
} from "react-native";
import React from "react";
import { generalStyles } from "../../../../utilis/generalStyle";
import { theme } from "../../../../utilis/theme";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

export default function Account() {
  const profileImg = require("../../../../assets/images/shop/profile.jpg");
  const os = Platform.OS;
  return (
    <View style={[generalStyles.container]}>
      <SafeAreaView style={{ paddingTop: os == "ios" ? 30 : 60 }}>
        <ScrollView>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View
              style={{
                elevation: 5,
                width: 60,
                borderRadius: 50,
                shadowColor: theme.lightColors.subText,
                shadowOpacity: 0.7,
                shadowOffset: { width: 0.5, height: 0.5 },
              }}
            >
              <Image
                source={profileImg}
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: "contain",
                  borderRadius: 50,
                }}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontWeight: "600" }}>Ali Hamdan</Text>
              <Text style={{ color: theme.lightColors.subText }}>
                ali.hamdan.ah99@gmail.com
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Nationality</Text>
            <Text style={{ fontSize: 12, color: theme.lightColors.subText }}>
              Syrian
            </Text>
          </View>
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Address</Text>
            <Text style={{ fontSize: 12, color: theme.lightColors.subText }}>
              Al-Barsha, Dubai-UAE
            </Text>
          </View>
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              Phone Number
            </Text>
            <Text style={{ fontSize: 12, color: theme.lightColors.subText }}>
              0555555555
            </Text>
          </View>
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              Total Orders
            </Text>
            <Text style={{ fontSize: 12, color: theme.lightColors.subText }}>
              8
            </Text>
          </View>
          <Pressable
            onPress={() => ""}
            style={{
              marginTop: 70,
              backgroundColor: theme.lightColors.grey0,
              padding: 15,
              flexDirection: "row",
              justifyContent: "center",
              borderRadius: 16,
            }}
          >
            <Text
              style={{
                color: theme.lightColors.primary,
                fontSize: 16,
                marginHorizontal: 10,
              }}
            >
              Log out
            </Text>
            <MaterialIcons
              name="logout"
              size={22}
              color={theme.lightColors.primary}
            />
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
