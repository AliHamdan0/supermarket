import { View, Image, StatusBar, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { generalStyles } from "../../../utilis/generalStyle";
import { theme } from "../../../utilis/theme";
import SearchBar from "../../../components/general/searchBar";
import CardList from "../../../components/general/cardList";
import Logo from "../../../assets/icons/logo";
import Groceries from "../../../components/general/groceries";
import { bestSelling, exclusiveOffer } from "../../../data/homePage";

export default function Shop() {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={[generalStyles.container, { marginTop: 15 }]}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Logo width={27} height={32} fill={"#eee"} />
            </View>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <Entypo name="location-pin" size={22} color="rgb(76, 79, 77)" />
              <Text
                style={{
                  fontFamily: "Rubik-Bold",
                  color: "rgb(76, 79, 77)",
                  fontSize: 16,
                }}
              >
                Dubai, UAE
              </Text>
            </View>
          </View>
          <View style={{ marginTop: theme.spacing?.md }}>
            <SearchBar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </View>
          <View style={{ marginVertical: theme.spacing?.lg, flex: 1 }}>
            <Image
              source={require("../../../assets/images/shop/shopImg.png")}
              style={{ flex: 1, resizeMode: "contain" }}
            />
          </View>
          <View style={{ marginBottom: theme.spacing?.lg }}>
            <CardList
              data={exclusiveOffer}
              title="Exclusive Offer"
              link="/favorite"
            />
          </View>
          <View style={{ marginBottom: theme.spacing?.lg }}>
            <CardList
              data={bestSelling}
              title="Best selling"
              link="/favorite"
            />
          </View>
          <View style={{ marginBottom: theme.spacing?.lg }}>
            <Groceries />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
