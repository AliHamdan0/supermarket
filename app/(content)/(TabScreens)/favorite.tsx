import {
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import { Fragment, useEffect } from "react";
import { generalStyles } from "../../../utilis/generalStyle";
import FavCard from "../../../components/favorite/favCard";
import { theme } from "../../../utilis/theme";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../utilis/redux/store";
import { addItem } from "../../../utilis/redux/Slices/cartSlice";
import { clearFav, fetchFavItems } from "../../../utilis/redux/Slices/favSlice";

export default function Favorite() {
  const { width, height } = useWindowDimensions();
  const favItems = useSelector((state: RootState) => state.fav.value);
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchFavItems());
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: height * 0.75 }}>
        {favItems.length == 0 ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../../../assets/images/shop/no-wish-list.png")}
              resizeMode="contain"
              style={{ width: 300 }}
            />
          </View>
        ) : (
          <ScrollView style={{}}>
            <SafeAreaView style={[generalStyles.container]}>
              <View style={[styles.divider]}></View>
              {favItems.map((i, index) => (
                <Fragment key={index}>
                  <FavCard item={i} index={index} />
                  <View style={[styles.divider]}></View>
                </Fragment>
              ))}
              <View></View>
            </SafeAreaView>
          </ScrollView>
        )}
      </View>
      <View style={{ height: height * 0.25 }}>
        <View style={styles.stickyBtn}>
          <Pressable
            onPress={() => {
              favItems.forEach((i) => dispatch(addItem(i)));
              dispatch(clearFav());
            }}
          >
            {/*@ts-ignore */}
            <Text style={generalStyles.greenButton}>Add All To Cart</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: theme.lightColors?.grey0,
    marginVertical: 20,
  },
  stickyBtn: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 25,
    elevation: 10,
  },
});
