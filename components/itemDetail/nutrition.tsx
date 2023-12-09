import { View, Text } from "react-native";
import { nutritionType } from "../../types";
import { theme } from "../../utilis/theme";

export const Nutrition = ({ text }: nutritionType) => {
  return (
    <View
      style={{
        elevation: 1,
        shadowColor: theme.lightColors.subText,
        shadowOpacity: 0.4,
        shadowOffset: {
          width: 0,
          height: -1,
        },
        shadowRadius: 8,
        backgroundColor: theme.lightColors.grey0,
        borderRadius: 8,
        padding: 3,
      }}
    >
      <Text
        style={{
          color: theme.lightColors.subText,
          fontSize: 11,
          letterSpacing: 0.6,
        }}
      >
        10CA
      </Text>
    </View>
  );
};
