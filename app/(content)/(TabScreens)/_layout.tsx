import { Tabs } from "expo-router";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../../utilis/theme";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { paddingBottom: 22, paddingTop: 5, height: 70 },
        tabBarActiveTintColor: theme.lightColors.primary,
        tabBarInactiveTintColor: theme.lightColors.subText,
      }}
    >
      <Tabs.Screen
        name="shop"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Entypo name="shop" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons
                name="text-search"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "My Cart",
          headerTitleAlign: "center",
          headerStyle: {
            elevation: 0, // Android
            shadowOpacity: 0, // IOS,
            height: 70,
          },
          tabBarIcon: ({ focused, color, size }) => {
            return <AntDesign name="shoppingcart" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "My Favorite",
          headerTitleAlign: "center",
          headerStyle: {
            elevation: 0, // Android
            shadowOpacity: 0, // IOS,
            height: 70,
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialIcons
                name="favorite-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="person-outline" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="finishOrder"
        options={{
          headerShown: false,
          href: null,
        }}
      />
    </Tabs>
  );
}
