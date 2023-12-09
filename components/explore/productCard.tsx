import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { categoryCardType } from "../../types";
import { useRouter } from "expo-router";
export function ProductCard({
  image,
  title,
  color,
  items,
  borderColor,
}: categoryCardType) {
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: `/productDetail/1`,
          params: { items: JSON.stringify(items), title },
        })
      }
    >
      <View
        style={{
          backgroundColor: color,
          borderWidth: 1,
          borderColor: borderColor,
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            alignItems: "center",
            elevation: 1,
            shadowOffset: {
              width: 0,
              height: -1,
            },
            shadowOpacity: 0.3,
            shadowRadius: 16,
            shadowColor: borderColor,
            padding: 10,
            width: width * 0.44,
            height: 175,
          }}
        >
          <Image
            source={image}
            alt=""
            style={{ width: width * 0.3 }}
            resizeMode="cover"
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              marginTop: 15,
              lineHeight: 20,
            }}
          >
            {title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
