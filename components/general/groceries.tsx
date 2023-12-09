import { Link } from "expo-router";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { theme } from "../../utilis/theme";
import CardList from "./cardList";
import { grocieres } from "../../data/homePage";
import { useState } from "react";

export default function Groceries() {
  const { width, height } = useWindowDimensions();
  const [activeGrocery, setActiveGrocery] = useState(0);

  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
          }}
        >
          Groceries
        </Text>
        <Link
          href="/explore"
          style={{
            color: theme.lightColors?.primary,
            fontSize: 14,
          }}
        >
          See all
        </Link>
      </View>
      <FlatList
        horizontal
        ItemSeparatorComponent={() => (
          <View style={{ width: 3, height: 3 }}></View>
        )}
        data={grocieres}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => setActiveGrocery(index)}>
            <View
              style={[
                styles.container,
                {
                  width: width * 0.454,
                  backgroundColor:
                    activeGrocery == index
                      ? theme.lightColors?.warning
                      : "#eee",
                },
              ]}
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={item.image}
                alt=""
                resizeMode="contain"
              />
              <Text style={{ fontWeight: "500", fontSize: 13 }}>
                {item.title}
              </Text>
            </View>
          </Pressable>
        )}
      />
      <View style={{ marginBottom: theme.spacing?.lg }}></View>
      <View style={{ marginBottom: theme.spacing?.lg }}>
        <CardList data={grocieres[activeGrocery].items} title="" link="" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 16,
  },
});
