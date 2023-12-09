import { Link } from "expo-router";
import { View, Text, FlatList } from "react-native";
import { theme } from "../../utilis/theme";
import FoodCard from "./foodCard";
import { cardListTypes } from "../../types";

export default function CardList({ data, title, link }: cardListTypes) {
  return (
    <View>
      {title == "" ? (
        ""
      ) : (
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
            {title}
          </Text>
        </View>
      )}
      <FlatList
        horizontal
        ItemSeparatorComponent={() => (
          <View style={{ width: 3, height: 3 }}></View>
        )}
        data={data}
        renderItem={({ item }) => <FoodCard item={item} />}
      />
    </View>
  );
}
