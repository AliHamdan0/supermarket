import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ScrollView,
  useWindowDimensions,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import { Fragment, useEffect, useState } from "react";
import { generalStyles } from "../../../utilis/generalStyle";
import CartCard from "../../../components/cart/cartCard";
import { theme } from "../../../utilis/theme";
import CheckoutContent from "../../../components/cart/checkoutContent";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../utilis/redux/store";
import { fetchItems } from "../../../utilis/redux/Slices/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.value);
  const { width, height } = useWindowDimensions();
  const [checkoutModal, setCheckoutModal] = useState(false);
  function calculateTotal(): number {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++)
      total += Number(cartItems[i].singlePrice) * cartItems[i].quantity;
    return Number(total.toFixed(2));
  }
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchItems());
  }, []);
  return (
    <Fragment>
      {cartItems.length == 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../../../assets/images/shop/empty.png")}
            resizeMode="contain"
            style={{ width: 250 }}
          />
        </View>
      ) : (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <View style={{ height: height * 0.75 }}>
            <ScrollView>
              <SafeAreaView style={[generalStyles.container]}>
                <View style={[styles.divider]}></View>
                {cartItems.map((i, index) => (
                  <Fragment key={index}>
                    <CartCard item={i} index={index} />
                    <View style={[styles.divider]}></View>
                  </Fragment>
                ))}
                <View></View>
              </SafeAreaView>
            </ScrollView>
          </View>
          <View style={{ height: height * 0.25 }}>
            <View style={styles.stickyBtn}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text>
                  My Items:{" "}
                  <Text style={{ fontWeight: "600" }}>
                    {cartItems.length} item (s)
                  </Text>
                </Text>
                <Text>
                  Total:{" "}
                  <Text style={{ fontWeight: "600" }}>${calculateTotal()}</Text>
                </Text>
              </View>
              <Pressable onPress={() => setCheckoutModal(true)}>
                {/*@ts-ignore */}
                <Text style={generalStyles.greenButton}>Go to Checkout</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}

      <Modal
        style={{ margin: 0 }}
        isVisible={checkoutModal}
        onBackdropPress={() => {
          setCheckoutModal(false);
        }}
        onBackButtonPress={() => {
          setCheckoutModal(false);
        }}
      >
        <CheckoutContent
          handleClose={() => setCheckoutModal(false)}
          total={calculateTotal}
        />
      </Modal>
    </Fragment>
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
    paddingVertical: 10,
    elevation: 10,
  },
});
