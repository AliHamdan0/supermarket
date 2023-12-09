import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../utilis/theme";
import { searchBarTypes } from "../../types";
import { useRouter } from "expo-router";
export default function SearchBar({
  searchValue,
  setSearchValue,
}: searchBarTypes) {
  const router = useRouter();
  return (
    <View style={[styles.inputSearch]}>
      <Pressable
        onPress={() => {
          router.push("/explore");
        }}
      >
        <AntDesign name="search1" size={20} color="black" />
      </Pressable>
      <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder="Search Store"
        autoCorrect={false}
        autoCapitalize="none"
        style={{ flex: 1, fontSize: 16, borderWidth: 0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputSearch: {
    height: 50,
    borderRadius: 16,
    padding: 15,
    alignItems: "center",
    textDecorationLine: "none",
    backgroundColor: theme.lightColors?.grey0,
    flexDirection: "row",
    gap: 10,
    elevation: 1,
    shadowColor: theme.lightColors?.grey0,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
