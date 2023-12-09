import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import { generalStyles } from "../../utilis/generalStyle";
import { theme } from "../../utilis/theme";
import { AntDesign } from "@expo/vector-icons";
import { filterType } from "../../types";
import { ScrollView } from "react-native-gesture-handler";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Filter({ open, handleClose }: filterType) {
  const { width, height } = useWindowDimensions();
  const [categories, setCategories] = useState([
    { id: 1, value: false, label: "Eggs" },
    { id: 2, value: false, label: "Noodles & Pasta" },
    { id: 3, value: false, label: "Chips & Crisp" },
    { id: 4, value: false, label: "Fast Food" },
  ]);
  const [brand, setBrand] = useState([
    { id: "b1", value: false, label: "Individual Collection" },
    { id: "b2", value: false, label: "Cocola" },
    { id: "b3", value: false, label: "Ifad" },
    { id: "b4", value: false, label: "Kazi Farams" },
  ]);

  return (
    <View style={[{ flex: 1, paddingTop: 30, backgroundColor: "#fff" }]}>
      <View style={[{ height: 40 }]}>
        <View
          style={[
            generalStyles.container,
            { flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Pressable onPress={() => handleClose()}>
            <AntDesign name="close" size={24} color="black" />
          </Pressable>
          {/* @ts-ignore*/}
          <Text style={[generalStyles.mainText, { margin: "auto", flex: 1 }]}>
            Filters
          </Text>
        </View>
      </View>
      <ScrollView style={[styles.filterContent, { marginTop: 40 }]}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>Categories</Text>
        <View style={{ marginTop: 20 }}>
          {categories.map((item, index) => (
            <View key={item.id} style={{ marginVertical: 10 }}>
              <BouncyCheckbox
                size={20}
                fillColor={
                  item.value
                    ? theme.lightColors.primary
                    : theme.lightColors.subText
                }
                unfillColor="#FFFFFF"
                textStyle={{ textDecorationLine: "none", color: "black" }}
                text={item.label}
                iconStyle={{
                  borderRadius: 4,
                }}
                innerIconStyle={{
                  borderRadius: 4,
                }}
                onPress={(isChecked: boolean) => {
                  categories[index].value = isChecked;
                  setCategories([...categories]);
                }}
              />
            </View>
          ))}
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Brand</Text>
            <View style={{ marginTop: 20 }}>
              {brand.map((item, index) => (
                <View key={item.id} style={{ marginVertical: 10 }}>
                  <BouncyCheckbox
                    size={20}
                    fillColor={
                      item.value
                        ? theme.lightColors.primary
                        : theme.lightColors.subText
                    }
                    unfillColor="#FFFFFF"
                    textStyle={{ textDecorationLine: "none", color: "black" }}
                    text={item.label}
                    iconStyle={{
                      borderRadius: 4,
                    }}
                    innerIconStyle={{
                      borderRadius: 4,
                    }}
                    onPress={(isChecked: boolean) => {
                      brand[index].value = isChecked;
                      setBrand([...brand]);
                    }}
                  />
                </View>
              ))}
            </View>
          </View>
          <View style={{ marginTop: 40, marginBottom: 20 }}>
            <Pressable onPress={() => ""}>
              {/*@ts-ignore */}
              <Text style={[generalStyles.greenButton, { letterSpacing: 0.4 }]}>
                Apply Filter
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  filterContent: {
    flex: 1,
    backgroundColor: theme.lightColors.grey0,
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderTopRightRadius: 26,
    borderTopLeftRadius: 26,
  },
});
