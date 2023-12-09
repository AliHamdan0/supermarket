import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { theme } from "../../utilis/theme";
import { EvilIcons } from "@expo/vector-icons";
import { generalStyles } from "../../utilis/generalStyle";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utilis/redux/Slices/cartSlice";
export default function CheckoutContent({
  handleClose,
  total,
}: {
  handleClose: () => void;
  total: () => number;
}) {
  const Router = useRouter();
  const dispatch = useDispatch();
  const { width, height } = useWindowDimensions();
  const [deliveryMethod, setDeliveryMethod] = useState({
    label: "Aramex",
    value: "1",
  });
  const [payMethod, setPayMethod] = useState({ label: "Visa", value: "1" });
  const [isFocus, setIsFocus] = useState(false);
  const data = [
    { label: "Aramex", value: "1" },
    { label: "Amazon", value: "2" },
    { label: "Fast Way", value: "3" },
    { label: "Zaggal", value: "4" },
  ];
  const paymentMethod = [
    { label: "Visa", value: "1" },
    { label: "Mastercard", value: "2" },
    { label: "Paypal", value: "3" },
    { label: "Google Pay", value: "4" },
  ];
  return (
    <View
      style={{
        backgroundColor: theme.lightColors.grey0,
        height: height * 0.5,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 0,
        flex: 1,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
      }}
    >
      <View style={{ padding: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Checkout</Text>
          <Pressable onPress={() => handleClose()}>
            <EvilIcons name="close" size={24} color="black" />
          </Pressable>
        </View>
        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontWeight: "600", color: theme.lightColors.subText }}
            >
              Delivery Method
            </Text>
            <View
              style={{
                flex: 1,
              }}
            >
              <Dropdown
                style={[
                  styles.dropdown,
                  isFocus && { borderColor: theme.lightColors.primary },
                ]}
                inputSearchStyle={{ height: 25, fontSize: 10 }}
                itemTextStyle={{ fontSize: 14, padding: 0 }}
                placeholderStyle={{
                  fontSize: 12,
                  color: theme.lightColors.subText,
                }}
                data={data}
                search
                maxHeight={250}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select item" : "..."}
                searchPlaceholder="Search..."
                value={deliveryMethod}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setDeliveryMethod(item);
                  setIsFocus(false);
                }}
                renderLeftIcon={(visible) => (
                  <MaterialIcons
                    name="delivery-dining"
                    size={20}
                    color={theme.lightColors.primary}
                  />
                )}
              />
            </View>
          </View>
        </View>
        <View style={[styles.divider]}></View>
        <View style={{ marginTop: 0 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontWeight: "600", color: theme.lightColors.subText }}
            >
              Payment Method
            </Text>
            <View
              style={{
                flex: 1,
              }}
            >
              <Dropdown
                style={[
                  styles.dropdown,
                  isFocus && { borderColor: theme.lightColors.primary },
                ]}
                inputSearchStyle={{ height: 25, fontSize: 10 }}
                itemTextStyle={{ fontSize: 14, padding: 0 }}
                placeholderStyle={{
                  fontSize: 12,
                  color: theme.lightColors.subText,
                }}
                data={paymentMethod}
                search
                maxHeight={250}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select item" : "..."}
                searchPlaceholder="Search..."
                value={payMethod}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setPayMethod(item);
                  setIsFocus(false);
                }}
                renderLeftIcon={(visible) => (
                  <MaterialIcons name="payment" size={20} color="#ee0767ec" />
                )}
              />
            </View>
          </View>
        </View>
        <View style={[styles.divider]}></View>
        <View style={{ marginTop: 0 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontWeight: "600", color: theme.lightColors.subText }}
            >
              Total Cost
            </Text>
            <Text style={{ fontWeight: "600" }}>${total()}</Text>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ color: theme.lightColors.subText, fontSize: 12 }}>
            By placing an order you agree to our Terms & Conditions
          </Text>
          <Pressable
            onPress={() => {
              dispatch(clearCart());
              Router.push("/finishOrder");
            }}
            style={{ marginTop: 15 }}
          >
            {/*@ts-ignore */}
            <Text style={generalStyles.greenButton}>Place Order</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: theme.lightColors?.grey1,
    marginVertical: 20,
  },
  dropdown: {
    height: 38,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 190,
    marginLeft: "auto",
  },
});
