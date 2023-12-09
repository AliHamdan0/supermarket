import {
  View,
  StatusBar,
  ScrollView,
  Text,
  Pressable,
  Image,
  useWindowDimensions,
  StyleSheet,
  Platform,
  UIManager,
  LayoutAnimation,
  Animated,
  Button,
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import { useLocalSearchParams } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { generalStyles } from "../../../utilis/generalStyle";
import { useRouter } from "expo-router";
import { theme } from "../../../utilis/theme";
import { useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Nutrition } from "../../../components/itemDetail/nutrition";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../utilis/redux/Slices/cartSlice";
import { addMessage } from "@ouroboros/react-native-snackbar";
import { RootState } from "../../../utilis/redux/store";
import { addFav } from "../../../utilis/redux/Slices/favSlice";
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function ItemDetail() {
  const dispatch = useDispatch();
  const item = useLocalSearchParams();
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const favItems = useSelector((state: RootState) => state.fav.value);
  let defaultFav = favItems.findIndex((i) => i.title == item.title) > -1;
  const [fav, setFav] = useState(defaultFav);
  const [qtn, setQtn] = useState(1);
  const [detailHeight, setDetailHeight] = useState(1000);
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const interpolateRotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-90deg"],
  });
  function toggleCollapse() {
    if (detailHeight > 30) {
      LayoutAnimation.linear();
      setDetailHeight(30);
      Animated.timing(rotateAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else {
      LayoutAnimation.linear();
      setDetailHeight(1000);
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <StatusBar hidden />
      <View
        style={{
          paddingVertical: 20,
          backgroundColor: theme.lightColors?.grey0,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Entypo name="chevron-left" size={36} color="black" />
        </Pressable>
        <Image
          // @ts-ignore
          source={item.image}
          alt=""
          style={{ width: width, height: height * 0.3, resizeMode: "contain" }}
        />
      </View>
      <View style={[generalStyles.container, { marginTop: 15 }]}>
        <View style={[, styles.titleContainer]}>
          {/* @ts-ignore */}
          <Text style={styles.title(20)}>{item.title}</Text>
          <Pressable
            onPress={() => {
              if (fav == false) {
                setFav(true);
                dispatch(
                  // @ts-ignore
                  addFav({
                    ...item,
                    singlePrice: Number(item.price),
                    quantity: 1,
                  })
                );
              }
            }}
          >
            <AntDesign
              name="heart"
              size={28}
              color={fav ? "red" : theme.lightColors?.subText}
            />
          </Pressable>
        </View>
        <View>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <View style={styles.qtnContainer}>
            <Pressable
              onPress={() => {
                qtn > 1 && setQtn(qtn - 1);
              }}
            >
              <AntDesign
                name="minus"
                size={24}
                color={theme.lightColors?.subText}
              />
            </Pressable>
            <Text style={styles.qtn}>{qtn}</Text>
            <Pressable onPress={() => setQtn(qtn + 1)}>
              <AntDesign
                name="plus"
                size={24}
                color={theme.lightColors?.primary}
              />
            </Pressable>
          </View>
          {/* @ts-ignore */}
          <Text style={styles.title(20)}>${item.price}</Text>
        </View>
        <View style={[styles.divider]}></View>
        <View style={{ maxHeight: detailHeight, overflow: "hidden" }}>
          <Pressable onPress={() => toggleCollapse()}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 10,
              }}
            >
              <Text style={{ fontWeight: "600" }}>Product Detail</Text>
              <Animated.View
                style={{ transform: [{ rotate: interpolateRotate }] }}
              >
                <Entypo name="chevron-down" size={24} color="black" />
              </Animated.View>
            </View>
          </Pressable>
          <Text
            style={{
              fontSize: 12,
              color: theme.lightColors?.subText,
              lineHeight: 18,
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
            aut. Facilis distinctio itaque deserunt, id quod earum nesciunt?
            Tempora perferendis vitae, sint voluptatem provident cum. Impedit
            corporis quae possimus blanditiis.
          </Text>
        </View>
        <View style={[styles.divider]}></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "600" }}>Nutrition</Text>
          <View style={{ flexDirection: "row", gap: 3 }}>
            {[1, 2, 3].map((item) => (
              <Nutrition text="CA10" key={item} />
            ))}
          </View>
        </View>
        <View style={[styles.divider]}></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "600" }}>Rating</Text>

          <Rating
            type="custom"
            imageSize={24}
            startingValue={4.5}
            readonly
            ratingColor="#F3603F"
            // onFinishRating={(rating: number) => console.log("vv", rating)}
          />
        </View>
        <View style={{ marginTop: 40, marginBottom: 20 }}>
          <Pressable
            onPress={() => {
              dispatch(
                // @ts-ignore
                addItem({
                  ...item,
                  singlePrice: Number(item.price),
                  quantity: qtn,
                })
              );
              addMessage("Added to cart successfully");
              router.push("/cart");
            }}
          >
            {/*@ts-ignore */}
            <Text style={generalStyles.greenButton}>ADD TO CART</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  //@ts-ignore
  title: (v: number) => ({
    fontSize: v,
    fontWeight: "700",
  }),
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  desc: {
    fontSize: 12,
    color: theme.lightColors?.subText,
  },
  qtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  qtn: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.lightColors?.subText,
  },
  divider: {
    height: 1,
    backgroundColor: theme.lightColors?.grey0,
    flex: 1,
    marginVertical: 20,
  },
});
