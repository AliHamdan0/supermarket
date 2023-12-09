import { Slot } from "expo-router";
import { theme } from "../utilis/theme";
import { useCallback } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { store } from "../utilis/redux/store";
import { Provider } from "react-redux";
import { Snackbar } from "@ouroboros/react-native-snackbar";

SplashScreen.preventAutoHideAsync();
export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Bold": require("../assets/fonts/Rubik-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <Snackbar
          //@ts-ignore
          messageStyle={{
            backgroundColor: theme.lightColors.primary,
            padding: 12,
            borderRadius: 6,
            marginBottom: 70,
          }}
        />
        <Slot></Slot>
      </View>
    </Provider>
  );
}
