import {
  View,
  Text,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
  Pressable,
  Modal,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { generalStyles } from "../../../utilis/generalStyle";
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import FilterIcon from "../../../assets/icons/filter";
import CardList from "../../../components/general/cardList";
import { FlatList } from "react-native-gesture-handler";
import FoodCard from "../../../components/general/foodCard";
import { theme } from "../../../utilis/theme";
import { useState } from "react";
import Filter from "../../../components/explore/filter";
export default function ProductDetail() {
  const { id, title, items } = useLocalSearchParams();
  //@ts-ignore
  const data = JSON.parse(items);
  const { width, height } = useWindowDimensions();
  const [openFilter, setOpenFilter] = useState(false);
  const router = useRouter();
  return (
    <View
      style={[
        generalStyles.container,
        { backgroundColor: "#fff", paddingTop: 60, flex: 1, paddingBottom: 10 },
      ]}
    >
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Pressable onPress={() => router.push("/explore")}>
            <Entypo name="chevron-left" size={28} color="black" />
          </Pressable>

          {/* @ts-ignore */}
          <Text style={[generalStyles.mainText, { paddingTop: 4 }]}>
            {title}
          </Text>
          <Pressable
            onPress={() => setOpenFilter(true)}
            style={{ paddingTop: 6 }}
          >
            <FilterIcon width={19} height={19} fill="#000000" />
          </Pressable>

          <Modal
            animationType="slide"
            transparent={true}
            visible={openFilter}
            onRequestClose={() => {
              setOpenFilter(false);
            }}
          >
            <Filter
              open={openFilter}
              handleClose={() => setOpenFilter(false)}
            />
          </Modal>
        </View>
      </SafeAreaView>
      <View style={{ marginTop: theme.spacing.lg }}></View>
      <View style={{ marginTop: theme.spacing.lg }}></View>
      <FlatList
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        numColumns={2}
        ItemSeparatorComponent={() => (
          <View style={{ width: 10, height: 10 }}></View>
        )}
        data={data}
        renderItem={({ item }) => <FoodCard dynamicWidth={0.445} item={item} />}
      />
    </View>
  );
}
