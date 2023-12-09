import { View, Text, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { generalStyles } from "../../../utilis/generalStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../utilis/theme";
import SearchBar from "../../../components/general/searchBar";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { ProductCard } from "../../../components/explore/productCard";
import { categoriesList } from "../../../data/homePage";
export default function Explore() {
  const [searchValue, setSearchValue] = useState("");
  const [dataFilter, setDataFilter] = useState(categoriesList);
  useEffect(() => {
    if (searchValue.length > 0) {
      let newDataFilter = categoriesList.filter((i) =>
        i.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setDataFilter([...newDataFilter]);
    } else {
      setDataFilter([...categoriesList]);
    }
  }, [searchValue]);
  return (
    <SafeAreaView style={[generalStyles.container]}>
      <View style={{ paddingTop: 15 }}>
        {/* @ts-ignore */}
        <Text style={[generalStyles.mainText]}>Find Products</Text>
        <View style={{ marginTop: theme.spacing?.lg }}>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </View>
        <View style={{ marginTop: theme.spacing?.lg }}></View>
        <FlatList
          data={dataFilter}
          numColumns={2}
          ItemSeparatorComponent={() => (
            <View style={{ height: 7, width: 7 }}></View>
          )}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          renderItem={({ item }) => (
            <ProductCard
              items={item.items}
              color={item.color}
              borderColor={item.borderColor}
              title={item.title}
              image={item.image}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
